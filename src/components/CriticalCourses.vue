<script setup>
defineProps({
  courses: {
    type: Array,
    default: () => [],
  },
  totalImpacted: {
    type: [String, Number],
    default: 0,
  },
})

defineEmits(['view-course-impact'])
</script>

<template>
  <section class="card section-card">
    <div class="content-card__header">
      <div>
        <h3 class="card-title">Critical Courses</h3>
        <p class="card-subtitle">
          High-impact courses affecting degree progress across programs
        </p>
      </div>

      <div class="content-card__metric">
        <div class="content-card__metric-value">{{ totalImpacted }}</div>
        <div class="content-card__metric-label">students impacted</div>
      </div>
    </div>

    <div class="course-list">
      <div
        v-for="course in courses"
        :key="course.id"
        class="course-row"
        :class="`course-row--${course.severity}`"
      >
        <div class="course-main">
          <div class="course-line1">
            <span class="course-code">{{ course.code }}</span>
            <span class="course-name">{{ course.name }}</span>

            <span
              class="badge"
              :class="{
                'badge-urgent': course.severity === 'critical',
                'badge-high': course.severity === 'high',
                'badge-medium': course.severity === 'medium'
              }"
            >
              {{ course.severity.toUpperCase() }}
            </span>
          </div>

          <div class="course-meta">
            <span>{{ course.college }}</span>
            <span>•</span>
            <span>Avg delay: {{ course.avgDelay }}</span>
            <span>•</span>
            <span>Pass rate: {{ course.passRate }}</span>
          </div>
        </div>

        <div class="course-impact">
          <div class="course-impact-num">{{ course.impacted }}</div>
          <div class="course-impact-label">impacted</div>
        </div>
      </div>
    </div>

    <button
      class="link-button link-button--center section-link"
      type="button"
      @click="$emit('view-course-impact')"
    >
      View Course Impact &amp; Interventions →
    </button>
  </section>
</template>
