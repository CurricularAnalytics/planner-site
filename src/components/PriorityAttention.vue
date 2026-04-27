<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

defineEmits(['view-all'])
</script>

<template>
  <section class="card priority-card">
    <div class="priority-top">
      <div class="priority-top-left">
        <div class="priority-top-icon">⚠</div>

        <div>
          <h3 class="priority-top-title">Priority Attention Required</h3>
          <p class="priority-top-desc">
            Issues requiring immediate leadership review or resource allocation
          </p>
        </div>
      </div>

      <button class="priority-section__link" type="button" @click="$emit('view-all')">
        View All Issues →
      </button>
    </div>

    <div class="priority-list">
      <div
        v-for="item in items"
        :key="item.id"
        class="priority-item"
        :class="`priority-row--${item.priority}`"
      >
        <div
          class="priority-rank"
          :class="{
            'rank-1': item.rank === 1,
            'rank-2': item.rank === 2,
            'rank-3': item.rank === 3
          }"
        >
          {{ item.rank }}
        </div>

        <div class="priority-row__content">
          <div class="priority-meta">
            <span
              class="badge"
              :class="{
                'badge-urgent': item.priority === 'urgent',
                'badge-high': item.priority === 'high',
                'badge-medium': item.priority === 'medium'
              }"
            >
              {{ item.priority.toUpperCase() }}
            </span>

            <div class="priority-title">{{ item.title }}</div>
          </div>

          <div class="priority-description">{{ item.description }}</div>
          <div class="priority-college">{{ item.college }}</div>
        </div>

        <div class="priority-right">
          <div class="priority-impact">{{ item.impact }} Impact</div>
          <div class="priority-metric">{{ item.metric }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
