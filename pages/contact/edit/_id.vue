<script>
import {
    productData
} from "../data-products";
import vue2Dropzone from "vue2-dropzone";

import "vue2-dropzone/dist/vue2Dropzone.min.css";
import Swal from "sweetalert2";

/**
 * Product-detail component
 */
export default {
    head() {
        return {

            title: `Sửa tệp TB`
        };
    },
    components: {
        vueDropzone: vue2Dropzone
    },
    asyncData({
                  params
              }) {
        const productDetail = productData.find(
            user => String(user.id) === params.id
        );
        return {
            productDetail
        };
    },
    data() {
        return {
            titleModal: '',
            isEditModalField: false,
            isViewModalFileField: false,

            items: [{
                text: "Forms",
                href: "/"
            },
                {
                    text: "Form File Upload",
                    active: true
                }
            ],
            dropzoneOptions: {
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: {
                    "My-Awesome-Header": "header value"
                }
            }

        }
    },
    middleware: "authentication",
    methods: {
        prepareView() {
            this.isEditModalField = true;
            this.isViewModalFileField = true;
            this.titleModal = 'Xem thông tin TB';
            this.$bvModal.show('modal-add-one-tb');
        },
        prepareAddOne() {
            this.isEditModalField = false;
            this.isViewModalFileField = false;
            this.titleModal = 'Tải đơn liên hệ vào tập TB';
            this.$bvModal.show('modal-add-one-tb');
        },
        prepareEditOne() {
            this.isEditModalField = false;
            this.isViewModalFileField = true;
            this.titleModal = 'Sửa thông tin TB';
            this.$bvModal.show('modal-add-one-tb');
        },
        closeModalSub() {
            this.$bvModal.hide('modal-add-one-tb');
        },
        addEditOneSub() {

        },
        closeModalListSub() {
            this.$bvModal.hide('modal-add-list-tb');
        },
        addListSub() {

        },
        goToPrev() {
            this.$router.go(-1);
        },
        searchSub() {

        },
        deleteSub() {
            Swal.fire({
                title: "Bạn có chắc chắn muốn xóa?",
                text: "Bạn sẽ không lấy lại được dữ liệu đã xóa!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#34c38f",
                cancelButtonColor: "#f46a6a",
                confirmButtonText: "Đồng ý",
                cancelButtonText: "Hủy"
            }).then(result => {
                if (result.value) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
            });

        }
    }
};
</script>

<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-6">
                                <button type="button" class="btn btn-outline-secondary" @click="goToPrev"><i class="uil uil-arrow-circle-left me-1"></i> Quay lại</button>
                                <label>Tệp 1</label>
                            </div>
                            <div class="col-6 text-end">
                                <button type="button" class="btn btn-success" v-b-modal.modal-add-list-tb><i class="uil uil-plus me-1"></i> Thêm danh sách liên hệ vào tập TB</button>
                                <button type="button" class="btn btn-primary" @click="prepareAddOne"><i class="uil uil-arrow-circle-up ms-1"></i> Tải đơn liên hệ vào tập TB</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">

                        <div class="row mb-3">
                            <div class="col-3">
                                <label>Từ khóa tìm kiếm</label>
                                <input type="text" class="form-control form-control-sm"/>
                            </div>
                            <div class="col-2">
                                <label>Lọc</label>
                                <div class="row">

                                    <select class="form-control form-control-sm">
                                        <option>1</option>
                                        <option>2</option>
                                    </select>

                                </div>
                            </div>
                            <div class="col-3">
                                <label>Thời gian bắt đầu</label>
                                <input type="date" class="form-control form-control-sm"/>
                            </div>
                            <div class="col-4">
                                <label>Thời gian kết thúc</label>
                                <div class="row">
                                    <div class="col-8">

                                        <input type="date" class="form-control form-control-sm"/>
                                    </div>
                                    <div class="col-4">
                                        <button type="button" @click="searchSub" class="btn btn-sm btn-primary d-block"><i class="uil uil-search me-2"></i> Tìm kiếm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-striped mb-0">
                                <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>ID SĐT</th>
                                    <th>SĐT</th>
                                    <th>Tài khoản</th>
                                    <th>Thời gian tạo</th>
                                    <th>Thời cập nhật</th>
                                    <th>Ghi chú</th>
                                    <th> Thao tác</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>#877669</td>
                                    <td>0358724125648</td>
                                    <td>Admin</td>
                                    <td>02/09/2022</td>
                                    <td>02/09/2022</td>
                                    <td>Thông tin khác</td>
                                    <td>
                                        <button title="Xem TB" @click="prepareView"
                                                class="btn btn-gray btn-block view-cart"
                                        ><i class="uil uil-eye me-1"></i>
                                        </button>

                                        <button title="Sửa TB" @click="prepareEditOne"
                                                class="btn btn-gray btn-block view-cart"
                                        ><i class="uil uil-pen me-1"></i>
                                        </button>
                                        <button title="Xóa TB" @click="deleteSub"
                                                class="btn btn-gray btn-block view-cart"
                                        ><i class="uil uil-trash me-1"></i>
                                        </button>
                                    </td>

                                </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- end card -->
            </div>
        </div>
        <!-- end row -->

        <b-modal id="modal-add-one-tb" size="lg" :title="titleModal" title-class="font-18" hide-footer>
            <div class="card-body">
                <div class="row mb-3">
                    <div class="col-12">
                        <label>ID SĐT</label>
                        <input type="text" :disabled="isEditModalField" class="form-control form-control-sm"/>
                    </div>
                </div>


                <div class="row mb-1">
                    <div class="col-12">
                        <label>
                            Thông tin nhân khẩu học
                        </label>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-6">
                        <label>Họ tên</label>
                        <input type="text" :disabled="isEditModalField" class="form-control form-control-sm"/>
                    </div>
                    <div class="col-6">
                        <label>Tuổi</label>
                        <input type="text" :disabled="isEditModalField" class="form-control form-control-sm"/>
                    </div>

                </div>
                <div class="row mb-3">
                    <div class="col-6">
                        <label>Giới tính</label>
                        <input type="text" :disabled="isEditModalField" class="form-control form-control-sm"/>
                    </div>
                    <div class="col-6">
                        <label>Địa chỉ</label>
                        <input type="text" :disabled="isEditModalField" class="form-control form-control-sm"/>
                    </div>
                </div>

                <hr>
                <div class="row mb-1">
                    <div class="col-12">
                        <label>
                            Thông tin hành vi viễn thông
                        </label>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-6">
                        <label>
                            Số điện thoại
                        </label>
                        <input type="text" :disabled="isEditModalField" class="form-control form-control-sm"/>

                    </div>
                    <div class="col-6">
                        <label>
                            Loại thuê bao
                        </label>
                        <select :disabled="isEditModalField" class="form-select form-select-sm">
                            <option>Loại 1</option>
                            <option>Loại 2</option>
                        </select>

                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-4">
                        <label>ARPU</label>
                        <input type="text" :disabled="isEditModalField" class="form-control form-control-sm"/>
                    </div>
                    <div class="col-4">
                        <label>Thiết bị sử dụng</label>
                        <input type="text" :disabled="isEditModalField" class="form-control form-control-sm"/>
                    </div>
                    <div class="col-4">
                        <label>Trạng thái tài khoản</label>
                        <input type="text" :disabled="isEditModalField" class="form-control form-control-sm"/>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-4">
                        <label>Địa chỉ phát sinh cước</label>
                        <input type="text" :disabled="isEditModalField" class="form-control form-control-sm"/>
                    </div>
                    <div class="col-4">
                        <label>Dịch vụ đang sử dụng</label>
                        <input type="text" :disabled="isEditModalField" class="form-control form-control-sm"/>
                    </div>
                    <div class="col-4">
                        <label>Thẻ nạp mệnh giá</label>
                        <input type="text" :disabled="isEditModalField" class="form-control form-control-sm"/>
                    </div>
                </div>
                <div v-show="isViewModalFileField" class="row mb-3">
                    <div class="col-12">
                        <label>Thuộc tập thuê bao</label>
                        <input type="text" disabled="true" class="form-control form-control-sm"/>
                    </div>

                </div>
                <div class="row mb-3">
                    <div class="col-12">
                        <label>
                            Phân khúc khác hàng
                        </label>
                        <select :disabled="isEditModalField" class="form-select form-select-sm">
                            <option>Loại 1</option>
                            <option>Loại 2</option>
                        </select>

                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-12">
                        <label>
                            Hành vi, sở thích
                        </label>
                        <input type="text" :disabled="isEditModalField" class="form-control form-control-sm"/>

                    </div>
                </div>
                <div class="card-footer text-end">
                    <button type="button" class="btn btn-primary" @click="closeModalSub" v-show="!isEditModalField">Bỏ qua</button>
                    <button type="button" class="btn btn-success" @click="addEditOneSub" v-show="!isEditModalField"><i class="uil uil-save me-1"></i> Lưu lại</button>

                </div>
            </div>

        </b-modal>
        <b-modal id="modal-add-list-tb" size="lg" title="Tải danh sách liên hệ vào tập TB" title-class="font-18" hide-footer>
            <div class="card">
                <div class="card-body">

                    <!-- file upload -->
                    <vue-dropzone id="dropzone" ref="myVueDropzone" :use-custom-slot="true" :options="dropzoneOptions">
                        <div class="dropzone-custom-content">
                            <i class="display-4 text-muted bx bxs-cloud-upload"></i>
                            <h4>Thả files vào đây hoặc kích nút upload.</h4>
                        </div>
                    </vue-dropzone>
                    <!--                    <div class="text-center mt-4">-->
                    <!--                        <button type="button" class="btn btn-primary">Send Files</button>-->
                    <!--                    </div>-->
                </div>
                <!-- end card-body -->
            </div>
            <div class="card-footer text-end">
                <button type="button" class="btn btn-primary" @click="closeModalListSub">Bỏ qua</button>
                <button type="button" class="btn btn-success" @click="addListSub"><i class="uil uil-save me-1"></i> Lưu lại</button>

            </div>
        </b-modal>
    </div>
</template>
