<template>
  <div id="app">
    <CusHeader></CusHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import CusHeader from "@/component/CusHeader.vue";
export default {
  name: 'App',
  components: {
    CusHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
