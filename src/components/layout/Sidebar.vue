<template>
  <aside id="sidebar">
    <div class="menu-box">
      <el-menu router :default-active="$route.path" background-color="#ffffff"
               text-color="#909399" active-text-color="#06ac9a"
               style="border-right: none">
        <el-menu-item index="/" class="menu-item">
          <i class="el-icon-s-home"/>
          <span slot="title">圈子首页</span>
        </el-menu-item>
        <el-menu-item index="/diary" class="menu-item">
          <i class="el-icon-s-management"/>
          <span slot="title">日记管理</span>
        </el-menu-item>
        <el-menu-item index="/theme"  class="menu-item">
          <i class="el-icon-s-order"/>
          <span>主题管理</span>
        </el-menu-item>
        <el-menu-item index="/member"  class="menu-item">
          <i class="el-icon-user-solid"/>
          <span>成员管理</span>
        </el-menu-item>
        <el-menu-item index="/count"  class="menu-item">
          <i class="el-icon-s-data"/>
          <span>打卡统计</span>
        </el-menu-item>
        <el-menu-item index="/detail"  class="menu-item">
          <i class="el-icon-s-tools"/>
          <span>圈子详情</span>
        </el-menu-item>
      </el-menu>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped lang="stylus">
#sidebar {
  position fixed
  top 70px
  width 200px
  height 100vh
  line-height 100vh
  text-align center
  background-color: #f9f9f9
  display flex
  justify-content center
  align-items flex-start

  .menu-box {
    width 80%
    height 100%
    margin-top  20px
    background-color white !important
  }
  .menu-item {
    font-size 18px
    &:hover {
      outline 0 !important
      color #06ac9a !important
      //background-color rgba(29, 172, 169, .2) !important
      background-color rgb(249, 249, 249) !important
    }
  }
  .is-active {
    background-color rgba(29, 172, 169, .2) !important
  }
}
</style>
