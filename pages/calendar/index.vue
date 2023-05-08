<script>
import Swal from "sweetalert2";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrapPlugin from "@fullcalendar/bootstrap";
import listPlugin from "@fullcalendar/list";

import {categories} from "./data-calendar";
import {required} from "vuelidate/lib/validators";
import {mapActions} from "vuex";
import {getUserInfo} from "../../utils/cookieAuthen";

/**
 * Calendar component
 */


export default {

    components: {
        FullCalendar,
    },
    head() {
        return {
            title: `${this.title} | Nuxtjs Responsive Bootstrap 5 Admin Dashboard`,
        };
    },
    computed: {
        calendarOptions() {
            return {
                headerToolbar: {
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                },
                plugins: [
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    bootstrapPlugin,
                    listPlugin,
                ],
                initialView: "dayGridMonth",
                themeSystem: "bootstrap",
                events: this.calendarEvents,
                editable: true,
                droppable: true,
                eventResizableFromStart: true,
                dateClick: this.dateClicked,
                eventClick: this.editEvent,
                eventsSet: this.handleEvents,
                weekends: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
            }
        }
    },
    data() {

        return {
            reminders: [],
            title: "Calendar",
            items: [{
                text: "Apps",
            },
                {
                    text: "Calendar",
                    active: true,
                },
            ],
            currentEvents: [],
            showModal: false,
            eventModal: false,
            categories: categories,
            submitted: false,
            submit: false,
            newEventData: {},
            edit: {},
            deleteId: {},
            event: {
                title: "",
                classNames: "",
                category: "",
                start: new Date(),
                end: new Date(),
                teacher: {
                    id: 0
                },
                session: {
                    id: 0
                },
                status: "",
            },
            editevent: {
                editTitle: "",
                editcategory: "",
            },
            searchObj: {
                valueSearch: '',
                conditionSearch: ''
            },
            calendarEvents: []
        };
    },
    validations: {
        event: {
            title: {
                required,
            },
            classNames: {
                required,
            },
        },
    },
    middleware: "authentication",
    methods: {
        ...mapActions('reminder', {
            apiGetReminder: 'apiGetReminder',
            apiAddReminder: 'apiAddReminder'
        }),
        /**
         * Modal form submit
         */
        async handleInitData() {
            let userInfo = JSON.parse(getUserInfo());
            let reminder = [];
            try {
                reminder = await this.apiGetReminder({
                    conditionSearch: "TEACHER",
                    valueSearch: userInfo.session + "," + userInfo.teacherId
                })
            } catch (err) {
                console.error(err);
            }
            this.calendarEvents = reminder;
            console.log(this.calendarEvents)
        },
        // eslint-disable-next-line no-unused-vars
        handleSubmit(e) {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            } else {
                console.log("event: ", this.event)

                const endDate = new Date(this.event.end);
                let userInfo = JSON.parse(getUserInfo());
                console.log(endDate)
                this.event.teacher.id = userInfo?.teacherId;

                this.event.session.id =  userInfo?.session;
                this.event.start = this.newEventData?.date;
                this.event.end = endDate.toISOString();
                this.event.status =  this.event?.category;
                let calendarApi = this.newEventData.view.calendar;
                this.apiAddReminder(this.event)
                    .then(response => {
                        this.handleInitData()
                    })
                    .catch(err => {
                        console.log(err);
                    })
                    .finally(() => {
                        // this.commonLoadingPage(false);
                    });
                // this.currentEvents = calendarApi.addEvent({
                //     id: this.newEventData.length + 1,
                //     title,
                //     start: this.newEventData.date,
                //     end: new Date(this.event.end),
                //     classNames: [category],
                // });
                this.successmsg();
                this.showModal = false;
                this.newEventData = {};
            }
            this.submitted = false;
        },
        // eslint-disable-next-line no-unused-vars
        hideModal(e) {
            this.submitted = false;
            this.showModal = false;
        },
        /**
         * Edit event modal submit
         */
        // eslint-disable-next-line no-unused-vars
        editSubmit(e) {
            this.submit = true;
            const editTitle = this.editevent.editTitle;
            const editcategory = this.editevent.editcategory;
            this.edit.setProp("title", editTitle);
            this.edit.setProp("classNames", editcategory);
            this.successmsg();
            this.eventModal = false;
        },

        /**
         * Delete event
         */
        deleteEvent() {
            this.edit.remove();
            this.eventModal = false;
        },
        /**
         * Modal open for add event
         */
        dateClicked(info) {
            this.newEventData = info;
            this.showModal = true;
        },
        /**
         * Modal open for edit event
         */
        editEvent(info) {
            this.edit = info.event;
            this.editevent.editTitle = this.edit.title;
            this.editevent.editcategory = this.edit.classNames[0];
            this.eventModal = true;
        },

        closeModal() {
            this.eventModal = false;
        },

        confirm() {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to delete this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#34c38f",
                cancelButtonColor: "#f46a6a",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.value) {
                    this.deleteEvent();
                    Swal.fire("Deleted!", "Event has been deleted.", "success");
                }
            });
        },

        /**
         * Show list of events
         */
        handleEvents(events) {
            this.currentEvents = events;
        },

        handleEventsSet() {

        },
        /**
         * Show successfull Save Dialog
         */
        successmsg() {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Event has been saved",
                showConfirmButton: false,
                timer: 1000,
            });
        },
    },

    mounted() {
        this.handleInitData();
    }
};
</script>

<template>
    <div>
        <PageHeader :title="title" :items="items"/>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="app-calendar">
                            <FullCalendar ref="fullCalendar" :options="calendarOptions" :eventsSet="handleEventsSet"></FullCalendar>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-modal v-model="showModal" title="Add Event" title-class="text-black font-18" body-class="p-3" hide-footer>
            <form @submit.prevent="handleSubmit">
                <div class="row">
                    <div class="col-12">
                        <div class="mb-3">
                            <label for="name">Event Name</label>
                            <input id="name" v-model="event.title" type="text" class="form-control" placeholder="Insert Event name" :class="{ 'is-invalid': submitted && $v.event.title.$error }"/>
                            <div v-if="submitted && !$v.event.title.required" class="invalid-feedback">This value is required.</div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mb-3">
                            <label class="control-label">Category</label>
                            <select v-model="event.classNames" class="form-control" name="classNames" :class="{ 'is-invalid': submitted && $v.event.classNames.errors }">
                                <option v-for="option in categories" :key="option.backgroundColor" :value="`${option.value}`">{{ option.name }}</option>
                            </select>
                            <div v-if="submitted && !$v.event.classNames.required" class="invalid-feedback">This value is required.</div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mb-3">
                            <label for="end">Event Name</label>
                            <input id="end" v-model="event.end" type="date" class="form-control"/>
                            <div v-if="submitted" class="invalid-feedback">This value is required.</div>
                        </div>
                    </div>
                </div>

                <div class="text-right pt-5 mt-3">
                    <b-button variant="light" @click="hideModal">Close</b-button>
                    <b-button type="submit" variant="success" class="ml-1">Create event</b-button>
                </div>
            </form>
        </b-modal>

        <!-- Edit Modal -->
        <b-modal v-model="eventModal" title="Edit Event" title-class="text-black font-18" hide-footer body-class="p-3">
            <form @submit.prevent="editSubmit">
                <div class="row">
                    <div class="col-12">
                        <div class="mb-3">
                            <label for="name">Event Name</label>
                            <input id="name" v-model="editevent.editTitle" type="text" class="form-control" placeholder="Insert Event name"/>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mb-3">
                            <label class="control-label">Category</label>
                            <select v-model="editevent.editcategory" class="form-control" name="category">
                                <option v-for="option in categories" :key="option.backgroundColor" :value="`${option.value}`">{{ option.name }}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="text-right p-3">
                    <b-button variant="light" @click="closeModal">Close</b-button>
                    <b-button class="ml-1" variant="danger" @click="confirm">Delete</b-button>
                    <b-button class="ml-1" variant="success" @click="editSubmit">Save</b-button>
                </div>
            </form>
        </b-modal>
    </div>
</template>
