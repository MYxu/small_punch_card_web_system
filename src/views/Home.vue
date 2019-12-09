<template>
  <div id="home-box">
    <div v-for="item in list" v-bind:key="item"></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data: function () {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  components: {}
}
</script>

<style scoped lang="stylus">
  #home-box {
    div {
      height 100px
      border-bottom 1px solid red
    }
  }
</style>
