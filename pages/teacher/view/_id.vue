<script>
import {
    productData
} from "../data-products";

/**
 * Product-detail component
 */
export default {
    head() {
        return {
            title: `Xem chi tiết tệp TB`
        };
    },
    asyncData({
                  params
              }) {
        console.log("paa", params);
        const productDetail = productData.find(
            user => String(user.id) === params.id
        );
        return {
            productDetail
        };
    },
    data() {
        return {

            title: "Product-detail",
            items: [{
                text: "Ecommerce"
            },
                {
                    text: "Product-detail",
                    active: true
                }
            ]
        };
    },
    methods:{
        goToPrev() {
            this.$router.go(-1);
        },
        searchSub(){

        }
    },
    mounted() {
        console.log('view tep',this.$route.params);
    },

    middleware: "authentication",
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

                        </div>
                    </div>
                    <div class="card-body">

                        <div class="row mb-3">
                            <div class="col-3">
                                <label>Từ khóa tìm kiếm</label>
                                <input type="text" class="form-control form-control-sm"/>
                            </div>
                            <div class="col-2">
                                <label>Giá trị tìm kiếm</label>
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
                                        <button type="button" class="btn btn-sm btn-primary d-block" @click="searchSub"><i class="uil uil-search me-2"></i> Tìm kiếm</button>
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
    </div>
</template>
