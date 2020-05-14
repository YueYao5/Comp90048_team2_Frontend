<template>
    <div>
        <template>
            <el-tabs  @tab-click="handleClick">
                <el-tab-pane label="AUC Graph" name="first">
                    <div class="block">
                        <span class="demonstration"></span>
                        <el-image :src="graphURL"></el-image>
                    </div>
                </el-tab-pane>

<!--                F1 Score Table-->
                <el-tab-pane label="F1 Score Table" name="second" @click="f1Score">
                    <el-table :data="this.resultData.f1_scoreTable">
                        <el-table-column prop="matrixName" label="Metric Name" width="120">
                        </el-table-column>
                        <el-table-column prop="f1" label="f1 score" width="140">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>

<!--                Probability-->
                <el-tab-pane label="Probability" name="third"></el-tab-pane>

<!--                Result Table-->
                <el-tab-pane label="Result Table" name="fourth">
                    <el-table :data="this.resultData.resultTable">
                        <el-table-column prop="result" label="Result" width="120">
                        </el-table-column>
                        <el-table-column prop="matrixName" label="Metric Name" width="140">
                        </el-table-column>
                        <el-table-column prop="question" label="Question" width="120">
                        </el-table-column>
                        <el-table-column prop="Prediction" label="Prediction" width="140">
                        </el-table-column>
                        <el-table-column prop="File" label="File" width="140">
                        </el-table-column>
                        <el-table-column prop="Truth" label="Truth" width="120">
                        </el-table-column>
                    </el-table>
                </el-tab-pane>

                <el-tab-pane label="Similarity Table" name="fifth"></el-tab-pane>
            </el-tabs>
        </template>


    </div>

</template>

<script>
    export default {
        name: "ResultPage",
        data(){
            //console.log(this.$route.query.data)
            return {
                data:this.$route.query.data,
                src:require('../assets/LOGO/auc.png'),

                resultData: {
                    f1_scoreTable:[{"matrixName": "name","f1":"0.00"},{"matrixName": "name","f1":"0.00"}],
                    resultTable:[{"result": "False_Negative", "matrixName": "cosine_similarity", "question": "02", "Prediction": "0", "File": "90", "Truth": "1" },
                        {"result": "False_Negative", "matrixName": "cosine_similarity", "question": "02", "Prediction": "0", "File": "90", "Truth": "1" }],
                    AUG_graph:[{"URL":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}]
                },
                graphURL:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"



            }
            console.log(this.resultData)
        },
        methods:{
            handleClick(){
                // console.log("111")
                this.resultData=this.$route.query.data;
                console.log(this.resultData.AUG_graph[0].URL);
                this.graphURL=this.resultData.AUG_graph[0].URL


            },
            f1Score(){
                alert("jump to f1 score table")

            }

        }

    }
</script>

<style>
    body {
        margin: 0;
    }
</style>