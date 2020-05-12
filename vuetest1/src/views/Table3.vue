<template>
     <div class="hello">
             <div class="fixed-width l-pad">
                <span class="logo">
                    <h1>Please choose one mode to run algorithm</h1>
                </span>
             </div>
        <el-row>
            <el-button-group>
                    <el-button type="primary" icon="el-icon-plus" @click="same">run algorithm on same student</el-button>
                      <el-button type="primary" icon="el-icon-plus" @click="different">run algorithm on different student</el-button>
                </el-button-group>
         </el-row>
     </div>
</template>


<script>
    export default {
        methods: {
            same () {
                $.ajax({

                    url:"http://localhost:8181/selectmode/runalgo",
                    type:"POST",
                    dataType: "string",
                    data:"same"

                })
            },
            different () {
                $.ajax({

                    url:"http://localhost:8181/selectmode/runalgo",

                    type:"POST",

                    dataType: "string",

                    data:"different"

                })
            }
        }
    }
</script>