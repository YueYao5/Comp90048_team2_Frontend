import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import App from '../App.vue'
import Test from '../views/Test.vue'
import Index from "../views/Index";
import ResultPage from "../views/ResultPage";
import LoadTest from "../views/LoadTest";

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
        name: 'Try Your Model',
        component: Test
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
      path: '/LoadTest',
      name: 'LoadTest',
      component: LoadTest,
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
