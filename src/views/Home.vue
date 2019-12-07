<template>
  <div id="wrapper">
    <header-bar></header-bar>
    <sidebar></sidebar>
  </div>
</template>

<script>
// @ is an alias to /src
import headerBar from '@/views/layout/header'
import sidebar from '@/views/layout/sidebar'
export default {
  name: 'home',
  components: {
    headerBar,
    sidebar
  }
}
</script>
