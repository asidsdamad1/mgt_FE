<script>

import {mapActions} from "vuex";

export default {
    name: "AddStudentModal",
    props: {
        idProject: {
            type: Number,
            default: 0
        },

        actionType: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            fileUpload: null,
            outlineData: {
                name: ''

            },
            json_fields: {
                'Số điện thoại': 'modalMsisdn',
                'Lỗi': 'error',
            },
            json_data: [],
        }
    },
    methods: {
        ...mapActions('project', {
            apiAddOutlineFile: 'apiAddOutlineFile'
        }),
        addOutlineFile() {
            let formData = new FormData();
            if (this.fileUpload === null) {
                this.commonNotifyVue('Bạn phải chọn file đề cương', 'warn');
            } else {
                console.log(this.idProject)
                formData.append('id', this.idProject);
                formData.append('file', this.fileUpload);
                this.apiAddOutlineFile(formData)
                    .then(response => {
                        console.log('apiAddBlacklist', response);
                        this.$emit('handleGetProject');
                        this.$bvModal.hide('modal-add-file-outline');

                    })
                    .catch(err => {
                        console.log(err);
                    })
                    .finally(() => {
                        // this.commonLoadingPage(false);
                    });


            }
        },
        closeModalListSub() {
            this.$bvModal.hide('modal-add-file-outline');
        },
        onFileChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (files != null)
                this.fileUpload = files[0];
        }
    }
}
</script>

<style scoped>

</style>

<template>
    <b-modal id="modal-add-file-outline" size="lg" title="Tải file đề cương" title-class="font-18" hide-footer>
        <div class="card">
            <div class="card-body">

                <export-excel
                    class="btn btn-default"
                    :data="json_data"
                    :fields="json_fields"
                    worksheet="My Worksheet"
                    name="ErrorDetail.xls"
                    v-show="json_data.length>0">

                    Tải file lỗi

                </export-excel>
                <div class="row mb-3">
                    <div class="col-12">
                        <label v-show="actionType==1">Tên tập TB</label>
                        <input type="text" v-show="actionType==1" maxlength="150" v-model="outlineData.name" class="form-control"/>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-12">
                        <label>File đề cương</label>
                        <input type="file" @change="onFileChange" class="form-control">
                    </div>
                </div>

            </div>
            <div class="card-footer text-end">
                <button type="button" class="btn btn-primary" @click="closeModalListSub">Bỏ qua</button>
                <button type="button" class="btn btn-success" @click="addOutlineFile"><i class="uil uil-save me-1"></i> Lưu lại</button>

            </div>
            <!-- end card-body -->
        </div>
    </b-modal>
</template>


