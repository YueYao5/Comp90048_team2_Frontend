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

                resultData: {
                    f1_scoreTable:[{"matrixName": "name","f1":"0.00"},{"matrixName": "name","f1":"0.00"}],
                    resultTable:[{"result": "False_Negative", "matrixName": "cosine_similarity", "question": "02", "Prediction": "0", "File": "90", "Truth": "1" },
                        {"result": "False_Negative", "matrixName": "cosine_similarity", "question": "02", "Prediction": "0", "File": "90", "Truth": "1" }],
                    AUG_graph:[{"URL":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}]
                },


            }
            console.log(this.resultData)
        },
        methods:{

        }

    }
</script>

<style>
    body {
        margin: 0;
    }
</style>