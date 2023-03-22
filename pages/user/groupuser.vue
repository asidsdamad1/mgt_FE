<script>
import {mapActions} from "vuex";
import GroupQuantitiesList from "@/components/admin/GroupQuantitiesList";
import CreateUserGroup from "@/components/admin/modal/CreateUserGroup";
import ListUserOfGroup from "@/components/admin/ListUserOfGroup";

export default {
    name: "user-groups",
    mounted() {
        this.getListUserGroup();
    },
    components: {
        GroupQuantitiesList,
        CreateUserGroup,
        ListUserOfGroup
    },
    methods: {
        ...mapActions('admin/group', {
            apiGetListGroup: 'apiGetListGroup',
            apiGetListGroupQuantities: 'apiGetListGroupQuantities',
            apiEditGroup: 'apiEditGroup',
            apiDeleteGroup: 'apiDeleteGroup'
        }),
        getListUserGroup() {
            let objInput = {status: -1};
            this.apiGetListGroup(objInput)
                .then(response => {
                    if (response.err_code === 0) {
                        let data = response['data'];
                        console.log('getListUserGroup', data);
                        console.log('getListUserGroup', response.parrentId);
                        let parentId = response.parrentId;
                        this.buildTree(data,parentId);
                    } else {
                        this.commonWarningVue(response.err_message);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    // this.commonLoadingPage(false);
                });
        },nodeSelect(node, isSelected) {
            console.log('Node ' + node.data.name + ' has been ' + (isSelected ? 'selected' : 'deselected'))
            if (isSelected) {
                this.selectedNode = node.data
            } else if (node.data === this.selectedNode) {
                this.selectedNode = null
            }
        },
        menuItemSelected(item, node) {
            if (item.code === 'ADD_CHILD_NODE') {
                this.parentId = node.data.id;
                this.prepareAddUserGroup();
            }else if(item.code === 'DELETE_NODE'){
                this.deleteGroup();
            }
        },
        list_to_tree(list,parentId) {
            var map = {}, node, roots = [], i;

            for (i = 0; i < list.length; i += 1) {
                map[list[i].id] = i; // initialize the map
                list[i].children = []; // initialize the children
            }

            for (i = 0; i < list.length; i += 1) {
                node = list[i];
                if (node.parent !== parentId) {
                    // if you have dangling branches check that map[node.parentId] exists
                    list[map[node.parent]].children.push(node);
                } else {
                    roots.push(node);
                }
            }
            return roots;
        },
        buildTree(groupList,parentId){
            this.treeData = this.list_to_tree(groupList,parentId);
        },
        prepareAddUserGroup(){
            this.$bvModal.show('modal-add_user-group');
        },
        handleAfterAddGroup(){
            this.getListUserGroup();
        },
        updateGroup(){
            if (this.groupUserObj.name===null || this.groupUserObj.name.trim()===''){
                this.commonNotifyVue('Vui lòng nhập Tên nhóm ','warn');
            }else{
                this.apiEditGroup(this.selectedNode)
                    .then(response => {
                        console.log('apiEditGroup', response);
                        if (response.err_code === 0) {
                            this.commonNotifyVue(response.err_message,'info')
                        } else {
                            this.commonWarningVue(response.err_message);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
                    .finally(() => {
                        // this.commonLoadingPage(false);
                    });
            }
        },
        deleteGroup(){
            this.apiDeleteGroup({id:this.selectedNode.id})
                .then(response => {
                    console.log('apiDeleteGroup', response);
                    if (response.err_code === 0) {
                        this.commonNotifyVue(response.err_message,'info')
                    } else {
                        this.commonWarningVue(response.err_message);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    // this.commonLoadingPage(false);
                });
        }

    }, data: function () {
        return {
            treeData: [{"id": -1, "name": "" }],
            selectedNode: null,
            contextMenuItems: [{code: 'DELETE_NODE', label: 'Xóa nhóm'}, {
                code: 'ADD_CHILD_NODE',
                label: 'Thêm nhóm con'
                }
            ],
            parentId:0
        };
    },
    computed: {
        rows() {
            return this.tableData.length;
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="card">
            <div class="card-header">

            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <div class="row">
                            <div class="col-6">
                                <button type="button" @click="prepareAddUserGroup" class="btn btn-primary d-block"><i class="uil uil-plus me-2"></i>Tạo nhóm cha</button>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <b-tree-view
                                    :data="treeData"
                                    ref="tree"
                                    :nodesDraggable="true"
                                    :contextMenu="true"
                                    :contextMenuItems="contextMenuItems"
                                    :renameNodeOnDblClick="true"
                                    :showIcons="true"
                                    iconClassProp="icon"
                                    prependIconClass="fas"
                                    @contextMenuItemSelect="menuItemSelected"
                                    @nodeSelect="nodeSelect"></b-tree-view>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9" v-if="selectedNode">
                        <div class="card">
                            <div class="card-header">
                                <label style="font-weight: bold">Chi tiết nhóm người dùng</label>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-3">
                                        <label>Tên nhóm</label>
                                        <input type="text" class="form-control" v-model="selectedNode.name">
                                    </div>
                                    <div class="col-2">
                                        <label>Loại nhóm</label>
                                        <select v-model="selectedNode.type"  :disabled="true" class="form-control">
                                            <option value="1">Admin Mobifone</option>
                                            <option value="2">Agency</option>
                                            <option value="3">Client</option>
                                        </select>
                                    </div>
                                    <div class="col-1">
                                        <label>Trạng thái</label>
                                        <select v-model="selectedNode.status" class="form-control">
                                            <option value="1">Active</option>
                                            <option value="0">Inactive</option>
                                        </select>
                                    </div>
                                    <div class="col-4">
                                        <label>Mô tả</label>
                                        <div class="row">
                                            <div class="col-9">
                                                <input type="text" class="form-control" v-model="selectedNode.description">
                                            </div>
                                            <div class="col-3">
                                                <button type="button" @click="updateGroup" class="btn btn-primary d-block"> Cập nhật</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr>

                                <b-tabs content-class="mt-3">
                                    <b-tab title="Danh Sách Cấp Sản Lượng" v-if="selectedNode.group_type!==1" active>
                                        <group-quantities-list :groupId="selectedNode.id"></group-quantities-list>
                                    </b-tab>
                                    <b-tab title="Danh sách người dùng của nhóm">
                                        <list-user-of-group :groupId="selectedNode.id"></list-user-of-group>
                                    </b-tab>


                                </b-tabs>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <create-user-group @handleAfterAction="handleAfterAddGroup" :groupUserParentId="parentId"></create-user-group>
    </div>
</template>


<style scoped>

</style>
