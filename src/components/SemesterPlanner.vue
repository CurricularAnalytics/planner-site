<script setup>
import { ref, watch } from 'vue'
import { semesters } from '../data/data.js'

const emit = defineEmits(['open-popup'])

const saveLabel   = ref('⊡ Save Plan')
const isSaving    = ref(false)
const showCoursePopup = ref(false)
watch(showCoursePopup, val => { document.body.style.overflow = val ? 'hidden' : '' })

function savePlan() {
  localStorage.setItem('plan_saved_at', new Date().toISOString())
  saveLabel.value = '✓ Saved!'
  isSaving.value  = true
  setTimeout(() => {
    saveLabel.value = '⊡ Save Plan'
    isSaving.value  = false
  }, 1500)
}

function exportPlan() {
  const lines = ['Semester,Course Code,Course Name,Credits,Type']
  for (const sem of semesters) {
    for (const course of sem.courses) {
      lines.push(`${sem.title},${course.code},"${course.name}",${course.credits},${course.type}`)
    }
  }
  const blob = new Blob([lines.join('\n')], { type: 'text/csv' })
  const url  = URL.createObjectURL(blob)
  const a    = document.createElement('a')
  a.href     = url
  a.download = 'degree-plan.csv'
  a.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <div class="container" id="pathwaydiv">
    <div id="pathwayheader">
      <h2 class="cardhead" style="margin-bottom:0">CURRENT PLAN</h2>
      <div id="pathwayactions">
        <button class="pathwaybtn" @click="exportPlan">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Export Plan
        </button>
        <button class="pathwaybtn" @click="showCoursePopup = true">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>
          Retrieve Previous Plan
        </button>
        <button class="pathwaybtn" :disabled="isSaving" @click="savePlan">{{ saveLabel }}</button>
        <button class="pathwaybtn pathwaybtnprimary" @click="emit('open-popup', 'editplan')">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Customize Plan
        </button>
      </div>
    </div>
    <div id="colorcodingbar">
      <div id="colorcodinglegend">
        <span class="legenditem"><span class="legendswatch majorclass"></span>MAJOR CORE</span>
        <span class="legenditem"><span class="legendswatch majorelective"></span>MAJOR ELECTIVE</span>
        <span class="legenditem"><span class="legendswatch gened"></span>GEN ED</span>
        <span class="legenditem"><span class="legendswatch elective"></span>FREE ELECTIVE</span>
        <span class="legenditem"><span class="legendswatch language"></span>MAJOR FOUNDATION</span>
      </div>
    </div>
    <div id="semestercols">
      <div
        v-for="sem in semesters"
        :key="sem.title"
        class="semcol"
      >
        <div class="semcoltitle">
          {{ sem.title }}
        </div>
        <div
          v-for="course in sem.courses"
          :key="course.code"
          class="coursecard"
          :class="course.type"
          @click="showCoursePopup = true"
        >
          <span class="cardcode">{{ course.code }}</span>
          <span class="cardname">{{ course.name }}</span>
          <span class="cardcredits">{{ course.credits }} credit</span>
        </div>
        <div class="semcolfooter">{{ sem.totalCredits }} CREDITS</div>
      </div>
    </div>
  </div>

  <div v-if="showCoursePopup" class="feature-popup-overlay" @click.self="showCoursePopup = false">
    <div class="feature-popup-box">
      <button class="feature-popup-close" @click="showCoursePopup = false">✕</button>
      <p class="feature-popup-text">Feature coming soon</p>
    </div>
  </div>
</template>

<style scoped>
#pathwaydiv {
    padding: 25px 30px;
    margin-bottom: 5px;
}

#pathwayheader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

#pathwayactions {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.pathwaybtn {
    background: none;
    border: 2px solid lightgray;
    border-radius: 25px;
    padding: 7px 14px;
    font-size: 13px;
    font-weight: bold;
    color: gray;
    cursor: pointer;
    font-family: sans-serif;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.pathwaybtn:hover {
    border-color: rgb(20, 50, 102);
    color: rgb(20, 50, 102);
}

.pathwaybtnprimary {
    background-color: rgb(171, 5, 32);
    border-color: rgb(171, 5, 32);
    color: white;
}

.pathwaybtnprimary:hover {
    background-color: rgb(140, 4, 26);
    border-color: rgb(140, 4, 26);
    color: white;
}

#colorcodingbar {
    margin-bottom: 18px;
}

#colorcodinglegend {
    display: flex;
    gap: 20px;
    margin-top: 12px;
}

.legenditem {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: gray;
}

.legendswatch {
    width: 14px;
    height: 14px;
    border-radius: 4px;
    flex-shrink: 0;
}

.legendswatch.majorclass {
    background-color: rgb(59, 108, 212);
}

.legendswatch.majorelective {
    background-color: rgb(129, 156, 215);
}

.legendswatch.elective {
    background-color: rgb(74, 158, 90);
}

.legendswatch.language {
    background-color: rgb(228, 161, 66);
}

.legendswatch.gened {
    background-color: rgb(190, 74, 52);
}

#semestercols {
    display: flex;
    gap: 12px;
    padding-bottom: 5px;
}

.semcol {
    flex: 1;
    min-width: 0;
}

.semcoltitle {
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    color: gray;
    margin-bottom: 10px;
    padding-bottom: 8px;
    border-bottom: 2px solid lightgray;
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
}


.coursecard {
    border-radius: 10px;
    padding: 10px 12px;
    margin-bottom: 8px;
    cursor: pointer;
}

.coursecard:hover {
    filter: brightness(0.92);
}

.coursecard.majorclass,
.coursecard.majorelective,
.coursecard.elective,
.coursecard.language,
.coursecard.gened {
    color: white;
}

.coursecard.majorclass {
    background-color: rgb(59, 108, 212);
}

.coursecard.majorelective {
    background-color: rgb(129, 156, 215);
}

.coursecard.elective {
    background-color: rgb(74, 158, 90);
}

.coursecard.language {
    background-color: rgb(228, 161, 66);
}

.coursecard.gened {
    background-color: rgb(190, 74, 52);
}

.cardcode,
.cardname,
.cardcredits {
    display: block;
}

.cardcode {
    font-size: 11px;
    opacity: 0.85;
    font-weight: bold;
    margin-bottom: 3px;
}

.cardname {
    font-size: 12px;
    font-weight: bold;
    line-height: 1.3;
    margin-bottom: 4px;
}

.cardcredits {
    font-size: 11px;
    opacity: 0.8;
}

.semcolfooter {
    margin-top: 8px;
    font-size: 11px;
    font-weight: bold;
    color: gray;
    letter-spacing: 1px;
    text-align: center;
    padding-top: 8px;
    border-top: 1px solid lightgray;
}
</style>
