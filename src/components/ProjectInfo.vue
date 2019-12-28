<!--圈子首页组件-->
<template>
  <div id="project-info-container">
    <div v-for="item in list" v-bind:key="item" v-html="item"></div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'ProjectInfo',
  data: function () {
    return {
      list: ['这是圈子首页', 2, 3, 4, 5, 6]
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
  #project-info-container {
    width 100%
    height 100%
    /* 当子元素高度超出父级元素高度时，子元素会撑开父级元素，页面自动出现滚动条*/
    overflow auto
    /* 这里很重要，设置padding-right实现页面内容区域可以滚动但窗口不会出现滚动条
     * 原理就是通过设置padding-right撑开元素的宽度，从而将右边的滚动条顶出视图窗口
     * 可以通过F12调试慢慢减少padding-right的值你就会发现滚动条了
     */
    padding-right 30px
    background-color white

    div {
      height 300px
      border-bottom 1px solid whitesmoke
      display flex
      flex-direction column
      justify-content flex-end
    }
  }
</style>
