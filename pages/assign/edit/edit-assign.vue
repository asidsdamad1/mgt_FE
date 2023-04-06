<script>

import {mapActions} from "vuex";
import Swal from "sweetalert2";
import * as CONSTANTS from "constants";

/**
 * Product-detail component
 */
export default {
    middleware: ['check-authen'],
    head() {
        return {
            title: `Danh sách sinh viên được hướng dẫn`
        };
    },
    asyncData({
                  params
              }) {

    },
    data() {
        return {
            titleModal: 'Danh sách sinh viên được hướng dẫn',
            isEditModalField: false,
            isViewModalFileField: false,
            title: "Danh sách sinh viên được hướng dẫn",
            contactGroupNam: '',
            contactGroupId: '',
            conditionSearch: '',
            valueSearch: '',
            startDate: '',
            endDate: '',

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
                    thStyle: {width: "3%"},
                },
                {
                    key: "student.code",
                    label: "Mã sinh viên",
                    sortable: true,
                    thStyle: {width: "10%"},
                },
                {
                    key: "student.email",
                    label: 'Email',
                    sortable: true,
                    thStyle: {width: "20%"},
                },
                {
                    key: "createdBy",
                    label: 'Tài khoản',
                    sortable: true,
                    thStyle: {width: "10%"},
                },
                {
                    key: "createdDate",
                    label: 'Thời gian tạo',
                    sortable: true
                },
                {
                    key: "action",
                    label: 'Thao tác',
                    thStyle: {width: "15%"}
                },
            ],
            objAssignment: {
                session: {
                    id: 0
                },
                student: {
                    id: 0,
                    code: ''
                },
                teacher: {
                    id: 0
                }
            },
            tableData: []
        };
    },
    methods: {
        ...mapActions('assign/assignment', {
            apiGetStudent: 'apiGetStudent',
            apiGetAssignment: 'apiGetAssignment',
            apiDeleteAssignment: 'apiDeleteAssignment',
            apiAddAssignment: 'apiAddAssignment'
        }),
        goToPrev() {
            this.$router.go(-1);
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        searchSub() {
            this.apiGetStudent({sessionId: this.sessionId, teacherId: this.teacherId})
                .then(response => {
                    this.tableData = response;
                    console.log('apiGetListSub', this.tableData);
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
        deleteAssignment(sessionId, studentId, teacherId) {
            this.objAssignment.session.id = sessionId;
            this.objAssignment.student.id = studentId;
            this.objAssignment.teacher.id = teacherId;
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
                    this.apiDeleteAssignment(this.objAssignment).then(response => {
                        console.log("in")
                        if (!response) {
                            Swal.fire("", "Xóa thất bại, phải hướng dẫn ít nhất 1 sinh viên", "error");
                        } else {
                            Swal.fire("", "Xóa thành công", "success");
                        }
                        this.searchSub();

                    }).catch(err => {
                        console.log(err);
                    }).finally(() => {
                        // this.commonLoadingPage(false);
                    })
                } else {
                }
            });
        },
        prepareAddOne() {
            this.isEditModalField = false;
            this.isViewModalFileField = false;
            this.titleModal = 'Thêm sinh viên hướng dẫn';
            this.$bvModal.show('modal-add-one');

        },
        closeModalSub() {
            this.$bvModal.hide('modal-add-one');
        },
        addEditOneSub() {
            if(this.checkDataInput()) {
                this.objAssignment.session.id = this.sessionId;
                this.objAssignment.teacher.id = this.teacherId;
                this.apiAddAssignment(this.objAssignment)
                    .then(response => {
                        console.log('apiAddSub', response);
                        this.searchSub();
                        this.$bvModal.hide('modal-add-one');

                    })
                    .catch(err => {
                        console.log(err.message);
                        if (err.message.includes("404")) {
                            Swal.fire("", "Mã sinh viên không hợp lệ", "error");
                        }
                        if (err.message.includes("400")) {
                            Swal.fire("", "Sinh viên đã được phân công hướng dẫn", "error");
                        }
                    })
                    .finally(() => {
                        // this.commonLoadingPage(false);
                    });
            }


        },
        checkDataInput() {
            if (this.objAssignment.student.code === null || this.objAssignment.student.code.trim() === '') {
                this.commonNotifyVue("Bạn phải nhập mã sinh viên", 'warn');
                return false;
            }

            return true;
        },
    },
    created() {
        this.teacherId = this.$route.query.teacherId;
        this.sessionId = this.$route.query.id;
    },
    mounted() {
        this.searchSub();
    },
    computed: {
        rows() {
            return this.tableData.length;
        }
    },

};
</script>

<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-outline-secondary" @click="goToPrev"><i class="uil uil-arrow-circle-left me-1"></i> Quay lại</button>
                                <label>{{ contactGroupNam }}</label>
                            </div>
                            <div class="col-6 text-end">
                                <button type="button" class="btn btn-primary" @click="prepareAddOne"><i class="uil uil-arrow-circle-up ms-1"></i> Thêm sinh viên hướng dẫn</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">

                        <div class="row mb-3">
                            <div class="col-3">
                                <label>Điều kiện lọc</label>
                                <select v-model="conditionSearch" class="form-control">
                                    <option value=""></option>
                                    <option value="-1">Tất cả</option>
                                    <option value="ID">ID SĐT</option>
                                    <option value="SDT">Số điện thoại</option>
                                </select>
                            </div>
                            <div class="col-2">
                                <label>Giá trị tìm kiếm</label>
                                <div class="row">
                                    <input type="text" v-model="valueSearch" class="form-control"/>

                                </div>
                            </div>
                            <div class="col-3">
                                <label>Thời gian bắt đầu</label>
                                <input type="date" v-model="startDate" class="form-control"/>
                            </div>
                            <div class="col-4">
                                <label>Thời gian kết thúc</label>
                                <div class="row">
                                    <div class="col-8">

                                        <input type="date" v-model="endDate" class="form-control"/>
                                    </div>
                                    <div class="col-4">
                                        <button type="button" class="btn btn-primary d-block" @click="searchSub"><i class="uil uil-search me-2"></i> Tìm kiếm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">

                            <b-table striped bordered :items="tableData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                                <template v-slot:cell(index)=data>
                                    {{ data.index + 1 }}
                                </template>

                                <template v-slot:cell(action)=data>
                                    <ul class="list-inline ">
                                        <li class="list-inline-item">
                                            <a
                                                @click="deleteAssignment(data.item.session.id, data.item.student.id, data.item.teacher.id)"
                                                class="text-secondary"
                                                v-b-tooltip.hover
                                                title="Delete"
                                            >
                                                <i class="uil uil-trash-alt font-size-18"></i>
                                            </a>
                                        </li>

                                    </ul>
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
                <!-- end card -->
            </div>
        </div>
        <!-- end row -->
        <b-modal id="modal-add-one"
                 size="lg"
                 :title="titleModal"
                 title-class="font-18"
                 hide-footer>
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-12">
                        <label>Mã sinh viên</label>
                        <input type="text" maxlength="15" v-model="objAssignment.student.code" :disabled="isEditModalField" class="form-control"/>
                    </div>
                </div>

                <div class="card-footer text-end">
                    <button type="button" class="btn btn-primary" @click="closeModalSub" v-show="!isEditModalField">Bỏ qua</button>
                    <button type="button" class="btn btn-success" @click="addEditOneSub" v-show="!isEditModalField"><i class="uil uil-save me-1"></i> Lưu lại</button>

                </div>
            </div>

        </b-modal>
    </div>
</template>
