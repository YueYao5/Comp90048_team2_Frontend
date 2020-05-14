<template>

    <div>
        <h1>Test Your Model</h1>
        <el-button type="primary" @click="same" round>Run the Algorithm</el-button>

        <template :data="showdata">{{showdata}}</template>
        <div v-loading="loading"> </div>
    </div>
</template>

<script>
    export default {
        name: "Test",
        methods:{
            same(){
                this.loading=true;
                const _this = this
                axios.post('http://localhost:8181//selectmode//runalgo').then(function (response) {
                    _this.loading=false;
                    //console.log(response.data);
                    console.log(response.data);
                    //做个判断message返回算法有误
                    //jump to next page
                    _this.$router.push({
                        path: '/ResultPage',
                        query: {
                            data:response.data
                        }
                    })
                }).catch(function (error) {
                    console.log(error);
                    _this.loading=false;
                });
            }
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