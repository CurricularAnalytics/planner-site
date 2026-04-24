<script setup>
import { ref, computed } from 'vue'
import BasePopup from './BasePopup.vue'
import FullMajorComparison from './FullMajorComparison.vue'
import { currentMajor, majorOptions } from '../../data/data.js'

const emit = defineEmits(['close'])

const selectedCode = ref('')
const showFull = ref(false)

const selected = computed(() => majorOptions.find(m => m.code === selectedCode.value) ?? null)
</script>

<template>
  <FullMajorComparison
    v-if="showFull && selected"
    :major="selected"
    @close="showFull = false"
  />

  <BasePopup
    v-else
    title="Compare Majors"
    subtitle="Compare your current Computer Science degree pathway with another major"
    @close="emit('close')"
  >
    <div class="compare-wrap">
      <div class="compare-field">
        <label class="compare-label">Select Major to Compare</label>
        <select v-model="selectedCode" class="compare-select">
          <option value="" disabled>Select a major...</option>
          <option v-for="m in majorOptions" :key="m.code" :value="m.code">{{ m.name }}</option>
        </select>
      </div>

      <template v-if="selected">
        <div class="compare-box">
          <p class="compare-box-title">Comparison Overview</p>

          <div class="compare-cols">
            <div class="compare-col">
              <p class="compare-major-name">{{ currentMajor.name }}</p>
              <ul class="compare-stats">
                <li>Total Credits: {{ currentMajor.totalCredits }}</li>
                <li>Core Courses: {{ currentMajor.coreCourses }}</li>
                <li>Electives: {{ currentMajor.electives }}</li>
                <li>Gen Ed: {{ currentMajor.genEd }}</li>
                <li>Avg. Time: {{ currentMajor.avgTime }} years</li>
              </ul>
            </div>

            <div class="compare-col">
              <p class="compare-major-name">{{ selected.name }}</p>
              <ul class="compare-stats">
                <li>Total Credits: {{ selected.totalCredits }}</li>
                <li>Core Courses: {{ selected.coreCourses }}</li>
                <li>Electives: {{ selected.electives }}</li>
                <li>Gen Ed: {{ selected.genEd }}</li>
                <li>Avg. Time: {{ selected.avgTime }} years</li>
              </ul>
            </div>
          </div>

          <hr class="compare-divider" />

          <p class="compare-diff-title">Key Differences</p>
          <ul class="compare-diffs">
            <li v-for="diff in selected.keyDifferences" :key="diff">{{ diff }}</li>
          </ul>
        </div>

        <div class="compare-actions">
          <button class="compare-btn-close" @click="emit('close')">Close</button>
          <button class="compare-btn-full" @click="showFull = true">View Full Comparison</button>
        </div>
      </template>

      <template v-else>
        <div class="compare-empty">Select a major above to see the comparison.</div>
        <div class="compare-actions">
          <button class="compare-btn-close" @click="emit('close')">Close</button>
        </div>
      </template>
    </div>
  </BasePopup>
</template>

<style scoped>
.compare-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.compare-label {
  display: block;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 6px;
}

.compare-select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 0.9rem;
  appearance: auto;
  cursor: pointer;
}

.compare-box {
  background: #f5f5f8;
  border-radius: 10px;
  padding: 16px 20px;
}

.compare-box-title {
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 14px;
}

.compare-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.compare-major-name {
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 8px;
}

.compare-stats {
  list-style: disc;
  padding-left: 16px;
  font-size: 0.85rem;
  line-height: 1.9;
  color: #333;
}

.compare-divider {
  border: none;
  border-top: 1px solid #ddd;
  margin: 14px 0;
}

.compare-diff-title {
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 8px;
}

.compare-diffs {
  list-style: disc;
  padding-left: 20px;
  font-size: 0.85rem;
  line-height: 1.9;
  color: #444;
}

.compare-empty {
  font-size: 0.88rem;
  color: #888;
  text-align: center;
  padding: 20px 0;
}

.compare-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 4px;
}

.compare-btn-close {
  padding: 8px 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  font-size: 0.875rem;
}

.compare-btn-close:hover {
  background: #f0f0f0;
}

.compare-btn-full {
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
  background: #5b5fc7;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
}

.compare-btn-full:hover {
  background: #4a4eb5;
}
</style>
