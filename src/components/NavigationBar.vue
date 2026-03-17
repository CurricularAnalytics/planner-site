<template>

<nav class="nav-bar">

<div class="nav-item" v-for="item in navItems" :key="item.name">
  <div class="icon">
    <i :class="item.icon"></i>
  </div>
  <span>{{item.name}}</span>
</div>

</nav>

</template>

<script>
export default{
  data(){
    return{
      navItems:[
        {name:"DASHBOARD",icon:"fas fa-home"},
        {name:"WEBSITE",icon:"fas fa-globe"},
        {name:"FORMS",icon:"fas fa-file-alt"},
        {name:"DATA TABLES",icon:"fas fa-database"},
        {name:"CHARTS",icon:"fas fa-chart-line"},
        {name:"APPOINTMENTS",icon:"fas fa-calendar"},
        {name:"MORE",icon:"fas fa-ellipsis-h"}
      ]
    }
  }
}
</script>

<style scoped>

.nav-bar{
  background:#0c3c60;
  display:flex;
  justify-content:space-around;
  padding:20px 0;
  color:white;
}

.nav-item{
  display:flex;
  flex-direction:column;
  align-items:center;
  font-size:12px;
  cursor:pointer;
}

.icon{
  background:#e6e6e6;     /* light gray circle */
  color:#0c3c60;          /* dark blue icon */
  width:45px;
  height:45px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:6px;
  font-size:18px;
}

</style>