<script setup>
const emit = defineEmits(['open-popup'])
</script>

<template>
  <div class="container" id="quicklinksdiv">
    <h2 class="cardhead" style="text-align:center">QUICKLINKS</h2>
    <div id="quicklinkslist">
      <div class="quicklinkcol">
        <p class="quicklinklabel">WANT TO CHANGE MAJORS?</p>
        <button class="quicklinkbtn red" @click="emit('open-popup', 'compare')">SEE A COMPARISON CHART</button>
      </div>
      <div class="quicklinkcol">
        <p class="quicklinklabel">DON'T LIKE THE PATHWAY CREATED?</p>
        <button class="quicklinkbtn red" @click="emit('open-popup', 'editplan')">CUSTOMIZE WITH HELP</button>
      </div>
      <div class="quicklinkcol">
        <p class="quicklinklabel">MAJOR ADVISOR</p>
        <button class="quicklinkbtn blue" @click="emit('open-popup', 'advisor')">NEED HELP? CLICK HERE!</button>
      </div>
      <div class="quicklinkcol">
        <p class="quicklinklabel">SCHEDULE A MEETING</p>
        <button class="quicklinkbtn blue" @click="emit('open-popup', 'trellis')">BOOK VIA TRELLIS</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#quicklinksdiv {
    padding: 25px 30px;
    margin-bottom: 5px;
}

#quicklinkslist {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px 40px;
    margin-top: 5px;
}

.quicklinkcol {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.quicklinklabel {
    margin: 0;
    font-size: 12px;
    color: gray;
    letter-spacing: 0.5px;
    text-align: center;
}

.quicklinkbtn {
    display: block;
    width: 100%;
    padding: 13px 20px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    font-size: 12px;
    letter-spacing: 0.5px;
    text-align: center;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    font-family: sans-serif;
}

.quicklinkbtn.red {
    background-color: rgb(171, 5, 32);
}

.quicklinkbtn.blue {
    background-color: rgb(20, 50, 102);
}

.quicklinkbtn.red:hover {
    background-color: rgb(140, 4, 26);
}

.quicklinkbtn.blue:hover {
    background-color: rgb(12, 35, 75);
}
</style>
