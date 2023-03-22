<script>
import {mapActions} from "vuex";
import Swal from "sweetalert2";
import MdFilter from "@/components/campaign/modal/MdFilter";
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";

/**
 * Advanced-table component
 */
export default {
    data() {
        return {
            title: "Advanced",
            items: [{
                text: "Tables"
            },
                {
                    text: "Advanced",
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
            sortDesc: false,
            searchOptionsStatus:[
                {name:'Đã duyệt',value:'APPROVED'},
                {name:'Chưa duyệt',value:'PENDING'},
                {name:'Đang chạy',value:'ACTIVE'},
                {name:'Tạm dừng',value:'STOP'},
                {name:'Draft',value:'DRAFT'}],
            searchOptionsStatusSelected:[],
            searchOptionsGroup:[],
            searchOptionsGroupSelected:[],
            searchCampaignName:'',
            searchCampaignTag:'',
            searchCampaignCode:'',
            searchRunTimeQc:'',
            searchCreatedTimeQc:'',
            filterOptionsChannelSelected:[],
            filterOptionsChannels:[],
            filterOptionsCampaignTypeSelected:[],
            filterOptionsCampaignType:[],
            filterOptionsCampaignTypeRunSelected:[],
            filterOptionsCampaignTypeRun:[],
            filterOptionsCampaignTimeQC:[],
            filterOptionsCampaignTimeQCSelected:[],
            filterOptionsCampaignTimeCreate:[],
            filterOptionsCampaignTimeCreateSelected:[],
            payloadSearch: {
                name:'',
                managementUnit: '',
                timeAds: '',
                timeCreate: '',
                campaignStatus: '',
                tag:'',
                campaignId:''
            },
            fields: [
                {
                    label: "STT",
                    sortable: true
                },
                {
                    key: 'campaignCode',
                    label: "Mã chiến dịch",
                    sortable: true
                },
                {
                    key: 'name',
                    label: "Tên chiến dịch",
                    sortable: true
                },
                {
                    key: 'managementUnit',
                    label: "Đơn vị quản lý",
                    sortable: true
                },
                {
                    key: 'campaignStatusName',
                    label: "Trạng thái",
                    sortable: true
                },
                {
                    key: 'numberBroad',
                    label: "Số lượng phát",
                    sortable: true
                },
                {
                    key: 'numberTarget',
                    label: "Mục tiêu",
                    sortable: true
                },
                {
                    key: 'startTime',
                    label: "Thời gian bắt đầu",
                    sortable: true
                },
                {
                    key: 'endTime',
                    label: "Thời gian kết thúc",
                    sortable: true
                },
                {
                    key: 'createdAt',
                    label: "Ngày tạo",
                    sortable: true
                },
                {
                    key: 'campaignType',
                    label: "Loại chiến dịch",
                    sortable: false
                },
                {
                    key: 'campaignRunType',
                    label: "Hình thức chạy",
                    sortable: false
                }
            ],
            tableData: [
                {
                    name: 'Lucinda Stickley',
                    position: 'Data Coordiator',
                    office: 'Sirnarasa',
                    id: 31,
                    createdAt: '2018/07/29',
                    startTime: '2018/07/29',
                    endTime: '2018/07/29',
                    salary: '$13600'
                }
            ],
            campaignSelected:{},
            isFilter:false
        };
    },
    components: {MdFilter,
        Multiselect},
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
        this.initData();
        this.handleGetListCampaign();
    },
    methods: {
        /**
         * Search the table data with search input
         */
        ...mapActions('campaign/manage', {
            apiGetListCampaign: 'apiGetListCampaign',
            apiCampaignActive: 'apiCampaignActive',
            apiStartCampaign: 'apiStartCampaign'
        }),
        ...mapActions('admin/group', {
            apiGetListGroup:'apiGetListAgency'
        }),
        initData(){
            let objInput={status:-1};
            this.apiGetListGroup(objInput)
                .then(response => {
                    console.log('init dữ liệu', response);
                    if (response.err_code === 0) {
                        let data = response['data'];
                        this.searchOptionsGroup.push(...data);
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
        handleGetListCampaign() {

            let managementTemp='';
            for(let i=0;i<this.searchOptionsGroupSelected.length;i++){
                let obj = this.searchOptionsGroupSelected[i];
                if(obj.id !== '-1'){
                    managementTemp +=','+obj.id;
                }
            }
            let managementUnitValue = ''
            if(managementTemp!=='')
                managementUnitValue='('+managementTemp.substring(1)+')';


            let statusTemp='';
            for(let i=0;i<this.searchOptionsStatusSelected.length;i++){
                let obj = this.searchOptionsStatusSelected[i];
                if(obj.value !== '-1'){
                    statusTemp +=','+obj.value;
                }
            }
            let statuss = '' ;
            if(statusTemp !=='')
                statuss='('+statusTemp.substring(1)+')';


            let conditionSearch ={
                name: this.searchCampaignName,
                managementUnit : managementUnitValue,
                timeAds: this.searchRunTimeQc,
                timeCreate: this.searchCreatedTimeQc,
                campaignStatus: statuss,
                tag: this.searchCampaignTag,
                campaignId:this.searchCampaignCode
            }
            this.payloadSearch =conditionSearch;
            this.apiGetListCampaign(this.payloadSearch)
                .then(response => {
                    console.log('handleGetListCampaign: ', response);
                    if (response.err_code === 0) {
                        console.log('handleGetListCampaign: ', response.data);
                        this.tableData = response.data
                    }
                })
                .catch(err => {
                    console.log(err)
                })
                .finally({})
        },
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
        handleClickCampaignCreate() {
            window.open('campaign/create', '_blank');
        },
        handleActionApprove(item) {
            console.log('item', item);
            if(!item.hasOwnProperty('id')){
                this.commonNotifyVue('Bạn phải chọn 1 chiến dịch trong danh sách','warn');
            }else{
                Swal.fire({
                    title: "Cảnh báo",
                    text: "Chắc chắn duyệt chiến dịch này?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#34c38f",
                    cancelButtonColor: "#f46a6a",
                    confirmButtonText: "Tôi chắc chắn",
                    cancelButtonText: "Không"
                }).then(result => {
                    if (result.value) {
                        this.apiCampaignActive({id: item.id})
                            .then(response => {
                                console.log('handleActionApprove', response);
                                if (response.err_code === 0) {
                                    Swal.fire("", response.err_message, "success");
                                } else {
                                    Swal.fire("", response.err_message, "warning");
                                }
                            })
                            .catch(err => {
                                console.log(err);
                            })
                            .finally(() => {
                                // this.commonLoadingPage(false);
                            });
                    }
                });
            }

        },
        handleActionRun(item) {
            console.log('item', item);
            if(!item.hasOwnProperty('id')){
                this.commonNotifyVue('Bạn phải chọn 1 chiến dịch trong danh sách','warn');
            }else{
                Swal.fire({
                    title: "Cảnh báo",
                    text: "Chắc chắn chạy chiến dịch này?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#34c38f",
                    cancelButtonColor: "#f46a6a",
                    confirmButtonText: "Tôi chắc chắn",
                    cancelButtonText: "Không"
                }).then(result => {
                    if (result.value) {
                        this.apiStartCampaign({id: item.id})
                            .then(response => {
                                console.log('apiUploadVideoDone', response);
                                if (response.err_code === 0) {
                                    this.$emit("handleCampaignCallback", response.data);
                                    Swal.fire("", response.err_message, "success");
                                } else {
                                    Swal.fire("", response.err_message, "warning");
                                }
                            })
                            .catch(err => {
                                console.log(err);
                            })
                            .finally(() => {
                                // this.commonLoadingPage(false);
                            });
                    }
                });
            }

        },
        handleActionScript(item) {
            console.log('handleActionScript',item);
        },
        handleSearchFilter(conditionSearch){
            console.log('handleSearchFilter',conditionSearch);
            this.payloadSearch = conditionSearch;
            this.handleGetListCampaign();
        },
        styleRow(item) {

            if (item.selected) {
                return ['b-table-row-selected', 'table-secondary'];
            }
            return [];
        },
        selectedRow(items) {
            this.campaignSelected = items[0];
        },
        onchangeFilter(){

        }
    },
    middleware: "authentication"
};
</script>
<style>
p {
    margin-bottom: 0;
}

.b-table-row-selected {
    font-weight:bold;
}
</style>

<template>
    <div>
        <!-- Search -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <label>Mã chiến dịch</label>
                                <input type="text" v-model="searchCampaignCode" class="form-control"/>
                            </div>
                            <div class="col">
                                <label>Tên chiến dịch</label>
                                <input type="text" v-model="searchCampaignName" class="form-control"/>
                            </div>
                            <div class="col">
                                <label>Tag chiến dịch</label>
                                <input type="text" v-model="searchCampaignTag" class="form-control"/>
                            </div>
                            <div class="col">
                                <label>Đơn vị quản lý</label>
                                <multiselect v-model="searchOptionsGroupSelected" :options="searchOptionsGroup" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Chọn đơn vị quản lý" label="name" track-by="name">

                                </multiselect>
                            </div>
                            <div class="col">
                                <label>Thời gian bắt đầu</label>
                                <input type="date" v-model="searchRunTimeQc" class="form-control"/>
                            </div>
                            <div class="col">
                                <label>Thời gian tạo</label>
                                <input type="date" v-model="searchCreatedTimeQc" class="form-control"/>
                            </div>
                            <div class="col">
                                <label>Trạng thái</label>
                                <multiselect v-model="searchOptionsStatusSelected" :options="searchOptionsStatus" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Chọn trạng thái" label="name" track-by="name">

                                </multiselect>
                            </div>
                            <div class="col-2">
                                <div class="row mb-3">
                                    <!-- Start search -->
                                    <div class="col-6 ">
                                        <label class="d-block">&nbsp;</label>
                                        <button type="button" class="btn btn-primary " @click="handleGetListCampaign">
                                            <i class="uil uil-search me-2"></i> Tìm kiếm
                                        </button>
                                    </div>

                                    <!-- End search -->
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <input class="form-check-input" id="isFilterCheck"  v-model="isFilter" type="checkbox"/>
                                <label class="form-check-label" for="isFilterCheck">Lọc</label>
                            </div>
                        </div>
                        <div class="row" v-show="isFilter">

                                <div class="col">
                                    <label>Kênh</label>
                                    <multiselect v-model="filterOptionsChannelSelected" :options="filterOptionsChannels" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true"  label="name" track-by="name">

                                    </multiselect>
                                </div>
                                <div class="col">
                                    <label>Thời gian bắt đầu</label>
                                    <multiselect v-model="filterOptionsCampaignTimeQCSelected" :options="filterOptionsCampaignTimeQC" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" label="name" track-by="name">

                                    </multiselect>
                                </div>
                                <div class="col">
                                    <label>Thời gian tạo</label>
                                    <multiselect v-model="filterOptionsCampaignTimeCreateSelected" :options="filterOptionsCampaignTimeCreate" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" label="name" track-by="name">

                                    </multiselect>
                                </div>
                                <div class="col">
                                    <label>Loại chiến dịch</label>
                                    <multiselect v-model="filterOptionsCampaignTypeSelected" :options="filterOptionsCampaignType" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" label="name" track-by="name">

                                    </multiselect>
                                </div>
                                <div class="col">
                                    <label>Hình thức chiến dịch</label>
                                    <multiselect v-model="filterOptionsCampaignTypeRunSelected" :options="filterOptionsCampaignTypeRun" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true"  label="name" track-by="name">

                                    </multiselect>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Table data -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-5">
                                <button type="button" class="btn btn-info" @click="handleClickCampaignCreate">
                                    <i class="uil uil-plus-square me-2"></i> Thêm mới
                                </button>
                                <button type="button" class="btn btn-info">
                                    <i class="uil uil-eye font-size-18"></i>
                                    Xem</button>
                                <button type="button" class="btn btn-info">
                                    <i class="uil uil-pen font-size-18"></i>
                                    Sửa</button>
                                <button type="button" class="btn btn-danger">
                                    <i class="uil uil-trash me-1"></i>
                                    Xóa</button>
                                <button type="button" @click="handleActionApprove(campaignSelected)" class="btn btn-success">
                                    <i class="uil uil-parcel"></i>
                                    Duyệt</button>
                                <button type="button" @click="handleActionRun(campaignSelected)" class="btn btn-warning"   >
                                    <i class="uil uil-toggle-on"></i>
                                    Chạy chiến dịch</button>
                                <button type="button" @click="handleActionScript(campaignSelected)" class="btn btn-primary">
                                    <i class="uil uil-bright"></i>Kịch bản
                                </button>
                            </div>

                        </div>
                        <div class="row mb-3">
                            <!-- Start filter -->
                            <div class="col-3 text-left">
                                <input type="text" class="form-control" placeholder="Tìm kiếm nhanh..." v-model="filter"/>
                            </div>
                            <!-- End filter -->
                        </div>


                        <!-- Table -->
                        <div class="table-responsive mb-1">
                            <b-table
                                selectable
                                @row-selected="selectedRow"
                                select-mode="single"
                                striped bordered responsive="sm"
                                :items="tableData"
                                :fields="fields"
                                :per-page="perPage"
                                :current-page="currentPage"
                                :sort-by.sync="sortBy"
                                :sort-desc.sync="sortDesc"
                                :filter="filter"
                                :filter-included-fields="filterOn"
                                @filtered="onFiltered"
                                :tbody-tr-class="styleRow"
                            >

                            </b-table>
                        </div>
                        <div class="row">
                            <div class="col-6 d-inline-flex">
                                <label class="d-inline-flex align-items-center mb-0 pb-0">
                                    Hiển thị&nbsp;&nbsp;
                                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;&nbsp;dòng
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
        <md-filter @handleSearchFilter="handleSearchFilter" :searchGroup="searchOptionsGroupSelected"
                   :searchStatus="searchOptionsStatusSelected" :searchRunTimce="searchRunTimeQc"
                   :searchCreate="searchCreatedTimeQc" :searchCampaigName="searchCampaignName"></md-filter>
        </div>
    </div>
</template>
