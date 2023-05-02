<script>

import {mapActions} from "vuex";
import Swal from "sweetalert2";
import Multiselect from "vue-multiselect";
import {getUserInfo} from "@/utils/cookieAuthen";
import ProjectStudentModal from "../../components/project/ProjectStudentModal";
import AddOutlineModal from "../../components/project/AddOutlineModal";

export default {
    middleware: ['check-authen'],
    name: "subscriber",
    components: {
        Multiselect,
        ProjectStudentModal,
        AddOutlineModal
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
            conditionSearch: '',
            valueSearch: '',
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "age",
            sortDesc: false,
            fields: [
                {
                    key: "index",
                    label: "STT",
                    sortable: true,
                },
                {
                    key: "name",
                    label: "Tên đề tài",
                    sortable: true,
                },
                {
                    key: "topic.name",
                    label: "Chủ đề",
                    sortable: true,
                },
                {
                    key: "student.fullName",
                    label: "Sinh viên",
                    sortable: true,
                },
                {
                    key: "createDate",
                    label: "Ngày bắt đầu",
                    sortable: true,
                },
                {
                    key: "endDate",
                    label: "Ngày kết thúc",
                    sortable: true,
                },
                {
                    key: "outlineFile",
                    label: "Đề cương",
                    sortable: true,
                },
                {
                    key: "reportFile",
                    label: "Báo cáo",
                    sortable: true,
                },
                {
                    key: "status",
                    label: "Trạng thái",
                    sortable: true
                },
                {
                    key: "action",
                    label: "Thao tác",
                    tdClass: 'text-center',
                },
            ],
            tableData: [],
            idProject: 0,
            codeStudent: '',
            objSearch: {
                conditionSearch: '',
                valueSearch: ''
            },
            objProject: {
                id: 0,
                name: '',
                student: {
                    id: 0,
                    name: ''
                },
                teacher: {
                    id: 0
                },
                session: {
                    id: 0,
                    name: ''
                },
                topic: {
                    id: 0,name: ''

                },
                status: 0
            },
            objGetListStudent: {
                id: 0
            },
            modalActionType: -1,
            flagModal: false,
            status: '',
            teacherId: '',
        }
    },
    created() {

    },
    computed: {
        rows() {
            return this.tableData.length;
        }
    },
    mounted() {
        this.handleGetProject();
    },
    methods: {
        ...mapActions('project', {
            apiGetProject: 'apiGetProject'
        }),
        ...mapActions('assign/assignment', {
            apiGetAssignment: 'apiGetAssignment'
        }),
        closeModalListSub() {
            this.$bvModal.hide('modal-add-list-tb');
        },

        addListSub() {
            this.errorValidate = [];
            let formData = new FormData();
            if (this.fileUpload === null) {
                this.commonNotifyVue('Bạn phải chọn file chứa danh sách thuê bao', 'warn');
            } else {
                formData.append('fileExcel', this.fileUpload);
                console.log(formData);

                this.apiImportStudent(formData)
                    .then(response => {
                        console.log('apiAddBlacklist', response);
                        if (response === null) {
                            this.$emit('handleGetStudent');
                            this.$bvModal.hide('modal-add-file-student');
                        } else {
                            this.commonWarningVue("bug");
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
                    .finally(() => {
                        // this.commonLoadingPage(false);
                    });

            }
        },
        handleGetTeacher() {
            this.objSearch.valueSearch = JSON.parse(getUserInfo()).id + "," + JSON.parse(getUserInfo()).session;
            this.objSearch.conditionSearch = 'TEACHER';

            this.apiGetAssignment(this.objSearch)
                .then(response => {
                    this.teacherId = response[0].teacher.id;
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                })
        },
        handleGetProject() {
            this.handleGetTeacher();
            console.log(this.teacherId)
            this.objSearch.valueSearch = this.teacherId;
            this.objSearch.conditionSearch = 'TEACHER'
            console.log(this.objSearch)
            this.apiGetProject(this.objSearch)
                .then(response => {
                    this.tableData = response;
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                })
        },
        searchStudent() {
            let objInput = {id: JSON.parse(getUserInfo()).id, conditionSearch: this.conditionSearch, valueSearch: this.valueSearch};
            console.log('apiGetListContactGroup', objInput);
            if (this.conditionSearch !== '' && this.conditionSearch !== 'ALL') {
                if (this.valueSearch.trim() === '') {
                    this.commonNotifyVue('Bạn phải nhập từ khóa tìm kiếm', 'warn');
                    return;
                }
            }
            this.apiGetStudent(objInput)
                .then(response => {
                    let data = response;
                    this.tableData = data;
                    console.log('apiGetListContactGroup', data);
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    // this.commonLoadingPage(false);
                });
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        viewStudent(id) {
            this.isEditModalField = true;
            this.disableAdd = true;
            this.titleModal = 'Xem Chi Tiết';
            this.typeSegment = 3;
            this.idProject = parseInt(id);
            this.codeStudent = id;

            this.flagModal = !this.flagModal;

            this.apiGetStudent({
                conditionSearch: 'ID',
                valueSearch: id,
            }).then(response => {
                this.objProject = response[0];

                console.log("object student:: ", this.objProject)

                this.modalActionType = 3;

                this.flagModal = !this.flagModal;
                this.$bvModal.show('modal-add-event');

            }).catch(err => {
                console.log(err)
            }).finally(() => {
            })
        },
        showModalStudent() {
            this.idProject = -1;
            this.modalActionType = 1;
            this.objProject.name = "";
            this.objProject.dob = "";
            this.objProject.gender = "";
            this.objProject.phone = "";
            this.objProject.email = "";
            this.objProject.address = "";
            this.objProject.code = "";
            this.objProject.class = "";
            this.flagModal = !this.flagModal;
            this.$bvModal.show('modal-add-event');
        },
        handleModalCall() {
            this.searchStudent();
        },
        getRowClass(row) {
            if (row.value === 'ACTIVE') {
                row.value = 'Đã duyệt';
                return 'text-success';
            } else if (row.value === 'RESERVE') {
                row.value = 'Bảo lưu';
                return 'text-danger';
            } else if (row.value === 'INACTIVE'){
                row.value = 'Chưa duyệt';
                return 'text-warning';
            } else {
                return '';
            }
        },
        getDetail(id) {
            this.objProject.id = JSON.parse(getUserInfo()).id;
            if(id === this.objProject.id) {
                return 'display: show'
            }
            return 'display: hidden'
        },
        showModalProject() {
            this.idProject = -1;
            this.modalActionType = 1;
            this.objProject.name = "";
            this.objProject.class = "";
            this.flagModal = !this.flagModal;
            this.$bvModal.show('modal-add-project');
        },
        showModalOutline() {
            this.objSearch.conditionSearch = 'STUDENT';
            this.objSearch.valueSearch = JSON.parse(getUserInfo()).id;
            this.apiGetProject(this.objSearch)
                .then(response => {
                    console.log(response[0].id)
                    this.idProject = response[0].id;
                })
                .catch(err => {
                    console.log(err)
                })
                .finally(() => {
                })

            this.flagModal = !this.flagModal;
            this.$bvModal.show('modal-add-file-outline');
        }
    }
}
</script>

<style scoped>

</style>


<template>
    <div class="row">
        <div class="card">
            <div class="card-header">
                <div class="row" style="float: right">
                    <div class="col-12">
                        <button type="button" class="btn btn-primary" @click="showModalOutline" v-b-modal.modal-add-file-outline><i class="uil uil-arrow-circle-up me-1"></i> Tải file đề cương</button>
                        <button type="button" class="btn btn-success" @click="showModalProject"><i class="uil uil-plus me-1"></i> Tạo đồ án</button>
                    </div>

                </div>
            </div>
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-5">
                        <label>Điều kiện lọc</label>
                        <select v-model="conditionSearch" class="form-control">
                            <option value="ALL">Tất cả</option>
                            <option value="NAME">Tên</option>
                            <option value="PHONE">Số điện thoại</option>
                            <option value="EMAIL">Email</option>
                            <option value="CLASS">Lớp</option>
                            <option value="CODE">Mã sinh viên</option>
                        </select>
                    </div>
                    <div class="col-7">
                        <label>Từ khóa tìm kiếm</label>
                        <div class="row">
                            <div class="col-10">
                                <input type="text" v-model="valueSearch" class="form-control"/>
                            </div>
                            <div class="col-2">
                                <button type="button" class="btn btn-primary d-block" @click="searchStudent"><i class="uil uil-search me-2"></i> Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <b-table striped bordered :items="tableData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                        <template #cell(status)="row">
                            <div :class="getRowClass(row)">
                                {{ row.value }}
                            </div>
                        </template>
                        <template #cell(outlineFile)="row">
                            <a :href="row.value">
                                {{ row.value != null ? 'Tải xuống' :  'null' }}
                            </a>
                        </template>
                        <template v-slot:cell(index)="data">
                            {{ data.index + 1 }}
                        </template>
                        <template v-slot:cell(action)=data>
                            <div class="row align-items-center" >
                                <button title="Xem Segment"
                                        @click="viewStudent(data.item.id)"
                                        class="btn btn-gray btn-block view-cart col-auto"
                                ><i class="uil uil-eye me-1"></i>
                                </button>

                            </div>
                        </template>
                    </b-table>
                </div>

                <div class="row">
                    <div class="col-6 d-inline-flex">
                        <label class="d-inline-flex align-items-center mb-0 pb-0">
                            <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;&nbsp;Số/ Trang
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

        <project-student-modal
            :idProject="idProject"
            :actionType="modalActionType"
            :flagModal="flagModal"
            @handleGetProject="handleGetProject"
        >
        </project-student-modal>

        <add-outline-modal
            :idProject="idProject"
            :actionType="modalActionType"
            :flagModal="flagModal"
            @handleGetProject="handleGetProject"
        >
        </add-outline-modal>
    </div>

</template>


