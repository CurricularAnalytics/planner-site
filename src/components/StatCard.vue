<template>
  <div class="card">
    <h2>{{ value }}</h2>
    <p>{{ label }}</p>
    <span>{{ sublabel }}</span>
  </div>
</template>

<script>
export default {
  name: "StatCard",
  props: {
    value: Number,
    label: String,
    sublabel: String
  }
}
</script>

<style scoped>

.card{
  background:white;
  border-radius:12px;
  padding:40px;
  text-align:center;
  box-shadow:0 2px 6px rgba(0,0,0,0.1);
}

.card h2{
  font-size:40px;
  margin-bottom:10px;
}

.card p{
  color:#555;
  font-weight:600;
}

.card span{
  color:#777;
}

</style>