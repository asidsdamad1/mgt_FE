<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapActions} from "vuex";

/**
 * Advanced-table component
 */
export default {
    components: {
        DatePicker
    },
    data() {
        return {
            tableData: [],
            objInsertData: {
                phoneNumber: "",
                fromDate: "",
                toDate: "",
                channel: 0
            },

            title: "Customer",
            items: [{
                text: "Tables"
            },
                {
                    text: "Customer",
                    active: true
                }
            ],
            totalRows: 1,
            currentPage: 1,
            perPage: 10,
            pageOptions: [10, 25, 50, 100],
            filter: null,
            filterOn: [],
            sortBy: "age",
            daterange: "",
            sortDesc: false,
            fields: [
                {
                    key: "customerDate",
                    label: 'Ngày',
                    sortable: true
                },
                {
                    key: "channel",
                    label: 'Kênh truyền thông',
                    sortable: true
                },
                {
                    key: "descpription",
                    label: 'Nội dung truyền thông',
                    sortable: true
                },
                {
                    key: "phoneNumber",
                    label: 'Đầu số DV',
                    sortable: true
                },
                {
                    key: "status",
                    label: 'Trạng thái',
                    sortable: true,
                },
            ]
        };
    },
    computed: {
        /**
         * Total no. of records
         */
        rows() {
            return this.tableData.length;
        }
    },
    mounted() {
        // Set the initial number of items
        this.totalRows = this.items.length;
        this.handleGetCustomer();
    },
    methods: {
        /**
         * Search the table data with search input
         */
        ...mapActions('customer', {
            apiGetCustomer: 'apiGetCustomer'
        }),

        onFiltered(filteredItems) {
            // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length;
            this.currentPage = 1;
        },
        handleOkFilter(evt) {
            evt.preventDefault();
        },
        handleResetForm(evt) {
            evt.preventDefault();
        },
        searchCustomer() {
            console.log('search');
            this.handleGetCustomer();
        },
        handleGetCustomer() {
            this.apiGetCustomer(this.objInsertData)
                .then(response => {
                    if (response.err_code === 0) {
                        console.log(response)
                        this.tableData = response.data.dataList
                    } else {

                    }
                })
                .catch(err => {
                    console.log(err)
                })
                .finally({

                })
        }
    },
    middleware: "authentication"
};
</script>

<template>
    <div>
        <!-- Search -->
        <!--        <div class="row">-->
        <!--            <div class="col-12">-->
        <!--                <div class="card">-->
        <!--                    <div class="card-body">-->
        <!--                        <div class="row">-->
        <!--                            <div class="col-3">-->
        <!--                                <label>Thuê bao</label>-->
        <!--                                <input type="text" class="form-control form-control-sm" placeholder="Nhập SĐT"/>-->
        <!--                            </div>-->
        <!--                            <div class="col-3">-->
        <!--                                <label>Date Range</label>-->
        <!--                                <br />-->
        <!--                                <date-picker-->
        <!--                                    v-model="daterange"-->
        <!--                                    range-->
        <!--                                    append-to-body-->
        <!--                                    lang="vi"-->
        <!--                                    confirm-->
        <!--                                    placeholder="Từ ngày - đến ngày"-->
        <!--                                ></date-picker>-->
        <!--                            </div>-->
        <!--                            <div class="col-3">-->
        <!--                                <label>Kênh truyền thông</label>-->
        <!--                                <select class="form-select form-select-sm">-->
        <!--                                    <option>Chọn</option>-->
        <!--                                    <option>Large select</option>-->
        <!--                                    <option>Small select</option>-->
        <!--                                </select>-->
        <!--                            </div>-->
        <!--                            <div class="col-2">-->
        <!--                                <label>&ensp;</label>-->
        <!--                                <button type="button" class="btn btn-sm btn-primary d-block"><i class="uil uil-search me-2"></i> Tìm kiếm</button>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->
        <!-- Table data -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row mb-4">
                            <div class="col-3">
                                <label>Thuê bao</label>
                                <input type="number" class="form-control form-control-sm" placeholder="Nhập SĐT" v-model="objInsertData.phoneNumber"/>
                            </div>
                            <div class="col">
                                <label>Từ ngày</label>
                                <input type="date" value="2019-08-19" class="form-control form-control-sm" v-model="objInsertData.fromDate"/>
                            </div>
                            <div class="col">
                                <label>Đến ngày</label>
                                <input type="date" value="2019-08-19" class="form-control form-control-sm" v-model="objInsertData.toDate"/>
                            </div>
                            <div class="col-3">
                                <label>Kênh truyền thông</label>
                                <select class="form-select form-select-sm" v-model="objInsertData.channel">
                                    <option value="" disabled selected>Chọn</option>
                                    <option value="1">SMS</option>
                                    <option value="2">USSD</option>
                                    <option value="3">IVR</option>
                                    <option value="4">AVB</option>
                                    <option value="5">Zalo</option>
                                </select>
                            </div>
                            <div class="col-2">
                                <label>&ensp;</label>
                                <button @click="searchCustomer" type="button" class="btn btn-sm btn-primary d-block"><i class="uil uil-search me-2"></i> Tìm kiếm</button>
                            </div>
                        </div>
                        <!-- Table -->
                        <div class="table-responsive mb-1">
                            <b-table hover bordered :items="tableData" :fields="fields" responsive="sm" :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                                <template v-slot:cell(status)="data">
                                    <div
                                        class="badge badge-pill bg-soft-success font-size-12"
                                        :class="{
                                              'bg-soft-danger': data.item.status === 'Thất bại',
                                        }"
                                    >
                                        {{ data.item.status }}
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
            </div>
        </div>
    </div>
</template>

<style>
/*.custom-select {*/
/*    border-radius: 1.25rem;*/
/*    padding: 0.5rem;*/
/*    margin-right: 0.5rem;*/
/*}*/

/*.form-control-sm {*/
/*    padding: 0.5rem;*/
/*}*/

/*.form-select-sm {*/
/*    padding: 0.5rem;*/
/*}*/

/*.btn-sm {*/
/*    padding: 0.5rem 1rem;*/
/*}*/
</style>
