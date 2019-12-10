<template>
  <aside id="sidebar">
    <div>
      <router-link to="index">首页</router-link>
    </div>
    <div>
      <router-link to="about">关于</router-link>
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
  border-right 1px solid whitesmoke
  display flex
  flex-direction column
  justify-content flex-start
  align-items center

  div {
    height 50px
  }
}
</style>
