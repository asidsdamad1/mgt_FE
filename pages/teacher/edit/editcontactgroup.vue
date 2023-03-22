<script>


import "vue2-dropzone/dist/vue2Dropzone.min.css";
import Swal from "sweetalert2";
import {mapActions} from "vuex";
import AddListSub from "@/components/contact/modal/AddListSub";

/**
 * Product-detail component
 */
export default {
    head() {
        return {

            title: `Sửa tệp TB`
        };
    },
    components: {AddListSub},
    data() {
        return {
            titleModal: '',
            isEditModalField: false,
            isViewModalFileField: false,
            contactGroupNam:'',
            contactGroupId:'',
            conditionSearch:'',
            valueSearch:'',
            startDate:'',
            endDate:'',

            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "age",
            sortDesc: false,
            contactForModal:{
                modalId:'',
                modalMsisdn:'',
                modalFullname:'',
                modalAge:0,
                modalSex:-1,
                modalAddress:'',
                modalArpu:'',
                modalSubType:-1,
                modalDevice:'',
                modalStatus:-1,
                modalBehavior:'',
                modalAgeSub:0,
                modalContactGroupId:this.contactGroupId,
                modalContactGroupNames:''
            },
            fields: [
            {
                key: "stt",
                label: "STT",
                sortable: true,
                thStyle: { width: "3%" },
            },
            {
                key: "id",
                label: "ID SĐT",
                sortable: true,
                thStyle: { width: "10%" },
            },
            {
                key: "msisdn",
                label: 'SĐT',
                sortable: true,
                thStyle: { width: "20%" },
            },
            {
                key: "userName",
                label: 'Tài khoản',
                sortable: true,
                thStyle: { width: "10%" },
            },
            {
                key: "createDate",
                label: 'Thời gian tạo',
                sortable: true,
                thStyle: { width: "10%" },
            },
            {
                key: "updatedDate",
                label: 'Thời gian cập nhật',
                sortable: true,
                thStyle: { width: "20%" },
            },
                {
                    key: "action",
                    label: 'Thao tác',
                    thStyle: { width: "10%"},
                    tdClass: 'text-center',
                }
        ],
            tableData: []

        }
    },
    middleware: "authentication",

    methods: {
        ...mapActions('contact/contact', {
            apiGetListContact: 'apiGetListContact',
            apiAddContact:'apiAddContact',
            apiEditContact:'apiEditContact',
            apiGetContactById:'apiGetContactById',
            apiDeleteContact:'apiDeleteContact',
            apiUpdateContactGroupName:'apiUpdateContactGroupName'
        }),
        prepareView(id) {
            this.isEditModalField = true;
            this.isViewModalFileField = true;
            this.titleModal = 'Xem thông tin TB';
            this.$bvModal.show('modal-add-one-tb');
            let objInput ={contactId:id}
            this.apiGetContactById(objInput)
                .then(response => {
                    let data = response['data'];
                    this.contactForModal = data[0];
                    console.log('apiGetContactById', data);
                    if (response.err_code === 0) {
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
        prepareAddOne() {
            this.isEditModalField = false;
            this.isViewModalFileField = false;
            this.titleModal = 'Tải đơn liên hệ vào tập TB';
            this.$bvModal.show('modal-add-one-tb');
            this.contactForModal = {modalId:'',
                modalMsisdn:'',
                modalFullname:'',
                modalAge:0,
                modalSex:-1,
                modalAddress:'',
                modalArpu:'',
                modalSubType:-1,
                modalDevice:'',
                modalStatus:-1,
                modalBehavior:'',
                modalAgeSub:0,
                modalContactGroupId:this.contactGroupId,
                modalContactGroupNames:''}
        },
        prepareEditOne(id) {
            this.isEditModalField = false;
            this.isViewModalFileField = true;
            this.titleModal = 'Sửa thông tin TB';
            this.$bvModal.show('modal-add-one-tb');
            let objInput ={contactId:id}
            this.apiGetContactById(objInput)
                .then(response => {
                    let data = response['data'];
                    this.contactForModal = data[0];
                    console.log('apiGetContactById', data);
                    if (response.err_code === 0) {
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
        updateContactGroupName() {
            if(this.contactGroupNam===null || this.contactGroupNam.trim()===''){
                this.commonNotifyVue('Bạn phải nhập tên tệp');
            }else{
                let objInput={id:this.contactGroupId, contactGroupName:this.contactGroupNam};
                console.log('updateContactGroupName',objInput)
                this.apiUpdateContactGroupName(objInput)
                    .then(response => {
                        let data = response['data'];
                        console.log('updateContactGroupName', data);
                        if (response.err_code === 0) {
                            this.commonNotifyVue('Cập nhật tên tệp thành công','info');
                        } else {
                            this.commonWarningVue(response.err_message);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
                    .finally(() => {
                        this.commonLoadingPage(false);
                    });
            }
        },
        closeModalSub() {
            this.$bvModal.hide('modal-add-one-tb');
        },
        addEditOneSub() {
            if(this.contactForModal.modalMsisdn === null || this.contactForModal.modalMsisdn.trim() ===''){
                this.commonNotifyVue("Bạn phải nhập số thuê bao",'warn');
                return;
            }
            if(this.titleModal ==='Sửa thông tin TB'){
                this.contactForModal.modalContactGroupId=this.contactForModal.contactGroupId;
                this.apiEditContact(this.contactForModal)
                    .then(response => {
                        console.log('apiEditContact', response);
                        if (response.err_code === 0) {
                            Swal.fire("", response.err_message, "success");
                            this.searchSub();
                            this.$bvModal.hide('modal-add-one-tb');
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
            }else{
                this.apiAddContact(this.contactForModal)
                    .then(response => {
                        console.log('apiAddContact', response);
                        if (response.err_code === 0) {
                            this.searchSub();
                            this.$bvModal.hide('modal-add-one-tb');
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
            }
        },
        closeModalListSub() {
            this.$bvModal.hide('modal-add-file-tb');
        },
        goToPrev() {
            this.$router.go(-1);
        },
        deleteSub(id) {
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
                        let objDel ={id:id};
                        this.apiDeleteContact(objDel)
                            .then(response => {
                                console.log('apiDeleteContact', response);
                                if (response.err_code === 0) {
                                    Swal.fire("", response.err_message, "success");
                                    this.searchSub();
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
        },
        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        searchSub(){
            let objInput={conditionSearch:this.conditionSearch,valueSearch:this.valueSearch,startDate:this.startDate,endDate:this.endDate,contactGroupId:this.contactGroupId};

            console.log('apiGetListContact', objInput);

            this.apiGetListContact(objInput)
                .then(response => {

                    if (response.err_code === 0) {
                        let data = response['data'];
                        this.tableData = data;
                        console.log('apiGetListContact', data);
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
        handleModalCall(){
            this.searchSub();
        }
    },
    created() {
        this.contactGroupNam = this.$route.query.name;
        this.contactGroupId = this.$route.query.id;
    },
    mounted() {
        this.searchSub();
    },
    computed:{
        rows() {
            return this.tableData.length;
        }
    }
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
                                <input type="text" v-model="contactGroupNam"  style="width: 200px">
                                <button title="Sửa tên tệp" @click="updateContactGroupName"
                                        class="btn btn-gray btn-block view-cart"
                                ><i class="uil uil-pen me-1"></i>
                                </button>
                            </div>
                            <div class="col-6 text-end">
                                <button type="button" class="btn btn-success" v-b-modal.modal-add-file-tb><i class="uil uil-plus me-1"></i> Thêm danh sách liên hệ vào tập TB</button>
                                <button type="button" class="btn btn-primary" @click="prepareAddOne"><i class="uil uil-arrow-circle-up ms-1"></i> Tải đơn liên hệ vào tập TB</button>
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
                                <label>Từ khóa tìm kiếm</label>
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
                                        <button type="button" @click="searchSub" class="btn btn-primary d-block"><i class="uil uil-search me-2"></i> Tìm kiếm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <b-table striped bordered :items="tableData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                                <template v-slot:cell(action) = data>
                                    <button title="Xem TB" @click="prepareView(data.item.id)"
                                            class="btn btn-gray btn-block view-cart"
                                    ><i class="uil uil-eye me-1"></i>
                                    </button>

                                    <button title="Sửa TB" @click="prepareEditOne(data.item.id)"
                                            class="btn btn-gray btn-block view-cart"
                                    ><i class="uil uil-pen me-1"></i>
                                    </button>
                                    <button title="Xóa TB" @click="deleteSub(data.item.id)"
                                            class="btn btn-gray btn-block view-cart"
                                    ><i class="uil uil-trash me-1"></i>
                                    </button>
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

        <b-modal id="modal-add-one-tb"
                 size="lg"
                 :title="titleModal"
                 title-class="font-18"
                 hide-footer>
            <div class="card-body">

                <div class="row mb-1">
                    <div class="col-12">
                        <label>
                            Thông tin nhân khẩu học
                        </label>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-6">
                        <label>Họ tên</label>
                        <input type="text" maxlength="20" v-model="contactForModal.modalFullname" :disabled="isEditModalField" class="form-control"/>
                    </div>
                    <div class="col-6">
                        <label>Tuổi</label>
                        <input type="text" maxlength="3" v-model="contactForModal.modalAge" :disabled="isEditModalField" class="form-control"/>
                    </div>

                </div>
                <div class="row mb-3">
                    <div class="col-6">
                        <label>Giới tính</label>
                        <select :disabled="isEditModalField" v-model="contactForModal.modalSex" class="form-control">
                            <option value="1">Nam</option>
                            <option value="2">Nữ</option>
                            <option value="3">Không xác định</option>
                        </select>

                    </div>
                    <div class="col-6">
                        <label>Địa chỉ</label>
                        <input type="text" maxlength="150" :disabled="isEditModalField" v-model="contactForModal.modalAddress" class="form-control"/>
                    </div>
                </div>

                <hr>
                <div class="row mb-1">
                    <div class="col-12">
                        <label>
                            Thông tin hành vi viễn thông
                        </label>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-4">
                        <label>
                            Số điện thoại*
                        </label>
                        <input type="text" maxlength="15" v-model="contactForModal.modalMsisdn" :disabled="isEditModalField" class="form-control"/>

                    </div>
                    <div class="col-4">
                        <label>
                            Loại thuê bao
                        </label>
                        <select v-model="contactForModal.modalSubType" :disabled="isEditModalField" class="form-select">
                            <option value="0">Trả trước</option>
                            <option value="1">Trả sau</option>
                        </select>

                    </div>
                    <div class="col-4">
                        <label>Tuổi thuê bao</label>
                        <input type="text" maxlength="3" v-model="contactForModal.modalAgeSub" :disabled="isEditModalField" class="form-control"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-4">
                        <label>ARPU</label>
                        <input type="text" maxlength="20" v-model="contactForModal.modalArpu" :disabled="isEditModalField" class="form-control"/>
                    </div>
                    <div class="col-4">
                        <label>Thiết bị sử dụng</label>
                        <input type="text" maxlength="20" v-model="contactForModal.modalDevice" :disabled="isEditModalField" class="form-control"/>
                    </div>
                    <div class="col-4">
                        <label>Trạng thái tài khoản</label>
                        <select v-model="contactForModal.modalStatus" class="form-control" :disabled="isEditModalField">
                            <option value="1">Hoạt động</option>
                            <option value="0">Tạm dừng</option>
                        </select>

                    </div>
                </div>

                <div v-show="isViewModalFileField" class="row mb-3">
                    <div class="col-12">
                        <label>Thuộc tập thuê bao</label>
                        <input type="text" v-model="contactForModal.modalContactGroupNames" disabled="true" class="form-control"/>
                    </div>

                </div>

                <div class="row mb-3">
                    <div class="col-12">
                        <label>
                            Hành vi, sở thích
                        </label>
                        <input type="text" maxlength="200" v-model="contactForModal.modalBehavior" :disabled="isEditModalField" class="form-control"/>

                    </div>
                </div>
                <div class="card-footer text-end">
                    <button type="button" class="btn btn-primary" @click="closeModalSub" v-show="!isEditModalField">Bỏ qua</button>
                    <button type="button" class="btn btn-success" @click="addEditOneSub" v-show="!isEditModalField"><i class="uil uil-save me-1"></i> Lưu lại</button>

                </div>
            </div>

        </b-modal>
        <add-list-sub @handleModalCall="handleModalCall" :actionType="2" :contactGroupIdEdit="contactGroupId"></add-list-sub>
    </div>
</template>
