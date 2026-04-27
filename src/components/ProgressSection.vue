<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})

const totals = computed(() => {
  const onTrack = props.data.reduce((sum, item) => sum + item.onTrack, 0)
  const supportNeeded = props.data.reduce((sum, item) => sum + item.supportNeeded, 0)
  const offTrack = props.data.reduce((sum, item) => sum + item.offTrack, 0)
  const total = onTrack + supportNeeded + offTrack

  return {
    onTrack,
    supportNeeded,
    offTrack,
    total,
    onTrackPct: total ? ((onTrack / total) * 100).toFixed(1) : '0.0',
    supportNeededPct: total ? ((supportNeeded / total) * 100).toFixed(1) : '0.0',
    offTrackPct: total ? ((offTrack / total) * 100).toFixed(1) : '0.0',
  }
})

const maxTotal = computed(() => {
  return Math.max(...props.data.map((item) => item.total), 1)
})
</script>

<template>
  <section class="card section-card">
    <div class="progress-top">
      <div>
        <h3 class="card-title">Degree Planner Progress by College</h3>
        <p class="card-subtitle">
          Student degree planning progress: On Track / Support Needed / Off Track
        </p>
      </div>

      <div class="progress-overview">
        <div class="progress-delta">
          <span>↗</span>
          <span>+2.1%</span>
        </div>
        <div class="progress-overall">{{ totals.onTrackPct }}%</div>
        <div class="progress-overall-sub">on track overall</div>
      </div>
    </div>

    <div class="progress-summary">
      <div class="progress-mini progress-mini--light-blue">
        <div class="progress-mini-label">
          <span class="progress-legend-dot dot--light-blue"></span>
          <span>ON TRACK</span>
        </div>
        <div class="progress-mini-value">
          {{ totals.onTrack.toLocaleString() }}
        </div>
        <div class="progress-mini-sub">{{ totals.onTrackPct }}% of all students</div>
      </div>

      <div class="progress-mini progress-mini--dark-blue">
        <div class="progress-mini-label">
          <span class="progress-legend-dot dot--dark-blue"></span>
          <span>SUPPORT NEEDED</span>
        </div>
        <div class="progress-mini-value">
          {{ totals.supportNeeded.toLocaleString() }}
        </div>
        <div class="progress-mini-sub">{{ totals.supportNeededPct }}% of all students</div>
      </div>

      <div class="progress-mini red">
        <div class="progress-mini-label">
          <span class="progress-legend-dot dot--red"></span>
          <span>OFF TRACK</span>
        </div>
        <div class="progress-mini-value">
          {{ totals.offTrack.toLocaleString() }}
        </div>
        <div class="progress-mini-sub">{{ totals.offTrackPct }}% of all students</div>
      </div>
    </div>

    <div class="chart-wrap">
      <div class="chart-grid">
        <div class="chart-y-label">Number of Students</div>

        <div
          v-for="(item, idx) in data"
          :key="item.id || idx"
          class="chart-col"
        >
          <div
            class="chart-stack"
            :style="{ height: `${(item.total / maxTotal) * 260}px` }"
          >
            <div
              class="seg-light-blue"
              :style="{ height: `${(item.onTrack / item.total) * 100}%` }"
            ></div>
            <div
              class="seg-dark-blue"
              :style="{ height: `${(item.supportNeeded / item.total) * 100}%` }"
            ></div>
            <div
              class="seg-red"
              :style="{ height: `${(item.offTrack / item.total) * 100}%` }"
            ></div>
          </div>

          <div class="chart-label">{{ item.college }}</div>
        </div>
      </div>

      <div class="chart-legend">
        <span><span class="progress-legend-dot dot--light-blue"></span> On Track</span>
        <span><span class="progress-legend-dot dot--dark-blue"></span> Support Needed</span>
        <span><span class="progress-legend-dot dot--red"></span> Off Track</span>
      </div>
    </div>
  </section>
</template>
