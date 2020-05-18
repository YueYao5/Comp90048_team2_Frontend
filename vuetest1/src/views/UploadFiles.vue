<template>
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
        <el-button type="success" icon="el-icon-check" circle @click="nextPage"></el-button>
    </div>

</template>

<script>
    export default {
        data () {
            return {
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
        },
        methods:{
            nextPage(){
                this.$router.push({
                    path: '/ResultPage',
                    query: {
                        //跳回的页面
                        data:this.$route.path
                    }
                })

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