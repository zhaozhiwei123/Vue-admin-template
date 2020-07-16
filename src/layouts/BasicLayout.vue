<template>
  <div class="basic_layout">
    <el-container>
      <el-aside style="width:auto">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          router
          background-color="#001529"
          text-color="#fff"
          :default-active="$route.path"
        >
          <NavMenu :navMenus="menuData2"></NavMenu>
        </el-menu>
      </el-aside>
      <el-main>
        <global-header></global-header>
        <multi-tab></multi-tab>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import NavMenu from '../components/navMenu';
import GlobalHeader from '../components/globalHeader';
import MultiTab from '../components/multiTab';
export default {
  created () {},
  data () {
    return {
      activeIndex: 'aa',
      menuData2: [
        {
          path: '/indexDesktop/welcome',
          name: 'welcome',
          hidden: true,
          icon: 'el-icon-message',
          meta: { title: '欢迎页', id: 0 },
          children: []
        },
        {
          path: '/system',
          name: 'system',
          hidden: true,
          icon: 'el-icon-message',
          meta: { title: '系统管理', id: 1 },
          children: [
            {
              path: '/system/user',
              name: 'user',
              hidden: true,
              icon: 'el-icon-message',
              meta: { title: '用户管理', id: 11 },
              children: []
            },
            {
              path: '/system/role',
              name: 'role',
              hidden: true,
              icon: 'el-icon-message',
              meta: { title: '角色管理', id: 12 },
              children: []
            },
            {
              path: '/system/menu',
              name: 'menu',
              hidden: true,
              icon: 'el-icon-message',
              meta: { title: '菜单管理', id: 12 },
              children: []
            }
          ]
        }
      ]
    }
  },
  components: { NavMenu, GlobalHeader, MultiTab },
  computed: {
    isCollapse () {
      return this.$store.state.isCollapse
    }
  },
  mounted () {},
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    selectMenu (index) {
      console.log(index)
    }
  }
}
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  border-right: none;
}
.basic_layout /deep/.el-submenu__title i,
.basic_layout /deep/.el-menu-item i {
  color: #fff;
}
.basic_layout {
  height: 100%;
  .el-container {
    height: 100%;
    .el-aside {
      background-color: rgb(84, 92, 100);
      text-align: left;
      .logo_title {
        color: #fff;
        border: 1px solid #fff;
        padding: 20px;
      }
    }
    .el-main {
      display: flex;
      flex-direction: column;
    }
  }
}
// .sidebar-container {
//     transition: width 0.28s;
//     width: 180px !important;
//     height: 100%;
//     position: fixed;
//     font-size: 0px;
//     bottom: 0;
//     left: 0;
//     z-index: 1001;
//     overflow: hidden;

//     .horizontal-collapse-transition {
//       transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
//     }
//     .el-scrollbar {
//       height: 100%;
//     }
//     .scrollbar-wrapper {
//       overflow-x: hidden!important;
//       .el-scrollbar__view {
//         height: 100%;
//       }
//     }
//     .el-scrollbar__bar.is-vertical{
//       right: 0px;
//     }
//     .is-horizontal {
//       display: none;
//     }
//     a {
//       display: inline-block;
//       width: 100%;
//       overflow: hidden;
//     }
//     .el-menu {
//       border: none;
//       height: 100%;
//       width: 100% !important;
//     }
//     .is-active > .el-submenu__title{
//         color: #f4f4f5!important;
//     }
//   }
//   .el-submenu /deep/ .el-menu-item{
//     margin-left: 20px!important;
//   }
</style>
