// import { API_TEACHER_MANAGE} from "@/api/teacher";
import {CONSTANTS} from '@/utils/constant';
import {API_TEACHER_MANAGE} from "../api/teacher";

const actions = {


    async apiGetListTeacher({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_TEACHER_MANAGE.apiGetListTeacher}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },

    async apiAddTeacher({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_TEACHER_MANAGE.apiAddTeacher}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },

    async apiGetTeacher({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_TEACHER_MANAGE.apiGetTeacher}`, payload);

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
            let {data} = await this.$axios.post(`${API_TEACHER_MANAGE.apiGetTeacherById}`, payload);

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
            let {data} = await this.$axios.post(`${API_TEACHER_MANAGE.apiEditTeacher}`, payload);

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
            let {data} = await this.$axios.post(`${API_TEACHER_MANAGE.apiDeleteTeacher}`+`/${parseInt(payload)}`);

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
            let {data} = await this.$axios.post(`${API_TEACHER_MANAGE.apiSearchTeacher}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },

    async apiGetListDistrict({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_TEACHER_MANAGE.apiGetListDistrict}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },
    async apiCheckActiveTeacher({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_TEACHER_MANAGE.apiCheckActiveTeacher}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },
    async apiCheckTeacherUpdate({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_TEACHER_MANAGE.apiCheckTeacherUpdate}`, payload);

            if (data.code === CONSTANTS.SUCCESS) {
            }

            return data;

        } catch (error) {
            console.log(error);
            throw new TypeError(error);
        }
    },
    async apiGetTotalContact({commit, state}, payload) {
        try {
            let {data} = await this.$axios.post(`${API_TEACHER_MANAGE.apiGetTotalContact}`, payload);

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

