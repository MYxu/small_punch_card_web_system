<template>
  <div id="wrapper">
    <page-header/>
    <div id="middle">
      <sidebar/>
      <page-content/>
    </div>
  </div>
</template>

<script>
// 注意导入进来的组件不能使用Header、Content等官方已经使用的名称
import PageHeader from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import PageContent from '../components/layout/Content'
export default {
  name: 'AppMain',
  components: {
    PageHeader,
    Sidebar,
    PageContent
  }
}
</script>

<style scoped lang="stylus">
  #wrapper {
    height 100%
    width 100%
    overflow hidden

    #middle {
      width 100%
      height 100%
    }
  }
</style>
