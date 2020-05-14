<template>

    <div>
        <h1>Please select the testing mode</h1>
        <el-button type="primary" @click="same" round>Individual Comparision</el-button>
        <el-button type="primary" @click="different" round>Group Comparision</el-button>
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
                axios.post('http://localhost:8181//selectmode//runalgo', {
                    data: "same"
                }).then(function (response ) {
                    _this.loading=false;
                    //console.log(response.data);
                    console.log(response.data);
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
            },
            different(){
                this.loading=true;
                const _this = this
                axios.post('http://localhost:8181//selectmode//runalgo', {
                    data: "different"
                }).then(function (response) {
                    //stop loading widget
                    _this.loading=false;
                    console.log(response);
                    _this.$router.push({
                        path: '/ResultPage',
                        query: {
                            data:response.data
                        }
                    })
                }).catch(function (error) {
                    //stop loading widget
                    _this.loading=false;
                    console.log(error);

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