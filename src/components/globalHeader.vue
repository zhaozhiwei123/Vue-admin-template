<template>
    <div class="global_header">
        <div class="header">
            <div class="collapse flex align_center"><i class="el-icon-bangzhu" @click="Collapse"></i></div>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data(){
        return {

        }
    },
    methods: {
        ...mapActions(['Collapse'])
    },
}
</script>
<style lang="less" scoped>
    .global_header{
        .header{
            height: 70px;
            background: #fff;
            border-bottom: 1px solid #e8e8e8;
            box-shadow: 5px 5px 5px #e8e8e8;
            .collapse{
                height: 100%;
                .el-icon-bangzhu{
                    margin-left: 20px;
                }
            }
        }
    }
</style>