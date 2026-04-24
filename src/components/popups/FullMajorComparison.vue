<script setup>
import BasePopup from './BasePopup.vue'
import { currentMajor } from '../../data/data.js'

const props = defineProps({
  major: { type: Object, required: true },
})
const emit = defineEmits(['close'])
</script>

<template>
  <BasePopup
    :title="`Full Major Comparison`"
    :subtitle="`Detailed comparison between Computer Science and ${major.name}`"
    :large="true"
    @close="emit('close')"
  >
    <div class="fmc-wrap">

      <!-- Stat Cards -->
      <div class="fmc-cards">
        <div class="fmc-card fmc-card--current">
          <p class="fmc-card-title">Computer Science<br><span class="fmc-current-badge">(Current)</span></p>
          <div class="fmc-stat"><span class="fmc-stat-label">Total Credits:</span> <span>{{ currentMajor.totalCredits }}</span></div>
          <div class="fmc-stat"><span class="fmc-stat-label">Major Core:</span> <span>{{ currentMajor.coreCourses }} credits</span></div>
          <div class="fmc-stat"><span class="fmc-stat-label">Major Electives:</span> <span>{{ currentMajor.electives }} credits</span></div>
          <div class="fmc-stat"><span class="fmc-stat-label">General Education:</span> <span>{{ currentMajor.genEd }} credits</span></div>
          <div class="fmc-stat"><span class="fmc-stat-label">Free Electives:</span> <span>{{ currentMajor.freeElectives }} credits</span></div>
          <div class="fmc-stat"><span class="fmc-stat-label">Avg. Completion:</span> <span>{{ currentMajor.avgTime }} years</span></div>
          <div class="fmc-stat"><span class="fmc-stat-label">Difficulty:</span> <span>{{ currentMajor.difficulty }}</span></div>
        </div>

        <div class="fmc-card fmc-card--compare">
          <p class="fmc-card-title">{{ major.name }}</p>
          <div class="fmc-stat"><span class="fmc-stat-label">Total Credits:</span> <span>{{ major.totalCredits }}</span></div>
          <div class="fmc-stat"><span class="fmc-stat-label">Major Core:</span> <span>{{ major.coreCourses }} credits</span></div>
          <div class="fmc-stat"><span class="fmc-stat-label">Major Electives:</span> <span>{{ major.electives }} credits</span></div>
          <div class="fmc-stat"><span class="fmc-stat-label">General Education:</span> <span>{{ major.genEd }} credits</span></div>
          <div class="fmc-stat"><span class="fmc-stat-label">Free Electives:</span> <span>{{ major.freeElectives }} credits</span></div>
          <div class="fmc-stat"><span class="fmc-stat-label">Avg. Completion:</span> <span>{{ major.avgTime }} years</span></div>
          <div class="fmc-stat"><span class="fmc-stat-label">Difficulty:</span> <span>{{ major.difficulty }}</span></div>
        </div>
      </div>

      <!-- Required Courses -->
      <div class="fmc-section">
        <p class="fmc-section-title">Required Courses Comparison</p>
        <div class="fmc-cols">
          <div>
            <p class="fmc-col-header cs-color">Computer Science Core Courses</p>
            <ul class="fmc-course-list">
              <li v-for="c in currentMajor.courses" :key="c">{{ c }}</li>
            </ul>
          </div>
          <div>
            <p class="fmc-col-header compare-color">{{ major.name }} Core Courses</p>
            <ul class="fmc-course-list">
              <li v-for="c in major.courses" :key="c">{{ c }}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Career Outcomes -->
      <div class="fmc-section">
        <p class="fmc-section-title">Career Outcomes &amp; Opportunities</p>
        <div class="fmc-cols">
          <div>
            <p class="fmc-col-header cs-color">Computer Science Careers</p>
            <ul class="fmc-bullet-list">
              <li v-for="c in currentMajor.careers" :key="c">{{ c }}</li>
            </ul>
            <p class="fmc-salary">Avg. Starting Salary: <strong>{{ currentMajor.avgSalary }}</strong></p>
          </div>
          <div>
            <p class="fmc-col-header compare-color">{{ major.name }} Careers</p>
            <ul class="fmc-bullet-list">
              <li v-for="c in major.careers" :key="c">{{ c }}</li>
            </ul>
            <p class="fmc-salary">Avg. Starting Salary: <strong>{{ major.avgSalary }}</strong></p>
          </div>
        </div>
      </div>

      <!-- Credits That Transfer -->
      <div class="fmc-section fmc-transfer">
        <p class="fmc-section-title">Credits That Transfer</p>
        <p class="fmc-transfer-desc">
          If you switch to {{ major.name }}, the following courses from your current pathway will transfer:
        </p>
        <div class="fmc-cols">
          <div>
            <p class="fmc-col-header">General Education</p>
            <ul class="fmc-bullet-list">
              <li v-for="c in major.transfer.fromCurrent" :key="c">{{ c }}</li>
            </ul>
          </div>
          <div>
            <p class="fmc-col-header">Core Courses</p>
            <ul class="fmc-bullet-list">
              <li v-for="c in major.transfer.toCounted" :key="c">{{ c }}</li>
            </ul>
          </div>
        </div>
        <div class="fmc-transfer-summary">
          <span>Estimated Transfer: <strong>~{{ major.transfer.estimatedCredits }} credits</strong></span>
          <span>Would need: <strong>~{{ major.transfer.creditsNeeded }} more credits</strong> to complete</span>
          <span>~{{ major.transfer.yearsToComplete }} years to complete</span>
        </div>
      </div>

      <div class="fmc-actions">
        <button class="fmc-btn-close" @click="emit('close')">Close</button>
      </div>
    </div>
  </BasePopup>
</template>

<style scoped>
.fmc-wrap {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* Stat Cards */
.fmc-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.fmc-card {
  border-radius: 10px;
  padding: 14px 16px;
  font-size: 0.82rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.fmc-card--current {
  background: #eef3ff;
  border: 1px solid #c5d3f5;
}

.fmc-card--compare {
  background: #edfaf3;
  border: 1px solid #b6e8cc;
}

.fmc-card-title {
  font-weight: 700;
  font-size: 0.88rem;
  margin-bottom: 4px;
  line-height: 1.4;
}

.fmc-current-badge {
  font-weight: 400;
  font-size: 0.8rem;
  color: #555;
}

.fmc-stat {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.fmc-stat-label {
  color: #555;
}

/* Sections */
.fmc-section {
  background: #f8f8fb;
  border-radius: 10px;
  padding: 14px 16px;
}

.fmc-section-title {
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 12px;
}

.fmc-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.fmc-col-header {
  font-weight: 700;
  font-size: 0.82rem;
  margin-bottom: 8px;
}

.cs-color      { color: #2563eb; }
.compare-color { color: #16a34a; }

.fmc-course-list {
  list-style: none;
  padding: 0;
  font-size: 0.8rem;
  line-height: 2;
  color: #333;
}

.fmc-bullet-list {
  list-style: disc;
  padding-left: 16px;
  font-size: 0.82rem;
  line-height: 1.9;
  color: #333;
}

.fmc-salary {
  font-size: 0.82rem;
  margin-top: 8px;
  color: #444;
}

/* Transfer */
.fmc-transfer-desc {
  font-size: 0.82rem;
  color: #444;
  margin-bottom: 12px;
}

.fmc-transfer-summary {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 12px;
  font-size: 0.82rem;
  color: #444;
  border-top: 1px solid #ddd;
  padding-top: 10px;
}

/* Actions */
.fmc-actions {
  display: flex;
  justify-content: flex-end;
}

.fmc-btn-close {
  padding: 8px 22px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  font-size: 0.875rem;
}

.fmc-btn-close:hover {
  background: #f0f0f0;
}
</style>
