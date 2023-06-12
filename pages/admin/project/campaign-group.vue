<!--<script>-->
<!--import {mapActions} from "vuex";-->
<!--import Swal from "sweetalert2";-->
<!--import * as XLSX from 'xlsx'-->


<!--/**-->
<!-- * Advanced-table component-->
<!-- */-->
<!--export default {-->
<!--    name: "campaign-group",-->
<!--    data() {-->
<!--        return {-->
<!--            reportName: 'campaign-group',-->
<!--            typeChart: 0,-->
<!--            objDataChart: null,-->
<!--            showDataChart: false,-->
<!--            tableRowSelected: null,-->
<!--            tableDataFake: [-->
<!--                {-->
<!--                    campaignId: '#12345',-->
<!--                    nameCampaign: 'Chiến dịch 1',-->
<!--                    CampaignTypeList: [-->
<!--                        {-->
<!--                            typeReport: 'Chính thức',-->
<!--                            numberRequets: '234',-->
<!--                            startJourney: '234',-->
<!--                            contactJoinedJourney: '234',-->
<!--                            inJourney: '234',-->
<!--                            endJourney: '234',-->
<!--                        },-->
<!--                        {-->
<!--                            typeReport: 'Tổng hợp',-->
<!--                            campaignId: '#12345',-->
<!--                            numberRequets: '123',-->
<!--                            startJourney: '234',-->
<!--                            contactJoinedJourney: '234',-->
<!--                            inJourney: '234',-->
<!--                            endJourney: '234',-->
<!--                        },-->
<!--                        {-->
<!--                            typeReport: 'Thử nghiệm',-->
<!--                            campaignId: '#12345',-->
<!--                            numberRequets: '567',-->
<!--                            startJourney: '234',-->
<!--                            contactJoinedJourney: '234',-->
<!--                            inJourney: '234',-->
<!--                            endJourney: '234',-->
<!--                        },-->
<!--                    ]-->
<!--                },-->
<!--                {-->
<!--                    campaignId: '#12345',-->
<!--                    nameCampaign: 'Chiến dịch 2',-->
<!--                    CampaignTypeList: [-->
<!--                        {-->
<!--                            typeReport: 'Chính thức',-->
<!--                            numberRequets: '234',-->
<!--                            startJourney: '234',-->
<!--                            contactJoinedJourney: '234',-->
<!--                            inJourney: '234',-->
<!--                            endJourney: '234',-->
<!--                        },-->
<!--                        {-->
<!--                            typeReport: 'Tổng hợp',-->
<!--                            campaignId: '#12345',-->
<!--                            numberRequets: '234',-->
<!--                            startJourney: '234',-->
<!--                            contactJoinedJourney: '234',-->
<!--                            inJourney: '234',-->
<!--                            endJourney: '234',-->
<!--                        },-->
<!--                        {-->
<!--                            typeReport: 'Thử nghiệm',-->
<!--                            campaignId: '#12345',-->
<!--                            numberRequets: '234',-->
<!--                            startJourney: '234',-->
<!--                            contactJoinedJourney: '234',-->
<!--                            inJourney: '234',-->
<!--                            endJourney: '234',-->
<!--                        },-->
<!--                    ]-->
<!--                },-->
<!--            ],-->
<!--            tableData: [],-->
<!--            arrDefaultTable: [],-->
<!--            fields: [-->
<!--                {-->
<!--                    id: 1,-->
<!--                    key: "campaignName",-->
<!--                    title: 'Tên Chiến dịch',-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 2,-->
<!--                    key: "campaignCode",-->
<!--                    title: 'Mã chiến dịch',-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 3,-->
<!--                    title: 'Người tạo',-->
<!--                    key: "personCreated",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 4,-->
<!--                    title: 'Thời gian tạo',-->
<!--                    key: "createTime",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 5,-->
<!--                    title: 'Người cập nhật',-->
<!--                    key: "personUpdated",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 6,-->
<!--                    title: 'Trạng thái chiến dịch',-->
<!--                    key: "status",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 7,-->
<!--                    title: 'Loại chiến dịch',-->
<!--                    key: "campaignType",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 8,-->
<!--                    title: 'Hình thức triển khai',-->
<!--                    key: "campaignNewsType",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 9,-->
<!--                    title: 'Số lượt yêu cầu',-->
<!--                    key: "numberRequest",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 10,-->
<!--                    title: 'Số lượt quảng cáo (thành công + không thành công)',-->
<!--                    key: "numberAdv",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 24,-->
<!--                    title: 'Số lượt quảng cáo (thành công)',-->
<!--                    key: "adsSentSuccessCount",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 23,-->
<!--                    title: 'Số thuê bao gửi đi thành công',-->
<!--                    key: "adsSubSentSuccessCount",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 11,-->
<!--                    title: 'Số lượt tương tác (Đăng ký thành công)',-->
<!--                    key: "numberInteractRegSuccess",-->
<!--                    label: 'Đăng ký thành công',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                }, {-->
<!--                    id: 12,-->
<!--                    title: 'Số lượt tương tác (Đăng ký không thành công)',-->
<!--                    key: "numberInteractRegFail",-->
<!--                    label: 'Đăng ký không thành công',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                }, {-->
<!--                    id: 13,-->
<!--                    title: 'Số lượt tương tác (Click vào trang)',-->
<!--                    key: "numberInteractClickPage",-->
<!--                    label: 'Click vào trang',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                }, {-->
<!--                    id: 14,-->
<!--                    title: 'Số lượt tương tác (Tổng)',-->
<!--                    key: "interactSum",-->
<!--                    label: 'Tổng',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                },-->
<!--                {-->
<!--                    id: 15,-->
<!--                    title: 'Số lượt chuyển đổi (Đăng ký thành công)',-->
<!--                    key: "numberConversionsRegSuccess",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 16,-->
<!--                    title: 'Tỷ lệ tương tác (Tỷ lệ Đăng ký thành công/Số TB gửi đi thành công)',-->
<!--                    key: "rateInteractRegSuccessDivSubSentSuccess",-->
<!--                    label: 'Lượt Đăng ký thành công/Số TB gửi đi thành công',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                }, {-->
<!--                    id: 17,-->
<!--                    title: 'Tỷ lệ tương tác (Tỷ lệ Đăng ký không thành công /Số TB gửi đi thành công)',-->
<!--                    key: "rateInteractRegFailDivSubSentSuccess",-->
<!--                    label: 'Lượt Đăng ký không thành công /Số TB gửi đi thành công',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                }, {-->
<!--                    id: 18,-->
<!--                    title: 'Tỷ lệ tương tác (Số click vào trang/Số TB gửi đi thành công)',-->
<!--                    key: "rateInteractClickPageDivSubSentSuccess",-->
<!--                    label: 'Số click vào trang/Số TB gửi đi thành công',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                },-->
<!--                {-->
<!--                    id: 19,-->
<!--                    title: 'Tỷ lệ chuyển đổi (Tỷ lệ đăng ký thành công/Số TB gửi đi)',-->
<!--                    key: "rateConversions",-->
<!--                    label: 'Lượt đăng ký thành công/Số TB gửi đi thành công',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 20,-->
<!--                    title: 'Số lượng từ chối quảng cáo',-->
<!--                    key: "numberRejectAds",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 21,-->
<!--                    title: 'Tỷ lệ từ chối quảng cáo',-->
<!--                    key: "numberRateRejectAds",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 22,-->
<!--                    title: 'Chi phí (nếu có)',-->
<!--                    key: "budget",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--            ],-->
<!--            title: "campaign-group",-->
<!--            items: [{-->
<!--                text: "Tables"-->
<!--            },-->
<!--                {-->
<!--                    text: "campaign-group",-->
<!--                    active: true-->
<!--                }-->
<!--            ],-->
<!--            checkboxes: [-->
<!--                {-->
<!--                    id: 1,-->
<!--                    key: "campaignName",-->
<!--                    title: 'Tên Chiến dịch',-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 2,-->
<!--                    key: "campaignCode",-->
<!--                    title: 'Mã chiến dịch',-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 3,-->
<!--                    title: 'Người tạo',-->
<!--                    key: "personCreated",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 4,-->
<!--                    title: 'Thời gian tạo',-->
<!--                    key: "createTime",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 5,-->
<!--                    title: 'Người cập nhật',-->
<!--                    key: "personUpdated",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 6,-->
<!--                    title: 'Trạng thái chiến dịch',-->
<!--                    key: "status",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 7,-->
<!--                    title: 'Loại chiến dịch',-->
<!--                    key: "campaignType",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 8,-->
<!--                    title: 'Hình thức triển khai',-->
<!--                    key: "campaignNewsType",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 9,-->
<!--                    title: 'Số lượt yêu cầu',-->
<!--                    key: "numberRequest",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 10,-->
<!--                    title: 'Số lượt quảng cáo (thành công + không thành công)',-->
<!--                    key: "numberAdv",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 24,-->
<!--                    title: 'Số lượt quảng cáo (thành công)',-->
<!--                    key: "adsSentSuccessCount",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 23,-->
<!--                    title: 'Số thuê bao gửi đi thành công',-->
<!--                    key: "adsSubSentSuccessCount",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 11,-->
<!--                    title: 'Số lượt tương tác (Đăng ký thành công)',-->
<!--                    key: "numberInteractRegSuccess",-->
<!--                    label: 'Đăng ký thành công',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                }, {-->
<!--                    id: 12,-->
<!--                    title: 'Số lượt tương tác (Đăng ký không thành công)',-->
<!--                    key: "numberInteractRegFail",-->
<!--                    label: 'Đăng ký không thành công',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                }, {-->
<!--                    id: 13,-->
<!--                    title: 'Số lượt tương tác (Click vào trang)',-->
<!--                    key: "numberInteractClickPage",-->
<!--                    label: 'Click vào trang',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                }, {-->
<!--                    id: 14,-->
<!--                    title: 'Số lượt tương tác (Tổng)',-->
<!--                    key: "interactSum",-->
<!--                    label: 'Tổng',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                },-->
<!--                {-->
<!--                    id: 15,-->
<!--                    title: 'Số lượt chuyển đổi (Đăng ký thành công)',-->
<!--                    key: "numberConversionsRegSuccess",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 16,-->
<!--                    title: 'Tỷ lệ tương tác (Tỷ lệ Đăng ký thành công/Số TB gửi đi thành công)',-->
<!--                    key: "rateInteractRegSuccessDivSubSentSuccess",-->
<!--                    label: 'Lượt Đăng ký thành công/Số TB gửi đi thành công',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                }, {-->
<!--                    id: 17,-->
<!--                    title: 'Tỷ lệ tương tác (Tỷ lệ Đăng ký không thành công /Số TB gửi đi thành công)',-->
<!--                    key: "rateInteractRegFailDivSubSentSuccess",-->
<!--                    label: 'Lượt Đăng ký không thành công /Số TB gửi đi thành công',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                }, {-->
<!--                    id: 18,-->
<!--                    title: 'Tỷ lệ tương tác (Số click vào trang/Số TB gửi đi thành công)',-->
<!--                    key: "rateInteractClickPageDivSubSentSuccess",-->
<!--                    label: 'Số click vào trang/Số TB gửi đi thành công',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                },-->
<!--                {-->
<!--                    id: 19,-->
<!--                    title: 'Tỷ lệ chuyển đổi (Tỷ lệ đăng ký thành công/Số TB gửi đi)',-->
<!--                    key: "rateConversions",-->
<!--                    label: 'Lượt đăng ký thành công/Số TB gửi đi thành công',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 20,-->
<!--                    title: 'Số lượng từ chối quảng cáo',-->
<!--                    key: "numberRejectAds",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 21,-->
<!--                    title: 'Tỷ lệ từ chối quảng cáo',-->
<!--                    key: "numberRateRejectAds",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 22,-->
<!--                    title: 'Chi phí (nếu có)',-->
<!--                    key: "budget",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--            ],-->
<!--            showAdsSubSentSuccessCount: true,-->
<!--            showCampaignName: true,-->
<!--            showCampaignCode: true,-->
<!--            showPersonCreated: true,-->
<!--            showCreateTime: true,-->
<!--            showPersonUpdated: true,-->
<!--            showCampaignStatus: true,-->
<!--            showCampaignType: true,-->
<!--            showCampaignNewsType: true,-->
<!--            showNumberRequest: true,-->
<!--            showNumberAds: true,-->
<!--            showAdsSentSuccess: true,-->
<!--            showNumberConversions: true,-->
<!--            showRate4: true,-->
<!--            showNumberRejectAds: true,-->
<!--            showRateRejectAds: true,-->
<!--            showBudget: true,-->
<!--            numberColSpanInteract: 4,-->
<!--            showInteract: true,-->
<!--            numberColSpanInteractRate: 3,-->
<!--            showInteractRate: true,-->
<!--            numberTotalTable: 8,-->
<!--            showNumberInteractRegSuccess: true,-->
<!--            showNumberInteractRegFail: true,-->
<!--            showNumberInteractClickPage: true,-->
<!--            showInteractSum: true,-->
<!--            showRateInteractRegSuccess: true,-->
<!--            showRateInteractRegFail: true,-->
<!--            showRateInteractClickPage: true,-->
<!--            showBtnTable: false,-->
<!--            objSearch: {-->
<!--                startTime: '',-->
<!--                endTime: '',-->
<!--                timeReport: 1,-->
<!--                segmentCust: '-1',-->
<!--                ctkvCode: '-1'-->
<!--            },-->
<!--            selectedColumns: [],-->
<!--            filterResult: [],-->
<!--            allSelected: true,-->
<!--            indeterminate: false,-->
<!--            showTable: true,-->
<!--            showCharts: false,-->
<!--            showBtnChart: false,-->
<!--            showLineChart: true,-->
<!--            showBarChart: true,-->
<!--            showBtnCol: true,-->
<!--            tabActive: 1,-->
<!--            totalRows: 1,-->
<!--            currentPage: 1,-->
<!--            perPage: 10,-->
<!--            pageOptions: [10, 25, 50, 100],-->
<!--            filter: null,-->
<!--            filterOn: [],-->
<!--            sortBy: "age",-->
<!--            sortDesc: false,-->
<!--            isFilter: false,-->
<!--            arrTypeSegment: [],-->
<!--            arrNameCampaign: [],-->
<!--            arrTagCampaignScript: [],-->
<!--            arrGroupCampaignScript: [],-->
<!--            arrStatusCampaign: [],-->
<!--            arrAreaCampaign: [],-->
<!--            arrKpiCampaign: [],-->
<!--            arrAdsOutput: [],-->
<!--            arrAdsOutputScript: [],-->
<!--            arrTypeCampaign: [],-->
<!--            filterOptionSegmentSelected: null,-->
<!--            filterOptionNameSelected: [],-->
<!--            filterOptionTagSelected: [],-->
<!--            filterOptionGroupSelected: [],-->
<!--            filterOptionStatusSelected: [],-->
<!--            filterOptionAreaSelected: null,-->
<!--            filterOptionKpiSelected: [],-->
<!--            filterOptionAdsSelected: [],-->
<!--            filterOptionTypeSelected: [],-->
<!--            filterOptionNewTypeSelected: [],-->
<!--            arrTypeCampaignScript1: [],-->
<!--            arrStatusCampaignScript: [],-->
<!--            arrTagCampaign: [],-->
<!--            arrNewsTypeCampaign: [],-->
<!--            arrNewsTypeCampaignScript: [],-->
<!--            arrRemoveColumn: [],-->
<!--            optionsChart: [],-->
<!--            dataChartSelected: [],-->
<!--            selectAllChart: false,-->
<!--            dataCtkvCode: [],-->
<!--            arrCampaignGroup: [],-->
<!--            sumNumberRequest: 0,-->
<!--            sumNumberAdv: 0,-->
<!--            sumNumberInteractRegSuccess: 0,-->
<!--            sumNumberInteractRegFail: 0,-->
<!--            sumNumberInteractClickPage: 0,-->
<!--            sumNumberConversionsRegSuccess: 0,-->
<!--            sumRateInteractRegSuccess: 0,-->
<!--            sumRateInteractRegFail: 0,-->
<!--            sumRateInteractClickPage: 0,-->
<!--            sumRateConversions: 0,-->
<!--            sumNumberRejectAds: 0,-->
<!--            sumNumberRateRejectAds: 0,-->
<!--            sumBudget: 0,-->
<!--            sumInteractSum: 0,-->
<!--            sumAdsSubSentSuccessCount: 0,-->
<!--            sumAdsSentSuccess: 0,-->
<!--        };-->
<!--    },-->
<!--    computed: {-->
<!--        /**-->
<!--         * Total no. of records-->
<!--         */-->
<!--        rows() {-->
<!--            return this.tableData.length;-->
<!--        }-->
<!--    },-->
<!--    mounted() {-->
<!--        // Set the initial number of items-->
<!--        this.selectAllChart = false;-->
<!--        this.totalRows = this.items.length;-->
<!--        this.getListDataCtkv();-->
<!--        this.handleGetListSegment();-->
<!--    },-->
<!--    methods: {-->
<!--        /**-->
<!--         * Search the table data with search input-->
<!--         */-->
<!--        ...mapActions('analysis', {-->
<!--            apiReportCampaignGroup: 'apiReportCampaignGroup',-->
<!--        }),-->
<!--        ...mapActions('contact/profile', {-->
<!--            apiGetCtkv: 'apiApiGetCtkv',-->
<!--            apiGetSegment: 'apiGetSegment'-->
<!--        }),-->
<!--        initData() {-->
<!--            if (this.objSearch.timeReport === 1 && (this.objSearch.startTime === '' || this.objSearch.endTime === '')) {-->
<!--                Swal.fire('', 'Vui lòng nhập ngày', "warning")-->
<!--                return;-->
<!--            }-->
<!--            if (this.filterOptionAreaSelected !== null) {-->
<!--                this.objSearch.ctkvCode = this.filterOptionAreaSelected.ctkvCode.toString();-->
<!--            } else {-->
<!--                this.objSearch.ctkvCode = '-1';-->
<!--            }-->
<!--            if (this.filterOptionSegmentSelected !== null) {-->
<!--                this.objSearch.segmentCust = this.filterOptionSegmentSelected.segmentCode;-->
<!--            } else {-->
<!--                this.objSearch.segmentCust = '-1';-->
<!--            }-->

<!--            this.filterOptionNameSelected = [];-->
<!--            this.filterOptionTagSelected = [];-->
<!--            this.filterOptionGroupSelected = [];-->
<!--            this.filterOptionStatusSelected = [];-->
<!--            this.filterOptionKpiSelected = [];-->
<!--            this.filterOptionAdsSelected = [];-->
<!--            this.filterOptionTypeSelected = [];-->
<!--            this.filterOptionNewTypeSelected = [];-->

<!--            this.showBtnChart = true;-->
<!--            this.showBtnTable = false;-->

<!--            this.apiReportCampaignGroup(this.objSearch).then(response => {-->
<!--                if (response.err_code === 0) {-->
<!--                    this.tableData = response.data;-->
<!--                    this.arrDefaultTable = response.data;-->
<!--                    console.log('table: ', this.tableData);-->
<!--                    this.arrTypeCampaignScript1 = response.data;-->
<!--                    this.arrNameCampaign = response.data;-->
<!--                    this.arrStatusCampaignScript = response.data;-->
<!--                    this.arrAdsOutputScript = response.data;-->
<!--                    this.arrGroupCampaignScript = response.data;-->
<!--                    this.arrTagCampaignScript = response.data;-->
<!--                    this.arrNewsTypeCampaignScript = response.data;-->

<!--                    this.arrTypeCampaign = response.data.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignType === item.campaignType) === index-->
<!--                    );-->

<!--                    let tagConvert = response.data-->

<!--                    tagConvert.forEach(item => {-->
<!--                        const tags = item.campaignTag.split(" "); // Tách các từ khóa trong tag thành một mảng-->
<!--                        tags.forEach(tag => {-->
<!--                            const existingTag = this.arrTagCampaign.find(dataTagItem => dataTagItem.tagName === tag); // Kiểm tra xem tag đã tồn tại trong mảng dataTag chưa-->
<!--                            if (!existingTag) {-->
<!--                                // Nếu tag chưa tồn tại trong mảng dataTag, thêm mới nó-->
<!--                                this.arrTagCampaign.push({tagName: tag});-->
<!--                            }-->
<!--                        });-->
<!--                    });-->

<!--                    this.arrStatusCampaign = response.data.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.status === item.status) === index-->
<!--                    );-->
<!--                    this.arrNewsTypeCampaign = response.data.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignNewsType === item.campaignNewsType) === index-->
<!--                    );-->
<!--                    this.arrAdsOutput = response.data.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.numberAdv === item.numberAdv) === index-->
<!--                    );-->

<!--                    this.arrCampaignGroup = response.data.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignGroupName === item.campaignGroupName) === index-->
<!--                    );-->

<!--                } else {-->
<!--                    Swal.fire('', response.err_message, 'warning');-->
<!--                }-->
<!--            }).catch(err => {-->
<!--                console.log(err);-->
<!--            }).finally(() => {-->
<!--            })-->
<!--        },-->
<!--        handleGetListSegment() {-->
<!--            let objSegment = {id: -1};-->
<!--            this.apiGetSegment(objSegment).then(response => {-->
<!--                if (response['err_code'] === 0) {-->
<!--                    this.arrTypeSegment = response.data;-->
<!--                } else {-->
<!--                    Swal.fire('', response.err_message, 'warning');-->
<!--                }-->
<!--            }).catch(err => {-->
<!--                console.log(err);-->
<!--            }).finally(() => {-->
<!--            })-->
<!--        },-->
<!--        getListDataCtkv() {-->
<!--            let objCtkv = {id: this.objSearch.ctkvCode}-->
<!--            this.apiGetCtkv(objCtkv).then(response => {-->
<!--                if (response['err_code'] === 0) {-->
<!--                    this.dataCtkvCode = response.data;-->
<!--                } else {-->
<!--                    Swal.fire('', response.err_message, 'warning');-->
<!--                }-->
<!--            }).catch(err => {-->
<!--                console.log(err);-->
<!--            }).finally(() => {-->
<!--            })-->
<!--        },-->
<!--        onFiltered(filteredItems) {-->
<!--            // Trigger pagination to update the number of buttons/pages due to filtering-->
<!--            this.totalRows = filteredItems.length;-->
<!--            this.currentPage = 1;-->
<!--        },-->
<!--        toggleAll(checked) {-->
<!--            // this.selectedColumns = checked ? this.flavours.slice().map(item => item.nameColumn) : [];-->
<!--            if (!checked) {-->
<!--                // Nếu allSelected là false, đặt show của tất cả checkbox con là false-->
<!--                this.checkboxes.forEach((item) => {-->
<!--                    item.show = false;-->
<!--                });-->
<!--            } else {-->
<!--                this.checkboxes.forEach((item) => {-->
<!--                    item.show = true;-->
<!--                });-->
<!--            }-->
<!--            const allItemsAreShown = this.checkboxes.every(item => item.show);-->
<!--            const allItemsAreHidden = this.checkboxes.every(item => !item.show);-->
<!--            if (allItemsAreShown) {-->
<!--                this.fields = [-->
<!--                    {-->
<!--                        id: 1,-->
<!--                        key: "campaignName",-->
<!--                        title: 'Tên Chiến dịch',-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 2,-->
<!--                        key: "campaignCode",-->
<!--                        title: 'Mã chiến dịch',-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 3,-->
<!--                        title: 'Người tạo',-->
<!--                        key: "personCreated",-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 4,-->
<!--                        title: 'Thời gian tạo',-->
<!--                        key: "createTime",-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 5,-->
<!--                        title: 'Người cập nhật',-->
<!--                        key: "personUpdated",-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 6,-->
<!--                        title: 'Trạng thái chiến dịch',-->
<!--                        key: "status",-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 7,-->
<!--                        title: 'Loại chiến dịch',-->
<!--                        key: "campaignType",-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 8,-->
<!--                        title: 'Hình thức triển khai',-->
<!--                        key: "campaignNewsType",-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 9,-->
<!--                        title: 'Số lượt yêu cầu',-->
<!--                        key: "numberRequest",-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 10,-->
<!--                        title: 'Số lượt quảng cáo (thành công + không thành công)',-->
<!--                        key: "numberAdv",-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 24,-->
<!--                        title: 'Số lượt quảng cáo (thành công)',-->
<!--                        key: "adsSentSuccessCount",-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 23,-->
<!--                        title: 'Số thuê bao gửi đi thành công',-->
<!--                        key: "adsSubSentSuccessCount",-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 11,-->
<!--                        title: 'Số lượt tương tác (Đăng ký thành công)',-->
<!--                        key: "numberInteractRegSuccess",-->
<!--                        label: 'Đăng ký thành công',-->
<!--                        sortable: false,-->
<!--                        show: true,-->
<!--                        status: 0-->
<!--                    }, {-->
<!--                        id: 12,-->
<!--                        title: 'Số lượt tương tác (Đăng ký không thành công)',-->
<!--                        key: "numberInteractRegFail",-->
<!--                        label: 'Đăng ký không thành công',-->
<!--                        sortable: false,-->
<!--                        show: true,-->
<!--                        status: 0-->
<!--                    }, {-->
<!--                        id: 13,-->
<!--                        title: 'Số lượt tương tác (Click vào trang)',-->
<!--                        key: "numberInteractClickPage",-->
<!--                        label: 'Click vào trang',-->
<!--                        sortable: false,-->
<!--                        show: true,-->
<!--                        status: 0-->
<!--                    }, {-->
<!--                        id: 14,-->
<!--                        title: 'Số lượt tương tác (Tổng)',-->
<!--                        key: "interactSum",-->
<!--                        label: 'Tổng',-->
<!--                        sortable: false,-->
<!--                        show: true,-->
<!--                        status: 0-->
<!--                    },-->
<!--                    {-->
<!--                        id: 15,-->
<!--                        title: 'Số lượt chuyển đổi (Đăng ký thành công)',-->
<!--                        key: "numberConversionsRegSuccess",-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 16,-->
<!--                        title: 'Tỷ lệ tương tác (Tỷ lệ Đăng ký thành công/Số TB gửi đi thành công)',-->
<!--                        key: "rateInteractRegSuccessDivSubSentSuccess",-->
<!--                        label: 'Lượt Đăng ký thành công/Số TB gửi đi thành công',-->
<!--                        sortable: false,-->
<!--                        show: true,-->
<!--                        status: 0-->
<!--                    }, {-->
<!--                        id: 17,-->
<!--                        title: 'Tỷ lệ tương tác (Tỷ lệ Đăng ký không thành công /Số TB gửi đi thành công)',-->
<!--                        key: "rateInteractRegFailDivSubSentSuccess",-->
<!--                        label: 'Lượt Đăng ký không thành công /Số TB gửi đi thành công',-->
<!--                        sortable: false,-->
<!--                        show: true,-->
<!--                        status: 0-->
<!--                    }, {-->
<!--                        id: 18,-->
<!--                        title: 'Tỷ lệ tương tác (Số click vào trang/Số TB gửi đi thành công)',-->
<!--                        key: "rateInteractClickPageDivSubSentSuccess",-->
<!--                        label: 'Số click vào trang/Số TB gửi đi thành công',-->
<!--                        sortable: false,-->
<!--                        show: true,-->
<!--                        status: 0-->
<!--                    },-->
<!--                    {-->
<!--                        id: 19,-->
<!--                        title: 'Tỷ lệ chuyển đổi (Tỷ lệ đăng ký thành công/Số TB gửi đi)',-->
<!--                        key: "rateConversions",-->
<!--                        label: 'Lượt đăng ký thành công/Số TB gửi đi thành công',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 20,-->
<!--                        title: 'Số lượng từ chối quảng cáo',-->
<!--                        key: "numberRejectAds",-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 21,-->
<!--                        title: 'Tỷ lệ từ chối quảng cáo',-->
<!--                        key: "numberRateRejectAds",-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                    {-->
<!--                        id: 22,-->
<!--                        title: 'Chi phí (nếu có)',-->
<!--                        key: "budget",-->
<!--                        label: '',-->
<!--                        sortable: false,-->
<!--                        show: true-->
<!--                    },-->
<!--                ];-->
<!--                this.showAdsSubSentSuccessCount = true;-->
<!--                this.showAdsSentSuccess = true;-->
<!--                this.showTable = true;-->
<!--                this.showCampaignName = true;-->
<!--                this.showCampaignCode = true;-->
<!--                this.showPersonCreated = true;-->
<!--                this.showCreateTime = true;-->
<!--                this.showPersonUpdated = true;-->
<!--                this.showCampaignStatus = true;-->
<!--                this.showCampaignType = true;-->
<!--                this.showCampaignNewsType = true;-->
<!--                this.showNumberRequest = true;-->
<!--                this.showNumberAds = true;-->
<!--                this.showNumberConversions = true;-->
<!--                this.showRate4 = true;-->
<!--                this.showNumberRejectAds = true;-->
<!--                this.showRateRejectAds = true;-->
<!--                this.showBudget = true;-->
<!--                this.numberColSpanInteract = 4;-->
<!--                this.showInteract = true;-->
<!--                this.numberColSpanInteractRate = 3;-->
<!--                this.showInteractRate = true;-->
<!--                this.numberTotalTable = 8;-->
<!--                this.showNumberInteractRegSuccess = true;-->
<!--                this.showNumberInteractRegFail = true;-->
<!--                this.showNumberInteractClickPage = true;-->
<!--                this.showInteractSum = true;-->
<!--                this.showRateInteractRegSuccess = true;-->
<!--                this.showRateInteractRegFail = true;-->
<!--                this.showRateInteractClickPage = true;-->
<!--            } else if (allItemsAreHidden) {-->
<!--                this.fields = [];-->
<!--                this.showAdsSubSentSuccessCount = false;-->
<!--                this.showAdsSentSuccess = false;-->
<!--                this.showTable = false;-->
<!--                this.showCampaignName = false;-->
<!--                this.showCampaignCode = false;-->
<!--                this.showPersonCreated = false;-->
<!--                this.showCreateTime = false;-->
<!--                this.showPersonUpdated = false;-->
<!--                this.showCampaignStatus = false;-->
<!--                this.showCampaignType = false;-->
<!--                this.showCampaignNewsType = false;-->
<!--                this.showNumberRequest = false;-->
<!--                this.showNumberAds = false;-->
<!--                this.showNumberConversions = false;-->
<!--                this.showRate4 = false;-->
<!--                this.showNumberRejectAds = false;-->
<!--                this.showRateRejectAds = false;-->
<!--                this.showBudget = false;-->
<!--                this.numberColSpanInteract = 0;-->
<!--                this.showInteract = false;-->
<!--                this.numberColSpanInteractRate = 0;-->
<!--                this.showInteractRate = false;-->
<!--                this.numberTotalTable = 0;-->
<!--                this.showNumberInteractRegSuccess = false;-->
<!--                this.showNumberInteractRegFail = false;-->
<!--                this.showNumberInteractClickPage = false;-->
<!--                this.showInteractSum = false;-->
<!--                this.showRateInteractRegSuccess = false;-->
<!--                this.showRateInteractRegFail = false;-->
<!--                this.showRateInteractClickPage = false;-->
<!--            }-->
<!--        },-->
<!--        handleReset() {-->
<!--            console.log('handleActionReset');-->
<!--            this.checkboxes.forEach(item => item.show = true);-->
<!--            this.allSelected = true;-->
<!--            this.showCampaignName = true;-->
<!--            this.showCampaignCode = true;-->
<!--            this.showPersonCreated = true;-->
<!--            this.showCreateTime = true;-->
<!--            this.showPersonUpdated = true;-->
<!--            this.showCampaignStatus = true;-->
<!--            this.showCampaignType = true;-->
<!--            this.showCampaignNewsType = true;-->
<!--            this.showNumberRequest = true;-->
<!--            this.showNumberAds = true;-->
<!--            this.showRate4 = true;-->
<!--            this.showNumberRejectAds = true;-->
<!--            this.showRateRejectAds = true;-->
<!--            this.showBudget = true;-->
<!--            this.numberColSpanInteract = 4;-->
<!--            this.numberColSpanInteractRate = 3;-->
<!--            this.showInteract = true;-->
<!--            this.showInteractRate = true;-->
<!--            this.showAdsSubSentSuccessCount = true;-->
<!--            this.showAdsSentSuccess = true;-->
<!--            this.fields = [-->
<!--                {-->
<!--                    id: 1,-->
<!--                    key: "campaignName",-->
<!--                    title: 'Tên Chiến dịch',-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 2,-->
<!--                    key: "campaignCode",-->
<!--                    title: 'Mã chiến dịch',-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 3,-->
<!--                    title: 'Người tạo',-->
<!--                    key: "personCreated",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 4,-->
<!--                    title: 'Thời gian tạo',-->
<!--                    key: "createTime",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 5,-->
<!--                    title: 'Người cập nhật',-->
<!--                    key: "personUpdated",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 6,-->
<!--                    title: 'Trạng thái chiến dịch',-->
<!--                    key: "status",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 7,-->
<!--                    title: 'Loại chiến dịch',-->
<!--                    key: "campaignType",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 8,-->
<!--                    title: 'Hình thức triển khai',-->
<!--                    key: "campaignNewsType",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 9,-->
<!--                    title: 'Số lượt yêu cầu',-->
<!--                    key: "numberRequest",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 10,-->
<!--                    title: 'Số lượt quảng cáo (thành công + không thành công)',-->
<!--                    key: "numberAdv",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 24,-->
<!--                    title: 'Số lượt quảng cáo (thành công)',-->
<!--                    key: "adsSentSuccessCount",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 23,-->
<!--                    title: 'Số thuê bao gửi đi thành công',-->
<!--                    key: "adsSubSentSuccessCount",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 11,-->
<!--                    title: 'Số lượt tương tác (Đăng ký thành công)',-->
<!--                    key: "numberInteractRegSuccess",-->
<!--                    label: 'Đăng ký thành công',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                }, {-->
<!--                    id: 12,-->
<!--                    title: 'Số lượt tương tác (Đăng ký không thành công)',-->
<!--                    key: "numberInteractRegFail",-->
<!--                    label: 'Đăng ký không thành công',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                }, {-->
<!--                    id: 13,-->
<!--                    title: 'Số lượt tương tác (Click vào trang)',-->
<!--                    key: "numberInteractClickPage",-->
<!--                    label: 'Click vào trang',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                }, {-->
<!--                    id: 14,-->
<!--                    title: 'Số lượt tương tác (Tổng)',-->
<!--                    key: "interactSum",-->
<!--                    label: 'Tổng',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                },-->
<!--                {-->
<!--                    id: 15,-->
<!--                    title: 'Số lượt chuyển đổi (Đăng ký thành công)',-->
<!--                    key: "numberConversionsRegSuccess",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 16,-->
<!--                    title: 'Tỷ lệ tương tác (Tỷ lệ Đăng ký thành công/Số TB gửi đi thành công)',-->
<!--                    key: "rateInteractRegSuccessDivSubSentSuccess",-->
<!--                    label: 'Lượt Đăng ký thành công/Số TB gửi đi thành công',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                }, {-->
<!--                    id: 17,-->
<!--                    title: 'Tỷ lệ tương tác (Tỷ lệ Đăng ký không thành công /Số TB gửi đi thành công)',-->
<!--                    key: "rateInteractRegFailDivSubSentSuccess",-->
<!--                    label: 'Lượt Đăng ký không thành công /Số TB gửi đi thành công',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                }, {-->
<!--                    id: 18,-->
<!--                    title: 'Tỷ lệ tương tác (Số click vào trang/Số TB gửi đi thành công)',-->
<!--                    key: "rateInteractClickPageDivSubSentSuccess",-->
<!--                    label: 'Số click vào trang/Số TB gửi đi thành công',-->
<!--                    sortable: false,-->
<!--                    show: true,-->
<!--                    status: 0-->
<!--                },-->
<!--                {-->
<!--                    id: 19,-->
<!--                    title: 'Tỷ lệ chuyển đổi (Tỷ lệ đăng ký thành công/Số TB gửi đi)',-->
<!--                    key: "rateConversions",-->
<!--                    label: 'Lượt đăng ký thành công/Số TB gửi đi thành công',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 20,-->
<!--                    title: 'Số lượng từ chối quảng cáo',-->
<!--                    key: "numberRejectAds",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 21,-->
<!--                    title: 'Tỷ lệ từ chối quảng cáo',-->
<!--                    key: "numberRateRejectAds",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--                {-->
<!--                    id: 22,-->
<!--                    title: 'Chi phí (nếu có)',-->
<!--                    key: "budget",-->
<!--                    label: '',-->
<!--                    sortable: false,-->
<!--                    show: true-->
<!--                },-->
<!--            ];-->
<!--        },-->
<!--        handleExcel() {-->
<!--            const wb = XLSX.utils.book_new();-->

<!--            const wsData = [[-->
<!--                // 'STT',-->
<!--                'Tên Chiến dịch',-->
<!--                'Mã chiến dịch',-->
<!--                'Người tạo',-->
<!--                'Thời gian tạo',-->
<!--                'Người cập nhật',-->
<!--                'Trạng thái chiến dich',-->
<!--                'Loại chiến dich',-->
<!--                'Hình thức triển khai',-->
<!--                'Số lượt yêu cầu',-->
<!--                'Số lượt quảng cáo (thành công + không thành công)',-->
<!--                'Số lượt quảng cáo (thành công)',-->
<!--                'Số thuê bao gửi đi thành công',-->
<!--                {v: 'Số lượt tương tác', s: {alignment: {horizontal: 'center'}}},-->
<!--                '',-->
<!--                '',-->
<!--                '',-->
<!--                'Số lượt chuyển đổi (Đăng ký thành công)',-->
<!--                {v: 'Tỷ lệ tương tác', s: {alignment: {horizontal: 'center'}}},-->
<!--                '',-->
<!--                '',-->
<!--                'Tỷ lệ chuyển đổi',-->
<!--                'Số lượng từ chối quảng cáo',-->
<!--                'Tỷ lệ từ chối quảng cáo',-->
<!--                'Chi phí (nếu có)',-->
<!--            ],-->
<!--                this.fields.map(field => field.label)-->
<!--            ];-->

<!--            // Duyệt qua từng mục và tạo dữ liệu cho các dòng-->
<!--            this.tableData.forEach((item, index) => {-->

<!--                const rowData = [-->
<!--                    item.campaignName,-->
<!--                    item.campaignCode,-->
<!--                    item.personCreated,-->
<!--                    item.createTime,-->
<!--                    item.personUpdated,-->
<!--                    item.status,-->
<!--                    item.campaignType,-->
<!--                    item.campaignNewsType,-->
<!--                    item.numberRequest,-->
<!--                    item.numberAdv,-->
<!--                    item.adsSentSuccessCount,-->
<!--                    item.adsSubSentSuccessCount,-->
<!--                    item.numberInteractRegSuccess,-->
<!--                    item.numberInteractRegFail,-->
<!--                    item.numberInteractClickPage,-->
<!--                    item.interactSum,-->
<!--                    item.numberConversionsRegSuccess,-->
<!--                    item.rateInteractRegSuccessDivSubSentSuccess,-->
<!--                    item.rateInteractRegFailDivSubSentSuccess,-->
<!--                    item.rateInteractClickPageDivSubSentSuccess,-->
<!--                    item.rateConversions,-->
<!--                    item.numberRejectAds,-->
<!--                    item.numberRateRejectAds,-->
<!--                    item.budget,-->
<!--                ];-->
<!--                wsData.push(rowData);-->
<!--            });-->

<!--            // Tính toán tổng của các loại (types)-->
<!--            const typeSums = {-->
<!--                numberRequest: 0,-->
<!--                numberAdv: 0,-->
<!--                adsSentSuccessCount: 0,-->
<!--                adsSubSentSuccessCount: 0,-->
<!--                numberInteractRegSuccess: 0,-->
<!--                numberInteractRegFail: 0,-->
<!--                numberInteractClickPage: 0,-->
<!--                interactSum: 0,-->
<!--                numberConversionsRegSuccess: 0,-->
<!--                rateInteractRegSuccessDivSubSentSuccess: 0,-->
<!--                rateInteractRegFailDivSubSentSuccess: 0,-->
<!--                rateInteractClickPageDivSubSentSuccess: 0,-->
<!--                rateConversions: 0,-->
<!--                numberRejectAds: 0,-->
<!--                numberRateRejectAds: 0,-->
<!--                budget: 0,-->
<!--            };-->

<!--            this.tableData.forEach(item => {-->
<!--                typeSums.numberRequest += item.numberRequest;-->
<!--                typeSums.numberAdv += item.numberAdv;-->
<!--                typeSums.adsSentSuccessCount += item.adsSentSuccessCount;-->
<!--                typeSums.adsSubSentSuccessCount += item.adsSubSentSuccessCount;-->
<!--                typeSums.numberInteractRegSuccess += item.numberInteractRegSuccess;-->
<!--                typeSums.numberInteractRegFail += item.numberInteractRegFail;-->
<!--                typeSums.numberInteractClickPage += item.numberInteractClickPage;-->
<!--                typeSums.interactSum += item.interactSum;-->
<!--                typeSums.numberConversionsRegSuccess += item.numberConversionsRegSuccess;-->
<!--                typeSums.rateInteractRegSuccessDivSubSentSuccess += item.rateInteractRegSuccessDivSubSentSuccess;-->
<!--                typeSums.rateInteractRegFailDivSubSentSuccess += item.rateInteractRegFailDivSubSentSuccess;-->
<!--                typeSums.rateInteractClickPageDivSubSentSuccess += item.rateInteractClickPageDivSubSentSuccess;-->
<!--                typeSums.rateConversions += item.rateConversions;-->
<!--                typeSums.numberRejectAds += item.numberRejectAds;-->
<!--                typeSums.numberRateRejectAds += item.numberRateRejectAds;-->
<!--                typeSums.budget += item.budget;-->
<!--            });-->

<!--            // Tạo dòng chân trang (footer row)-->
<!--            const footerRow = this.fields.map(field => {-->
<!--                if (field.key === 'campaignType' || field.key === 'campaignName' || field.key === 'campaignCode'|| field.key === 'status'|| field.key === 'campaignNewsType'|| field.key === 'personCreated'|| field.key === 'createTime'|| field.key === 'personUpdated') {-->
<!--                    return {t: 's', v: 'Tổng', s: {alignment: {horizontal: 'center'}}};-->
<!--                } else {-->
<!--                    return typeSums[field.key];-->
<!--                }-->
<!--            });-->

<!--            if (this.filterOptionTagSelected.length > 0 || this.filterOptionGroupSelected.length > 0) {-->
<!--                wsData.push(footerRow);-->
<!--                console.log('wsData: ', wsData)-->
<!--            }-->

<!--            const ws = XLSX.utils.aoa_to_sheet(wsData);-->

<!--            // Merge các ô (cells) cho trường 'reportTime' và 'campaignName' "workflowName"-->
<!--            ws['!merges'] = [-->
<!--                {s: {r: 0, c: 0}, e: {r: 1, c: 0}},-->
<!--                {s: {r: 0, c: 1}, e: {r: 1, c: 1}},-->
<!--                {s: {r: 0, c: 2}, e: {r: 1, c: 2}},-->
<!--                {s: {r: 0, c: 3}, e: {r: 1, c: 3}},-->
<!--                {s: {r: 0, c: 4}, e: {r: 1, c: 4}},-->
<!--                {s: {r: 0, c: 5}, e: {r: 1, c: 5}},-->
<!--                {s: {r: 0, c: 6}, e: {r: 1, c: 6}},-->
<!--                {s: {r: 0, c: 7}, e: {r: 1, c: 7}},-->
<!--                {s: {r: 0, c: 8}, e: {r: 1, c: 8}},-->
<!--                {s: {r: 0, c: 9}, e: {r: 1, c: 9}},-->
<!--                {s: {r: 0, c: 10}, e: {r: 1, c: 10}},-->
<!--                {s: {r: 0, c: 11}, e: {r: 1, c: 11}},-->
<!--                {s: {r: 0, c: 12}, e: {r: 0, c: 15}},-->
<!--                {s: {r: 0, c: 16}, e: {r: 1, c: 16}},-->
<!--                {s: {r: 0, c: 17}, e: {r: 0, c: 19}},-->
<!--                {s: {r: 0, c: 20}, e: {r: 1, c: 20}},-->
<!--                {s: {r: 0, c: 21}, e: {r: 1, c: 21}},-->
<!--                {s: {r: 0, c: 22}, e: {r: 1, c: 22}},-->
<!--                {s: {r: 0, c: 23}, e: {r: 1, c: 23}},-->
<!--            ];-->

<!--            if (this.filterOptionTagSelected.length > 0 || this.filterOptionGroupSelected.length > 0) {-->
<!--                ws['!merges'].push({s: {r: wsData.length - 1, c: 0}, e: {r: wsData.length - 1, c: 7}});-->
<!--            }-->

<!--            ws['!cols'] = [-->
<!--                {wch: 20},-->
<!--                {wch: 20},-->
<!--                {wch: 20},-->
<!--                {wch: 15},-->
<!--                {wch: 30},-->
<!--                {wch: 30},-->
<!--                {wch: 25},-->
<!--                {wch: 25},-->
<!--                {wch: 25},-->
<!--                {wch: 25},-->
<!--                {wch: 25},-->
<!--                {wch: 25},-->
<!--                {wch: 25},-->
<!--                {wch: 25},-->
<!--                {wch: 25},-->
<!--                {wch: 25},-->
<!--                {wch: 25},-->
<!--                {wch: 35},-->
<!--                {wch: 25},-->
<!--                {wch: 25},-->
<!--                {wch: 25},-->
<!--                {wch: 35},-->
<!--                {wch: 25},-->
<!--                {wch: 20},-->
<!--            ];-->

<!--            // Thêm worksheet vào workbook-->
<!--            XLSX.utils.book_append_sheet(wb, ws, 'Bc nhom chien dich');-->

<!--            // Xuất file Excel-->
<!--            XLSX.writeFile(wb, 'BC-nhom-chien-dich.xlsx');-->
<!--        },-->
<!--        onchangeFilter(type) {-->
<!--            let result;-->
<!--            this.filterResult = [];-->

<!--            if (this.filterOptionNameSelected.length === 0-->
<!--                && this.filterOptionTagSelected.length === 0-->
<!--                && this.filterOptionGroupSelected.length === 0-->
<!--                && this.filterOptionStatusSelected.length === 0-->
<!--                && this.filterOptionKpiSelected.length === 0-->
<!--                && this.filterOptionAdsSelected.length === 0-->
<!--                && this.filterOptionTypeSelected.length === 0-->
<!--                && this.filterOptionNewTypeSelected.length === 0) {-->

<!--                this.$nextTick(() => {-->
<!--                    this.tableData = this.arrDefaultTable;-->
<!--                    this.arrTypeCampaignScript1 = this.arrDefaultTable;-->
<!--                    this.arrNameCampaign = this.arrDefaultTable;-->
<!--                    this.arrStatusCampaignScript = this.arrDefaultTable;-->
<!--                    this.arrAdsOutputScript = this.arrDefaultTable;-->
<!--                    this.arrGroupCampaignScript = this.arrDefaultTable;-->
<!--                    this.arrTagCampaignScript = this.arrDefaultTable;-->
<!--                    this.arrNewsTypeCampaignScript = this.arrDefaultTable;-->

<!--                    this.arrTypeCampaign = this.arrDefaultTable.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignType === item.campaignType) === index-->
<!--                    );-->

<!--                    this.arrStatusCampaign = this.arrDefaultTable.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.status === item.status) === index-->
<!--                    );-->
<!--                    this.arrNewsTypeCampaign = this.arrDefaultTable.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignNewsType === item.campaignNewsType) === index-->
<!--                    );-->
<!--                    this.arrAdsOutput = this.arrDefaultTable.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.numberAdv === item.numberAdv) === index-->
<!--                    );-->

<!--                    this.arrCampaignGroup = this.arrDefaultTable.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignGroupName === item.campaignGroupName) === index-->
<!--                    );-->
<!--                });-->

<!--            }-->

<!--            if (type === 1) {-->
<!--                if (this.filterOptionTypeSelected.length > 0) {-->
<!--                    this.filterOptionTypeSelected.forEach(itemType => {-->
<!--                        result = this.arrTypeCampaignScript1.filter(item => item.campaignType === itemType.campaignType);-->

<!--                        this.filterResult.push(...result);-->
<!--                    });-->
<!--                    this.tableData = this.filterResult;-->
<!--                    this.arrNameCampaign = this.filterResult;-->
<!--                    this.arrStatusCampaignScript = this.filterResult;-->
<!--                    this.arrAdsOutputScript = this.filterResult;-->
<!--                    this.arrTagCampaignScript = this.filterResult;-->
<!--                    this.arrNewsTypeCampaignScript = this.filterResult;-->
<!--                    this.arrGroupCampaignScript = this.filterResult;-->

<!--                    this.arrStatusCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.status === item.status) === index-->
<!--                    );-->
<!--                    this.arrNewsTypeCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignNewsType === item.campaignNewsType) === index-->
<!--                    );-->
<!--                    this.arrAdsOutput = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.numberAdv === item.numberAdv) === index-->
<!--                    );-->
<!--                    this.arrCampaignGroup = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignGroupName === item.campaignGroupName) === index-->
<!--                    );-->

<!--                    let tagConvert = this.filterResult-->
<!--                    console.log(tagConvert)-->

<!--                    tagConvert.forEach(item => {-->
<!--                        console.log(1)-->
<!--                        const tags = item.campaignTag.split(" "); // Tách các từ khóa trong tag thành một mảng-->
<!--                        tags.forEach(tag => {-->
<!--                            const existingTag = this.arrTagCampaign.find(dataTagItem => dataTagItem.tagName === tag); // Kiểm tra xem tag đã tồn tại trong mảng dataTag chưa-->
<!--                            if (!existingTag) {-->
<!--                                // Nếu tag chưa tồn tại trong mảng dataTag, thêm mới nó-->
<!--                                this.arrTagCampaign.push({tagName: tag});-->
<!--                            }-->
<!--                        });-->
<!--                    });-->

<!--                    // this.arrTagCampaign = this.filterResult.filter(-->
<!--                    //     (item, index, self) => self.findIndex((m) => m.campaignTag === item.campaignTag) === index-->
<!--                    // );-->

<!--                    this.sumNumberRequest = this.filterResult.reduce((acc, curr) => acc + curr.numberRequest, 0);-->
<!--                    this.sumNumberAdv = this.filterResult.reduce((acc, curr) => acc + curr.numberAdv, 0);-->
<!--                    this.sumAdsSentSuccess = this.filterResult.reduce((acc, curr) => acc + curr.adsSentSuccessCount, 0);-->
<!--                    this.sumAdsSubSentSuccessCount = this.filterResult.reduce((acc, curr) => acc + curr.adsSubSentSuccessCount, 0);-->
<!--                    this.sumNumberInteractRegSuccess = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractRegSuccess, 0);-->
<!--                    this.sumNumberInteractRegFail = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractRegFail, 0);-->
<!--                    this.sumNumberInteractClickPage = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractClickPage, 0);-->
<!--                    this.sumInteractSum = this.filterResult.reduce((acc, curr) => acc + curr.interactSum, 0);-->
<!--                    this.sumNumberConversionsRegSuccess = this.filterResult.reduce((acc, curr) => acc + curr.numberConversionsRegSuccess, 0);-->
<!--                    this.sumRateInteractRegSuccess = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100 ).toFixed(2);-->
<!--                    this.sumRateInteractRegFail = ((this.sumNumberInteractRegFail / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateInteractClickPage = ((this.sumNumberInteractClickPage / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateConversions = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumNumberRejectAds = this.filterResult.reduce((acc, curr) => acc + curr.numberRejectAds, 0);-->
<!--                    this.sumNumberRateRejectAds = ((this.sumNumberRejectAds / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumBudget = this.filterResult.reduce((acc, curr) => acc + curr.budget, 0);-->
<!--                } else {-->
<!--                    this.tableData = this.arrTypeCampaignScript1;-->
<!--                    this.arrNameCampaign = this.arrTypeCampaignScript1;-->
<!--                    this.arrStatusCampaignScript = this.arrTypeCampaignScript1;-->
<!--                    this.arrAdsOutputScript = this.arrTypeCampaignScript1;-->
<!--                    this.arrTagCampaignScript = this.arrTypeCampaignScript1;-->
<!--                    this.arrNewsTypeCampaignScript = this.arrTypeCampaignScript1;-->
<!--                    this.arrGroupCampaignScript = this.arrTypeCampaignScript1;-->

<!--                    this.arrStatusCampaign = this.arrTypeCampaignScript1.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.status === item.status) === index-->
<!--                    );-->
<!--                    this.arrNewsTypeCampaign = this.arrTypeCampaignScript1.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignNewsType === item.campaignNewsType) === index-->
<!--                    );-->
<!--                    this.arrAdsOutput = this.arrTypeCampaignScript1.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.numberAdv === item.numberAdv) === index-->
<!--                    );-->
<!--                    this.arrCampaignGroup = this.arrTypeCampaignScript1.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignGroupName === item.campaignGroupName) === index-->
<!--                    );-->

<!--                    this.sumNumberRequest = this.arrTypeCampaignScript1.reduce((acc, curr) => acc + curr.numberRequest, 0);-->
<!--                    this.sumNumberAdv = this.arrTypeCampaignScript1.reduce((acc, curr) => acc + curr.numberAdv, 0);-->
<!--                    this.sumAdsSentSuccess = this.arrTypeCampaignScript1.reduce((acc, curr) => acc + curr.adsSentSuccessCount, 0);-->
<!--                    this.sumAdsSubSentSuccessCount = this.arrTypeCampaignScript1.reduce((acc, curr) => acc + curr.adsSubSentSuccessCount, 0);-->
<!--                    this.sumNumberInteractRegSuccess = this.arrTypeCampaignScript1.reduce((acc, curr) => acc + curr.numberInteractRegSuccess, 0);-->
<!--                    this.sumNumberInteractRegFail = this.arrTypeCampaignScript1.reduce((acc, curr) => acc + curr.numberInteractRegFail, 0);-->
<!--                    this.sumNumberInteractClickPage = this.arrTypeCampaignScript1.reduce((acc, curr) => acc + curr.numberInteractClickPage, 0);-->
<!--                    this.sumInteractSum = this.arrTypeCampaignScript1.reduce((acc, curr) => acc + curr.interactSum, 0);-->
<!--                    this.sumNumberConversionsRegSuccess = this.arrTypeCampaignScript1.reduce((acc, curr) => acc + curr.numberConversionsRegSuccess, 0);-->
<!--                    this.sumRateInteractRegSuccess = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateInteractRegFail = ((this.sumNumberInteractRegFail / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateInteractClickPage = ((this.sumNumberInteractClickPage / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateConversions = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumNumberRejectAds = this.arrTypeCampaignScript1.reduce((acc, curr) => acc + curr.numberRejectAds, 0);-->
<!--                    this.sumNumberRateRejectAds = ((this.sumNumberRejectAds / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumBudget = this.arrTypeCampaignScript1.reduce((acc, curr) => acc + curr.budget, 0);-->
<!--                }-->
<!--            } else if (type === 2) {-->
<!--                if (this.filterOptionNameSelected.length > 0) {-->
<!--                    this.filterOptionNameSelected.forEach(itemType => {-->
<!--                        result = this.arrNameCampaign.filter(item => item.campaignName === itemType.campaignName);-->

<!--                        this.filterResult.push(...result);-->
<!--                    });-->
<!--                    this.tableData = this.filterResult;-->
<!--                    this.arrTypeCampaignScript1 = this.filterResult;-->
<!--                    this.arrStatusCampaignScript = this.filterResult;-->
<!--                    this.arrAdsOutputScript = this.filterResult;-->
<!--                    this.arrTagCampaignScript = this.filterResult;-->
<!--                    this.arrNewsTypeCampaignScript = this.filterResult;-->
<!--                    this.arrGroupCampaignScript = this.filterResult;-->

<!--                    this.arrStatusCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.status === item.status) === index-->
<!--                    );-->
<!--                    this.arrTypeCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignType === item.campaignType) === index-->
<!--                    );-->
<!--                    this.arrNewsTypeCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignNewsType === item.campaignNewsType) === index-->
<!--                    );-->
<!--                    this.arrAdsOutput = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.numberAdv === item.numberAdv) === index-->
<!--                    );-->
<!--                    this.arrCampaignGroup = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignGroupName === item.campaignGroupName) === index-->
<!--                    );-->
<!--                    // this.arrTagCampaign = this.filterResult.filter(-->
<!--                    //     (item, index, self) => self.findIndex((m) => m.campaignTag === item.campaignTag) === index-->
<!--                    // );-->

<!--                    this.sumNumberRequest = this.filterResult.reduce((acc, curr) => acc + curr.numberRequest, 0);-->
<!--                    this.sumNumberAdv = this.filterResult.reduce((acc, curr) => acc + curr.numberAdv, 0);-->
<!--                    this.sumAdsSentSuccess = this.filterResult.reduce((acc, curr) => acc + curr.adsSentSuccessCount, 0);-->
<!--                    this.sumAdsSubSentSuccessCount = this.filterResult.reduce((acc, curr) => acc + curr.adsSubSentSuccessCount, 0);-->
<!--                    this.sumNumberInteractRegSuccess = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractRegSuccess, 0);-->
<!--                    this.sumNumberInteractRegFail = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractRegFail, 0);-->
<!--                    this.sumNumberInteractClickPage = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractClickPage, 0);-->
<!--                    this.sumInteractSum = this.filterResult.reduce((acc, curr) => acc + curr.interactSum, 0);-->
<!--                    this.sumNumberConversionsRegSuccess = this.filterResult.reduce((acc, curr) => acc + curr.numberConversionsRegSuccess, 0);-->
<!--                    this.sumRateInteractRegSuccess = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateInteractRegFail = ((this.sumNumberInteractRegFail / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateInteractClickPage = ((this.sumNumberInteractClickPage / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateConversions = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumNumberRejectAds = this.filterResult.reduce((acc, curr) => acc + curr.numberRejectAds, 0);-->
<!--                    this.sumNumberRateRejectAds = ((this.sumNumberRejectAds / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumBudget = this.filterResult.reduce((acc, curr) => acc + curr.budget, 0);-->
<!--                } else {-->
<!--                    this.tableData = this.arrNameCampaign;-->
<!--                    this.arrTypeCampaignScript1 = this.arrNameCampaign;-->
<!--                    this.arrStatusCampaignScript = this.arrNameCampaign;-->
<!--                    this.arrAdsOutputScript = this.arrNameCampaign;-->
<!--                    this.arrTagCampaignScript = this.arrNameCampaign;-->
<!--                    this.arrNewsTypeCampaignScript = this.arrNameCampaign;-->
<!--                    this.arrGroupCampaignScript = this.arrNameCampaign;-->

<!--                    this.arrStatusCampaign = this.arrNameCampaign.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.status === item.status) === index-->
<!--                    );-->
<!--                    this.arrTypeCampaign = this.arrNameCampaign.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignType === item.campaignType) === index-->
<!--                    );-->
<!--                    this.arrNewsTypeCampaign = this.arrNameCampaign.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignNewsType === item.campaignNewsType) === index-->
<!--                    );-->
<!--                    this.arrAdsOutput = this.arrNameCampaign.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.numberAdv === item.numberAdv) === index-->
<!--                    );-->
<!--                    this.arrCampaignGroup = this.arrNameCampaign.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignGroupName === item.campaignGroupName) === index-->
<!--                    );-->
<!--                    // this.arrTagCampaign = this.arrNameCampaign.filter(-->
<!--                    //     (item, index, self) => self.findIndex((m) => m.campaignTag === item.campaignTag) === index-->
<!--                    // );-->

<!--                    this.sumNumberRequest = this.arrNameCampaign.reduce((acc, curr) => acc + curr.numberRequest, 0);-->
<!--                    this.sumNumberAdv = this.arrNameCampaign.reduce((acc, curr) => acc + curr.numberAdv, 0);-->
<!--                    this.sumAdsSentSuccess = this.arrNameCampaign.reduce((acc, curr) => acc + curr.adsSentSuccessCount, 0);-->
<!--                    this.sumAdsSubSentSuccessCount = this.arrNameCampaign.reduce((acc, curr) => acc + curr.adsSubSentSuccessCount, 0);-->
<!--                    this.sumNumberInteractRegSuccess = this.arrNameCampaign.reduce((acc, curr) => acc + curr.numberInteractRegSuccess, 0);-->
<!--                    this.sumNumberInteractRegFail = this.arrNameCampaign.reduce((acc, curr) => acc + curr.numberInteractRegFail, 0);-->
<!--                    this.sumNumberInteractClickPage = this.arrNameCampaign.reduce((acc, curr) => acc + curr.numberInteractClickPage, 0);-->
<!--                    this.sumInteractSum = this.arrNameCampaign.reduce((acc, curr) => acc + curr.interactSum, 0);-->
<!--                    this.sumNumberConversionsRegSuccess = this.arrNameCampaign.reduce((acc, curr) => acc + curr.numberConversionsRegSuccess, 0);-->
<!--                    this.sumRateInteractRegSuccess = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumRateInteractRegFail = ((this.sumNumberInteractRegFail / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumRateInteractClickPage = ((this.sumNumberInteractClickPage / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumRateConversions = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumNumberRejectAds = this.arrNameCampaign.reduce((acc, curr) => acc + curr.numberRejectAds, 0);-->
<!--                    this.sumNumberRateRejectAds = ((this.sumNumberRejectAds / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumBudget = this.arrNameCampaign.reduce((acc, curr) => acc + curr.budget, 0);-->
<!--                }-->
<!--            } else if (type === 3) {-->
<!--                if (this.filterOptionTagSelected.length > 0) {-->
<!--                    // this.filterOptionTagSelected.forEach(itemType => {-->
<!--                    //     this.arrTagCampaignScript.filter(item => {-->
<!--                    //         if (item.campaignTag.includes(itemType.tagName)) {-->
<!--                    //             return this.filterResult.push(item);-->
<!--                    //         }-->
<!--                    //     })-->
<!--                    //     console.log(this.filterResult, 'filterResult')-->
<!--                    //     // result = this.arrTagCampaignScript.filter(item => item.campaignTag === itemType.campaignTag);-->
<!--                    //     //-->
<!--                    //     // this.filterResult.push(...result);-->
<!--                    // });-->
<!--                    this.filterResult = this.arrTagCampaignScript.filter(item => {-->
<!--                        const tags = item.campaignTag.split(' ');-->
<!--                        return this.filterOptionTagSelected.some(tag => tags.includes(tag.tagName));-->
<!--                    });-->

<!--                    this.tableData = this.filterResult;-->
<!--                    this.arrTypeCampaignScript1 = this.filterResult;-->
<!--                    this.arrStatusCampaignScript = this.filterResult;-->
<!--                    this.arrAdsOutputScript = this.filterResult;-->
<!--                    this.arrNameCampaign = this.filterResult;-->
<!--                    this.arrNewsTypeCampaignScript = this.filterResult;-->
<!--                    this.arrGroupCampaignScript = this.filterResult;-->

<!--                    this.arrStatusCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.status === item.status) === index-->
<!--                    );-->
<!--                    this.arrTypeCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignType === item.campaignType) === index-->
<!--                    );-->
<!--                    this.arrNewsTypeCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignNewsType === item.campaignNewsType) === index-->
<!--                    );-->
<!--                    this.arrAdsOutput = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.numberAdv === item.numberAdv) === index-->
<!--                    );-->
<!--                    this.arrCampaignGroup = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignGroupName === item.campaignGroupName) === index-->
<!--                    );-->

<!--                    this.sumNumberRequest = this.filterResult.reduce((acc, curr) => acc + curr.numberRequest, 0);-->
<!--                    this.sumNumberAdv = this.filterResult.reduce((acc, curr) => acc + curr.numberAdv, 0);-->
<!--                    this.sumAdsSentSuccess = this.filterResult.reduce((acc, curr) => acc + curr.adsSentSuccessCount, 0);-->
<!--                    this.sumAdsSubSentSuccessCount = this.filterResult.reduce((acc, curr) => acc + curr.adsSubSentSuccessCount, 0);-->
<!--                    this.sumNumberInteractRegSuccess = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractRegSuccess, 0);-->
<!--                    this.sumNumberInteractRegFail = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractRegFail, 0);-->
<!--                    this.sumNumberInteractClickPage = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractClickPage, 0);-->
<!--                    this.sumInteractSum = this.filterResult.reduce((acc, curr) => acc + curr.interactSum, 0);-->
<!--                    this.sumNumberConversionsRegSuccess = this.filterResult.reduce((acc, curr) => acc + curr.numberConversionsRegSuccess, 0);-->
<!--                    this.sumRateInteractRegSuccess = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateInteractRegFail = ((this.sumNumberInteractRegFail / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateInteractClickPage = ((this.sumNumberInteractClickPage / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateConversions = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumNumberRejectAds = this.filterResult.reduce((acc, curr) => acc + curr.numberRejectAds, 0);-->
<!--                    this.sumNumberRateRejectAds = ((this.sumNumberRejectAds / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumBudget = this.filterResult.reduce((acc, curr) => acc + curr.budget, 0);-->
<!--                } else {-->
<!--                    this.tableData = this.arrTagCampaignScript;-->
<!--                    this.arrTypeCampaignScript1 = this.arrTagCampaignScript;-->
<!--                    this.arrStatusCampaignScript = this.arrTagCampaignScript;-->
<!--                    this.arrAdsOutputScript = this.arrTagCampaignScript;-->
<!--                    this.arrNameCampaign = this.arrTagCampaignScript;-->
<!--                    this.arrNewsTypeCampaignScript = this.arrTagCampaignScript;-->
<!--                    this.arrGroupCampaignScript = this.arrTagCampaignScript;-->

<!--                    this.arrStatusCampaign = this.arrTagCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.status === item.status) === index-->
<!--                    );-->
<!--                    this.arrTypeCampaign = this.arrTagCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignType === item.campaignType) === index-->
<!--                    );-->
<!--                    this.arrNewsTypeCampaign = this.arrTagCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignNewsType === item.campaignNewsType) === index-->
<!--                    );-->
<!--                    this.arrAdsOutput = this.arrTagCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.numberAdv === item.numberAdv) === index-->
<!--                    );-->
<!--                    this.arrCampaignGroup = this.arrTagCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignGroupName === item.campaignGroupName) === index-->
<!--                    );-->
<!--                }-->
<!--            } else if (type === 4) {-->
<!--                if (this.filterOptionGroupSelected.length > 0) {-->
<!--                    this.filterOptionGroupSelected.forEach(itemType => {-->
<!--                        result = this.arrGroupCampaignScript.filter(item => item.campaignGroupName === itemType.campaignGroupName);-->

<!--                        this.filterResult.push(...result);-->
<!--                    });-->
<!--                    this.tableData = this.filterResult;-->
<!--                    this.arrTypeCampaignScript1 = this.filterResult;-->
<!--                    this.arrStatusCampaignScript = this.filterResult;-->
<!--                    this.arrAdsOutputScript = this.filterResult;-->
<!--                    this.arrNameCampaign = this.filterResult;-->
<!--                    this.arrTagCampaignScript = this.filterResult;-->
<!--                    this.arrNewsTypeCampaignScript = this.filterResult;-->

<!--                    this.arrStatusCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.status === item.status) === index-->
<!--                    );-->
<!--                    this.arrTypeCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignType === item.campaignType) === index-->
<!--                    );-->
<!--                    this.arrNewsTypeCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignNewsType === item.campaignNewsType) === index-->
<!--                    );-->
<!--                    this.arrAdsOutput = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.numberAdv === item.numberAdv) === index-->
<!--                    );-->
<!--                    // this.arrTagCampaign = this.filterResult.filter(-->
<!--                    //     (item, index, self) => self.findIndex((m) => m.campaignTag === item.campaignTag) === index-->
<!--                    // );-->
<!--                    this.sumNumberRequest = this.filterResult.reduce((acc, curr) => acc + curr.numberRequest, 0);-->
<!--                    this.sumNumberAdv = this.filterResult.reduce((acc, curr) => acc + curr.numberAdv, 0);-->
<!--                    this.sumAdsSentSuccess = this.filterResult.reduce((acc, curr) => acc + curr.adsSentSuccessCount, 0);-->
<!--                    this.sumAdsSubSentSuccessCount = this.filterResult.reduce((acc, curr) => acc + curr.adsSubSentSuccessCount, 0);-->
<!--                    this.sumNumberInteractRegSuccess = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractRegSuccess, 0);-->
<!--                    this.sumNumberInteractRegFail = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractRegFail, 0);-->
<!--                    this.sumNumberInteractClickPage = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractClickPage, 0);-->
<!--                    this.sumInteractSum = this.filterResult.reduce((acc, curr) => acc + curr.interactSum, 0);-->
<!--                    this.sumNumberConversionsRegSuccess = this.filterResult.reduce((acc, curr) => acc + curr.numberConversionsRegSuccess, 0);-->
<!--                    this.sumRateInteractRegSuccess = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumRateInteractRegFail = ((this.sumNumberInteractRegFail / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumRateInteractClickPage = ((this.sumNumberInteractClickPage / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumRateConversions = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumNumberRejectAds = this.filterResult.reduce((acc, curr) => acc + curr.numberRejectAds, 0);-->
<!--                    this.sumNumberRateRejectAds = ((this.sumNumberRejectAds / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumBudget = this.filterResult.reduce((acc, curr) => acc + curr.budget, 0);-->
<!--                } else {-->
<!--                    this.tableData = this.arrGroupCampaignScript;-->
<!--                    this.arrTypeCampaignScript1 = this.arrGroupCampaignScript;-->
<!--                    this.arrStatusCampaignScript = this.arrGroupCampaignScript;-->
<!--                    this.arrAdsOutputScript = this.arrGroupCampaignScript;-->
<!--                    this.arrNameCampaign = this.arrGroupCampaignScript;-->
<!--                    this.arrTagCampaignScript = this.arrGroupCampaignScript;-->
<!--                    this.arrNewsTypeCampaignScript = this.arrGroupCampaignScript;-->

<!--                    this.arrStatusCampaign = this.arrGroupCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.status === item.status) === index-->
<!--                    );-->
<!--                    this.arrTypeCampaign = this.arrGroupCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignType === item.campaignType) === index-->
<!--                    );-->
<!--                    this.arrNewsTypeCampaign = this.arrGroupCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignNewsType === item.campaignNewsType) === index-->
<!--                    );-->
<!--                    this.arrAdsOutput = this.arrGroupCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.numberAdv === item.numberAdv) === index-->
<!--                    );-->
<!--                    // this.arrTagCampaign = this.arrGroupCampaignScript.filter(-->
<!--                    //     (item, index, self) => self.findIndex((m) => m.campaignTag === item.campaignTag) === index-->
<!--                    // );-->
<!--                }-->
<!--            } else if (type === 5) {-->
<!--                if (this.filterOptionStatusSelected.length > 0) {-->
<!--                    this.filterOptionStatusSelected.forEach(itemType => {-->
<!--                        result = this.arrStatusCampaignScript.filter(item => item.status === itemType.status);-->

<!--                        this.filterResult.push(...result);-->
<!--                    });-->
<!--                    this.tableData = this.filterResult;-->
<!--                    this.arrTypeCampaignScript1 = this.filterResult;-->
<!--                    this.arrNameCampaign = this.filterResult;-->
<!--                    this.arrAdsOutputScript = this.filterResult;-->
<!--                    this.arrTagCampaignScript = this.filterResult;-->
<!--                    this.arrGroupCampaignScript = this.filterResult;-->
<!--                    this.arrNewsTypeCampaignScript = this.filterResult;-->

<!--                    this.arrTypeCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignType === item.campaignType) === index-->
<!--                    );-->
<!--                    this.arrNewsTypeCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignNewsType === item.campaignNewsType) === index-->
<!--                    );-->
<!--                    this.arrAdsOutput = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.numberAdv === item.numberAdv) === index-->
<!--                    );-->
<!--                    this.arrCampaignGroup = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignGroupName === item.campaignGroupName) === index-->
<!--                    );-->
<!--                    // this.arrTagCampaign = this.filterResult.filter(-->
<!--                    //     (item, index, self) => self.findIndex((m) => m.campaignTag === item.campaignTag) === index-->
<!--                    // );-->

<!--                    this.sumNumberRequest = this.filterResult.reduce((acc, curr) => acc + curr.numberRequest, 0);-->
<!--                    this.sumNumberAdv = this.filterResult.reduce((acc, curr) => acc + curr.numberAdv, 0);-->
<!--                    this.sumAdsSentSuccess = this.filterResult.reduce((acc, curr) => acc + curr.adsSentSuccessCount, 0);-->
<!--                    this.sumAdsSubSentSuccessCount = this.filterResult.reduce((acc, curr) => acc + curr.adsSubSentSuccessCount, 0);-->
<!--                    this.sumNumberInteractRegSuccess = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractRegSuccess, 0);-->
<!--                    this.sumNumberInteractRegFail = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractRegFail, 0);-->
<!--                    this.sumNumberInteractClickPage = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractClickPage, 0);-->
<!--                    this.sumInteractSum = this.filterResult.reduce((acc, curr) => acc + curr.interactSum, 0);-->
<!--                    this.sumNumberConversionsRegSuccess = this.filterResult.reduce((acc, curr) => acc + curr.numberConversionsRegSuccess, 0);-->
<!--                    this.sumRateInteractRegSuccess = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateInteractRegFail = ((this.sumNumberInteractRegFail / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateInteractClickPage = ((this.sumNumberInteractClickPage / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateConversions = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumNumberRejectAds = this.filterResult.reduce((acc, curr) => acc + curr.numberRejectAds, 0);-->
<!--                    this.sumNumberRateRejectAds = ((this.sumNumberRejectAds / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumBudget = this.filterResult.reduce((acc, curr) => acc + curr.budget, 0);-->
<!--                } else {-->
<!--                    this.tableData = this.arrStatusCampaignScript;-->
<!--                    this.arrTypeCampaignScript1 = this.arrStatusCampaignScript;-->
<!--                    this.arrNameCampaign = this.arrStatusCampaignScript;-->
<!--                    this.arrAdsOutputScript = this.arrStatusCampaignScript;-->
<!--                    this.arrTagCampaignScript = this.arrStatusCampaignScript;-->
<!--                    this.arrGroupCampaignScript = this.arrStatusCampaignScript;-->
<!--                    this.arrNewsTypeCampaignScript = this.arrStatusCampaignScript;-->

<!--                    this.arrTypeCampaign = this.arrStatusCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignType === item.campaignType) === index-->
<!--                    );-->
<!--                    this.arrNewsTypeCampaign = this.arrStatusCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignNewsType === item.campaignNewsType) === index-->
<!--                    );-->
<!--                    this.arrAdsOutput = this.arrStatusCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.numberAdv === item.numberAdv) === index-->
<!--                    );-->
<!--                    this.arrCampaignGroup = this.arrStatusCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignGroupName === item.campaignGroupName) === index-->
<!--                    );-->
<!--                    // this.arrTagCampaign = this.arrStatusCampaignScript.filter(-->
<!--                    //     (item, index, self) => self.findIndex((m) => m.campaignTag === item.campaignTag) === index-->
<!--                    // );-->

<!--                    this.sumNumberRequest = this.arrStatusCampaignScript.reduce((acc, curr) => acc + curr.numberRequest, 0);-->
<!--                    this.sumNumberAdv = this.arrStatusCampaignScript.reduce((acc, curr) => acc + curr.numberAdv, 0);-->
<!--                    this.sumAdsSentSuccess = this.arrStatusCampaignScript.reduce((acc, curr) => acc + curr.adsSentSuccessCount, 0);-->
<!--                    this.sumAdsSubSentSuccessCount = this.arrStatusCampaignScript.reduce((acc, curr) => acc + curr.adsSubSentSuccessCount, 0);-->
<!--                    this.sumNumberInteractRegSuccess = this.arrStatusCampaignScript.reduce((acc, curr) => acc + curr.numberInteractRegSuccess, 0);-->
<!--                    this.sumNumberInteractRegFail = this.arrStatusCampaignScript.reduce((acc, curr) => acc + curr.numberInteractRegFail, 0);-->
<!--                    this.sumNumberInteractClickPage = this.arrStatusCampaignScript.reduce((acc, curr) => acc + curr.numberInteractClickPage, 0);-->
<!--                    this.sumInteractSum = this.arrStatusCampaignScript.reduce((acc, curr) => acc + curr.interactSum, 0);-->
<!--                    this.sumNumberConversionsRegSuccess = this.arrStatusCampaignScript.reduce((acc, curr) => acc + curr.numberConversionsRegSuccess, 0);-->
<!--                    this.sumRateInteractRegSuccess = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumRateInteractRegFail = ((this.sumNumberInteractRegFail / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumRateInteractClickPage = ((this.sumNumberInteractClickPage / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumRateConversions = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumNumberRejectAds = this.arrStatusCampaignScript.reduce((acc, curr) => acc + curr.numberRejectAds, 0);-->
<!--                    this.sumNumberRateRejectAds = ((this.sumNumberRejectAds / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumBudget = this.arrStatusCampaignScript.reduce((acc, curr) => acc + curr.budget, 0);-->
<!--                }-->
<!--            } else if (type === 6) {-->
<!--                if (this.filterOptionNewTypeSelected.length > 0) {-->
<!--                    this.filterOptionNewTypeSelected.forEach(itemType => {-->
<!--                        result = this.arrNewsTypeCampaignScript.filter(item => item.campaignNewsType === itemType.campaignNewsType);-->

<!--                        this.filterResult.push(...result);-->
<!--                    });-->
<!--                    this.tableData = this.filterResult;-->
<!--                    this.arrTypeCampaignScript1 = this.filterResult;-->
<!--                    this.arrNameCampaign = this.filterResult;-->
<!--                    this.arrStatusCampaignScript = this.filterResult;-->
<!--                    this.arrTagCampaignScript = this.filterResult;-->
<!--                    this.arrAdsOutputScript = this.filterResult;-->
<!--                    this.arrGroupCampaignScript = this.filterResult;-->

<!--                    this.arrTypeCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignType === item.campaignType) === index-->
<!--                    );-->
<!--                    this.arrStatusCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.status === item.status) === index-->
<!--                    );-->
<!--                    this.arrAdsOutput = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.numberAdv === item.numberAdv) === index-->
<!--                    );-->
<!--                    this.arrCampaignGroup = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignGroupName === item.campaignGroupName) === index-->
<!--                    );-->
<!--                    // this.arrTagCampaign = this.filterResult.filter(-->
<!--                    //     (item, index, self) => self.findIndex((m) => m.campaignTag === item.campaignTag) === index-->
<!--                    // );-->

<!--                    this.sumNumberRequest = this.filterResult.reduce((acc, curr) => acc + curr.numberRequest, 0);-->
<!--                    this.sumNumberAdv = this.filterResult.reduce((acc, curr) => acc + curr.numberAdv, 0);-->
<!--                    this.sumAdsSentSuccess = this.filterResult.reduce((acc, curr) => acc + curr.adsSentSuccessCount, 0);-->
<!--                    this.sumAdsSubSentSuccessCount = this.filterResult.reduce((acc, curr) => acc + curr.adsSubSentSuccessCount, 0);-->
<!--                    this.sumNumberInteractRegSuccess = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractRegSuccess, 0);-->
<!--                    this.sumNumberInteractRegFail = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractRegFail, 0);-->
<!--                    this.sumNumberInteractClickPage = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractClickPage, 0);-->
<!--                    this.sumInteractSum = this.filterResult.reduce((acc, curr) => acc + curr.interactSum, 0);-->
<!--                    this.sumNumberConversionsRegSuccess = this.filterResult.reduce((acc, curr) => acc + curr.numberConversionsRegSuccess, 0);-->
<!--                    this.sumRateInteractRegSuccess = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumRateInteractRegFail = ((this.sumNumberInteractRegFail / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumRateInteractClickPage = ((this.sumNumberInteractClickPage / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumRateConversions = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumNumberRejectAds = this.filterResult.reduce((acc, curr) => acc + curr.numberRejectAds, 0);-->
<!--                    this.sumNumberRateRejectAds = ((this.sumNumberRejectAds / this.sumAdsSubSentSuccessCount) *100).toFixed(2);-->
<!--                    this.sumBudget = this.filterResult.reduce((acc, curr) => acc + curr.budget, 0);-->
<!--                } else {-->
<!--                    this.tableData = this.arrNewsTypeCampaignScript;-->
<!--                    this.arrTypeCampaignScript1 = this.arrNewsTypeCampaignScript;-->
<!--                    this.arrNameCampaign = this.arrNewsTypeCampaignScript;-->
<!--                    this.arrStatusCampaignScript = this.arrNewsTypeCampaignScript;-->
<!--                    this.arrTagCampaignScript = this.arrNewsTypeCampaignScript;-->
<!--                    this.arrAdsOutputScript = this.arrNewsTypeCampaignScript;-->
<!--                    this.arrGroupCampaignScript = this.arrNewsTypeCampaignScript;-->

<!--                    this.arrTypeCampaign = this.arrNewsTypeCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignType === item.campaignType) === index-->
<!--                    );-->
<!--                    this.arrStatusCampaign = this.arrNewsTypeCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.status === item.status) === index-->
<!--                    );-->
<!--                    this.arrAdsOutput = this.arrNewsTypeCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.numberAdv === item.numberAdv) === index-->
<!--                    );-->
<!--                    this.arrCampaignGroup = this.arrNewsTypeCampaignScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignGroupName === item.campaignGroupName) === index-->
<!--                    );-->
<!--                    // this.arrTagCampaign = this.arrNewsTypeCampaignScript.filter(-->
<!--                    //     (item, index, self) => self.findIndex((m) => m.campaignTag === item.campaignTag) === index-->
<!--                    // );-->

<!--                    this.sumNumberRequest = this.arrNewsTypeCampaignScript.reduce((acc, curr) => acc + curr.numberRequest, 0);-->
<!--                    this.sumNumberAdv = this.arrNewsTypeCampaignScript.reduce((acc, curr) => acc + curr.numberAdv, 0);-->
<!--                    this.sumAdsSentSuccess = this.arrNewsTypeCampaignScript.reduce((acc, curr) => acc + curr.adsSentSuccessCount, 0);-->
<!--                    this.sumAdsSubSentSuccessCount = this.arrNewsTypeCampaignScript.reduce((acc, curr) => acc + curr.adsSubSentSuccessCount, 0);-->
<!--                    this.sumNumberInteractRegSuccess = this.arrNewsTypeCampaignScript.reduce((acc, curr) => acc + curr.numberInteractRegSuccess, 0);-->
<!--                    this.sumNumberInteractRegFail = this.arrNewsTypeCampaignScript.reduce((acc, curr) => acc + curr.numberInteractRegFail, 0);-->
<!--                    this.sumNumberInteractClickPage = this.arrNewsTypeCampaignScript.reduce((acc, curr) => acc + curr.numberInteractClickPage, 0);-->
<!--                    this.sumInteractSum = this.arrNewsTypeCampaignScript.reduce((acc, curr) => acc + curr.interactSum, 0);-->
<!--                    this.sumNumberConversionsRegSuccess = this.arrNewsTypeCampaignScript.reduce((acc, curr) => acc + curr.numberConversionsRegSuccess, 0);-->
<!--                    this.sumRateInteractRegSuccess = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateInteractRegFail = ((this.sumNumberInteractRegFail / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateInteractClickPage = ((this.sumNumberInteractClickPage / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateConversions = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumNumberRejectAds = this.arrNewsTypeCampaignScript.reduce((acc, curr) => acc + curr.numberRejectAds, 0);-->
<!--                    this.sumNumberRateRejectAds = ((this.sumNumberRejectAds / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumBudget = this.arrNewsTypeCampaignScript.reduce((acc, curr) => acc + curr.budget, 0);-->
<!--                }-->
<!--            } else if (type === 7) {-->
<!--                if (this.filterOptionAdsSelected.length > 0) {-->
<!--                    this.filterOptionAdsSelected.forEach(itemType => {-->
<!--                        result = this.arrAdsOutputScript.filter(item => item.numberAdv === itemType.numberAdv);-->

<!--                        this.filterResult.push(...result);-->
<!--                    });-->
<!--                    this.tableData = this.filterResult;-->
<!--                    this.arrTypeCampaignScript1 = this.filterResult;-->
<!--                    this.arrNameCampaign = this.filterResult;-->
<!--                    this.arrStatusCampaignScript = this.filterResult;-->
<!--                    this.arrTagCampaignScript = this.filterResult;-->
<!--                    this.arrNewsTypeCampaignScript = this.filterResult;-->
<!--                    this.arrGroupCampaignScript = this.filterResult;-->

<!--                    this.arrTypeCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignType === item.campaignType) === index-->
<!--                    );-->
<!--                    this.arrStatusCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.status === item.status) === index-->
<!--                    );-->
<!--                    this.arrNewsTypeCampaign = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignNewsType === item.campaignNewsType) === index-->
<!--                    );-->
<!--                    this.arrCampaignGroup = this.filterResult.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignGroupName === item.campaignGroupName) === index-->
<!--                    );-->
<!--                    // this.arrTagCampaign = this.filterResult.filter(-->
<!--                    //     (item, index, self) => self.findIndex((m) => m.campaignTag === item.campaignTag) === index-->
<!--                    // );-->

<!--                    this.sumNumberRequest = this.filterResult.reduce((acc, curr) => acc + curr.numberRequest, 0);-->
<!--                    this.sumNumberAdv = this.filterResult.reduce((acc, curr) => acc + curr.numberAdv, 0);-->
<!--                    this.sumAdsSentSuccess = this.filterResult.reduce((acc, curr) => acc + curr.adsSentSuccessCount, 0);-->
<!--                    this.sumAdsSubSentSuccessCount = this.filterResult.reduce((acc, curr) => acc + curr.adsSubSentSuccessCount, 0);-->
<!--                    this.sumNumberInteractRegSuccess = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractRegSuccess, 0);-->
<!--                    this.sumNumberInteractRegFail = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractRegFail, 0);-->
<!--                    this.sumNumberInteractClickPage = this.filterResult.reduce((acc, curr) => acc + curr.numberInteractClickPage, 0);-->
<!--                    this.sumInteractSum = this.filterResult.reduce((acc, curr) => acc + curr.interactSum, 0);-->
<!--                    this.sumNumberConversionsRegSuccess = this.filterResult.reduce((acc, curr) => acc + curr.numberConversionsRegSuccess, 0);-->
<!--                    this.sumRateInteractRegSuccess = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateInteractRegFail = ((this.sumNumberInteractRegFail / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateInteractClickPage = ((this.sumNumberInteractClickPage / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateConversions = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumNumberRejectAds = this.filterResult.reduce((acc, curr) => acc + curr.numberRejectAds, 0);-->
<!--                    this.sumNumberRateRejectAds = ((this.sumNumberRejectAds / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumBudget = this.filterResult.reduce((acc, curr) => acc + curr.budget, 0);-->
<!--                } else {-->
<!--                    this.tableData = this.arrAdsOutputScript;-->
<!--                    this.arrTypeCampaignScript1 = this.arrAdsOutputScript;-->
<!--                    this.arrNameCampaign = this.arrAdsOutputScript;-->
<!--                    this.arrStatusCampaignScript = this.arrAdsOutputScript;-->
<!--                    this.arrTagCampaignScript = this.arrAdsOutputScript;-->
<!--                    this.arrNewsTypeCampaignScript = this.arrAdsOutputScript;-->
<!--                    this.arrGroupCampaignScript = this.arrAdsOutputScript;-->

<!--                    this.arrTypeCampaign = this.arrAdsOutputScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignType === item.campaignType) === index-->
<!--                    );-->
<!--                    this.arrStatusCampaign = this.arrAdsOutputScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.status === item.status) === index-->
<!--                    );-->
<!--                    this.arrNewsTypeCampaign = this.arrAdsOutputScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignNewsType === item.campaignNewsType) === index-->
<!--                    );-->
<!--                    this.arrCampaignGroup = this.arrAdsOutputScript.filter(-->
<!--                        (item, index, self) => self.findIndex((m) => m.campaignGroupName === item.campaignGroupName) === index-->
<!--                    );-->
<!--                    // this.arrTagCampaign = this.arrAdsOutput.filter(-->
<!--                    //     (item, index, self) => self.findIndex((m) => m.campaignTag === item.campaignTag) === index-->
<!--                    // );-->

<!--                    this.sumNumberRequest = this.arrAdsOutputScript.reduce((acc, curr) => acc + curr.numberRequest, 0);-->
<!--                    this.sumNumberAdv = this.arrAdsOutputScript.reduce((acc, curr) => acc + curr.numberAdv, 0);-->
<!--                    this.sumAdsSentSuccess = this.arrAdsOutputScript.reduce((acc, curr) => acc + curr.adsSentSuccessCount, 0);-->
<!--                    this.sumAdsSubSentSuccessCount = this.arrAdsOutputScript.reduce((acc, curr) => acc + curr.adsSubSentSuccessCount, 0);-->
<!--                    this.sumNumberInteractRegSuccess = this.arrAdsOutputScript.reduce((acc, curr) => acc + curr.numberInteractRegSuccess, 0);-->
<!--                    this.sumNumberInteractRegFail = this.arrAdsOutputScript.reduce((acc, curr) => acc + curr.numberInteractRegFail, 0);-->
<!--                    this.sumNumberInteractClickPage = this.arrAdsOutputScript.reduce((acc, curr) => acc + curr.numberInteractClickPage, 0);-->
<!--                    this.sumInteractSum = this.arrAdsOutputScript.reduce((acc, curr) => acc + curr.interactSum, 0);-->
<!--                    this.sumNumberConversionsRegSuccess = this.arrAdsOutputScript.reduce((acc, curr) => acc + curr.numberConversionsRegSuccess, 0);-->
<!--                    this.sumRateInteractRegSuccess = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateInteractRegFail = ((this.sumNumberInteractRegFail / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateInteractClickPage = ((this.sumNumberInteractClickPage / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumRateConversions = ((this.sumNumberInteractRegSuccess / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumNumberRejectAds = this.arrAdsOutputScript.reduce((acc, curr) => acc + curr.numberRejectAds, 0);-->
<!--                    this.sumNumberRateRejectAds = ((this.sumNumberRejectAds / this.sumAdsSubSentSuccessCount) * 100).toFixed(2);-->
<!--                    this.sumBudget = this.arrAdsOutputScript.reduce((acc, curr) => acc + curr.budget, 0);-->
<!--                }-->
<!--            }-->
<!--        },-->
<!--        handleRowTable(itemRow) {-->
<!--            console.log(itemRow);-->
<!--            this.tableRowSelected = itemRow;-->
<!--        },-->
<!--        // handleActionSetting() {-->
<!--        //     this.checkboxes.forEach(item => {-->
<!--        //         if (item.show === false) {-->
<!--        //             if (item.id === 1) {-->
<!--        //                 this.showCampaignName = false;-->
<!--        //                 this.numberTotalTable -= 1;-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'campaignName')-->
<!--        //             }-->
<!--        //             if (item.id === 2) {-->
<!--        //                 this.numberTotalTable -= 1;-->
<!--        //                 this.showCampaignCode = false;-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'campaignCode')-->
<!--        //             }-->
<!--        //             if (item.id === 3) {-->
<!--        //                 this.numberTotalTable -= 1;-->
<!--        //                 this.showPersonCreated = false;-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'personCreated')-->
<!--        //             }-->
<!--        //             if (item.id === 4) {-->
<!--        //                 this.numberTotalTable -= 1;-->
<!--        //                 this.showCreateTime = false;-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'createTime')-->
<!--        //             }-->
<!--        //             if (item.id === 5) {-->
<!--        //                 this.numberTotalTable -= 1;-->
<!--        //                 this.showPersonUpdated = false;-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'personUpdated')-->
<!--        //             }-->
<!--        //             if (item.id === 6) {-->
<!--        //                 this.numberTotalTable -= 1;-->
<!--        //                 this.showCampaignStatus = false;-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'status')-->
<!--        //             }-->
<!--        //             if (item.id === 7) {-->
<!--        //                 this.numberTotalTable -= 1;-->
<!--        //                 this.showCampaignType = false;-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'campaignType')-->
<!--        //             }-->
<!--        //             if (item.id === 8) {-->
<!--        //                 this.numberTotalTable -= 1;-->
<!--        //                 this.showCampaignNewsType = false;-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'campaignNewsType')-->
<!--        //             }-->
<!--        //             if (item.id === 9) {-->
<!--        //                 this.showNumberRequest = false;-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'numberRequest')-->
<!--        //             }-->
<!--        //             if (item.id === 10) {-->
<!--        //                 this.showNumberAds = false;-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'numberAdv')-->
<!--        //             }-->
<!--        //             if (item.id === 11 && item.status === 0) {-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'numberInteractRegSuccess')-->
<!--        //                 this.numberColSpanInteract -= 1;-->
<!--        //                 item.status = 1;-->
<!--        //                 this.showNumberInteractRegSuccess = false;-->
<!--        //             }-->
<!--        //             if (item.id === 12 && item.status === 0) {-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'numberInteractRegFail')-->
<!--        //                 this.numberColSpanInteract -= 1;-->
<!--        //                 item.status = 1;-->
<!--        //                 this.showNumberInteractRegFail = false;-->
<!--        //             }-->
<!--        //             if (item.id === 13 && item.status === 0) {-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'numberInteractClickPage')-->
<!--        //                 this.numberColSpanInteract -= 1;-->
<!--        //                 item.status = 1;-->
<!--        //                 this.showNumberInteractClickPage = false;-->
<!--        //             }-->
<!--        //             if (item.id === 14 && item.status === 0) {-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'interactSum')-->
<!--        //                 this.numberColSpanInteract -= 1;-->
<!--        //                 item.status = 1;-->
<!--        //                 this.showInteractSum = false;-->
<!--        //             }-->
<!--        //             if (item.id === 15) {-->
<!--        //                 this.showNumberConversions = false;-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'numberConversionsRegSuccess')-->
<!--        //             }-->
<!--        //             if (item.id === 16 && item.status === 0) {-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'rateInteractRegSuccessDivSubSentSuccess')-->
<!--        //                 this.numberColSpanInteractRate -= 1;-->
<!--        //                 item.status = 1;-->
<!--        //                 this.showRateInteractRegSuccess = false;-->
<!--        //             }-->
<!--        //             if (item.id === 17 && item.status === 0) {-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'rateInteractRegFailDivSubSentSuccess')-->
<!--        //                 this.numberColSpanInteractRate -= 1;-->
<!--        //                 item.status = 1;-->
<!--        //                 this.showRateInteractRegFail = false;-->
<!--        //             }-->
<!--        //             if (item.id === 18 && item.status === 0) {-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'rateInteractClickPageDivSubSentSuccess')-->
<!--        //                 this.numberColSpanInteractRate -= 1;-->
<!--        //                 item.status = 1;-->
<!--        //                 this.showRateInteractClickPage = false;-->
<!--        //             }-->
<!--        //             if (item.id === 19) {-->
<!--        //                 this.showRate4 = false;-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'rateConversions')-->
<!--        //             }-->
<!--        //             if (item.id === 20) {-->
<!--        //                 this.showNumberRejectAds = false;-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'numberRejectAds')-->
<!--        //             }-->
<!--        //             if (item.id === 21) {-->
<!--        //                 this.showRateRejectAds = false;-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'numberRateRejectAds')-->
<!--        //             }-->
<!--        //             if (item.id === 22) {-->
<!--        //                 this.showBudget = false;-->
<!--        //                 this.fields = this.fields.filter(item => item.key !== 'budget')-->
<!--        //             }-->
<!--        //         }-->
<!--        //         if (item.show === true) {-->
<!--        //             if (item.id === 1) {-->
<!--        //                 this.numberTotalTable += 1;-->
<!--        //                 this.showCampaignName = true;-->
<!--        //                 this.fields.splice(0, 0, item);-->
<!--        //             }-->
<!--        //             if (item.id === 2) {-->
<!--        //                 this.numberTotalTable += 1;-->
<!--        //                 this.showCampaignCode = true;-->
<!--        //                 this.fields.splice(1, 0, item);-->
<!--        //             }-->
<!--        //             if (item.id === 3) {-->
<!--        //                 this.numberTotalTable += 1;-->
<!--        //                 this.showPersonCreated = true;-->
<!--        //                 this.fields.splice(2, 0, item);-->
<!--        //             }-->
<!--        //             if (item.id === 4) {-->
<!--        //                 this.numberTotalTable += 1;-->
<!--        //                 this.showCreateTime = true;-->
<!--        //                 this.fields.splice(3, 0, item);-->
<!--        //             }-->
<!--        //             if (item.id === 5) {-->
<!--        //                 this.numberTotalTable += 1;-->
<!--        //                 this.showPersonUpdated = true;-->
<!--        //                 this.fields.splice(4, 0, item);-->
<!--        //             }-->
<!--        //             if (item.id === 6) {-->
<!--        //                 this.numberTotalTable += 1;-->
<!--        //                 this.showCampaignStatus = true;-->
<!--        //                 this.fields.splice(5, 0, item);-->
<!--        //             }-->
<!--        //             if (item.id === 7) {-->
<!--        //                 this.numberTotalTable += 1;-->
<!--        //                 this.showCampaignType = true;-->
<!--        //                 this.fields.splice(6, 0, item);-->
<!--        //             }-->
<!--        //             if (item.id === 8) {-->
<!--        //                 this.numberTotalTable += 1;-->
<!--        //                 this.showCampaignNewsType = true;-->
<!--        //                 this.fields.splice(7, 0, item);-->
<!--        //             }-->
<!--        //             if (item.id === 9) {-->
<!--        //                 this.showNumberRequest = true;-->
<!--        //                 this.fields.splice(8, 0, item);-->
<!--        //             }-->
<!--        //             if (item.id === 10) {-->
<!--        //                 this.showNumberAds = true;-->
<!--        //                 this.fields.splice(9, 0, item);-->
<!--        //             }-->
<!--        //             if (item.id === 11 && item.status === 1) {-->
<!--        //                 this.fields.splice(10, 0, item);-->
<!--        //                 this.numberColSpanInteract += 1;-->
<!--        //                 item.status = 0;-->
<!--        //                 this.showInteract = true;-->
<!--        //                 this.showNumberInteractRegSuccess = true;-->
<!--        //             }-->
<!--        //             if (item.id === 12 && item.status === 0) {-->
<!--        //                 this.fields.splice(11, 0, item);-->
<!--        //                 this.numberColSpanInteract += 1;-->
<!--        //                 item.status = 0;-->
<!--        //                 this.showInteract = true;-->
<!--        //                 this.showNumberInteractRegFail = true;-->
<!--        //             }-->
<!--        //             if (item.id === 13 && item.status === 0) {-->
<!--        //                 this.fields.splice(12, 0, item);-->
<!--        //                 this.numberColSpanInteract += 1;-->
<!--        //                 item.status = 0;-->
<!--        //                 this.showInteract = true;-->
<!--        //                 this.showNumberInteractClickPage = true;-->
<!--        //             }-->
<!--        //             if (item.id === 14 && item.status === 0) {-->
<!--        //                 this.fields.splice(13, 0, item);-->
<!--        //                 this.numberColSpanInteract += 1;-->
<!--        //                 item.status = 0;-->
<!--        //                 this.showInteract = true;-->
<!--        //                 this.showInteractSum = true;-->
<!--        //             }-->
<!--        //             if (item.id === 15) {-->
<!--        //                 this.showNumberConversions = true;-->
<!--        //                 this.fields.splice(14, 0, item);-->
<!--        //             }-->
<!--        //             if (item.id === 16 && item.status === 1) {-->
<!--        //                 this.fields.splice(15, 0, item);-->
<!--        //                 this.numberColSpanInteractRate += 1;-->
<!--        //                 item.status = 0;-->
<!--        //                 this.showInteractRate = true;-->
<!--        //                 this.showRateInteractRegSuccess = true;-->
<!--        //             }-->
<!--        //             if (item.id === 17 && item.status === 1) {-->
<!--        //                 this.fields.splice(16, 0, item);-->
<!--        //                 this.numberColSpanInteractRate += 1;-->
<!--        //                 item.status = 0;-->
<!--        //                 this.showInteractRate = true;-->
<!--        //                 this.showRateInteractRegFail = true;-->
<!--        //             }-->
<!--        //             if (item.id === 18 && item.status === 1) {-->
<!--        //                 this.fields.splice(17, 0, item);-->
<!--        //                 this.numberColSpanInteractRate += 1;-->
<!--        //                 item.status = 0;-->
<!--        //                 this.showInteractRate = true;-->
<!--        //                 this.showRateInteractClickPage = true;-->
<!--        //             }-->
<!--        //             if (item.id === 19) {-->
<!--        //                 this.showRate4 = true;-->
<!--        //                 this.fields.splice(18, 0, item);-->
<!--        //             }-->
<!--        //             if (item.id === 20) {-->
<!--        //                 this.showNumberRejectAds = true;-->
<!--        //                 this.fields.splice(19, 0, item);-->
<!--        //             }-->
<!--        //             if (item.id === 21) {-->
<!--        //                 this.showRateRejectAds = true;-->
<!--        //                 this.fields.splice(20, 0, item);-->
<!--        //             }-->
<!--        //             if (item.id === 22) {-->
<!--        //                 this.showBudget = true;-->
<!--        //                 this.fields.splice(21, 0, item);-->
<!--        //             }-->
<!--        //         }-->
<!--        //     })-->
<!--        // },-->
<!--        onChangeCustomColumn(item) {-->
<!--            item.show = !item.show;-->
<!--            console.log('itemJson:', JSON.parse(JSON.stringify(item)));-->
<!--            console.log('item:', item);-->

<!--            let itemCol = JSON.parse(JSON.stringify(item));-->
<!--            console.log('itemCol: ', itemCol);-->

<!--            this.allSelected = this.checkboxes.every((itemCol) => itemCol.show);-->


<!--            const allItemsAreHidden = this.checkboxes.every(itemCol => !itemCol.show);-->

<!--            if (allItemsAreHidden) {-->
<!--                this.fields = [];-->
<!--                this.showTable = false;-->
<!--            }-->

<!--            if (itemCol.show === false) {-->
<!--                if (itemCol.id === 1) {-->
<!--                    this.showCampaignName = false;-->
<!--                    this.numberTotalTable -= 1;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'campaignName')-->
<!--                }-->
<!--                if (itemCol.id === 2) {-->
<!--                    this.numberTotalTable -= 1;-->
<!--                    this.showCampaignCode = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'campaignCode')-->
<!--                }-->
<!--                if (itemCol.id === 3) {-->
<!--                    this.numberTotalTable -= 1;-->
<!--                    this.showPersonCreated = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'personCreated')-->
<!--                }-->
<!--                if (itemCol.id === 4) {-->
<!--                    this.numberTotalTable -= 1;-->
<!--                    this.showCreateTime = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'createTime')-->
<!--                }-->
<!--                if (itemCol.id === 5) {-->
<!--                    this.numberTotalTable -= 1;-->
<!--                    this.showPersonUpdated = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'personUpdated')-->
<!--                }-->
<!--                if (itemCol.id === 6) {-->
<!--                    this.numberTotalTable -= 1;-->
<!--                    this.showCampaignStatus = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'status')-->
<!--                }-->
<!--                if (itemCol.id === 7) {-->
<!--                    this.numberTotalTable -= 1;-->
<!--                    this.showCampaignType = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'campaignType')-->
<!--                }-->
<!--                if (itemCol.id === 8) {-->
<!--                    this.numberTotalTable -= 1;-->
<!--                    this.showCampaignNewsType = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'campaignNewsType')-->
<!--                }-->
<!--                if (itemCol.id === 9) {-->
<!--                    this.showNumberRequest = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'numberRequest')-->
<!--                }-->
<!--                if (itemCol.id === 10) {-->
<!--                    this.showNumberAds = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'numberAdv')-->
<!--                }-->
<!--                if (itemCol.id === 24) {-->
<!--                    this.showAdsSentSuccess = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'adsSentSuccessCount')-->
<!--                }-->
<!--                if (itemCol.id === 23) {-->
<!--                    this.showAdsSubSentSuccessCount = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'adsSubSentSuccessCount')-->
<!--                }-->
<!--                if (itemCol.id === 11) {-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'numberInteractRegSuccess')-->
<!--                    this.numberColSpanInteract -= 1;-->
<!--                    this.showNumberInteractRegSuccess = false;-->
<!--                }-->
<!--                if (itemCol.id === 12) {-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'numberInteractRegFail')-->
<!--                    this.numberColSpanInteract -= 1;-->
<!--                    this.showNumberInteractRegFail = false;-->
<!--                }-->
<!--                if (itemCol.id === 13) {-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'numberInteractClickPage')-->
<!--                    this.numberColSpanInteract -= 1;-->
<!--                    this.showNumberInteractClickPage = false;-->
<!--                }-->
<!--                if (itemCol.id === 14) {-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'interactSum')-->
<!--                    this.numberColSpanInteract -= 1;-->
<!--                    this.showInteractSum = false;-->
<!--                }-->
<!--                if (itemCol.id === 15) {-->
<!--                    this.showNumberConversions = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'numberConversionsRegSuccess')-->
<!--                }-->
<!--                if (itemCol.id === 16) {-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'rateInteractRegSuccessDivSubSentSuccess')-->
<!--                    this.numberColSpanInteractRate -= 1;-->
<!--                    this.showRateInteractRegSuccess = false;-->
<!--                }-->
<!--                if (itemCol.id === 17) {-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'rateInteractRegFailDivSubSentSuccess')-->
<!--                    this.numberColSpanInteractRate -= 1;-->
<!--                    this.showRateInteractRegFail = false;-->
<!--                }-->
<!--                if (itemCol.id === 18) {-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'rateInteractClickPageDivSubSentSuccess')-->
<!--                    this.numberColSpanInteractRate -= 1;-->
<!--                    this.showRateInteractClickPage = false;-->
<!--                }-->
<!--                if (itemCol.id === 19) {-->
<!--                    this.showRate4 = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'rateConversions')-->
<!--                }-->
<!--                if (itemCol.id === 20) {-->
<!--                    this.showNumberRejectAds = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'numberRejectAds')-->
<!--                }-->
<!--                if (itemCol.id === 21) {-->
<!--                    this.showRateRejectAds = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'numberRateRejectAds')-->
<!--                }-->
<!--                if (itemCol.id === 22) {-->
<!--                    this.showBudget = false;-->
<!--                    this.fields = this.fields.filter(itemCol => itemCol.key !== 'budget')-->
<!--                }-->
<!--            }-->
<!--            if (itemCol.show === true) {-->
<!--                this.showTable = true;-->
<!--                if (itemCol.id === 1) {-->
<!--                    this.numberTotalTable += 1;-->
<!--                    this.showCampaignName = true;-->
<!--                    this.fields.splice(0, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 2) {-->
<!--                    this.numberTotalTable += 1;-->
<!--                    this.showCampaignCode = true;-->
<!--                    this.fields.splice(1, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 3) {-->
<!--                    this.numberTotalTable += 1;-->
<!--                    this.showPersonCreated = true;-->
<!--                    this.fields.splice(2, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 4) {-->
<!--                    this.numberTotalTable += 1;-->
<!--                    this.showCreateTime = true;-->
<!--                    this.fields.splice(3, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 5) {-->
<!--                    this.numberTotalTable += 1;-->
<!--                    this.showPersonUpdated = true;-->
<!--                    this.fields.splice(4, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 6) {-->
<!--                    this.numberTotalTable += 1;-->
<!--                    this.showCampaignStatus = true;-->
<!--                    this.fields.splice(5, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 7) {-->
<!--                    this.numberTotalTable += 1;-->
<!--                    this.showCampaignType = true;-->
<!--                    this.fields.splice(6, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 8) {-->
<!--                    this.numberTotalTable += 1;-->
<!--                    this.showCampaignNewsType = true;-->
<!--                    this.fields.splice(7, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 9) {-->
<!--                    this.showNumberRequest = true;-->
<!--                    this.fields.splice(8, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 10) {-->
<!--                    this.showNumberAds = true;-->
<!--                    this.fields.splice(9, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 24) {-->
<!--                    this.showAdsSentSuccess = true;-->
<!--                    this.fields.splice(10, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 23) {-->
<!--                    this.showAdsSubSentSuccessCount = true;-->
<!--                    this.fields.splice(11, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 11) {-->
<!--                    this.fields.splice(12, 0, itemCol);-->
<!--                    this.numberColSpanInteract += 1;-->
<!--                    this.showInteract = true;-->
<!--                    this.showNumberInteractRegSuccess = true;-->
<!--                }-->
<!--                if (itemCol.id === 12) {-->
<!--                    this.fields.splice(13, 0, itemCol);-->
<!--                    this.numberColSpanInteract += 1;-->
<!--                    this.showInteract = true;-->
<!--                    this.showNumberInteractRegFail = true;-->
<!--                }-->
<!--                if (itemCol.id === 13) {-->
<!--                    this.fields.splice(14, 0, itemCol);-->
<!--                    this.numberColSpanInteract += 1;-->
<!--                    this.showInteract = true;-->
<!--                    this.showNumberInteractClickPage = true;-->
<!--                }-->
<!--                if (itemCol.id === 14) {-->
<!--                    this.fields.splice(15, 0, itemCol);-->
<!--                    this.numberColSpanInteract += 1;-->
<!--                    this.showInteract = true;-->
<!--                    this.showInteractSum = true;-->
<!--                }-->
<!--                if (itemCol.id === 15) {-->
<!--                    this.showNumberConversions = true;-->
<!--                    this.fields.splice(16, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 16) {-->
<!--                    this.fields.splice(17, 0, itemCol);-->
<!--                    this.numberColSpanInteractRate += 1;-->
<!--                    this.showInteractRate = true;-->
<!--                    this.showRateInteractRegSuccess = true;-->
<!--                }-->
<!--                if (itemCol.id === 17) {-->
<!--                    this.fields.splice(18, 0, itemCol);-->
<!--                    this.numberColSpanInteractRate += 1;-->
<!--                    this.showInteractRate = true;-->
<!--                    this.showRateInteractRegFail = true;-->
<!--                }-->
<!--                if (itemCol.id === 18) {-->
<!--                    this.fields.splice(19, 0, itemCol);-->
<!--                    this.numberColSpanInteractRate += 1;-->
<!--                    this.showInteractRate = true;-->
<!--                    this.showRateInteractClickPage = true;-->
<!--                }-->
<!--                if (itemCol.id === 19) {-->
<!--                    this.showRate4 = true;-->
<!--                    this.fields.splice(20, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 20) {-->
<!--                    this.showNumberRejectAds = true;-->
<!--                    this.fields.splice(21, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 21) {-->
<!--                    this.showRateRejectAds = true;-->
<!--                    this.fields.splice(22, 0, itemCol);-->
<!--                }-->
<!--                if (itemCol.id === 22) {-->
<!--                    this.showBudget = true;-->
<!--                    this.fields.splice(23, 0, itemCol);-->
<!--                }-->
<!--            }-->

<!--            if (this.numberColSpanInteract === 0) {-->
<!--                this.showInteract = false;-->
<!--            }-->
<!--            if (this.numberColSpanInteractRate === 0) {-->
<!--                this.showInteractRate = false;-->
<!--            }-->
<!--        },-->
<!--        handleCloseChart(config) {-->
<!--            console.log('close chart: ', config);-->
<!--            this.dataChartSelected = this.dataChartSelected.filter(item => item.key !== config.key);-->
<!--        },-->
<!--        handleActionChart() {-->
<!--            console.log('handleActionChart');-->
<!--            this.showTable = false;-->
<!--            this.showCharts = true;-->
<!--            this.showBtnChart = false;-->
<!--            this.showBtnTable = true;-->
<!--            this.showBtnCol = false;-->

<!--            const arrOptionChart = [-->
<!--                {-->
<!--                    id: 1,-->
<!--                    title: 'Số lượt yêu cầu',-->
<!--                    key: "numberRequest",-->
<!--                },-->
<!--                {-->
<!--                    id: 2,-->
<!--                    title: 'Số lượt quảng cáo (thành công + không thành công)',-->
<!--                    key: "numberAdv",-->
<!--                },-->
<!--                {-->
<!--                    id: 11,-->
<!--                    title: 'Số lượt quảng cáo (thành công)',-->
<!--                    key: "adsSentSuccessCount",-->
<!--                },-->
<!--                {-->
<!--                    id: 3,-->
<!--                    title: 'Số lượt tương tác',-->
<!--                    key: "numberInteractReg",-->
<!--                }, {-->
<!--                    id: 10,-->
<!--                    title: 'Số thuê bao gửi đi thành công',-->
<!--                    key: "adsSubSentSuccessCount",-->
<!--                }-->
<!--                , {-->
<!--                    id: 4,-->
<!--                    title: 'Số lượt chuyển đổi (Đăng ký thành công)',-->
<!--                    key: "numberConversionsReg",-->
<!--                }, {-->
<!--                    id: 5,-->
<!--                    title: 'Tỷ lệ tương tác',-->
<!--                    key: "rateInteractReg",-->
<!--                }, {-->
<!--                    id: 6,-->
<!--                    title: 'Tỷ lệ chuyển đổi',-->
<!--                    key: "rateConversions",-->
<!--                }, {-->
<!--                    id: 7,-->
<!--                    title: 'Số lượng từ chối quảng cáo',-->
<!--                    key: "numberRejectAds",-->
<!--                }, {-->
<!--                    id: 8,-->
<!--                    title: 'Tỷ lệ từ chối quảng cáo',-->
<!--                    key: "numberRateRejectAds",-->
<!--                }, {-->
<!--                    id: 9,-->
<!--                    title: 'Chi phí (nếu có)',-->
<!--                    key: "budget",-->
<!--                },-->
<!--            ];-->
<!--            this.optionsChart = arrOptionChart;-->
<!--            if (this.showNumberRequest === false) {-->
<!--                this.optionsChart = arrOptionChart.filter(item => item.key !== 'numberRequest')-->
<!--            }-->
<!--            if (this.showNumberAds === false) {-->
<!--                this.optionsChart = arrOptionChart.filter(item => item.key !== 'numberAdv')-->
<!--            }-->
<!--            if (this.showInteract === false) {-->
<!--                this.optionsChart = arrOptionChart.filter(item => item.key !== 'numberInteractReg')-->
<!--            }-->
<!--            if (this.showNumberConversions === false) {-->
<!--                this.optionsChart = arrOptionChart.filter(item => item.key !== 'numberConversionsReg')-->
<!--            }-->
<!--            if (this.showInteractRate === false) {-->
<!--                this.optionsChart = arrOptionChart.filter(item => item.key !== 'rateInteractReg')-->
<!--            }-->
<!--            if (this.showRate4 === false) {-->
<!--                this.optionsChart = arrOptionChart.filter(item => item.key !== 'rateConversions')-->
<!--            }-->
<!--            if (this.showNumberRejectAds === false) {-->
<!--                this.optionsChart = arrOptionChart.filter(item => item.key !== 'numberRejectAds')-->
<!--            }-->
<!--            if (this.showRateRejectAds === false) {-->
<!--                this.optionsChart = arrOptionChart.filter(item => item.key !== 'numberRateRejectAds')-->
<!--            }-->
<!--            if (this.showBudget === false) {-->
<!--                this.optionsChart = arrOptionChart.filter(item => item.key !== 'budget')-->
<!--            }-->
<!--            if (this.showAdsSubSentSuccessCount === false) {-->
<!--                this.optionsChart = arrOptionChart.filter(item => item.key !== 'adsSubSentSuccessCount')-->
<!--            }-->
<!--            if (this.showAdsSentSuccess === false) {-->
<!--                this.optionsChart = arrOptionChart.filter(item => item.key !== 'adsSentSuccessCount')-->
<!--            }-->
<!--        },-->
<!--        handleViewChart() {-->
<!--            if (this.typeChart === 0 || this.dataChartSelected.length === 0) {-->
<!--                this.commonConfirmWarning("Vui lòng chọn loại biểu đồ và dữ liệu xem biểu đồ");-->
<!--                return;-->
<!--            }-->

<!--            if (this.typeChart === 1) {-->
<!--                this.showDataChart = true;-->
<!--                this.showBarChart = true;-->
<!--                this.showLineChart = false;-->
<!--            } else if (this.typeChart === 2) {-->
<!--                this.showDataChart = true;-->
<!--                this.showBarChart = false;-->
<!--                this.showLineChart = true;-->
<!--            }-->
<!--        },-->
<!--        handleActionTable() {-->
<!--            this.showBtnChart = true;-->
<!--            this.showBtnTable = false;-->
<!--            this.showTable = true;-->
<!--            this.showCharts = false;-->
<!--            this.showDataChart = false;-->
<!--            this.showBtnCol = true;-->
<!--            this.typeChart = 0;-->
<!--            this.dataChartSelected = [];-->
<!--            this.selectAllChart = false;-->
<!--        },-->
<!--        selectAll() {-->
<!--            this.selectAllChart = !this.selectAllChart;-->
<!--            console.log(this.selectAllChart);-->

<!--            if (this.selectAllChart) {-->
<!--                this.dataChartSelected = this.optionsChart;-->
<!--            } else {-->
<!--                this.dataChartSelected = [];-->
<!--            }-->
<!--        },-->
<!--        onChangeChartSelected() {-->
<!--            this.selectAllChart = this.dataChartSelected.length === this.optionsChart.length;-->
<!--        },-->
<!--    },-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--    <div>-->
<!--        &lt;!&ndash; Table data &ndash;&gt;-->
<!--        <div class="row">-->
<!--            <div class="col-12">-->
<!--                <div class="card">-->
<!--                    <div class="card-body">-->
<!--                         <div class="row mb-4" >-->
<!--                            <div class="col-2">-->
<!--                                <label>Thời gian báo cáo</label>-->
<!--                                <select class="form-select" v-model="objSearch.timeReport">-->
<!--                                    <option :value="1">Từ Ngày-Đến ngày</option>-->
<!--                                    <option :value="2">Hôm nay</option>-->
<!--                                    <option :value="3">Hôm qua</option>-->
<!--                                    <option :value="4">Tuần này</option>-->
<!--                                    <option :value="5">Tuần trước</option>-->
<!--                                    <option :value="6">Tháng này</option>-->
<!--                                    <option :value="7">Tháng trước</option>-->
<!--                                    <option :value="8">Năm nay</option>-->
<!--                                </select>-->
<!--                            </div>-->
<!--                            <div class="col-2" v-if="objSearch.timeReport === 1">-->
<!--                                <label>Từ ngày</label>-->
<!--                                <b-input-group>-->
<!--                                    <b-form-datepicker-->
<!--                                        calendar-width="400px"-->
<!--                                        placeholder="DD/MM/YYYY"-->
<!--                                        v-model="objSearch.startTime"-->
<!--                                        locale="vi"-->
<!--                                        :date-format-options="{ year: 'numeric', month: '2-digit', day: '2-digit' }"-->
<!--                                        class="form-select">-->
<!--                                    </b-form-datepicker>-->
<!--                                    <template #prepend>-->
<!--                                        <b-btn @click="objSearch.startTime = ''">Clear</b-btn>-->
<!--                                    </template>-->
<!--                                </b-input-group>-->
<!--                            </div>-->
<!--                            <div class="col-2" v-if="objSearch.timeReport === 1">-->
<!--                                <label>Đến ngày</label>-->
<!--                                <b-input-group>-->
<!--                                    <b-form-datepicker-->
<!--                                        calendar-width="400px"-->
<!--                                        placeholder="DD/MM/YYYY"-->
<!--                                        v-model="objSearch.endTime"-->
<!--                                        locale="vi"-->
<!--                                        :date-format-options="{ year: 'numeric', month: '2-digit', day: '2-digit' }"-->
<!--                                        class="form-select">-->
<!--                                    </b-form-datepicker>-->
<!--                                    <template #prepend>-->
<!--                                        <b-btn @click="objSearch.endTime = ''">Clear</b-btn>-->
<!--                                    </template>-->
<!--                                </b-input-group>-->
<!--                            </div>-->
<!--                            <div :class="objSearch.timeReport !== 1 ? 'col-2' : 'col'">-->
<!--                                <label>Lọc theo phân khúc đối tượng</label>-->
<!--                                < iselect :select-label="'Select'" v-model="filterOptionSegmentSelected" :options="arrTypeSegment" :close-on-select="true" :clear-on-select="true" :preserve-search="true" label="segmentName" track-by="id">-->
<!--                                </multiselect>-->
<!--                            </div>-->
<!--                            <div :class="objSearch.timeReport !== 1 ? 'col-2' : 'col'">-->
<!--                                <label>Lọc theo khu vực địa lý</label>-->
<!--                                <multiselect :select-label="'Select'" v-model="filterOptionAreaSelected" :options="dataCtkvCode" :close-on-select="true" :clear-on-select="true" :preserve-search="true" label="ctkvName" track-by="ctkvCode">-->
<!--                                </multiselect>-->
<!--                            </div>-->
<!--                            <div class="col">-->
<!--                                <div class="row">-->
<!--                                    <label>&ensp;</label>-->
<!--                                    <button :class="objSearch.timeReport !== 1 ? 'col-2' : 'col-5'" @click="initData" type="button" class="custom-btn-search btn btn-primary d-block me-2"><i class="uil uil-search me-2"></i> Tìm kiếm</button>-->
<!--                                    <button :class="objSearch.timeReport !== 1 ? 'col-2' : 'col-5'" type="button" class="btn btn-outline-primary" @click="isFilter = !isFilter">-->
<!--                                        <i class="uil uil-filter me-1"></i> Lọc-->
<!--                                    </button>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="mb-3" v-show="isFilter">-->
<!--                            <div class="row mb-2">-->
<!--                                <div class="col">-->
<!--                                    <label>Loại chiến dịch</label>-->
<!--                                    <multiselect :select-label="'Select'" @input="onchangeFilter(1)" v-model="filterOptionTypeSelected" :options="arrTypeCampaign" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" label="campaignType" track-by="campaignType">-->
<!--                                    </multiselect>-->
<!--                                </div>-->
<!--                                <div class="col">-->
<!--                                    <label>Tên chiến dịch</label>-->
<!--                                    <multiselect :select-label="'Select'" @input="onchangeFilter(2)" v-model="filterOptionNameSelected" :options="arrNameCampaign" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" label="campaignName" track-by="campaignName">-->
<!--                                    </multiselect>-->
<!--                                </div>-->
<!--                                <div class="col">-->
<!--                                    <label>Tag chiến dịch</label>-->
<!--                                    <multiselect :select-label="'Select'" @input="onchangeFilter(3)" v-model="filterOptionTagSelected" :options="arrTagCampaign" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" label="tagName" track-by="tagName">-->
<!--                                    </multiselect>-->
<!--                                </div>-->
<!--                                <div class="col">-->
<!--                                    <label>Nhóm chiến dịch</label>-->
<!--                                    <multiselect :select-label="'Select'" @input="onchangeFilter(4)" v-model="filterOptionGroupSelected" :options="arrCampaignGroup" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" label="campaignGroupName"-->
<!--                                                 track-by="campaignGroupName">-->
<!--                                    </multiselect>-->
<!--                                </div>-->
<!--                                <div class="col">-->
<!--                                    <label>Trạng thái chiến dịch</label>-->
<!--                                    <multiselect :select-label="'Select'" @input="onchangeFilter(5)" v-model="filterOptionStatusSelected" :options="arrStatusCampaign" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" label="status" track-by="status">-->
<!--                                    </multiselect>-->
<!--                                </div>-->
<!--                                <div class="col">-->
<!--                                    <label>Loại hình chiến dịch</label>-->
<!--                                    <multiselect :select-label="'Select'" @input="onchangeFilter(6)" v-model="filterOptionNewTypeSelected" :options="arrNewsTypeCampaign" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" label="campaignNewsType"-->
<!--                                                 track-by="campaignNewsType">-->
<!--                                    </multiselect>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div class="row">-->
<!--                                <div class="col-2">-->
<!--                                    <label>Theo sản lượng quảng cáo</label>-->
<!--                                    <multiselect :select-label="'Select'" @input="onchangeFilter(7)" v-model="filterOptionAdsSelected" :options="arrAdsOutput" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" label="numberAdv" track-by="numberAdv">-->
<!--                                    </multiselect>-->
<!--                                </div>-->
<!--                                <div class="col-2">-->
<!--                                    <label>Theo các chỉ số KPI</label>-->
<!--                                    <multiselect :select-label="'Select'" @input="onchangeFilter(8)" v-model="filterOptionKpiSelected" :options="arrKpiCampaign" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" label="name" track-by="id">-->
<!--                                    </multiselect>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="row">-->
<!--            <div class="col-12">-->
<!--                <div class="card">-->
<!--                    <div class="card-body" style="min-height: 400px">-->
<!--                        <div class="row mb-2 align-items-center">-->
<!--                            <div class="col-6 d-flex mb-2">-->
<!--                                <div class="me-2">-->
<!--                                    <button v-if="showBtnChart" @click="handleActionChart" type="button" class="btn btn-primary d-block"><i class="uil uil-chart-bar me-2"></i> Xem biểu đồ</button>-->
<!--                                </div>-->
<!--                                <div class="me-2">-->
<!--                                    <button v-if="showBtnTable" @click="handleActionTable" type="button" class="btn btn-primary d-block"><i class="uil uil-table me-2"></i>Xem dữ liệu bảng</button>-->
<!--                                </div>-->
<!--                                <div class="me-2" v-if="showBtnCol">-->
<!--                                    <button @click="handleExcel" type="button" class="btn btn-success d-block"><i class="uil uil-export me-2"></i> Xuất file</button>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                            <div v-if="showBtnCol" class="col-6 text-end">-->
<!--                                <b-dropdown variant="outline-secondary" class="me-2" ref="dropdown" menu-class="custom-dropdown" toggle-class="test-toggle">-->
<!--                                    <template v-slot:button-content>-->
<!--                                        Thiết lập cột-->
<!--                                        <i class="mdi mdi-chevron-down"></i>-->
<!--                                    </template>-->
<!--                                    <simplebar style="max-height: 350px; min-width: 330px; z-index: 10000" data-simplebar>-->
<!--                                        <b-form-checkbox-->
<!--                                            v-model="allSelected"-->
<!--                                            :checked="allSelected"-->
<!--                                            @change="toggleAll"-->
<!--                                            class="ms-1"-->
<!--                                            plain-->
<!--                                        >-->
<!--                                            Tất cả-->
<!--                                        </b-form-checkbox>-->
<!--                                        <b-form-checkbox class="ms-1" v-for="(item, index) in checkboxes" :key="index" :checked="item.show" @change="onChangeCustomColumn(item)" plain>-->
<!--                                            {{ item.title }}-->
<!--                                        </b-form-checkbox>-->
<!--                                    </simplebar>-->
<!--                                </b-dropdown>-->
<!--                                <button @click="handleReset" type="button" class="btn btn-outline-secondary pe-lg-4 ps-lg-4">-->
<!--                                    <i class="uil uil-history"></i> Trở về mặc định-->
<!--                                </button>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        &lt;!&ndash; Table &ndash;&gt;-->
<!--                        <div class="table-responsive mb-1" v-if="showTable">-->
<!--                            <b-table hover bordered selected-variant="info" :items="tableData" :fields="fields" responsive :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc" :filter="filter"-->
<!--                                     :filter-included-fields="filterOn" @filtered="onFiltered">-->
<!--                                <template v-slot:cell(createTime)="data">-->
<!--                                    {{ $moment(data.item.createTime).format('DD-MM-YYYY') }}-->
<!--                                </template>-->

<!--                                <template v-slot:thead-top="data">-->
<!--                                    <b-tr class="d-none">-->
<!--                                        <b-th class="text-center">Tên chiến dịch</b-th>-->
<!--                                        <b-th class="text-center">Mã chiến dịch</b-th>-->
<!--                                        <b-th class="text-center">Người tạo</b-th>-->
<!--                                        <b-th style="min-width: 110px" class="text-center">Thời gian tạo</b-th>-->
<!--                                        <b-th class="text-center">Người cập nhật</b-th>-->
<!--                                        <b-th class="text-center">Trạng thái chiến dịch</b-th>-->
<!--                                        <b-th class="text-center">Loại chiến dịch</b-th>-->
<!--                                        <b-th class="text-center">Hình thức triển khai</b-th>-->
<!--                                        <b-th class="text-center">Số lượt yêu cầu</b-th>-->
<!--                                        <b-th colspan="5" class="text-center">Số lượt quảng cáo theo từng kênh</b-th>-->
<!--                                        <b-th colspan="5" class="text-center">Số Đăng ký thành công theo từng kênh</b-th>-->
<!--                                        <b-th colspan="5" class="text-center">Số Đăng ký không thành công theo từng kênh</b-th>-->
<!--                                        <b-th colspan="2" class="text-center">Số click vào trang</b-th>-->
<!--                                        <b-th colspan="3" class="text-center">Tỷ lệ theo kênh SMS</b-th>-->
<!--                                        <b-th colspan="2" class="text-center">Tỷ lệ theo kênh USSD</b-th>-->
<!--                                        <b-th colspan="2" class="text-center">Tỷ lệ theo kênh Video SMS</b-th>-->
<!--                                        <b-th colspan="3" class="text-center">Tỷ lệ theo kênh AVB</b-th>-->
<!--                                        <b-th colspan="2" class="text-center">Tỷ lệ theo kênh Zalo</b-th>-->
<!--                                        <b-th class="text-center">Số lượng từ chối quảng cáo</b-th>-->
<!--                                        <b-th class="text-center">Tỷ lệ từ chối quảng cáo</b-th>-->
<!--                                    </b-tr>-->
<!--                                    <b-tr>-->
<!--                                        <b-th v-show="showCampaignName" class="text-center">Tên chiến dịch</b-th>-->
<!--                                        <b-th v-show="showCampaignCode" class="text-center">Mã chiến dịch</b-th>-->
<!--                                        <b-th v-show="showPersonCreated" class="text-center">Người tạo</b-th>-->
<!--                                        <b-th v-show="showCreateTime" style="min-width: 110px" class="text-center">Thời gian tạo</b-th>-->
<!--                                        <b-th v-show="showPersonUpdated" class="text-center">Người cập nhật</b-th>-->
<!--                                        <b-th v-show="showCampaignStatus" class="text-center">Trạng thái chiến dịch</b-th>-->
<!--                                        <b-th v-show="showCampaignType" class="text-center">Loại chiến dịch</b-th>-->
<!--                                        <b-th v-show="showCampaignNewsType" class="text-center">Hình thức triển khai</b-th>-->
<!--                                        <b-th v-show="showNumberRequest" class="text-center">Số lượt yêu cầu</b-th>-->
<!--                                        <b-th v-show="showNumberAds" class="text-center">Số lượt quảng cáo (thành công + không thành công)</b-th>-->
<!--                                        <b-th v-show="showAdsSentSuccess" class="text-center">Số lượt quảng cáo (thành công)</b-th>-->
<!--                                        <b-th v-show="showAdsSubSentSuccessCount" class="text-center">Số thuê bao gửi đi thành công</b-th>-->
<!--                                        <b-th v-show="showInteract" :colspan="numberColSpanInteract" class="text-center">Số lượt tương tác</b-th>-->
<!--                                        <b-th v-show="showNumberConversions" class="text-center">Số lượt chuyển đổi (Đăng ký thành công)</b-th>-->
<!--                                        <b-th v-show="showInteractRate" :colspan="numberColSpanInteractRate" class="text-center">Tỷ lệ tương tác</b-th>-->
<!--                                        <b-th v-show="showRate4" colspan="1" class="text-center">Tỷ lệ chuyển đổi</b-th>-->
<!--                                        <b-th v-show="showNumberRejectAds" class="text-center">Số lượng từ chối quảng cáo</b-th>-->
<!--                                        <b-th v-show="showRateRejectAds" class="text-center">Tỷ lệ từ chối quảng cáo</b-th>-->
<!--                                        <b-th v-show="showBudget" class="text-center">Chi phí (nếu có)</b-th>-->
<!--                                    </b-tr>-->
<!--                                </template>-->
<!--                                <template v-if="this.filterOptionTagSelected.length > 0 || this.filterOptionGroupSelected.length > 0" v-slot:custom-foot="data">-->
<!--                                    <b-tr>-->
<!--                                        <b-td :colspan="numberTotalTable" variant="secondary" class="text-right">-->
<!--                                            Tổng-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showNumberRequest" variant="secondary" class="text-right">-->
<!--                                            {{ sumNumberRequest }}-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showNumberAds" variant="secondary" class="text-right">-->
<!--                                            {{ sumNumberAdv }}-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showAdsSentSuccess" variant="secondary" class="text-right">-->
<!--                                            {{ sumAdsSentSuccess }}-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showAdsSubSentSuccessCount" variant="secondary" class="text-right">-->
<!--                                            {{ sumAdsSubSentSuccessCount }}-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showNumberInteractRegSuccess" variant="secondary" class="text-right">-->
<!--                                            {{ sumNumberInteractRegSuccess }}-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showNumberInteractRegFail" variant="secondary" class="text-right">-->
<!--                                            {{ sumNumberInteractRegFail }}-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showNumberInteractClickPage" variant="secondary" class="text-right">-->
<!--                                            {{ sumNumberInteractClickPage }}-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showInteractSum" variant="secondary" class="text-right">-->
<!--                                            {{ sumInteractSum }}-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showNumberConversions" variant="secondary" class="text-right">-->
<!--                                            {{ sumNumberConversionsRegSuccess }}-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showRateInteractRegSuccess" variant="secondary" class="text-right">-->
<!--                                            {{ sumRateInteractRegSuccess }}-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showRateInteractRegFail" variant="secondary" class="text-right">-->
<!--                                            {{ sumRateInteractRegFail }}-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showRateInteractClickPage" variant="secondary" class="text-right">-->
<!--                                            {{ sumRateInteractClickPage }}-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showRate4" variant="secondary" class="text-right">-->
<!--                                            {{ sumRateConversions }}-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showNumberRejectAds" variant="secondary" class="text-right">-->
<!--                                            {{ sumNumberRejectAds }}-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showRateRejectAds" variant="secondary" class="text-right">-->
<!--                                            {{ sumNumberRateRejectAds }}-->
<!--                                        </b-td>-->
<!--                                        <b-td v-if="showBudget" variant="secondary" class="text-right">-->
<!--                                            {{ sumBudget }}-->
<!--                                        </b-td>-->
<!--                                    </b-tr>-->
<!--                                </template>-->
<!--                            </b-table>-->
<!--                            <b-table-simple class="d-none" responsive bordered>-->
<!--                                <thead>-->
<!--                                <tr>-->
<!--                                    <th>Tên chiến dịch</th>-->
<!--                                    <th>Mã Chiến dịch</th>-->
<!--                                    <th>Người tạo</th>-->
<!--                                    <th>Thời gian tạo</th>-->
<!--                                    <th>Người cập nhật</th>-->
<!--                                    <th>Trạng thái chiến dịch</th>-->
<!--                                    <th>Loại chiến dịch</th>-->
<!--                                    <th>Hình thức triển khai</th>-->
<!--                                    <th>Số lượt yêu cầu</th>-->
<!--                                    <th colspan="5">Số lượt quảng cáo theo từng kênh</th>-->
<!--                                    <th colspan="5">Số Đăng ký thành công theo từng kênh</th>-->
<!--                                    <th colspan="5">Số Đăng ký không thành công theo từng kênh</th>-->
<!--                                    <th colspan="2">Số click vào trang</th>-->
<!--                                    <th colspan="3">Tỷ lệ theo kênh SMS</th>-->
<!--                                    <th colspan="2">Tỷ lệ theo kênh USSD</th>-->
<!--                                    <th colspan="2">Tỷ lệ theo kênh Video SMS</th>-->
<!--                                    <th colspan="3">Tỷ lệ theo kênh AVB</th>-->
<!--                                    <th colspan="2">Tỷ lệ theo kênh Zalo</th>-->
<!--                                    <th>Số lượng từ chối quảng cáo</th>-->
<!--                                    <th>Tỷ lệ từ chối quảng cáo</th>-->
<!--                                </tr>-->
<!--                                <tr>-->
<!--                                    <th></th>-->
<!--                                    <th></th>-->
<!--                                    <th></th>-->
<!--                                    <th></th>-->
<!--                                    <th></th>-->
<!--                                    <th></th>-->
<!--                                    <th></th>-->
<!--                                    <th></th>-->
<!--                                    <th></th>-->
<!--                                    <th>SMS</th>-->
<!--                                    <th>USSD</th>-->
<!--                                    <th>AVB</th>-->
<!--                                    <th>Video SMS</th>-->
<!--                                    <th>Zalo</th>-->
<!--                                    <th>SMS</th>-->
<!--                                    <th>USSD</th>-->
<!--                                    <th>AVB</th>-->
<!--                                    <th>Video SMS</th>-->
<!--                                    <th>Zalo</th>-->
<!--                                    <th>SMS</th>-->
<!--                                    <th>USSD</th>-->
<!--                                    <th>AVB</th>-->
<!--                                    <th>Video SMS</th>-->
<!--                                    <th>Zalo</th>-->
<!--                                    <th>SMS</th>-->
<!--                                    <th>Zalo</th>-->
<!--                                    <th>Tỷ lệ đăng ký/Số TB gửi đi</th>-->
<!--                                    <th>Tỷ lệ đăng ký/Số TB gửi đi thành công</th>-->
<!--                                    <th>Tỷ lệ click/Số TB gửi đi thành công</th>-->
<!--                                    <th>Tỷ lệ đăng ký/Số TB gửi đi</th>-->
<!--                                    <th>Tỷ lệ đăng ký/Số TB gửi đi thành công</th>-->
<!--                                    <th>Tỷ lệ đăng ký/Số TB gửi đi</th>-->
<!--                                    <th>Tỷ lệ đăng ký/Số TB gửi đi thành công</th>-->
<!--                                    <th>Tỷ lệ đăng ký/Số TB gọi ra</th>-->
<!--                                    <th>Tỷ lệ đăng ký/Số TB gọi ra thành công</th>-->
<!--                                    <th>Tỷ lệ gọi ra thành công</th>-->
<!--                                    <th>Tỷ lệ đăng ký/Số TB gửi đi</th>-->
<!--                                    <th>Tỷ lệ đăng ký/Số TB gửi đi thành công</th>-->
<!--                                    <th></th>-->
<!--                                    <th></th>-->
<!--                                </tr>-->
<!--                                </thead>-->
<!--                                <tbody>-->
<!--                                <template v-for="dataTable in tableData">-->
<!--                                    <tr v-for="(item, key) in dataTable.CampaignTypeList" @click="handleRowTable(item)" :class="{'bg-info': item === tableRowSelected}">-->
<!--                                        <td :class="{'bg-light': item === tableRowSelected}" class="align-middle" v-if="key === 0" :rowspan="dataTable.CampaignTypeList.length">{{ dataTable.nameCampaign }}</td>-->
<!--                                        <td :class="{'bg-light': item === tableRowSelected}" class="align-middle" v-if="key === 0" :rowspan="dataTable.CampaignTypeList.length">{{ dataTable.campaignId }}</td>-->
<!--                                        <td>{{ item.typeReport }}</td>-->
<!--                                        <td>{{ item.numberRequets }}</td>-->
<!--                                        <td>{{ item.startJourney }}</td>-->
<!--                                        <td>{{ item.contactJoinedJourney }}</td>-->
<!--                                        <td>{{ item.inJourney }}</td>-->
<!--                                        <td>{{ item.endJourney }}</td>-->
<!--                                        <td>{{ item.endJourney }}</td>-->
<!--                                    </tr>-->
<!--                                </template>-->
<!--                                </tbody>-->
<!--                            </b-table-simple>-->

<!--                        </div>-->
<!--                        <div class="row" v-if="showTable">-->
<!--                            <div class="col-6 d-inline-flex">-->
<!--                                <label class="d-inline-flex align-items-center mb-0 pb-0">-->
<!--                                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>-->
<!--                                    Chiến dịch/Trang-->
<!--                                </label>-->
<!--                            </div>-->
<!--                            <div class="col-6">-->
<!--                                <b-pagination-->
<!--                                    class="mb-0" align="right"-->
<!--                                    v-model="currentPage"-->
<!--                                    :total-rows="rows"-->
<!--                                    :per-page="perPage"-->
<!--                                ></b-pagination>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="row" v-if="showCharts">-->
<!--                            <div class="col-2">-->
<!--                                <label>Chọn loại biểu đồ</label>-->
<!--                                <select class="form-select" v-model="typeChart">-->
<!--                                    <option :value="0">Chọn</option>-->
<!--                                    <option :value="1">Biểu đồ cột</option>-->
<!--                                    <option :value="2">Biểu đồ thanh</option>-->
<!--                                </select>-->
<!--                            </div>-->
<!--                            <div class="col-8">-->
<!--                                <label>Chọn dữ liệu xem biểu đồ</label>-->
<!--                                <multiselect :select-label="'Select'" v-model="dataChartSelected" @input="onChangeChartSelected" :options="optionsChart" :multiple="true" :close-on-select="false" :clear-on-select="false" :preserve-search="true" label="title" track-by="id">-->
<!--                                </multiselect>-->
<!--                            </div>-->
<!--                            <div class="col-2">-->
<!--                                <div class="d-flex justify-content-start">-->
<!--                                    <div>-->
<!--                                        <label>&ensp;</label>-->
<!--                                        <button @click="selectAll" type="button" class="custom-btn-search btn btn-success d-block col me-3">-->
<!--                                            <span v-if="selectAllChart">Bỏ chọn tất cả</span>-->
<!--                                            <span v-else>Chọn tất cả</span>-->
<!--                                        </button>-->
<!--                                    </div>-->
<!--                                    <div>-->
<!--                                        <label>&ensp;</label>-->
<!--                                        <button @click="handleViewChart" type="button" class="custom-btn-search btn btn-primary d-block col">Xem</button>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<style scoped lang="scss">-->
<!--.card-shadow {-->
<!--    box-shadow: 0 2px 10px rgba(15, 34, 58, 0.12) !important;-->
<!--}-->

<!--/*.custom-select {*/-->
<!--/*    border-radius: 1.25rem;*/-->
<!--/*    padding: 0.5rem;*/-->
<!--/*    margin-right: 0.5rem;*/-->
<!--/*}*/-->

<!--/*.form-control-sm {*/-->
<!--/*    padding: 0.5rem;*/-->
<!--/*}*/-->

<!--/*.form-select-sm {*/-->
<!--/*    padding: 0.5rem;*/-->
<!--/*}*/-->

<!--/*.btn-sm {*/-->
<!--/*    padding: 0.5rem 1rem;*/-->
<!--/*}*/-->

<!--//.btn-group {-->
<!--//    .custom-check-group {-->
<!--//        .custom-checkbox {-->
<!--//            .custom-control-input[type='checkbox'] {-->
<!--//                margin-right: 0.8rem !important;-->
<!--//            }-->
<!--//            .custom-control-label {-->
<!--//                margin-left: 0.8rem;-->
<!--//            }-->
<!--//        }-->
<!--//    }-->
<!--//}-->

<!--.tab-active {-->
<!--    font-weight: 600;-->
<!--    font-size: 14px;-->
<!--    line-height: 20px;-->
<!--    color: #808191;-->
<!--}-->

<!--.text-active {-->
<!--    color: #004390 !important;-->
<!--}-->

<!--.border-active {-->
<!--    border-bottom: 1px solid #004390;-->
<!--}-->

<!--.custom-btn-search {-->
<!--    max-width: 140px;-->
<!--}-->

<!--</style>-->
