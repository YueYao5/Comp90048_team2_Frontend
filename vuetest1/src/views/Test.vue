<template>

    <div>
        <h1>Test Your Model</h1>
        <div>
            <h1>Please upload known files</h1>
            <uploader :options="known" class="uploader-example">
                <uploader-unsupport></uploader-unsupport>
                <uploader-drop>
                    <p>Drop files here to upload or</p>
                    <uploader-btn>select files</uploader-btn>
                    <!--                <uploader-btn :attrs="attrs">select images</uploader-btn>-->
                    <uploader-btn :directory="true">select folder</uploader-btn>
                </uploader-drop>
                <uploader-list></uploader-list>
            </uploader>

            <br>
            <br>
            <h1>Please upload unknown files</h1>
            <uploader :options="unknown" class="uploader-example">
                <uploader-unsupport></uploader-unsupport>
                <uploader-drop>
                    <p>Drop files here to upload or</p>
                    <uploader-btn>select files</uploader-btn>
                </uploader-drop>
                <uploader-list></uploader-list>
            </uploader>

            <br>
            <br>
        </div>


        <h3>Please enter n for n-gram in algorithm: </h3>
        <input v-model="message" placeholder="n-gram">
        <br>
        <br>
        <el-button type="primary" @click="runAlgorithm" round>Run the Algorithm</el-button>
        <br>
        <template :data="showdata">{{showdata}}</template>
        <div v-loading="loading"> </div>
    </div>
</template>

<script>
    export default {
        name: "Test",
        created(){
            if(this.global.userName=''){
                this.$router.push({
                    path: '/Login',
                    query: {
                        //跳回的页面
                        data:this.$route.path
                    }
                })
            }
        },
        methods:{
            runAlgorithm(){
                this.loading=true;
                const _this = this;
                if(this.global.userName==''){
                    //提示登录
                    this.$router.push({
                        path: '/Login',
                        query: {
                        //跳回的页面
                            data:this.$route.path
                        }
                    })

                }

                $.ajax({
                    async : false,
                    url : "http://localhost:8181//runalgo",
                    type : 'POST',
                    contentType : 'application/x-www-form-urlencoded',
                    dataType:'json',
                    data : {
                        "userEmail": this.global.userName,
                        "n":this.message
                    },
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
                loading: false,
                message:'',
                known: {
                    // 可通过 https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js 示例启动服务
                    target: '//localhost:8181//uploadKnown',
                    testChunks: false,
                },
                unknown:{
                    target: '//localhost:8181//uploadUnknown',
                    testChunks: false,
                },
                attrs: {
                    accept: 'image/*'
                }
            }
        }
    }
</script>

<style scoped>
    .uploader-example {
        width: 880px;
        padding: 15px;
        margin: 40px auto 0;
        font-size: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    }
    .uploader-example .uploader-btn {
        margin-right: 4px;
    }
    .uploader-example .uploader-list {
        max-height: 440px;
        overflow: auto;
        overflow-x: hidden;
        overflow-y: auto;
    }

</style>