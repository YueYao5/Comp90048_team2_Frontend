<template>
    <div>
        <template>{{data}}</template>
        <template>
            <el-tabs  @tab-click="handleClick">
                <el-tab-pane label="AUC Graph" name="first">
                    <div class="block">
                        <span class="demonstration"></span>
                        <el-image :src="src"></el-image>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="F1 Score Table" name="second"></el-tab-pane>
                <el-tab-pane label="Probability" name="third"></el-tab-pane>
                <el-tab-pane label="TF Table" name="fourth"></el-tab-pane>
                <el-tab-pane label="Similarity Table" name="fifth"></el-tab-pane>
            </el-tabs>
        </template>

    </div>

</template>

<script>
    export default {
        name: "ResultPage",
        data(){
            console.log(this.$route.query.data)
            return {
                data:this.$route.query.data,

                src:require('../assets/LOGO/auc.png')
            }
        },
        methods:{
            handleClick(){
                console.log("111")
            }
        }

    }
</script>

<style>
    body {
        margin: 0;
    }
</style>