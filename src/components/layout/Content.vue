<template>
  <div id="content">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Content'
}
</script>

<style scoped lang="stylus">
  #content {
    height 100%
    box-sizing border-box
    margin-left 200px
    padding-top 70px
  }
</style>
