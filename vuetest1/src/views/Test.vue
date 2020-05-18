<template>

    <div>
        <h1>Test Your Model</h1>
        <el-button type="primary" @click="runAlgorithm" round>Run the Algorithm</el-button>

        <template :data="showdata">{{showdata}}</template>
        <div v-loading="loading"> </div>
    </div>
</template>

<script>
    export default {

        name: "Test",
        methods:{
            runAlgorithm(){
                this.loading=true;
                const _this = this;
                if(this.global.userName==''){
                    //提示登录
                    this.$router.push({
                        path: '/ResultPage',
                        query: {
                        //跳回的页面
                            data:this.$route.path
                        }
                    })

                }
                //axios.post('http://localhost:8181//runalgo',{name:this.global.userName}).then(function (response) {
                    //_this.loading=false;
                    //console.log(response.data);
                    //console.log(response.data);
                    //做个判断message返回算法有误
                    //jump to next page
                    //_this.$router.push({
                        //path: '/ResultPage',
                        //query: {
                            //data:response.data
                       // }
                    //})
                //}).catch(function (error) {
                    //console.log(error);
                    //_this.loading=false;
                //});
                $.ajax({
                    async : false,
                    url : "http://localhost:8181//runalgo",
                    type : 'POST',
                    contentType : 'application/x-www-form-urlencoded',
                    dataType:'json',
                    data : {
                        "userEmail": this.global.userName},
                    success : function(response) {
                        _this.loading=false;
                        //console.log(response.data);
                        console.log(response);
                        //做个判断message返回算法有误
                        //jump to next page
                        _this.$router.push({
                            path: '/ResultPage',
                            query: {
                                data: response
                            }
                        })
                    },
                    error:function(XMLHttpRequest, textStatus){
                        console.log(XMLHttpRequest);  //XMLHttpRequest.responseText    XMLHttpRequest.status   XMLHttpRequest.readyState
                        console.log(textStatus);
                    }
                });
            },
        },
        data(){

            return {
                showdata:this.showdata,
                loading: false
            }
        }
    }
</script>

<style scoped>

</style>