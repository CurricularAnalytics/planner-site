<template>

<div class="cards-container">

  <div
    v-for="card in cards"
    :key="card.label"
    class="card"
    @click="goTo(card.route)"
  >
    <h2>{{ card.value }}</h2>
    <p>{{ card.label }}</p>
  </div>

</div>

</template>

<script>

export default{

props:{
  cards:Array
},
methods:{
  goTo(route){
    this.$router.push(route)
  }
}


}

</script>

<style scoped>

.cards-container{
  display:grid;
  grid-template-columns:repeat(2, 1fr);
  
  gap:30px;
}

.card{
  background:#f9fafb;
  border-radius:12px;
  padding:50px;
  text-align:center;
  box-shadow:0 3px 10px rgba(0,0,0,0.08);

  cursor:pointer; 
  transition:0.2s;
}

.card:hover{
  transform:translateY(-5px);
  box-shadow:0 6px 18px rgba(0,0,0,0.15);
}

.card h2{
  font-size:40px;
  margin-bottom:8px;
}

.card p{
  color:#6b7280;
  font-size:14px;
}

</style>