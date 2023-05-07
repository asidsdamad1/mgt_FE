import {CONSTANTS} from '@/utils/constant';
import {API_PROJECT} from "@/api/project";

const actions = {


    async apiGetProject({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_PROJECT.apiGetProject}`, payload);

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
            let {data} = await this.$axios.post(`${API_PROJECT.apiAddOutlineFile}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },

    async apiAddProject({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_PROJECT.apiAddProject}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },

    async apiGetTeacherById({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_PROJECT.apiGetTeacherById}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },

    async apiEditTeacher({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_PROJECT.apiEditTeacher}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },

    async apiDeleteTeacher({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_PROJECT.apiDeleteTeacher}`+`/${parseInt(payload)}`);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },

    async apiSearchTeacher({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_PROJECT.apiSearchTeacher}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },

    async apiGetBySession({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_PROJECT.apiGetBySession}`, payload);

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

