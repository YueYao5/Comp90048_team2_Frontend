<template>
    <div>
        <div v-loading="loading"> </div>
        <h1>History Page</h1>
        <el-table :data="this.resultData" v-if="resultData.errorInfo!='Empty History'">
            <el-table-column prop="fileName" label="File Name" width="120">
            </el-table-column>
            <el-table-column prop="possibility" label="Possibility" width="120">
            </el-table-column>
            <el-table-column prop="submissionTime" label="Possibility" width="120">
            </el-table-column>
        </el-table>
        <div v-else>
            <h1>{{resultData}}</h1>
            <h1>No Record</h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "History",
        mounted() {
            //检查是否登录
            if(this.global.userName==''){
                //跳转登录
                this.$router.push({path: '/Login'})
            }else{
                this.loading=true;
                const _this = this;
                // 请求接口
                axios.post('http://localhost:8181//getRecords',{userEmail:this.global.userName}).then(function (response) {
                    _this.loading=false;
                    //console.log(response.data);
                    console.log(response.data);
                    //做个判断response 返回的是record还是空
                    _this.resultData=response.data;
                    if(_this.resultData.errorInfo=="Empty History"){
                        alert("Empty History");
                    }
                }).catch(function (error) {
                    console.log(error);
                    _this.loading=false;
                });
            }
        },
        data(){
            return {
                loading: false,
                // 返回的history的JSON格式
                resultData: {
                    fileName:"fileName.txt",
                    possibility:"0.8",
                    submissionTime:"012-03-24 01:23:34.0",
                    errorInfo:""
                }
            }
        },

    }
</script>

<style scoped>


</style>