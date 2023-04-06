<b-modal id="modal-add-one-tb"
         size="lg"
         :title="titleModal"
         title-class="font-18"
         hide-footer>
<div class="card-body">
    <div class="row mb-3">

        <div class="col-12">
            <label>Email giảng viên</label>
            <template>
                <div>
                    <b-form-input list="my-list-id"></b-form-input>

                    <datalist id="my-list-id">
                        <option v-for="size in sizes">{{ size }}</option>
                    </datalist>
                </div>
            </template>

        </div>
    </div>

    <div class="card-footer text-end">
        <button type="button" class="btn btn-primary" @click="closeModalSub" v-show="!isEditModalField">Bỏ qua</button>
        <button type="button" class="btn btn-success" @click="addEditOneSub" v-show="!isEditModalField"><i class="uil uil-save me-1"></i> Lưu lại</button>

    </div>
</div>

</b-modal>
