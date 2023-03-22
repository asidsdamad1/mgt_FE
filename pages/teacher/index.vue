<script>

import {mapActions} from "vuex";
import Swal from "sweetalert2";
import AddListSub from "@/components/contact/modal/AddListSub";
export default {
    name: "subscriber",
    components: {AddListSub},
    data(){
        return{
            items: [{
                text: "Forms",
                href: "/"
            },
                {
                    text: "Form File Upload",
                    active: true
                }
            ],
            conditionSearch:'',
            valueSearch:'',
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
                    thStyle: { width: "3%" },
                },
                {
                    key: "id",
                    label: "ID Tập TB",
                    sortable: true,
                    thStyle: { width: "10%" },
                },
                {
                    key: "name",
                    label: 'Tên Tệp',
                    sortable: true,
                    thStyle: { width: "20%" },
                },
                {
                    key: "count_sub",
                    label: 'Số lượng thuê bao',
                    sortable: true,
                    thStyle: { width: "10%" },
                },
                {
                    key: "user_name",
                    label: 'Tài khoản',
                    sortable: true,
                    thStyle: { width: "10%" },
                },
                {
                    key: "description",
                    label: 'Thông tin khác',
                    sortable: true,
                    thStyle: { width: "20%" },
                },
                {
                    key: "action",
                    label: 'Thao tác',
                    thStyle: { width: "10%"},
                    tdClass: 'text-center',
                },
            ],
            tableData: [],
            objGetListTeacher: {
                id: 0
            },
        }
    },
    created() {

    },
    computed:{
        rows() {
            return this.tableData.length;
        }
    },
    mounted() {
        // this.searchContact();
        this.handleGetListTeacher();
    },
    methods: {
        ...mapActions('teachers', {
            apiGetListTeacher: 'apiGetListTeacher',
        }),
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
        // searchContact() {
        //     let objInput={conditionSearch:this.conditionSearch,valueSearch:this.valueSearch};
        //     console.log('apiGetListContactGroup', objInput);
        //     if(this.conditionSearch !== ''){
        //         if(this.valueSearch.trim()===''){
        //             this.commonNotifyVue('Bạn phải nhập từ khóa tìm kiếm','warn');
        //             return;
        //         }
        //     }
        //     this.apiGetListContactGroup(objInput)
        //         .then(response => {
        //
        //             if (response.err_code === 0) {
        //                 let data = response['data'];
        //                 this.tableData = data;
        //                 console.log('apiGetListContactGroup', data);
        //             } else {
        //                 this.commonWarningVue(response.err_message);
        //             }
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         })
        //         .finally(() => {
        //             // this.commonLoadingPage(false);
        //         });
        //
        // },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        deleteFileSub(id) {
            let objDel ={id:id};
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
                    this.apiDeleteContactGroup(objDel)
                        .then(response => {
                            console.log('apiDeleteContactGroup', response);
                            if (response.err_code === 0) {
                                Swal.fire("", response.err_message, "success");
                                this.searchContact();
                            } else {
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

        },
        changeContactGroupStatus(id,oldStatus){
            let status=-1;
            if(oldStatus===1)
                status =0;
            if(oldStatus===0)
                status=1;
            let objInput ={id:id,status:status};
            this.apiChangeContactGroupStatus (objInput)
                .then(response => {
                    console.log('apiChangeContactGroupStatus', response);
                    if (response.err_code === 0) {
                        Swal.fire("", response.err_message, "success");
                        this.searchContact();
                        // this.searchContact();
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
        handleModalCall () {
            this.searchContact();
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
                        <button type="button" class="btn btn-success" v-b-modal.modal-add-file-tb><i class="uil uil-plus me-1"></i> Tải tập TB</button>
                    </div>
                </div>

            </div>
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-5">
                        <label>Điều kiện lọc</label>
                        <select v-model="conditionSearch" class="form-control">
                            <option value=""></option>
                            <option value="-1">Tất cả</option>
                            <option value="ID">ID Tập TB</option>
                            <option value="NAME">Tên tệp</option>
                            <option value="SDT">Số điện thoại</option>
                        </select>
                        <h1>Teacher</h1>
                    </div>
                    <div class="col-7">
                        <label>Từ khóa tìm kiếm</label>
                        <div class="row">
                            <div class="col-10">
                                <input type="text" v-model="valueSearch" class="form-control"/>
                            </div>
                            <div class="col-2">
                                <button type="button" class="btn btn-primary d-block" @click="searchContact"><i class="uil uil-search me-2"></i> Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <b-table striped bordered :items="tableData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                        <template v-slot:cell(index)="data">
                            {{ data.index + 1 }}
                        </template>
                        <template v-slot:cell(action) = data>
                            <ul class="list-inline mb-0">
                                <nuxt-link title="Xem tập TB"
                                           :to="{ path: '/contact/view/viewinfo', query: { id: data.item.id, name: data.item.name }}"
                                           class="text-secondary p-2"
                                ><i class="uil uil-eye font-size-18"></i>
                                </nuxt-link>
                                <nuxt-link title="Sửa tập TB"
                                           :to="{path:'/contact/edit/editcontactgroup',query: { id: data.item.id, name: data.item.name }}"
                                           class="text-secondary pe-2"
                                ><i class="uil uil-pen font-size-18"></i>
                                </nuxt-link>
                                <li class="list-inline-item">
                                    <a
                                        @click="deleteFileSub(data.item.id)"
                                        class="text-secondary"
                                        v-b-tooltip.hover
                                        title="Delete"
                                    >
                                        <i class="uil uil-trash-alt font-size-18"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" @click="changeContactGroupStatus(data.item.id,data.item.status)" v-model="data.item.status===1">
                                        <label class="form-check-label" for="flexSwitchCheckChecked"></label>
                                    </div>
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
        <add-list-sub @handleModalCall="handleModalCall" :actionType="1" :contactGroupIdEdit="-1"></add-list-sub>
    </div>

</template>


