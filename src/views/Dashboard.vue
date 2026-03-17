<template>

<div class="dashboard-page">

  <TopHeader />
  <NavigationBar />
  <Breadcrumb />

  <div class="content">
    <DashboardCards />
  </div>

</div>

</template>

<script>

import TopHeader from "../components/TopHeader.vue"
import NavigationBar from "../components/NavigationBar.vue"
import Breadcrumb from "../components/Breadcrumb.vue"
import DashboardCards from "../components/DashboardCards.vue"

export default{
  components:{
    TopHeader,
    NavigationBar,
    Breadcrumb,
    DashboardCards
  }
}

</script>

<style>

.dashboard-page{
  background:#f4f4f4;
  min-height:100vh;
}

.content{
  padding:40px;
  max-width:1200px;
  margin:auto;
}

</style>