<script setup>
defineProps({
  snapshot: {
    type: Array,
    default: () => [],
  },
  reports: {
    type: Array,
    default: () => [],
  },
})

defineEmits(['export-report'])
</script>

<template>
  <section class="card section-card">
    <div class="card-head">
      <h3 class="card-title">Executive Reports &amp; Analytics</h3>
      <p class="card-subtitle">
        Strategic planning insights and institutional reporting
      </p>
    </div>

    <div class="report-snapshot">
      <div class="report-snapshot-top">
        <h4 class="report-snapshot-title">Degree Planner Activity Snapshot</h4>
        <span class="report-snapshot-badge">
          Trending Up
        </span>
      </div>

      <div class="report-snapshot-list">
        <div
          v-for="item in snapshot"
          :key="item.id"
          class="report-snapshot-row"
        >
          <span class="report-snapshot-label">{{ item.label }}</span>
          <div class="report-snapshot-values">
            <span class="report-snapshot-number">{{ item.value }}</span>
            <span class="report-snapshot-trend">
              {{ item.trend }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="reports-block">
      <h4 class="reports-title">Executive Reports</h4>

      <div class="report-list">
        <div
          v-for="report in reports"
          :key="report.id"
          class="report-list-item"
        >
          <div class="report-item-icon">
            <span>{{ report.icon }}</span>
          </div>

          <div class="report-item-content">
            <div class="report-item-top">
              <h5 class="report-item-title">{{ report.title }}</h5>
              <span class="report-type">{{ report.type }}</span>
            </div>
            <p class="report-item-desc">{{ report.description }}</p>
            <span class="report-item-updated">{{ report.updated }}</span>
          </div>
        </div>
      </div>
    </div>

    <button class="btn btn-red btn-block" type="button" @click="$emit('export-report')">
      ↓ Export Custom Report
    </button>
  </section>
</template>
