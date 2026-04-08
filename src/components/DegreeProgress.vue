<script setup>
import { studentStats } from '../data/data.js'

const progress = Math.round(studentStats.creditsCompleted / studentStats.creditsRequired * 100)
const gpa = studentStats.gpa
const degrees = Math.round(progress / 100 * 360)
const ringStyle = `background: conic-gradient(rgb(20, 50, 102) 0deg ${degrees}deg, lightgray ${degrees}deg 360deg)`
</script>

<template>
  <div id="progresscontainer">
    <h2 class="cardhead">DEGREE PROGRESS</h2>
    <div id="progresscontent">
      <div id="progressring" :style="ringStyle">
        <div id="ringinner">
          <span id="ringpercent">{{ progress }}%</span>
          <span id="ringcompleted">COMPLETED</span>
        </div>
      </div>
      <div id="gpacontent">
        <span id="gpastat">{{ gpa }}</span>
        <span id="gpalabel">CUMULATIVE GPA</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
#progresscontainer {
    background-color: white;
    border: 2px solid lightgray;
    border-radius: 25px;
    flex: 1;
    padding: 25px 30px;
}
#progresscontent {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
}
#progressring {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
#ringinner {
    width: 120px;
    height: 120px;
    background: white;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
#ringpercent {
    font-size: 28px;
    font-weight: bold;
    color: rgb(20, 50, 102);
}

#ringcompleted {
    font-size: 11px;
    color: gray;
}

#gpacontent {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#gpastat {
    font-size: 50px;
    font-weight: bold;
    color: rgb(20, 50, 102);
    line-height: 1;
}

#gpalabel {
    font-size: 12px;
    color: gray;
}
</style>
