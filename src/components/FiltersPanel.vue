<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  term: {
    type: String,
    default: 'Spring 2026',
  },
  college: {
    type: String,
    default: 'All Colleges',
  },
  department: {
    type: String,
    default: 'All Departments',
  },
  program: {
    type: String,
    default: 'All Programs',
  },
})

const emit = defineEmits(['close', 'apply', 'reset'])

const localTerm = ref(props.term)
const localCollege = ref(props.college)
const localDepartment = ref(props.department)
const localProgram = ref(props.program)

watch(
  () => [props.term, props.college, props.department, props.program],
  ([term, college, department, program]) => {
    localTerm.value = term
    localCollege.value = college
    localDepartment.value = department
    localProgram.value = program
  }
)

function applyFilters() {
  emit('apply', {
    term: localTerm.value,
    college: localCollege.value,
    department: localDepartment.value,
    program: localProgram.value,
  })
}
</script>

<template>
  <aside class="side-panel filters-panel" @click.stop>
    <div class="filters-panel__header">
      <h3 class="filters-panel__title">Edit Filters</h3>
      <button class="panel-close" type="button" @click="$emit('close')">✕</button>
    </div>

    <div class="filters-panel__body">
      <div class="field-group">
        <label class="field-label">Term</label>
        <select v-model="localTerm" class="field-select">
          <option>Spring 2026</option>
          <option>Fall 2025</option>
          <option>Summer 2025</option>
          <option>Spring 2025</option>
        </select>
      </div>

      <div class="field-group">
        <label class="field-label">College</label>
        <select v-model="localCollege" class="field-select">
          <option>All Colleges</option>
          <option>College of Engineering</option>
          <option>College of Science</option>
          <option>Eller College of Management</option>
          <option>College of Social & Behavioral Sciences</option>
          <option>College of Humanities</option>
          <option>College of Education</option>
        </select>
      </div>

      <div class="field-group">
        <label class="field-label">Department</label>
        <select v-model="localDepartment" class="field-select">
          <option>All Departments</option>
          <option>Computer Science</option>
          <option>Psychology</option>
          <option>Biology</option>
          <option>Economics</option>
          <option>Mathematics</option>
        </select>
      </div>

      <div class="field-group">
        <label class="field-label">Academic Plan</label>
        <select v-model="localProgram" class="field-select">
          <option>All Programs</option>
          <option>BS Computer Science</option>
          <option>BA Psychology</option>
          <option>BS Biology</option>
          <option>MBA</option>
        </select>
      </div>
    </div>

    <div class="filters-panel__footer">
      <button class="btn" type="button" @click="$emit('reset')">Reset</button>
      <button class="btn btn-red" type="button" @click="applyFilters">Apply</button>
    </div>
  </aside>
</template>