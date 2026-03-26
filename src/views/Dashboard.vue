<template>

<div class="dashboard-page">

  <div class="content">
    <DashboardCards :cards="cards" />
  </div>

</div>

</template>

<script>

import DashboardCards from "../components/DashboardCards.vue"

export default{

components:{
  DashboardCards
},

data(){
return{

/* Dummy data (replace with backend later) */

cards:[
  { label:"CURRENT STUDENTS", value:231, route:"/tables" },
  { label:"CURRENT APPOINTMENTS", value:10, route:"/appointments" },
  { label:"CURRENT CLASSES INFO", value:14, route:"/forms" },
  { label:"COURSE CATALOGUE", value:50, route:"/website" }
]

}
},

mounted(){

/* 🔌 Future backend integration */

 /*
 fetch("/api/dashboard")
   .then(res => res.json())
   .then(data=>{
     this.cards = data
   })
 */

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