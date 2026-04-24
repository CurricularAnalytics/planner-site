<script setup>
import { ref } from 'vue'
import BasePopup from './BasePopup.vue'
import { semesters, professors, currentSemesterTitle } from '../../data/data.js'

const emit = defineEmits(['close'])
const showFeaturePopup = ref(false)

const currentSemester = semesters.find(s => s.title === currentSemesterTitle)
const courses = currentSemester.courses.map(c => ({
  code: c.code,
  name: c.name,
  professor: professors[c.code]?.name ?? 'TBA',
  availability: professors[c.code]?.availability ?? 'TBA',
}))
</script>

<template>
  <BasePopup title="Schedule Office Hours" subtitle="Book a meeting with a professor from your current semester" @close="emit('close')">
    <div class="course-list">
      <div v-for="course in courses" :key="course.code" class="course-row">
        <div class="course-info">
          <p class="course-code">{{ course.code }} — {{ course.name }}</p>
          <p class="prof-name">{{ course.professor }}</p>
          <p class="prof-avail">{{ course.availability }}</p>
        </div>
        <button class="book-btn" @click="showFeaturePopup = true">Book</button>
      </div>
    </div>
    <div class="meeting-info">
      <h3 class="meeting-header">Before Your Appointment</h3>
      <ul>
        <li class="meeting-tip">Prepare your questions ahead of time</li>
        <li class="meeting-tip">Have your course materials ready</li>
        <li class="meeting-tip">Test your camera and microphone</li>
        <li class="meeting-tip">Join the meeting 2-3 minutes early</li>
      </ul>
    </div>
  </BasePopup>

  <div v-if="showFeaturePopup" class="feature-popup-overlay" @click.self="showFeaturePopup = false">
    <div class="feature-popup-box">
      <button class="feature-popup-close" @click="showFeaturePopup = false">✕</button>
      <p class="feature-popup-text">Feature coming soon</p>
    </div>
  </div>
</template>

<style scoped>
.course-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.course-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 14px;
    border: 1px solid lightgray;
    border-radius: 10px;
}

.course-info {
    flex: 1;
}

.course-code {
    margin: 0 0 3px;
    font-size: 13px;
    font-weight: bold;
    color: rgb(20, 20, 20);
}

.prof-name {
    margin: 0 0 3px;
    font-size: 13px;
    color: rgb(50, 50, 50);
}

.prof-avail {
    margin: 0;
    font-size: 12px;
    color: gray;
}

.book-btn {
    padding: 8px 16px;
    background-color: rgb(20, 50, 102);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    font-family: sans-serif;
    flex-shrink: 0;
}

.book-btn:hover {
    background-color: rgb(12, 35, 75);
}

.meeting-info {
    margin-top: 15px;
    padding: 12px 20px;
    background-color: whitesmoke;
    border: 1px solid lightgray;
    border-radius: 10px;
}

.meeting-header {
    margin: 0 0 8px;
    font-size: 14px;
    color: rgb(20, 20, 20);
}

.meeting-tip {
    font-size: 13px;
    color: rgb(60, 60, 60);
    padding: 3px 0;
}
</style>
