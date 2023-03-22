import {API_ROLE_MANAGE} from '@/api/admin/role';
import {CONSTANTS} from '@/utils/constant';
import {API_CAMPAIGN_MANAGE} from "@/api/campaign/manage";

const actions = {

    async apiGetListRole({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_ROLE_MANAGE.apiGetListRole}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },
    async apiAddRole({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_ROLE_MANAGE.apiAddRole}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },
    async apiEditRole({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_ROLE_MANAGE.apiEditRole}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },
    async apiDeleteRole({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_ROLE_MANAGE.apiDeleteRole}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },
    async apiGetRoleById({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_ROLE_MANAGE.apiGetRoleById}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },
    async apiGetListPrivilege({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_ROLE_MANAGE.apiGetListPrivilege}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    }
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

