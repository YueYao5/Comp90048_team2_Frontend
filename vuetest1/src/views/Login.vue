<template>
    <div class="login" clearfix>
        <div class="login-wrap">
            <el-row type="flex" justify="center">
                <el-form ref="loginForm" :model="user"  status-icon label-width="80px">
                    <h3>Login</h3>
                    <hr>
                    <el-form-item prop="username" label="Email">
                        <el-input v-model="user.username" placeholder="Please enter your email" prefix-icon></el-input>
                    </el-form-item>
                    <el-form-item id="password" prop="password" label="password">
                        <el-input v-model="user.password" show-password placeholder="please enter your password"></el-input>
                    </el-form-item>

                    <router-link to="/Register">SIGN UP</router-link>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-upload" @click="doLogin()">LOGIN</el-button>
                    </el-form-item>
                </el-form>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userEmail",
        papssword:"userPassword",
        data() {
            return {
                user: {
                    username: "",
                    password: ""
                }
            };
        },
        created() {},
        methods: {
            doLogin() {
                const _this=this;
                if (!this.user.username) {
                    this.$message.error("Please enter your email！");
                    return;
                } else if (!this.user.password) {
                    this.$message.error("Please enter your password！");
                    return;
                } else {
                    //校验用户名和密码是否正确;
                    // Testing--是否正确跳转
                    // this.global.userName=this.user.username;
                    // this.$router.push({ path: "/Home" });
                    //登录成功的跳转
                    console.log({
                        "userEmail": this.user.username,
                        "userPassword": this.user.password})

                    $.ajax({
                        async : false,
                        url : "http://13.211.203.113:8181//login",
                        type : 'POST',
                        contentType : 'application/x-www-form-urlencoded',
                        dataType:'text',
                        data : {
                            "userEmail": this.user.username,
                            "userPassword": this.user.password},
                        success : function(res) {
                            if (res === "true") {
                                _this.$router.push({ path: '/Home' });
                                _this.global.userName=_this.user.username;
                            } else {
                                alert("Your username and password are not correct！");
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
    };
</script>

<style scoped>
    .login {
        width: 100%;
        height: 740px;
        /*background: url("../assets/LOGO/Logo.png") no-repeat;*/
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
        line-height: 40px;
    }
    #password {
        margin-bottom: 5px;
    }
    h3 {
        color: #0babeab8;
        font-size: 24px;
    }
    hr {
        background-color: #444;
        margin: 20px auto;
    }
    a {
        text-decoration: none;
        color: #aaa;
        font-size: 15px;
    }
    a:hover {
        color: coral;
    }
    .el-button {
        width: 80%;
        margin-left: -50px;
    }

</style>