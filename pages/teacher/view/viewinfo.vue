<script>
import {
    productData
} from "../data-products";
import {mapActions} from "vuex";

/**
 * Product-detail component
 */
export default {
    head() {
        return {
            title: `Xem chi tiết tệp TB`
        };
    },
    asyncData({
                  params
              }) {

    },
    data() {
        return {

            title: "Chi tiết tệp thuê bao",
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
                }
            ],
            tableData: []
        };
    },
    methods:{
        ...mapActions('contact/contact', {
            apiGetListContact: 'apiGetListContact'
        }),
        goToPrev() {
            this.$router.go(-1);
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
},

    middleware: "authentication",
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
                                <template v-slot:cell(action) = data>

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
    </div>
</template>
