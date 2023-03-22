<script>
import CreateEditRole from "@/components/admin/modal/CreateEditRole";
import {mapActions} from "vuex";
import Swal from "sweetalert2";
export default {
    name: "permission-groups",
    components:{
        CreateEditRole
    },
    mounted() {
        this.getListRole();
    },
    methods: {
        ...mapActions('admin/role', {
            apiGetListRole: 'apiGetListRole',
            apiDeleteRole: 'apiDeleteRole'
        }),
        getListRole(){
            let objInput= {id: -1};
            this.apiGetListRole(objInput)
                .then(response => {
                    console.log('getListRole', response);
                    if (response.err_code === 0) {
                        let data = response['data'];
                        this.tableData = data;
                        console.log('init dữ liệu', data);
                    } else {
                        this.commonWarningVue(response.err_message);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    // this.commonLoadingPage(false);
                });
        },
        handleAfterAction(){
            this.getListRole();
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        prepareAddRoleGroup(){
            this.actionType=1;
            this.$bvModal.show('modal-add-usergroup');
        },
        prepareEditRoleGroup(roleId){
            this.roleEditId = roleId;
            this.actionType=2;
            this.$bvModal.show('modal-add-usergroup');
        },
        viewRoleGroup(roleId){
            this.actionType=3;
            this.roleEditId = roleId;
            this.$bvModal.show('modal-add-usergroup');
        },
        deleteRoleGroup(val){
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
                if(result.value){
                    let objDel ={id:val};
                    this.apiDeleteRole(objDel)
                        .then(response => {
                            console.log('apiDeleteRole', response);
                            if (response.err_code === 0) {
                                Swal.fire("", response.err_message, "success");
                                this.getListRole();
                            } else {
                                this.commonWarningVue(response.err_message);
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        })
                        .finally(() => {
                            // this.commonLoadingPage(false);
                        });
                    if (result.value) {
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    }
                }

            });
        }
    },
    computed: {
        /**
         * Total no. of records
         */
        rows() {
            return this.tableData.length;
        }
    },data() {
        return {
            fields: [
                {
                    key: "index",
                    label: "STT",
                    sortable: true,
                    thStyle: {width: "3%"},
                },
                {
                    key: "name",
                    label: "Tên nhóm quyền",
                    sortable: true,
                    thStyle: {width: "20%"},
                },
                {
                    key: "description",
                    label: "Mô tả",
                    sortable: true,
                    thStyle: {width: "20%"},
                },
                {
                    key: "createdBy",
                    label: 'Người tạo',
                    sortable: true,
                    thStyle: {width: "20%"},
                },
                {
                    key: "createdDate",
                    label: 'Ngày tạo',
                    sortable: true,
                    thStyle: {width: "10%"},
                },
                {
                    key: "action",
                    label: 'Thao tác',
                    thStyle: {width: "10%"},
                    tdClass: 'text-center',
                },
            ],
            tableData: [],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "name",
            sortDesc: false,
            actionType:-1,
            roleEditId:-1
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
                        <button type="button" class="btn btn-success" @click="prepareAddRoleGroup"><i class="uil uil-plus me-1"></i> Tạo mới nhóm quyền</button>
                    </div>

                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive mb-1">
                    <b-table striped bordered :items="tableData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                        <template v-slot:cell(index)="data">
                            {{ data.index + 1 }}
                        </template>
                        <template v-slot:cell(action)=data>
                            <ul class="list-inline mb-0">
                                <a title="Xem nhóm quyền"
                                   @click="viewRoleGroup(data.item.id)"
                                   class="text-secondary p-2"
                                ><i class="uil uil-eye font-size-18"></i>
                                </a>
                                <a title="Sửa nhóm quyền"
                                   @click="prepareEditRoleGroup(data.item.id)"
                                   class="text-secondary pe-2"
                                ><i class="uil uil-pen font-size-18"></i>
                                </a>
                                <li class="list-inline-item">
                                    <a
                                        @click="deleteRoleGroup(data.item.id)"
                                        class="text-secondary"
                                        v-b-tooltip.hover
                                        title="Xóa nhóm quyền"
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
        <create-edit-role @handleAfterAction="handleAfterAction" :actionType="actionType" :roleEditId="roleEditId"></create-edit-role>
    </div>
</template>



<style scoped>

</style>
