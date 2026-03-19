<template>
  <TopHeader />
  <NavigationBar />
  <Breadcrumb />

  <router-view />
</template>

<script>
import TopHeader from "./components/TopHeader.vue"
import NavigationBar from "./components/NavigationBar.vue"
import Breadcrumb from "./components/Breadcrumb.vue"

export default {
  components:{
    TopHeader,
    NavigationBar,
    Breadcrumb
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  width: 100%;
}
</style>