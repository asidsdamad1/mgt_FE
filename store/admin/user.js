import {API_USER_MANAGE} from '@/api/admin/user';
import {CONSTANTS} from '@/utils/constant';

const actions = {

    async apiGetListUser({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_USER_MANAGE.apiGetListUser}`, payload);

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

