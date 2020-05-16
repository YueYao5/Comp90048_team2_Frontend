<template>
    <div>
        <template>{{data}}</template>
    </div>

</template>

<script>
    export default {
        name: "ResultPage",
        data(){
            //console.log(this.$route.query.data)
            return {
                data:this.$route.query.data,

                // 算法查询值返回
                resultData: {
                    fileName:"fileName.txt",
                    possibility:"0.8",
                    submissionTime:"012-03-24 01:23:34.0"
                },


            }
            console.log(this.resultData)
        },
        methods:{

        },
        mounted() {
            this.resultData=this.$route.query.data;
        }

    }
</script>

<style>
    body {
        margin: 0;
    }
</style>