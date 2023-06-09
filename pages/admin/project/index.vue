<script>

import {mapActions} from "vuex";
import Multiselect from "vue-multiselect";
import AddOutlineModal from "../../../components/project/AddOutlineModal";
import {getUserInfo} from "../../../utils/cookieAuthen";
import Swal from "sweetalert2";
import ProjectModal from "../../../components/admin/ProjectModal.vue";

export default {
    middleware: ['check-authen'],
    name: "project-admin",
    components: {
        Multiselect,
        ProjectModal,
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
                    key: "topic.name",
                    label: "Chủ đề",
                    sortable: true,
                },
                {
                    key: "name",
                    label: "Tên đề tài",
                    sortable: true,
                },
                {
                    key: "session.year",
                    label: "Năm học",
                    sortable: true,
                },
                {
                    key: "student.code",
                    label: "Mã sinh viên",
                    sortable: true,
                },
                {
                    key: "student.fullName",
                    label: "Sinh viên",
                    sortable: true,
                },
                {
                    key: "student.studentClass.course",
                    label: "Khoá",
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
                    id: 0, name: ''

                },
                status: 0
            },
            objGetListStudent: {
                id: 0
            },
            modalActionType: -1,
            flagModal: false,
            status: '',
            teacherId: 0,
            type: '',
            user: JSON.parse(getUserInfo())
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
        getUserInfo,
        ...mapActions('project', {
            apiGetProject: 'apiGetProject',
            apiDeleteProject: 'apiDeleteProject',
            apiDeleteReportFile: 'apiDeleteReportFile',
            apiDeleteOutlineFile: 'apiDeleteOutlineFile',
        }),
        ...mapActions('assign/assignment', {
            apiGetAssignment: 'apiGetAssignment'
        }),
        closeModalListSub() {
            this.$bvModal.hide('modal-add-list-tb');
        },

        handleGetProject() {
            this.apiGetProject({
                valueSearch: '',
                conditionSearch: ''
            }).then(res => {
                this.tableData = res;
            })
        },
        searchStudent() {
            let objInput = {id: JSON.parse(getUserInfo()).studentId, conditionSearch: this.conditionSearch, valueSearch: this.valueSearch};
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
            } else if (row.value === 'INACTIVE') {
                row.value = 'Chưa duyệt';
                return 'text-warning';
            } else {
                return '';
            }
        },
        showModalProject() {
            this.idProject = -1;
            this.modalActionType = 1;
            this.flagModal = !this.flagModal;
            this.$bvModal.show('modal-add-project-admin');
        },
        showModalOutline() {
            this.objSearch.conditionSearch = 'STUDENT';
            this.objSearch.valueSearch = JSON.parse(getUserInfo()).studentId;
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
            this.type = "OUTLINE"
            this.flagModal = !this.flagModal;
            this.$bvModal.show('modal-add-file-outline');
        },
        showModalReport(id, type) {
            this.idProject = id;
            this.type = type;
            this.flagModal = !this.flagModal;
            this.$bvModal.show('modal-add-file-outline');
        },
        getValue(row) {
            console.log(row.value)
        },
        editProject(id) {
            this.isEditModalField = false;
            this.titleModal = 'Sửa thông tin';
            this.idProject = parseInt(id);
            this.modalActionType = 2;
            this.$bvModal.show('modal-add-project-admin');
        },
        deleteProject(id) {
            console.log("id: ", id);

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
                    this.apiDeleteProject(id).then(response => {
                        console.log("in")
                        Swal.fire("Xóa thành công", response, "success");
                        this.handleGetProject();
                    }).catch(err => {
                        if(err.toString().includes('404')) {
                            Swal.fire("Xóa thất bại", "Đồ án không tồn tại", "error");
                        }
                        console.log(err);
                    }).finally(() => {
                        // this.commonLoadingPage(false);
                    })
                } else {
                }
            });
        },
        deleteFile(id, type) {
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
                    if(type === 'REPORT') {
                        this.apiDeleteReportFile(id).then(response => {
                            Swal.fire("", "Xóa thành công", "success");
                            this.handleGetProject();
                        }).catch(err => {
                            console.log(err);
                        }).finally(() => {
                            // this.commonLoadingPage(false);
                        })
                    }
                    if(type === 'OUTLINE') {
                        this.apiDeleteOutlineFile(id).then(response => {
                            Swal.fire("", "Xóa thành công", "success");
                            this.handleGetProject();
                        }).catch(err => {
                            console.log(err);
                        }).finally(() => {
                            // this.commonLoadingPage(false);
                        })
                    }

                } else {
                }
            });
        },
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
                            <option value="NAME">Tên đề tài</option>
                            <option value="STUDENT_NAME">Tên sinh viên</option>
                            <option value="PHONE">Mã sinh viên</option>
                            <option value="EMAIL">Năm học</option>
                            <option value="CLASS">Khóa</option>
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
                            <a :href="row.value" :hidden="row.value === ''">
                                Tải xuống
                            </a>
                            <span :hidden="row.value !== ''">
                                Chưa có file
                            </span>
                        </template>
                        <template #cell(reportFile)="row">
                            <a :href="row.value" :hidden="row.value === ''">
                                Tải xuống
                            </a>
                            <span :hidden="row.value !== ''">
                                Chưa có file
                            </span>
                        </template>
                        <template v-slot:cell(index)="data">
                            {{ data.index + 1 }}
                        </template>
                        <template v-slot:cell(reportFile)="data">
                            <a :href="data.value" :hidden="data.value === ''">
                                Tải xuống
                            </a>
                            <button :hidden="data.value === ''" @click="deleteFile(data.item.id, 'REPORT')" class="btn btn-gray btn-block view-cart col-auto">
                                <i class="uil uil-trash me-1"></i>
                            </button>

                            <button :hidden="data.value !== '' || user.role === 'ROLE_TEACHER'"
                                    class="btn btn-block view-cart col-auto text-white"
                                    style="background-color: #5b73e8"
                                    @click="showModalReport(data.item.id, 'REPORT')" v-b-modal.modal-add-file-outline>
                                Upload
                            </button>
                        </template>
                        <template v-slot:cell(outlineFile)="data">
                            <a :href="data.value" :hidden="data.value === ''">
                                Tải xuống
                            </a>
                            <button :hidden="data.value === ''" @click="deleteFile(data.item.id, 'OUTLINE')" class="btn btn-gray btn-block view-cart col-auto">
                                <i class="uil uil-trash me-1"></i>
                            </button>

                            <button :hidden="data.value !== '' || user.role === 'ROLE_TEACHER'"
                                    class="btn btn-block view-cart col-auto text-white"
                                    style="background-color: #5b73e8"
                                    @click="showModalReport(data.item.id, 'OUTLINE')" v-b-modal.modal-add-file-outline>
                                Upload
                            </button>
                        </template>
                        <template v-slot:cell(action)=data>
                            <div class="row align-items-center">
                                <button title="Sửa chi tiết"
                                        @click="editProject(data.item.id)"
                                        class="btn btn-gray btn-block view-cart col-auto"
                                ><i class="uil uil-pen me-1"></i>
                                </button>

                                <button title="Xóa chi tiết"
                                        @click="deleteProject(data.item.id)"
                                        class="btn btn-gray btn-block view-cart col-auto"
                                ><i class="uil uil-trash me-1"></i>
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

        <project-modal
            :idProject="idProject"
            :actionType="modalActionType"
            :flagModal="flagModal"
            @handleGetProject="handleGetProject"
        >
        </project-modal>

        <add-outline-modal
            :idProject="this.idProject"
            :type="this.type"
            :actionType="modalActionType"
            :flagModal="flagModal"
            @handleGetProject="handleGetProject"
        >
        </add-outline-modal>
    </div>

</template>


