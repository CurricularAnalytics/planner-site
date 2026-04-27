<script setup>
defineProps({
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

defineEmits(['edit-filters'])
</script>

<template>
  <div class="sticky-filter-bar">
    <div class="sticky-left">
      <span class="sticky-pill">{{ term }}</span>
      <span class="sticky-sep">|</span>
      <span>{{ college }}</span>
      <span class="sticky-sep">|</span>
      <span>{{ department }}</span>
      <span class="sticky-sep">|</span>
      <span>{{ program }}</span>
    </div>

    <button
      type="button"
      class="sticky-edit-btn"
      @click="$emit('edit-filters')"
    >
      ⚙ Edit Filters
    </button>
  </div>
</template>
