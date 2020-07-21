//前端路由表
import layout from '../layouts'
const { BlankLayout, BasicLayout, pageView } = layout
const constantRouterComponents = {
    BlankLayout: BlankLayout,
    BasicLayout: BasicLayout,
    pageView: pageView
}
const notFoundRouter = {
    path: '*', redirect: '/404', hidden: true
}
/**
 * 获取后端路由信息的 axios API
 * @returns {Promise}
 */
// var data = [
//     {
//       id: 1,
//       title: '会员管理',
//       name: '/admin/user',
//       path: '/admin/user',
//       is_show: false,
//       childMenus: [
//         {
//           id: 2,
//           title: '会员管理',
//           name: '/admin/user',
//           path: '/admin/user',
//           is_show: false
//         },
//         {
//           id: 2,
//           title: '会员管理',
//           name: '/admin/user',
//           path: '/admin/user',
//           is_show: false
//         }
//       ]
  
//     }
//   ]
  
//   function menuBuild (data) {
//     return data.map((v) => {
//       const arr = {
//         id: v.id,
//         meta: {
//           title: v.title
//         },
//         name: v.path,
//         path: v.path,
//         is_show: v.is_show
//       }
//       if (v.childMenus && v.childMenus.length > 0) {
//         arr.children = menuBuild(v.childMenus)
//       }
//       return arr
//     })
//   }
//   var a = menuBuild(data)
//   console.log(a, 98989)
export const getRouterByUser = () => {
    return axios({
        url: '/system/menu/user',
        method: 'get',
        dataType: 'json'
        /* headers: {
          'Access-Token': 'xxx'
        }
        */
    })
}
/**
 * 获取路由菜单信息
 *
 * 1. 调用 getRouterByUser() 访问后端接口获得路由结构数组
 *    @see https://github.com/sendya/ant-design-pro-vue/blob/feature/dynamic-menu/public/dynamic-menu.json
 * 2. 调用
 * @returns {Promise<any>}
 */
export const generatorDynamicRouter = () => {
    return new Promise((resolve, reject) => {
        // ajax
        setTimeout(() => {
            const routers = buildmenu()
            routers.push(notFoundRouter)
            resolve(routers)
        }, 2000)

        // getRouterByUser().then(res => {

        // }).catch(err => {
        //     reject(err)
        // })
    })
}


export function buildmenu(rows) {
    const menus = [
        {
            'title': '首页',
            'key': '',
            'name': 'index',
            "path": "/",
            'component': BasicLayout,
            'redirect': '/indexDesktop/welcome',
            'children': [
                {
                    path: "/indexDesktop/welcome",
                    name: "welcome",
                    component: () => import("@/views/indexDesktop/welcome"),
                    hidden: true,
                    meta: { title: "欢迎页", id: 0 }
                },
                {
                    path: "/system",
                    name: "system",
                    hidden: true,
                    icon: "el-icon-message",
                    meta: { title: "系统管理", id: 1 },
                    component: pageView,
                    children: [
                        {
                            path: "/system/user",
                            name: "user",
                            hidden: true,
                            icon: "el-icon-message",
                            meta: { title: "用户管理", id: 11 },
                            component: () => import("@/views/system/user"),
                            children: []
                        },
                        {
                            path: "/system/role",
                            name: "role",
                            hidden: true,
                            icon: "el-icon-message",
                            meta: { title: "角色管理", id: 12 },
                            component: () => import("@/views/system/role"),
                            children: []
                        },
                        {
                            path: "/system/menu",
                            name: "menuList",
                            hidden: true,
                            icon: "el-icon-message",
                            meta: { title: "菜单管理", id: 13 },
                            component: () => import("@/views/system/menu"),
                            children: []
                        }

                    ]
                }
            ]
        }
    ]
    var arr = [];
    if (rows) {
        buildTree(rows, arr)
        arr.forEach(row => {
            menus[0].children.push(row)
        })
    }
    // menus[0].children.push(row)
    return menus
}
export function buildTree(data, arr) {
    data.forEach((item) => {
        let menu = {
            path: item.MUrl,
            component: () => import(`@/views${item.MUrl}`) || item.key,
            hidden: true,
            children: [],
            name: item.MUrl,
            meta: { title: item.MName, icon: item.MIcon, id: item.ID }
        }
        if (item.Childrens) {
            buildTree(menu.children, item.Childrens)
        }

        routers.push(menu)
    })
}