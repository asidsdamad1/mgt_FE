<script>
import Multiselect from 'vue-multiselect';
import "vue-multiselect/dist/vue-multiselect.min.css";
import Swal from "sweetalert2";
import {mapActions} from "vuex";
import MdAddTeacher from "@/components/contact/modal/MdAddSegment.vue";

export default {
    name: "teacher",
    methods: {
        ...mapActions('teachers', {
            apiGetListTeacher: 'apiGetListTeacher',
            apiGetTeacher: 'apiGetTeacher',
            apiEditTeacher: 'apiEditTeacher',
            apiDeleteTeacher: 'apiDeleteTeacher',
            apiGetListDistrict: 'apiGetListDistrict',
            apiCheckActiveTeacher: 'apiCheckActiveTeacher',
            apiCheckTeacherUpdate: 'apiCheckTeacherUpdate'
        }),
        handleCheckUpdateTeacher(id) {
            this.apiCheckTeacherUpdate({
                id: id
            }).then(response => {
                if (response.err_code === 0) {
                    let checkUpdate = response.data.updateStatus;
                    if (checkUpdate === 1) {
                        this.prepareEditTeacher(id);
                    } else {
                        Swal.fire('', response.err_message, 'warning')
                    }
                }
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
            })
        },
        handleCheckDeleteTeacher(id) {
            this.apiCheckTeacherUpdate({
                id: id
            }).then(response => {
                if (response.err_code === 0) {
                    let checkUpdate = response.data.updateStatus;
                    if (checkUpdate === 1) {
                        this.deleteTeacher(id);
                    } else {
                        Swal.fire('', response.err_message, 'warning')
                    }
                }
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
            })
        },
        handleCheckActiveTeacher(id) {
            this.apiCheckActiveTeacher({
                id: id
            }).then(response => {
                if (response.err_code === 0) {
                    Swal.fire('', response.err_message, 'success')
                }
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
            })
        },
        handleGetDistrict(id) {
            this.apiGetListDistrict({
                citieId: id
            })
                .then(response => {
                    if (response.err_code === 0) {
                        this.dataDistrict = response.data
                    }
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                })
        },
        handleGetDistrictTele(id) {
            this.apiGetListDistrict({
                citieId: id
            })
                .then(response => {
                    if (response.err_code === 0) {
                        this.dataDistrictTele = response.data
                    }
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                })
        },
        handleGetTeacher() {
            this.apiGetTeacher(this.objGetTeacher)
                .then(response => {
                    if (response.err_code === 0) {
                        this.tableData = response.data;
                    }
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                })
        },
        prepareAddTeacher() {
            this.mainConditionType = -1
            this.typeTeacher = 1;
            this.isEditModalField = false;
            this.createTeacherWeb.arrayOption.push({
                conditionArrType: 0,
                options: {
                    listConditions: []
                }
            });
            this.createTeacherWeb.arrayOption[0].options.listConditions.push({
                conditionType: 0,
                customType: -1,
                peopleInfo: -1,
                peopleTele: -1,
                peopleTeacher: '',
                peopleHobby: -1,
                peopleOptionHobby: '',
                peopleInfoAgeTitle: -1,
                peopleInfoAgeValue: 0,
                peopleInfoSex: -1,
                peopleInfoName: -1,
                peopleTeleArpuTitle: -1,
                peopleTeleAgeTitle: -1,
                peopleTeleCardTitle: -1,
                peopleTeleDeviceTitle: -1,
                createDemographicInfo: {
                    objFullName: {
                        fullName: {
                            name: '',
                            type: 1,
                        },
                        operator: "",
                    },
                    dob: {
                        operator: "",
                        age: {
                            operator: "between",
                            from: '',
                            to: ''
                        },
                    },
                    address1: {
                        operator: '',
                        address: {
                            arrDistrict: [],
                            city: -1,
                            district: -1
                        },
                    },
                    gender1: {
                        operator: '',
                        gender: 0,
                    },
                },
                createdTelecomInfo: {
                    subType: {
                        operator: '',
                        subscriber_type: 1,
                    },
                    arpuObj: {
                        operator: '',
                        arpu: {
                            operator: "between",
                            from: '',
                            to: ''
                        },
                    },
                    statusObj: {
                        operator: '',
                        status: 1,
                    },
                    deviceObj: {
                        operator: '',
                        device: 0,
                    },
                    serviceObj: {
                        operator: '',
                        service: "",
                    },
                    addressFee: {
                        operator: '',
                        address_fee: {
                            arrDistrict: [],
                            city: -1,
                            district: -1
                        },
                    },
                    subscriberDob: {
                        operator: '',
                        subscriber_dob: {
                            operator: "between",
                            from: '',
                            to: ''
                        },
                    },
                    cardValue: {
                        operator: '',
                        card_value: {
                            operator: "between",
                            from: '',
                            to: ''
                        },
                    }
                },
                createdCustomerTeacher: {
                    textCustomer: {
                        operator: '',
                        text_customer: '',
                    }
                },
                createHobby: {
                    sportObj: {
                        operator: "",
                        sport: "",
                    },
                    movieObj: {
                        operator: '',
                        movie: "",
                    },
                    dataObj: {
                        operator: '',
                        data: '',
                    }
                },
            });
            this.filesValue = [];
            this.teachersValue = [];
            this.titleModal = 'Tạo Teacher';
            this.$bvModal.show('modal-add-teacher');
        },
        prepareEditTeacher(id) {
            this.isEditModalField = false;
            this.titleModal = 'Sửa Teacher';
            this.typeTeacher = 2;
            this.idTeacher = parseInt(id);

            this.teachersValue = [];
            this.listConditions = [];

            this.apiGetTeacher({
                teacherId: id,
                textSearch: "",
                filter: 0,
                fromDate: "",
                toDate: ""
            }).then(response => {
                if (response.err_code === 0) {
                    console.log(response.data[0]);
                    this.createTeacherWeb.name = response.data[0].rawDataView.name;
                    this.createTeacherWeb.operator = response.data[0].rawDataView.operator;
                    this.createTeacherWeb.textNote = response.data[0].rawDataView.textNote;
                    this.createTeacherWeb.arrayOption = response.data[0].rawDataView.arrayOption;

                    let arrSub = response.data[0].rawDataView.subscribers;
                    let arrTeacher = response.data[0].rawDataView.teacher;

                    this.filesValue = [];
                    this.filesOptions.forEach(itemOption => {
                        if (arrSub.includes(itemOption.id)) {
                            this.filesValue.push(itemOption);
                        }
                    });

                    this.teachersValue = [];
                    this.teachersOptions = this.teachersOptions.filter(item => item.id !== id);
                    this.teachersOptions.forEach(itemOption => {
                        if (arrTeacher.includes(itemOption.id)) {
                            this.teachersValue.push(itemOption);
                        }
                    });

                    if (this.createTeacherWeb.operator === 'and') {
                        this.andChecked = true;
                        // this.disableAdd = false;
                        this.mainConditionType = 1;
                    } else if (this.createTeacherWeb.operator === 'or') {
                        this.orChecked = true;
                        // this.disableAdd = false;
                        this.mainConditionType = 2;
                    } else if (this.createTeacherWeb.operator === '') {
                        this.andChecked = false;
                        this.orChecked = false;
                        this.mainConditionType = -1;
                    }

                    this.$bvModal.show('modal-add-teacher');
                } else {
                    Swal.fire("", response.err_message, "warning");
                }
            }).catch(err => {
                console.log(err)
            }).finally(() => {
            })
        },
        viewTeacher(id) {
            this.isEditModalField = true;
            this.disableAdd = true;
            this.titleModal = 'Xem Teacher';
            this.typeTeacher = 3;
            this.idTeacher = parseInt(id);

            this.apiGetTeacher({
                teacherId: id,
                textSearch: "",
                filter: 0,
                fromDate: "",
                toDate: ""
            }).then(response => {
                if (response.err_code === 0) {
                    console.log(response.data[0]);
                    this.createTeacherWeb.name = response.data[0].rawDataView.name;
                    this.createTeacherWeb.operator = response.data[0].rawDataView.operator;
                    this.createTeacherWeb.textNote = response.data[0].rawDataView.textNote;
                    this.createTeacherWeb.arrayOption = response.data[0].rawDataView.arrayOption;


                    let arrSub = response.data[0].rawDataView.subscribers;
                    let arrTeacher = response.data[0].rawDataView.teacher;

                    this.filesValue = [];
                    this.filesOptions.forEach(itemOption => {
                        if (arrSub.includes(itemOption.id)) {
                            this.filesValue.push(itemOption);
                        }
                    });

                    this.teachersValue = [];
                    this.teachersOptions = this.teachersOptions.filter(item => item.id !== id);
                    this.teachersOptions.forEach(itemOption => {
                        if (arrTeacher.includes(itemOption.id)) {
                            this.teachersValue.push(itemOption);
                        }
                    });

                    if (this.createTeacherWeb.operator === 'and') {
                        this.andChecked = true;
                        this.disableAdd = true;
                        this.mainConditionType = 1;
                    } else if (this.createTeacherWeb.operator === 'or') {
                        this.orChecked = true;
                        this.disableAdd = true;
                        this.mainConditionType = 2;
                    } else if (this.createTeacherWeb.operator === '') {
                        this.andChecked = false;
                        this.orChecked = false;
                        this.mainConditionType = -1;
                    }

                    this.$bvModal.show('modal-add-teacher');
                }
            }).catch(err => {
                console.log(err)
            }).finally(() => {
            })
        },
        deleteTeacher(id) {
            Swal.fire({
                title: "Bạn có chắc chắn muốn xóa?",
                text: "Bạn sẽ không lấy lại được dữ liệu đã xóa!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#34c38f",
                cancelButtonColor: "#f46a6a",
                confirmButtonText: "Đồng ý",
                cancelButtonText: "Hủy"
            }).then(result => {
                if (result.isConfirmed) {
                    this.apiDeleteTeacher({
                        id: id
                    }).then(response => {
                        if (response.err_code === 0) {
                            Swal.fire("", response.err_message, "success");
                            this.handleGetTeacher();
                        } else {
                            Swal.fire("", response.err_message, "warning");
                        }
                    }).catch(err => {
                        console.log(err);
                    }).finally(() => {
                        // this.commonLoadingPage(false);
                    })
                } else {
                }
                if (result.value) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
            });
        },
        handleSearchTeacher() {
            this.apiGetTeacher({
                teacherId: 0,
                textSearch: this.textSearch,
                filter: this.filterSearch,
                fromDate: this.fromDate,
                toDate: this.toDate
            })
                .then(response => {
                    if (response.err_code === 0) {
                        this.tableData = response.data;
                    }
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                })
        },
        handleGetListTeacher() {
            this.apiGetListTeacher(this.objGetListTeacher)
                .then(response => {
                    if (response.err_code === 0) {
                        this.teachersOptions = response.data
                    }
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                })
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
    },
    components: {
        Multiselect,
        MdAddTeacher
    },
    mounted() {
        this.handleGetTeacher();
        this.handleGetListTeacher();
    },
    computed: {
        rows() {
            return this.tableData.length;
        }
    },
    data() {
        return {
            tableData: [],
            fields: [
                {
                    key: "index",
                    label: 'STT',
                    sortable: true
                },
                {
                    key: "id",
                    label: 'ID Teacher',
                    sortable: true
                },
                {
                    key: "name",
                    label: 'Tên Teacher',
                    sortable: true
                },
                {
                    key: "createdAt",
                    label: 'Thời gian tạo',
                    sortable: true
                },
                {
                    key: "updatedAt",
                    label: 'Thời gian cập nhật',
                    sortable: true
                },
                {
                    key: "note",
                    label: 'Ghi chú',
                    sortable: true,
                },
                {
                    key: "manipulation",
                    label: 'Thao tác',
                    sortable: false,
                },
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "age",
            sortDesc: false,
            objGetListTeacher: {
                id: 0
            },
            objGetTeacher: {
                teacherId: 0,
                textSearch: "",
                filter: 0,
                fromDate: "",
                toDate: ""
            },
            items: [
                {
                    text: "Forms",
                    href: "/"
                },
                {
                    text: "Form File Upload",
                    active: true
                }
            ],
            objGetContact: {
                conditionSearch: "",
                valueSearch: ""
            },
            filesValue: [],
            filesOptions: [],
            teachersValue: [],
            teachersOptions: [],
            dataDistrict: [],
            dataDistrictTele: [],
            isEditModalField: false,
            titleModal: '',
            mainConditionType: -1,
            typeOperator: 0,
            createTeacherWeb: {
                name: '',
                operator: '',
                subscribers: [],
                teacher: [],
                arrayOption: [],
                note: '',
                type: -1
            },
            textSearch: '',
            filterSearch: 0,
            fromDate: '',
            toDate: '',
            andChecked: false,
            orChecked: false,
            disableAdd: true,
            typeTeacher: 1,
            idTeacher: 0,
            idCityInfo: 0,
            idCityTele: 0,
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="card">
            <div class="card-header">
                <div class="row" style="float: right">
                    <div class="col-12">
                        <button type="button" class="btn btn-success" @click="prepareAddTeacher"><i class="uil uil-plus me-1"></i> Tạo mới Teacher</button>
                    </div>

                </div>
            </div>
            <div class="card-body">

                <div class="row mb-3">
                    <div class="col-3">
                        <label>Từ khóa tìm kiếm</label>
                        <input type="text" class="form-control" v-model="textSearch"/>
                    </div>
                    <div class="col-2">
                        <label>Lọc</label>
                        <div class="row">
                            <select class="form-control" v-model="filterSearch">
                                <option value="0" disabled>Chọn</option>
                                <option value="0">Tất cả</option>
                                <option value="1">Id Teacher</option>
                                <option value="2">Tên Teacher</option>
                                <option value="3">Ghi chú</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-3">
                        <label>Thời gian bắt đầu</label>
                        <input type="date" class="form-control" v-model="fromDate"/>
                    </div>
                    <div class="col-4">
                        <label>Thời gian kết thúc</label>
                        <div class="row">
                            <div class="col-8">
                                <input type="date" class="form-control" v-model="toDate"/>
                            </div>
                            <div class="col-4">
                                <button type="button" class="btn btn-primary d-block" @click="handleSearchTeacher"><i class="uil uil-search me-2"></i> Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <b-table hover bordered :items="tableData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                        <template v-slot:cell(index)="data">
                            {{ data.index + 1 }}
                        </template>
                        <template v-slot:cell(createdAt)="data">
                            {{ $moment(data.item.createdAt).format('DD-MM-YYYY') }}
                        </template>
                        <template v-slot:cell(updatedAt)="data">
                            {{ $moment(data.item.updatedAt).format('DD-MM-YYYY') }}
                        </template>
                        <template v-slot:cell(manipulation)="data">
                            <div class="row align-items-center">
                                <button title="Xem Teacher"
                                        @click="viewTeacher(data.item.id)"
                                        class="btn btn-gray btn-block view-cart col-auto"
                                ><i class="uil uil-eye me-1"></i>
                                </button>
                                <button title="Sửa Teacher"
                                        @click="handleCheckUpdateTeacher(data.item.id)"
                                        class="btn btn-gray btn-block view-cart col-auto"
                                ><i class="uil uil-pen me-1"></i>
                                </button>
                                <button title="Xóa Teacher"
                                        @click="handleCheckDeleteTeacher(data.item.id)"
                                        class="btn btn-gray btn-block view-cart col-auto"
                                ><i class="uil uil-trash me-1"></i>
                                </button>
                                <div class="form-check form-switch form-check-inline col-auto">
                                    <input v-model="data.item.status===1"
                                           type="checkbox"
                                           class="form-check-input"
                                           id="flexSwitchCheckChecked"
                                           @click="handleCheckActiveTeacher(data.item.id)"
                                    />
                                </div>
                            </div>
                        </template>
                    </b-table>
                </div>
                <div class="row">
                    <div class="col-6 d-inline-flex">
                        <label class="d-inline-flex align-items-center mb-0 pb-0">
                            <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>
                            Số/Trang
                        </label>
                    </div>
                    <div class="col-6">
                        <b-pagination
                            class="mb-0" align="right"
                            v-model="currentPage"
                            :total-rows="rows"
                            :per-page="perPage"
                        ></b-pagination>
                    </div>
                </div>
            </div>
        </div>
        <md-add-teacher
            :teachersOptions="teachersOptions"
            :teachersValue="teachersValue"
            :filesOptions="filesOptions"
            :filesValue="filesValue"
            :idTeacher="idTeacher"
            :andChecked="andChecked"
            :orChecked="orChecked"
            :typeTeacher="typeTeacher"
            :isEditModalField="isEditModalField"
            :titleModal="titleModal"
            :mainConditionType="mainConditionType"
            :createTeacherWeb="createTeacherWeb"
            :idCityInfo="idCityInfo"
            :idCityTele="idCityTele"
            @handleGetTeacher="handleGetTeacher">
        </md-add-teacher>
    </div>
</template>

<style scoped lang="scss">
</style>
