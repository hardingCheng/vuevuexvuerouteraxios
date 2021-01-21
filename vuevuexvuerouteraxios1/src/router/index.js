import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/index.vue'
import Mine from '../pages/Mine/index.vue'
import Shop from '../pages/Shop/index.vue'
import Login from '../pages/Login/index.vue'
import store from '../store/index'


Vue.use(Router)

export default function() {
  const router = new Router({
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },{
        path: '/mine',
        name: 'Mine',
        component: Mine,
        // beforeEnter: (to, from, next) => {
        //   var token = null;
        //   if(token){
        //     next()
        //   }else{
        //     next({
        //       path:'/login'
        //     })
        //   }
        // }
      },{
        path: '/shop',
        name: 'Shop',
        component: Shop
      },{
        path: '/login',
        name: 'Login',
        component: Login,
        meta:{
          isLogin:true
        }
      }
    ]
  })

router.beforeEach((to, from, next) => {
  if(to.matched.some(item => item.meta.isLogin)){
    next()

  }else{
    //token是否存在s
    if(store.state.loginModules.token){
      next()
    }else{
      next({
        path:'/login'
      })
    }
  }
})



  return router
}
