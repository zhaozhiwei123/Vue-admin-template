import Vue from 'vue'
import router from './router'
import store from './store'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
const whiteList = ['login', 'register', 'registerResult'] // no redirect whitelist 白名单
var token = ""
  router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    if (Vue.$cookies.get("token")) {
      /* has token */
      if (to.path === '/user/login') {
        //   说明一登录直接进入首页
        next({ path: '/indexDesktop/welcome' })
        // next({ path: '/welcome/Welcome' })
        NProgress.done()
      } else {
        if (store.getters.roles.length === 0) {
            // 说明没获得用户信息，需要重新获取
            store.dispatch('GetInfo')
            .then(() => {
              console.log(5555)
              // 调用 vuex 的 从后端获取用户的路由菜单，动态添加可访问路由表
              store.dispatch('GenerateRoutes').then(() => {
                // 把已获取到的路由菜单加入到路由表中
                router.addRoutes(store.getters.addRouters)
                const redirect = decodeURIComponent(from.query.redirect || to.path)
                console.log(redirect)
                if (to.path === redirect) {
                  // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                  next({ ...to, replace: true })
                } else {
                  // 跳转到目的路由
                  next({ path: redirect })
                }
                
              })
            })
            .catch(() => {
            //   notification.error({
            //     message: '错误',
            //     description: '请求用户信息失败，请重试'
            //   })
            //   store.dispatch('Logout').then(() => {
            //     next({ path: '/user/login', query: { redirect: to.fullPath } })
            //   })
            console.log("失败")
            })
           
        } else {
          next()
        }
      }
    } else {
      if (whiteList.includes(to.name)) {
        // 在免登录白名单，直接进入
        next()
      } else {
        next({ path: '/user/login', query: { redirect: to.fullPath } })
        NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
      }
    }
  })
  
  router.afterEach(() => {
    NProgress.done() // finish progress bar
  })