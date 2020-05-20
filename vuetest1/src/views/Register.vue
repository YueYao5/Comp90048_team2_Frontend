
<template>
    <div class="login clearfix">
        <div class="login-wrap">
            <el-row type="flex" justify="center">
                <el-form ref="loginForm" :model="user" status-icon label-width="80px">
                    <h3>Sign Up</h3>
                    <hr>
                    <el-form-item prop="email" label="Email">
                        <el-input v-model="user.email" placeholder="Please enter your Email"></el-input>
                    </el-form-item>
                    <el-form-item prop="password" label="Password">
                        <el-input v-model="user.password" show-password placeholder="Please enter your password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon @click="doRegister()">SIGN UP</el-button>
                    </el-form-item>
                </el-form>
            </el-row>
        </div>
    </div>
</template>



<script>
    export default {
        name: "Register",
        data() {
            return {
                user: {
                    email: "",
                    password: ""
                },
            };
        },
        created() {
            // console.log($);
            // console.log("1111");
        },
        methods: {
            doRegister() {
                const _this=this;

                if (!this.user.email) {
                    this.$message.error("Please enter your Email！");
                    return;
                } else if (this.user.email != null) {
                    var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                    if (!reg.test(this.user.email)) {
                        this.$message.error("Please enter valid Email Address！");
                    } else if (!this.user.password) {
                        this.$message.error("Please enter password！");
                        return;
                    } else {
                        // this.$router.push({ path: "/" }); //无需向后台提交数据，方便前台调试
                        console.log({
                            "userEmail": this.user.email,
                            "userPassword": this.user.password})
                        $.ajax({
                            async : false,
                            url : "http://localhost:8181//register",
                            type : 'POST',
                            contentType : 'application/x-www-form-urlencoded',
                            dataType:'text',
                            data : {
                                "userEmail": this.user.email,
                                "userPassword": this.user.password},
                            success : function(res) {
                                console.log(res);
                                //通过string来判断注册状态
                                if (res === "true") {
                                    _this.$router.push({ path: "/Login" });
                                } else {
                                    alert("Your email has already existed！");
                                }
                            },
                            error:function(XMLHttpRequest, textStatus){
                                console.log(XMLHttpRequest);  //XMLHttpRequest.responseText    XMLHttpRequest.status   XMLHttpRequest.readyState
                                console.log(textStatus);
                            }
                        });
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .login {
        width: 100%;
        height: 740px;

        background-size: cover;
        overflow: hidden;
    }
    .login-wrap {
        /*background: url("../assets/LOGO/UnimelbLogo.png") no-repeat;*/
        background-color: #e5e5e5;
        background-size: cover;
        width: 400px;
        height: 300px;
        margin: 215px auto;
        overflow: hidden;
        padding-top: 10px;
        line-height: 20px;
    }

    h3 {
        color: #0babeab8;
        font-size: 24px;
    }
    hr {
        background-color: #444;
        margin: 20px auto;
    }

    .el-button {
        width: 80%;
        margin-left: -50px;
    }


</style>