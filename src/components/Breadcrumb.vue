<template>

<div class="breadcrumb">
  <span>HOME</span>
  <span class="separator">></span>
  <span class="current">{{ currentPage }}</span>
</div>

</template>

<script>

export default{

computed:{
  currentPage(){
    return this.$route.name
      ? this.$route.name.toUpperCase()
      : ""
  }
}

}

</script>

<style scoped>

.breadcrumb{
  background:#f3f4f6;
  padding:12px 40px;
  font-size:14px;
  color:#6b7280;
}

.separator{
  margin:0 6px;
}

.current{
  font-weight:600;
  color:#374151;
}

</style>