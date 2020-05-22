import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import App from '../App.vue'
import Test from '../views/Test.vue'
import Index from "../views/Index";
import ResultPage from "../views/ResultPage";
import EChartStyle from "../views/EChartStyle";
import HelloWork from "../views/HelloWork";
import History from "../views/History";
import UploadFiles from "../views/UploadFiles";
import SignIn from "../views/Login";
import SignUp from "../views/Register";
import Progress from "../views/Progress";

Vue.use(VueRouter)

  const routes = [
  {
    show: true,
    path: '/',
    name: 'Testing Platform',
    component: Index,
    redirect:"/Home",
    children:[
      {
        path: '/Home',
        name: 'Home',
        component: Home
      },
      {
        path: '/Test',
        name: 'Try Out Model',
        component: Test
      },
      {
        path: '/History',
        name: 'Review the History',
        component: History
      }
    ]
  },
    {
      path: '/ResultPage',
      name: 'ResultPage',
      component: ResultPage,
      props:true,
      show: false
    },
    {
      path: '/EChartStyle',
      name: 'EChartStyle',
      component: EChartStyle,
      props:true,
      show: false
    },
    {
      // 测试画图
      path: '/HelloWork',
      name: 'HelloWork',
      component: HelloWork,
      props:true,
      show: false
    },
    {
      // 测试上传文件
      path: '/UploadFiles',
      name: 'UploadFiles',
      component: UploadFiles,
      props:true,
      show: false
    },
    {
      // 登录
      path: '/Login',
      name: 'Login',
      component: SignIn,
      props:true,
      show: false
    },
    {
      // 注册
      path: '/Register',
      name: 'Register',
      component: SignUp,
      props:true,
      show: false
    },
    {
      // 测试流程
      path: '/Progress',
      name: 'Progress',
      component: Progress,
      props:true,
      show: false
    }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
