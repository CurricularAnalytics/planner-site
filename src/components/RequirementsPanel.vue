<script setup>
import { requirementBars } from '../data/data.js'

const emit = defineEmits(['open-popup'])
</script>

<template>
  <div id="reqcontainer">
    <h2 class="cardhead">REQUIREMENTS</h2>
    <div v-for="req in requirementBars" :key="req.bold" class="reqrow">
      <div class="reqheader">
        <p class="reqtitle"><strong>{{ req.bold }}</strong> {{ req.rest }}</p>
        <a class="viewcourses" href="#" @click.prevent="emit('open-popup', 'audit')">VIEW COURSES ></a>
      </div>
      <div class="progressbar">
        <div class="progressfill" :class="req.fillClass" :style="{ width: req.width }">{{ req.width }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#reqcontainer {
    background-color: white;
    border: 2px solid lightgray;
    border-radius: 25px;
    flex: 1;
    padding: 25px 30px;
}
.reqrow {
    margin-bottom: 20px;
}

.reqheader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.reqtitle {
    margin: 0;
    font-size: 16px;
}

.viewcourses {
    color: gray;
    font-size: 13px;
    text-decoration: none;
}
</style>
