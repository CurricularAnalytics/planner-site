<template>

<div class="cards">

  <StatCard
    v-for="card in cards"
    :key="card.label"
    :value="card.value"
    :label="card.label"
    :sublabel="card.sublabel"
  />

</div>

</template>

<script>

import StatCard from "./StatCard.vue"

export default {
  components:{
    StatCard
  },

  data(){
    return{
      cards:[
        {
          value:231,
          label:"CURRENT",
          sublabel:"STUDENTS"
        },
        {
          value:10,
          label:"CURRENT",
          sublabel:"APPOINTMENTS"
        },
        {
          value:14,
          label:"CURRENT",
          sublabel:"CLASSES INFO"
        },
        {
          value:50,
          label:"COURSE",
          sublabel:"CATALOGUE"
        }
      ]
    }
  }
}

</script>

<style scoped>

.cards{
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap:30px;
}

</style>