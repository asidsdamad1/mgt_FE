<script>
import {mapActions} from "vuex";
import Multiselect from "vue-multiselect";

import "vue-multiselect/dist/vue-multiselect.min.css";
import Swal from "sweetalert2";

export default {
    middleware: ['check-authen'],
    name: "TeacherModal",
    props: {
        idTeacher: {
            type: Number,
            default: 0
        },
        actionType: {
            type: Number,
            default: 0
        }
    },
    watch: {
        // 'flagModal'() {
        //     console.log('watch actionType', this.flagModal);
        //     this.handleInitData();
        // }
    },
    data() {
        return {
            fileUpload: null,
            items: [{
                text: "Forms",
                href: "/"
            },
                {
                    text: "Form File Upload",
                    active: true
                }
            ],
            teacherObj: {
                id: -1,
                name: '',
                dob: this.$moment().format('YYYY-MM-DD'),
                gender: '',
                phone: '',
                email: '',
                address: ''
            },
            modalTitle: '',
            optionTopic: [],
            pkgStartDate: '',
            pkgEndDate: '',
            objProject: {
                id: '',
                name: ''
            },
            projectData: {
                name: ''

            },
        }
    },
    components: {
        Multiselect
    },
    updated() {

    },
    methods: {
        ...mapActions('teachers', {
            apiAddTeacher: 'apiAddTeacher',
            apiEditTeacher: 'apiEditTeacher',
            apiGetTeacherById: 'apiGetTeacherById',
        }),
        ...mapActions('topic', {
            apiGetTopic: 'apiGetTopic'
        }),
        resetForm() {
            this.teacherObj = {
                id: -1,
                fullName: '',
                dob: '',
                gender: '',
                phone: '',
                email: '',
                address: ''
            };

        },
        handleInitData() {
            this.$nextTick(() => {
                console.log('handleInitData', this.idTeacher);
                let objInput = {id: 0};
                this.apiGetTopic({
                    conditionSearch: '',
                    valueSearch: ''
                }).then(response => {
                    this.optionTopic = response;
                })
                // alert(this.actionType);
                if (this.actionType === 1) {
                    this.modalTitle = 'Thêm Event';
                    this.resetForm();
                } else if (this.actionType === 2 || this.actionType === 3) {
                    objInput = {id: this.idTeacher};
                    if (this.actionType === 2)
                        this.modalTitle = 'Sửa Event';
                    else if (this.actionType === 3)
                        this.modalTitle = 'Xem thông tin Event';
                    this.apiGetTeacherById(objInput)
                        .then(response => {
                            this.teacherObj = response;
                        })
                        .catch(err => {
                            console.log(err);
                        })
                        .finally(() => {
                            // this.commonLoadingPage(false);
                        });
                }
            });
        },
        addEvent() {
            let optionEvent = '';
            let ids = [];
            if (this.checkDataInput()) {

                // console.log('addEvent', this.callOptionsSelected);
                //     if (this.teacherObj.dataType === 'call') {
                //         for (let i = 0; i < this.callOptionsSelected.length; i++) {
                //             ids.push(this.callOptionsSelected[i].value);
                //         }
                //         if (this.callOptionsSelected.length > 1) {
                //             optionEvent = ids.join(',') + ';time_wait:' + this.timeWaitCall;
                //         } else {
                //             optionEvent = ids.join(',');
                //         }
                //     } else if (this.eventObj.dataType === 'ussd') {
                //         optionEvent = this.ussdType + "," + this.ussdValue;
                //     } else if (this.eventObj.dataType === 'package') {
                //         optionEvent = 'pkg_code:' + this.pkgCode + ',pkg_capacity:' + this.pkgCapacity + ',pkg_warning:' + this.pkgWarning + ',pkg_startdate:' + this.pkgStartDate + ',pkg_enddate:' + this.pkgEndDate;
                //     } else if (this.eventObj.dataType === 'sub_location') {
                //         let provinceIds = [];
                //         let proIds = '';
                //
                //         for (let i = 0; i < this.provinceOptionsSelected.length; i++) {
                //             provinceIds.push(this.provinceOptionsSelected[i].id);
                //         }
                //         proIds = provinceIds.join(',');
                //         let districtIds = [];
                //         let distIds = '';
                //         for (let j = 0; j < this.districtOptionsSelected.length; j++) {
                //             districtIds.push(this.districtOptionsSelected[j].id);
                //         }
                //         distIds = districtIds.join(',');
                //         optionEvent = 'provinces:' + proIds + ';districts:' + distIds;
                //
                //     }
                //     console.log('addEvent', optionEvent);
                //     this.eventObj.eventOption = optionEvent;
                if (this.actionType === 2) {
                    this.teacherObj.id = this.idTeacher;
                    this.apiEditTeacher(this.teacherObj)
                        .then(response => {
                            console.log('apiEditTeacher', response);
                            this.$emit('handleGetTeacher');
                            this.$bvModal.hide('modal-add-event');
                        })
                        .catch(err => {
                            console.log(err);
                        })
                        .finally(() => {
                            // this.commonLoadingPage(false);
                        });
                }
                if (this.actionType === 1) {
                    this.apiAddTeacher(this.teacherObj)
                        .then(response => {
                            console.log('apiAddTeacher', response.err_code);
                            this.$emit('handleGetTeacher');
                            Swal.fire("", response.err_message, "success");

                            this.$bvModal.hide('modal-add-event');
                        })
                        .catch(err => {
                            console.log(err);
                        })
                        .finally(() => {
                            // this.commonLoadingPage(false);
                        });
                }
            }
        },
        closeModal() {
            this.$bvModal.hide('modal-add-project');
        },
        checkDataInput() {
            if (this.teacherObj.fullName === null || this.teacherObj.fullName.trim() === '') {
                this.commonNotifyVue("Bạn phải nhập tên giảng viên", 'warn');
                return false;
            }
            if (this.teacherObj.dob === null || this.teacherObj.dob.trim() === '') {
                this.commonNotifyVue("Bạn phải chọn ngày sinh", 'warn');
                return false;
            }
            if (this.teacherObj.address === null || this.teacherObj.address.trim() === '') {
                this.commonNotifyVue("Bạn phải chọn địa chỉ", 'warn');
                return false;
            }
            if (this.teacherObj.phone === null || this.teacherObj.phone.trim() === '') {
                this.commonNotifyVue("Bạn phải chọn số điện thoại", 'warn');
                return false;
            }
            if (this.teacherObj.email === null || this.teacherObj.email.trim() === '') {
                this.commonNotifyVue("Bạn phải chọn email", 'warn');
                return false;
            }
            if (this.teacherObj.gender === null || this.teacherObj.gender.trim() === '') {
                this.commonNotifyVue("Bạn phải chọn giới tính", 'warn');
                return false;
            }

            return true;
        },
        onChangeDataSource() {
            this.eventObj.dataType = '';
            if (this.eventObj.dataSource === 'tapping') {
                this.optionsEventType = [{value: 'call', text: 'CALL'}, {value: 'ussd', text: 'USSD'}]
                this.eventObj.dataType = 'call';
            } else if (this.eventObj.dataSource === 'ccsp') {
                this.optionsEventType = [{value: 'package', text: 'Gói cước'}]
                this.eventObj.dataType = 'package';
            } else if (this.eventObj.dataSource === 'lbs') {
                this.optionsEventType = [{value: 'sub_location', text: 'Vị trí thuê bao'}]
                this.eventObj.dataType = 'sub_location';
            }
        },
        onChangeProvince() {
            console.log('onChangeProvince', this.provinceOptionsSelected);
            let objInput = {provinces: this.provinceOptionsSelected};
            this.apiGetListDistrict(objInput)
                .then(response => {
                    let data = response['data'];
                    this.optionsDistrict = data;
                    console.log('apiGetListDistrict1', data);
                    if (response.err_code === 0) {
                    } else {
                    }
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    // this.commonLoadingPage(false);
                });

        },
        onFileChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (files != null)
                this.fileUpload = files[0];
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <b-modal id="modal-add-project"
             size="lg" :title="modalTitle"
             title-class="font-18" hide-footer
             @cancel="flagModal = false"
             @show="handleInitData"
    >
        <div class="row pb-3">
            <div class="col-12">
                <label>Tên Đề tài</label>
                <input type="text" maxlength="200" v-model="teacherObj.fullName" :disabled="actionType===3" placeholder="Tên đề tài" class="form-control form-control multiselect__tags"/>
            </div>
        </div>
        <div class="row pb-3">
            <div class="col-6">
                <label>Chủ đề</label>
                <select v-model="objProject.id" :disabled="actionType===3" class="form-control">
                    <option v-for="option in optionTopic" :value="option.id" >
                        {{ option.name  }}
                    </option>
                </select>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-12">
                <label v-show="actionType==1">Tên tập TB</label>
                <input type="text" v-show="actionType==1" maxlength="150" v-model="projectData.name" class="form-control"/>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-12">
                <label>File chứa sinh viên</label>
                <input type="file" @change="onFileChange" class="form-control">
            </div>
        </div>
        <!-- end card-body -->
        <div class="text-end mt-4">
            <button type="button" class="btn btn-default" @click="closeModal">Bỏ qua</button>
            <button type="button" class="btn btn-primary px-4" @click="addEvent">Lưu</button>
        </div>
    </b-modal>
</template>


