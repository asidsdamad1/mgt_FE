<script>

import PvFormCampaign from '~/components/campaign/PvFormCampaign';
import PvFormScript from '~/components/campaign/PvFormScript';
import {mapActions} from "vuex";

export default {
    components: {
        PvFormCampaign,
        PvFormScript
    },
    head() {
        return {
            title: "Tạo chiến dịch"
        };
    },
    data() {
        return {
            flagStepNext: false,
            campaignId: -1,
            nodeStartName: "Initial1"
        };
    },
    computed: {},
    mounted() {

    },
    methods: {
        ...mapActions('campaign/manage', {
            apiAddCamp: 'apiAddCamp',
            apiEditCamp: 'apiEditCamp'
        }),
        handleOkFilter(evt) {
            evt.preventDefault();
        },
        handleResetForm(evt) {
            evt.preventDefault();
        },
        addTimeDistance() {
            this.listTimeDistances.push({startDate: this.runManyDayStartDate, endDate: this.runManyDayEndDate, startTime: this.runManyDayStartTime, endTime: this.runManyDayEndTime})
        },
        removeTimeDistance(index) {
            this.listTimeDistances.splice(index, 1);
        },
        addTimeDistanceNoAdv() {
            this.listTimeDistancesNoAdv.push({startDate: this.noAdvStartDate, endDate: this.noAdvEndDate, startTime: this.noAdvStartTime, endTime: this.noAdvEndTime, dayRepeat: this.noAdvDayRepeat.toString()})
        },
        removeTimeDistanceNoAdv(index) {
            this.listTimeDistancesNoAdv.splice(index, 1);
        },
        fileAdded: function (file) {
            console.log(file);
        },
        handleCampaignCallback(obj) {
            console.log('handleCampaignCallback: ', obj);
            if (obj.campaignId > 0) {
                this.flagStepNext = true;
                this.campaignId = obj.campaignId;

                if (obj.campaignType !== 'EVENT_START') {
                    this.nodeStartName = 'Initial2';
                }
            }
        }
    },
    middleware: "authentication"
};
</script>
<template>
    <div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 d-inline-flex">
                                <button type="button" class="btn btn-sm btn-info" @click="flagStepNext = false">
                                    Bước 1: Tạo chiến dịch
                                </button>
                                <span class="badge b pe-5"> >> </span>
                                <button type="button" class="btn btn-sm btn-info" @click="flagStepNext = true" :disabled="campaignId === -11">
                                    Bước 2: Cài đặt kịch bản
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <pv-form-campaign @handleCampaignCallback="handleCampaignCallback" v-if="!flagStepNext"></pv-form-campaign>
                <pv-form-script :campaign-id="campaignId" :node-start-name="nodeStartName" v-else></pv-form-script>
            </div>
        </div>
    </div>

</template>
