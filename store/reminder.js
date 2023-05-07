import {CONSTANTS} from '@/utils/constant';
import {API_REMINDER} from "../api/reminder";

const actions = {
    async apiAddReminder({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_REMINDER.apiAddReminder}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },

    async apiGetReminder({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_REMINDER.apiGetReminder}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },

    async apiAddOutlineFile({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_REMINDER.apiAddOutlineFile}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },

};

const state = () => ({});
const getters = {};
const mutations = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};

