<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  methods: {
    doubleSum (number) {
      return new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve(number * 2)
        }, 2000)
      })
    },
    async test () {
      let one = await this.doubleSum(1)
      let two = await this.doubleSum(2)
      let three = await this.doubleSum(3)
      console.log(one, two, three)
    },
    async apiTest () {
      let res = await this.$api.index.apiTest()
      console.log('request end, res => ', res)
    }
  },
  created () {
    this.test()
    console.log('created')
    this.apiTest()
  }
}
</script>

<style scoped lang="stylus">
  #app {
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
  }
  html, body #app {
    height 100%
    width 100%
    overflow hidden
  }
</style>
