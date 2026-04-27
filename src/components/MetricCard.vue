<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  change: {
    type: String,
    default: '',
  },
  benchmark: {
    type: String,
    default: '',
  },
  context: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '•',
  },
  iconClass: {
    type: String,
    default: '',
  },
  changePositive: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="card metric-card">
    <div class="metric-card-head">
      <div class="icon-box" :class="iconClass">
        <span>{{ icon }}</span>
      </div>

      <div
        class="metric-trend"
        :class="{ negative: !changePositive }"
      >
        {{ change }}
      </div>
    </div>

    <h4 class="metric-title">{{ title }}</h4>
    <p class="metric-value">{{ value }}</p>

    <div v-if="benchmark" class="metric-benchmark">{{ benchmark }}</div>
    <div v-if="context" class="metric-context">{{ context }}</div>
  </div>
</template>
