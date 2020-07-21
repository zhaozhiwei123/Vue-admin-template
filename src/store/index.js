import Vue from 'vue'
import Vuex from 'vuex'
import constantRouterMap from '../router/defaultRouter'
import { generatorDynamicRouter } from '../utils/routerUtils'
Vue.use(Vuex)
//

export default new Vuex.Store({
  state: {
    roles: [], // 角色ID
    userId: '', // 用户id
    userInfo: {}, // 登录用户信息
    token: '',
    routers: constantRouterMap, // 基础路由
    addRouters: [], // 动态路由
    isCollapse: false // 左边菜单是否收起
  },
  mutations: {
    // 将角色id保存下来
    SetRoles: (state, roles) => {
      state.roles = roles
    },
    // 将用户userID保存下来
    SetUserId: (state, userId) => {
      state.userId = userId
    },
    SetToken: (state, token) => {
      state.token = token
    },
    SetUserInfo: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    },
    Set_Collapse: (state) => {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    Collapse ({ commit }) {
      commit('Set_Collapse')
    },
    Login ({ commit }, data) {
      // 登录的时候调用，存储token相关信息
      // 模拟接口
      return new Promise((resolve, promise) => {
        var token = '123'
        Vue.$cookies.set('token', token, 60 * 60)
        commit('SetToken', token)
        resolve(1)
      })
    },
    LoginOut ({ commit }) {
      return new Promise((resolve) => {
        commit('SetToken', '')
        commit('SetRoles', [])
        commit('SetUserId', '')
        commit('SetUserInfo', {})
        Vue.$cookies.set('token', '')
        resolve()
      })
      // 退出的时候要做的操作
    },
    GetInfo ({ commit }) {
      return new Promise((resolve, reject) => {
        // 调取接口获取登录用户信息
        // 比如得到结果是result
        var result = {
          roleIds: [1, 2],
          userId: 8
        }
        if (result.roleIds) {
          commit('SetRoles', result.roleIds)
          commit('SetUserId', result.userID)
          commit('SetUserInfo', result)
        }
        resolve()
      })
    },
    // 获取接口返回的动态路由信息
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        generatorDynamicRouter(data).then(routers => {
          commit('SET_ROUTERS', routers)
          resolve()
        })
      })
    }
  },
  getters: {
    roles: state => state.roles, // 返回roles
    addRouters: state => state.addRouters
  },
  modules: {
  }
})
