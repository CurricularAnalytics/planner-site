<script setup>
defineProps({
  stats: {
    type: Array,
    default: () => [],
  },
  capacityMetrics: {
    type: Array,
    default: () => [],
  },
})

defineEmits(['view-coverage'])
</script>

<template>
  <section class="card section-card">
    <div class="card-head">
      <h3 class="card-title">Advising Coverage &amp; Capacity</h3>
      <p class="card-subtitle">
        Student advisor coverage and resource allocation
      </p>
    </div>

    <div class="coverage-list">
      <div
        v-for="item in stats"
        :key="item.id"
        class="advising-stat"
        :class="{
          'advising-green': item.type === 'good',
          'advising-orange': item.type === 'warning',
          'advising-red': item.type === 'danger'
        }"
      >
        <div class="advising-top">
          <div class="advising-label">{{ item.label }}</div>

          <div
            class="advising-trend"
            :class="item.trend.startsWith('+') ? 'positive' : 'negative'"
          >
            {{ item.trend.startsWith('+') ? '↗' : '↘' }} {{ item.trend }}
          </div>
        </div>

        <div class="advising-values">
          <div class="advising-number">{{ item.value }}</div>
          <div class="advising-percentage" v-if="item.percent">({{ item.percent }})</div>
          <div
            v-if="item.target"
            class="advising-target"
          >
            Target: {{ item.target }}
          </div>
        </div>
      </div>
    </div>

    <div class="advising-capacity">
      <h4 class="capacity-title">Resource Allocation</h4>

      <div class="capacity-grid">
        <div
          v-for="metric in capacityMetrics"
          :key="metric.id"
          class="capacity-box"
        >
          <div class="capacity-icon">{{ metric.icon }}</div>
          <div class="capacity-value">{{ metric.value }}</div>
          <div class="capacity-label">{{ metric.label }}</div>
        </div>
      </div>
    </div>

    <button
      class="link-button link-button--center section-link"
      type="button"
      @click="$emit('view-coverage')"
    >
      View Advising Coverage →
    </button>
  </section>
</template>
