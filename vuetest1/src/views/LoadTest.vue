<template>
    <div>
        <el-table :data="tableData">
            <el-table-column prop="matrixName" label="Metric Name" width="120">
            </el-table-column>
            <el-table-column prop="f1" label="f1 score" width="140">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>

    export default {
        name: "LoadTest",
        data() {
            return {
            // tableData: [
            //     { "matrixName": "cosine_similarity", "f1": "0.72727275" },
            //     { "matrixName": "canberra_similarity", "f1": "0.6792453" },
            //     { "matrixName": "euclidean_similarity", "f1": "0.33333334" },
            //     { "matrixName": "keselj_similarity", "f1": "0.6792453" },
            //     { "matrixName": "manhattan_similarity", "f1": "0.65384614" } ]

                tableData: {

                }
            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>