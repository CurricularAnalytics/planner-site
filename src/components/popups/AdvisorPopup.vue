<script setup>
import BasePopup from './BasePopup.vue'
import { advisor } from '../../data/data.js'
const emit = defineEmits(['close'])
</script>

<template>
  <BasePopup
    title="Your Academic Advisor"
    subtitle="Connect with your advisor for guidance on your academic journey"
    @close="emit('close')"
  >
    <!-- Advisor header -->
    <div class="advisor-header">
      <div class="advisor-avatar">{{ advisor.initials }}</div>
      <div class="advisor-info">
        <h3 class="advisor-name">{{ advisor.name }}</h3>
        <p class="advisor-role">{{ advisor.role }}</p>
        <p class="advisor-contact">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          {{ advisor.email }}
        </p>
        <p class="advisor-contact">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Office: {{ advisor.office }}
        </p>
      </div>
    </div>

    <!-- Office Hours -->
    <div class="office-hours">
      <p class="hours-title">Office Hours</p>
      <p v-for="slot in advisor.officeHours" :key="slot" class="hours-row">{{ slot }}</p>
    </div>

    <!-- Action buttons -->
    <div class="advisor-actions">
      <button class="btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Schedule a Meeting
      </button>
      <button class="btn-secondary">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Send a Message
      </button>
    </div>

    <p class="response-time">Response time: Usually within 24-48 hours</p>
  </BasePopup>
</template>

<style scoped>
.advisor-header {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    margin-bottom: 20px;
}

.advisor-avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(20, 50, 102);
    color: white;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.advisor-info {
    flex: 1;
}

.advisor-name {
    margin: 0 0 4px;
    font-size: 17px;
    color: rgb(20, 20, 20);
}

.advisor-role {
    margin: 0 0 10px;
    font-size: 13px;
    color: gray;
}

.advisor-contact {
    margin: 5px 0;
    font-size: 13px;
    color: rgb(40, 40, 40);
    display: flex;
    align-items: center;
    gap: 6px;
}

.office-hours {
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 16px 18px;
    margin-bottom: 20px;
}

.hours-title {
    margin: 0 0 10px;
    font-size: 14px;
    font-weight: bold;
    color: rgb(20, 20, 20);
}

.hours-row {
    margin: 6px 0;
    font-size: 13px;
    color: rgb(60, 60, 60);
}

.advisor-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 14px;
}

.btn-primary {
    width: 100%;
    padding: 13px;
    background-color: rgb(20, 50, 102);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-primary:hover {
    background-color: rgb(12, 35, 75);
}

.btn-secondary {
    width: 100%;
    padding: 13px;
    background-color: white;
    color: rgb(20, 20, 20);
    border: 1px solid lightgray;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-secondary:hover {
    background-color: whitesmoke;
}

.response-time {
    text-align: center;
    font-size: 12px;
    color: gray;
    margin: 0;
}
</style>
