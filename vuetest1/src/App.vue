<template>
  <div id="app">
      <el-container style="height: 700px; border: 1px solid #eee">
          <!--Side Bar -->
          <el-aside width="18%" style="background-color: rgb(238, 241, 246)">
              <el-image
                      style="width: 100%; height: 15%"
                      :src="url"
                      :fit="fit"></el-image>

<!--              Show the menu dynamically-->
              <el-menu router :default-openeds="['0']">
                  <el-submenu v-for="(item,index) in $router.options.routes" :index="index+''" v-if="item.show">
                      <template slot="title"><i class="el-icon-menu"></i>{{item.name}}</template>
                      <el-menu-item v-for="(item2,index2) in item.children" :index="item2.path"
                                    :class="$route.path==item2.path?'is-active':''">{{item2.name}}</el-menu-item>
                  </el-submenu>
              </el-menu>
          </el-aside>

          <!--Right Part -->
          <el-container>
              <!--Header -->
              <el-header style="text-align: right; font-size: 12px">
                  <span v-if="this.global.userName==''">
                      <el-button type="text" @click="runLogin">Login</el-button>
                      <el-button type="text" @click="runRegister">Register</el-button>
                  </span>
                  <span v-else>
                      Welcome {{this.global.userName}}
                      <el-button type="text" @click="runLogout">Logout</el-button>
                  </span>

              </el-header>
              <!--Dynamic Page-->
              <el-main>
                  <router-view></router-view>
              </el-main>
          </el-container>
      </el-container>
      <el-footer height="5%" style="text-align: right; font-size: 12px">Copyright © 2020 The University of Melbourne. All rights reserved.</el-footer>

  </div>
</template>


<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>

<script>

    export default {
        data() {
            return {
                fit: 'fill',
                url: 'https://courseseeker.edu.au/assets/images/institutions/3036.png',
            }
        },
        methods:{
            runLogin(){
                //检测数据是否可修改--testing
                // this.global.userName='Alice';
                // window.reload();
                this.$router.push({path: '/Login'})
            },
            runRegister(){
                this.$router.push({path: '/Register'})
            },
            runLogout(){
                this.global.userName='';
                this.$router.push({path: '/'})
            }


        }

    };
</script>

