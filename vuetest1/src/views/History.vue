<template>
    <div>
        <div v-loading="loading"> </div>
        <h1>History Page</h1>
        <el-table :data="this.resultData" v-if="this.resultData[0]['fileName']!='null'">
            <el-table-column prop="submissionTime" label="Submission Time" style="width: 100%">
            </el-table-column>
            <el-table-column prop="fileName" label="File Name" >
            </el-table-column>
            <el-table-column prop="possibility" label="Result">
            </el-table-column>
            <el-table-column prop="n_gram" label="Parameter Value" >
            </el-table-column>
            <el-table-column prop="conclusion" label="Conclusion" >
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
        created() {
            //检查是否登录
            if(this.global.userName==''){
                //跳转登录
                this.$router.push({
                    path: '/Login',
                    query: {
                        //跳回的页面
                        data:this.$route.path
                    }
                })
            }else{
                this.loading=true;
                const _this = this;
                // 请求接口
                $.ajax({
                    async : false,
                    url : 'http://localhost:8181//getRecords',
                    type : 'POST',
                    contentType : 'application/x-www-form-urlencoded',
                    dataType:'json',
                    data : {userEmail:this.global.userName},
                    success : function(response) {
                        _this.loading=false;
                        //console.log(response.data);
                        console.log(response);
                        //做个判断response 返回的是record还是空
                        _this.resultData=response;
                        //这里是判断是否是没有历史记录的东西
                        if(_this.resultData[0]["fileName"]=="null"){
                             alert("Empty History");
                         }
                    },
                    error:function(XMLHttpRequest, textStatus){
                        console.log(XMLHttpRequest);  //XMLHttpRequest.responseText    XMLHttpRequest.status   XMLHttpRequest.readyState
                        console.log(textStatus);
                        _this.loading=false;
                    }
                });
            }
        },
        data(){
            return {
                loading: false,
                // 返回的history的JSON格式
                resultData: {
                    fileName:"",
                    possibility:"",
                    submissionTime:"",
                    n_gram:"",
                    conclusion:""
                }
            }
        },

    }
</script>

<style scoped>


</style>