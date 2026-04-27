<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'

import DashboardHeader from './components/DashboardHeader.vue'
import StickyFilterBar from './components/StickyFilterBar.vue'
import FiltersPanel from './components/FiltersPanel.vue'
import SettingsModal from './components/SettingsModal.vue'
import NotificationsPanel from './components/NotificationsPanel.vue'
import PriorityAttention from './components/PriorityAttention.vue'
import MetricCard from './components/MetricCard.vue'
import ProgressSection from './components/ProgressSection.vue'
import AdvisingCoverage from './components/AdvisingCoverage.vue'
import CriticalCourses from './components/CriticalCourses.vue'
import ReportsAnalytics from './components/ReportsAnalytics.vue'

const showSettings = ref(false)
const showNotifications = ref(false)
const showFiltersPanel = ref(false)
const compactView = ref(false)
const selectedTerm = ref('Spring 2026')
const selectedCollege = ref('Eller College of Management')
const selectedDepartment = ref('All Departments')
const selectedProgram = ref('All Programs')

const notifications = ref([
  {
    id: 1,
    title: 'Advisor assignment coverage gap',
    description: '412 students remain unassigned in Social & Behavioral Sciences.',
    time: '5 min ago',
    unread: true,
  },
  {
    id: 2,
    title: 'Graduation rate below target',
    description: 'Eller College is below the 80% institutional target.',
    time: '22 min ago',
    unread: true,
  },
  {
    id: 3,
    title: 'New export report available',
    description: 'Completion Rate Projections report was refreshed.',
    time: '1 hour ago',
    unread: false,
  },
])

const priorityItems = ref([
  {
    id: 'priority-1',
    rank: 1,
    priority: 'urgent',
    title: 'Critical course capacity shortage',
    description: 'CSC 245 enrollment bottleneck impacting 289 Engineering students across multiple majors',
    college: 'College of Engineering',
    impact: 'High',
    metric: '289 students affected',
  },
  {
    id: 'priority-2',
    rank: 2,
    priority: 'high',
    title: 'Advisor assignment coverage gap',
    description: 'Social & Behavioral Sciences has 412 students without assigned advisors',
    college: 'College of Social & Behavioral Sciences',
    impact: 'Medium',
    metric: '412 unassigned (8.2%)',
  },
  {
    id: 'priority-3',
    rank: 3,
    priority: 'medium',
    title: 'Four-year graduation rate tracking below target',
    description: 'Eller College at 76.8% compared to 80% institutional goal for Fall 2022 cohort',
    college: 'Eller College of Management',
    impact: 'Medium',
    metric: '76.8% vs. 80% target',
  },
])

const metricCards = ref([
  {
    title: 'Four-Year FTFT Graduation Rate',
    value: '62.8%',
    change: '+1.4%',
    benchmark: 'Past year: 61.4%',
    context: 'four-year completion vs Spring 2025 reporting cycle',
    icon: '◎',
    iconClass: 'metric-icon--green',
    changePositive: true,
  },
  {
    title: 'Six-Year FTFT Graduation Rate',
    value: '72.5%',
    change: '+2.1%',
    benchmark: 'Past year: 70.4%',
    context: 'six-year completion vs prior academic year',
    icon: '◎',
    iconClass: 'metric-icon--blue',
    changePositive: true,
  },
  {
    title: 'Two-Year FTFT Rate',
    value: '86.2%',
    change: '+1.8%',
    benchmark: 'Past year: 84.4%',
    context: 'second-year persistence vs last reporting cycle',
    icon: '↻',
    iconClass: 'metric-icon--indigo',
    changePositive: true,
  },
  {
    title: 'Transfer 2-Year Graduation Rate',
    value: '69.4%',
    change: '+3.2%',
    benchmark: 'Past year: 66.2%',
    context: 'transfer completion compared with prior-year outcomes',
    icon: '◎',
    iconClass: 'metric-icon--indigo',
    changePositive: true,
  },
  {
    title: 'Total Student Headcount',
    value: '45,217',
    change: '+1.2%',
    benchmark: 'Spring 2026 enrollment',
    context: 'all degree-seeking students',
    icon: '👥',
    iconClass: 'metric-icon--slate',
    changePositive: true,
  },
  {
    title: "Active Students' Degree Completion Plans",
    value: '38,123',
    change: '+5.7%',
    benchmark: 'Past year: 35,982',
    context: 'actively maintained degree completion plans',
    icon: '∿',
    iconClass: 'metric-icon--teal',
    changePositive: true,
  },
  {
    title: 'Total Courses Offered',
    value: '2,184',
    change: '+3.4%',
    benchmark: 'Past year: 2,112',
    context: 'current term plus anticipated next-semester offerings',
    icon: '▦',
    iconClass: 'metric-icon--cyan',
    changePositive: true,
  },
  {
    title: 'Students Requiring Support',
    value: '2,847',
    change: '-0.8%',
    benchmark: '6.3% of active students',
    context: 'off-track for timely completion',
    icon: '⚠',
    iconClass: 'metric-icon--orange',
    changePositive: false,
  },
])

const progressData = ref([
  {
    id: 'eng',
    college: 'Engineering',
    onTrack: 900,
    supportNeeded: 450,
    offTrack: 150,
    total: 1500,
  },
  {
    id: 'sci',
    college: 'Science',
    onTrack: 1530,
    supportNeeded: 765,
    offTrack: 255,
    total: 2550,
  },
  {
    id: 'bus',
    college: 'Business',
    onTrack: 1332,
    supportNeeded: 666,
    offTrack: 222,
    total: 2220,
  },
  {
    id: 'hum',
    college: 'Humanities',
    onTrack: 1104,
    supportNeeded: 552,
    offTrack: 184,
    total: 1840,
  },
  {
    id: 'sbs',
    college: 'Soc & Behav',
    onTrack: 1446,
    supportNeeded: 723,
    offTrack: 241,
    total: 2410,
  },
  {
    id: 'edu',
    college: 'Education',
    onTrack: 642,
    supportNeeded: 321,
    offTrack: 107,
    total: 1070,
  },
])

const advisingStats = ref([
  {
    id: 'assigned',
    label: 'Students with Advisor',
    value: '38,456',
    percent: '85.0%',
    trend: '+3.4%',
    target: '90%',
    type: 'good',
  },
  {
    id: 'pending',
    label: 'Pending Assignment',
    value: '4,123',
    percent: '9.1%',
    trend: '-1.2%',
    type: 'warning',
  },
  {
    id: 'risk',
    label: 'Unassigned / At Risk',
    value: '2,638',
    percent: '5.8%',
    trend: '-0.4%',
    type: 'danger',
  },
])

const capacityMetrics = ref([
  {
    id: 'advisors',
    label: 'Active Advisors',
    value: '287',
    icon: '👥',
  },
  {
    id: 'caseload',
    label: 'Avg Caseload',
    value: '134',
    icon: '⌁',
  },
  {
    id: 'sessions',
    label: 'Sessions (30d)',
    value: '3,847',
    icon: '◷',
  },
])

const criticalCourses = ref([
  {
    id: 'math129',
    code: 'MATH 129',
    name: 'Calculus II',
    severity: 'critical',
    college: 'Multiple Colleges',
    avgDelay: '1.2 sem',
    passRate: '64%',
    impacted: 487,
  },
  {
    id: 'chem151',
    code: 'CHEM 151',
    name: 'General Chemistry I',
    severity: 'high',
    college: 'College of Science',
    avgDelay: '0.8 sem',
    passRate: '71%',
    impacted: 392,
  },
  {
    id: 'phys141',
    code: 'PHYS 141',
    name: 'Introductory Physics',
    severity: 'high',
    college: 'Engineering',
    avgDelay: '1.0 sem',
    passRate: '68%',
    impacted: 356,
  },
  {
    id: 'csc245',
    code: 'CSC 245',
    name: 'Data Structures',
    severity: 'medium',
    college: 'Engineering',
    avgDelay: '0.9 sem',
    passRate: '69%',
    impacted: 289,
  },
  {
    id: 'econ200',
    code: 'ECON 200',
    name: 'Principles of Microeconomics',
    severity: 'medium',
    college: 'Business',
    avgDelay: '0.6 sem',
    passRate: '75%',
    impacted: 267,
  },
])

const totalImpacted = computed(() =>
  criticalCourses.value.reduce((sum, course) => sum + course.impacted, 0).toLocaleString()
)

const snapshotMetrics = ref([
  {
    id: 'plans',
    label: 'Active Completion Plans',
    value: '38,123',
    trend: '+8%',
  },
  {
    id: 'updated',
    label: 'Courses Offered',
    value: '2,184',
    trend: '+3%',
  },
  {
    id: 'sessions',
    label: 'Past-Year Delta',
    value: '+4.2%',
    trend: '+15%',
  },
])

const executiveReports = ref([
  {
    id: 'completion',
    title: 'Completion Rate Projections',
    description: 'Four-year forecasts by cohort & college',
    updated: 'Updated daily',
    type: 'Strategic',
    icon: '↗',
  },
  {
    id: 'retention',
    title: 'Enrollment & Retention Analysis',
    description: 'Student persistence and progression',
    updated: 'Updated weekly',
    type: 'Operational',
    icon: '▥',
  },
  {
    id: 'summary',
    title: 'Executive Summary Report',
    description: 'Cross-institutional trends & benchmarks',
    updated: 'Updated monthly',
    type: 'Executive',
    icon: '◫',
  },
  {
    id: 'planning',
    title: 'Academic Planning Insights',
    description: 'Program capacity & resource allocation',
    updated: 'Updated quarterly',
    type: 'Strategic',
    icon: '◷',
  },
])

const unreadCount = computed(() => notifications.value.filter((n) => n.unread).length)

function closeAllOverlays() {
  showSettings.value = false
  showNotifications.value = false
  showFiltersPanel.value = false
}

function toggleSettings() {
  showSettings.value = !showSettings.value
  if (showSettings.value) {
    showNotifications.value = false
  }
}

function toggleNotifications() {
  showNotifications.value = !showNotifications.value
  if (showNotifications.value) {
    showSettings.value = false
  }
}

function toggleFiltersPanel() {
  showFiltersPanel.value = !showFiltersPanel.value
}

function markNotificationsRead() {
  notifications.value = notifications.value.map((item) => ({
    ...item,
    unread: false,
  }))
}

function handleOpenNotifications() {
  toggleNotifications()
  if (showNotifications.value) {
    markNotificationsRead()
  }
}

function applyFilters(filters) {
  selectedTerm.value = filters.term
  selectedCollege.value = filters.college
  selectedDepartment.value = filters.department
  selectedProgram.value = filters.program
  showFiltersPanel.value = false
}

function resetFilters() {
  selectedTerm.value = 'Spring 2026'
  selectedCollege.value = 'All Colleges'
  selectedDepartment.value = 'All Departments'
  selectedProgram.value = 'All Programs'
}

function saveSettings(payload) {
  if (payload?.defaultTerm) {
    selectedTerm.value = payload.defaultTerm
  }

  if (typeof payload?.compactView === 'boolean') {
    compactView.value = payload.compactView
  }

  showSettings.value = false
}

function noopAction(label) {
  console.log(`${label} clicked`)
}

onBeforeUnmount(() => {
  return undefined
})
</script>

<template>
  <div class="page-shell" :class="{ 'compact-mode': compactView }">
    <StickyFilterBar
      :term="selectedTerm"
      :college="selectedCollege"
      :department="selectedDepartment"
      :program="selectedProgram"
      @edit-filters="toggleFiltersPanel"
    />

    <DashboardHeader
      :unread-count="unreadCount"
      :notifications-open="showNotifications"
      :settings-open="showSettings"
      @open-notifications="handleOpenNotifications"
      @open-settings="toggleSettings"
    />

    <div
      v-if="showSettings || showNotifications || showFiltersPanel"
      class="overlay"
      @click="closeAllOverlays"
    ></div>

    <NotificationsPanel
      v-if="showNotifications"
      :notifications="notifications"
      @close="showNotifications = false"
      @mark-read="markNotificationsRead"
    />

    <SettingsModal
      v-if="showSettings"
      :default-term="selectedTerm"
      :compact-view="compactView"
      @close="showSettings = false"
      @save="saveSettings"
    />

    <FiltersPanel
      v-if="showFiltersPanel"
      :term="selectedTerm"
      :college="selectedCollege"
      :department="selectedDepartment"
      :program="selectedProgram"
      @close="showFiltersPanel = false"
      @apply="applyFilters"
      @reset="resetFilters"
    />

    <main class="container">
      <section class="page-section-head">
        <div class="page-head-row">
          <div>
            <h2 class="section-title">Institutional Overview</h2>
            <p class="section-subtitle">
              Student success, degree completion, and academic planning oversight
            </p>
          </div>

          <nav class="dashboard-switcher" aria-label="Dashboard links">
            <button type="button" class="dashboard-switcher__link dashboard-switcher__link--active">
              Admin Dashboard
            </button>
            <button
              type="button"
              class="dashboard-switcher__link"
              @click="noopAction('Advisor Dashboard')"
            >
              Advisor Dashboard
            </button>
            <button
              type="button"
              class="dashboard-switcher__link"
              @click="noopAction('Student Dashboard')"
            >
              Student Dashboard
            </button>
          </nav>
        </div>
      </section>

      <section class="card filters-card">
        <div class="filters-left">
          <div class="filters-label">
            <span>⚲</span>
            <span>Filter by:</span>
          </div>

          <select v-model="selectedTerm" class="filter-select">
            <option>Spring 2026</option>
            <option>Fall 2025</option>
            <option>Summer 2025</option>
            <option>Spring 2025</option>
          </select>

          <select v-model="selectedCollege" class="filter-select wide">
            <option>All Colleges</option>
            <option>College of Engineering</option>
            <option>College of Science</option>
            <option>Eller College of Management</option>
            <option>College of Social &amp; Behavioral Sciences</option>
            <option>College of Humanities</option>
            <option>College of Education</option>
          </select>

          <select v-model="selectedDepartment" class="filter-select">
            <option>All Departments</option>
            <option>Computer Science</option>
            <option>Psychology</option>
            <option>Biology</option>
            <option>Economics</option>
            <option>Mathematics</option>
          </select>

          <select v-model="selectedProgram" class="filter-select">
            <option>All Programs</option>
            <option>BS Computer Science</option>
            <option>BA Psychology</option>
            <option>BS Biology</option>
            <option>MBA</option>
          </select>
        </div>

        <div class="filters-right">
          <button class="btn" type="button" @click="noopAction('View Trends')">📊 View Trends</button>
          <button class="btn btn-red" type="button" @click="noopAction('Export Report')">⇩ Export Report</button>
        </div>
      </section>

      <div class="spacer-24"></div>

      <PriorityAttention
        :items="priorityItems"
        @view-all="noopAction('View All Issues')"
      />

      <div class="spacer-32"></div>

      <section class="dashboard-section">
        <h3 class="dashboard-section__title">
          Institutional Retention &amp; Completion Metrics
        </h3>
        <p class="dashboard-section__subtitle dashboard-section__subtitle--metrics">
          Completion and retention comparisons are aligned to past-year institutional reporting.
        </p>

        <div class="grid-4">
          <MetricCard
            v-for="card in metricCards"
            :key="card.title"
            :title="card.title"
            :value="card.value"
            :change="card.change"
            :benchmark="card.benchmark"
            :context="card.context"
            :icon="card.icon"
            :icon-class="card.iconClass"
            :change-positive="card.changePositive"
          />
        </div>
      </section>

      <div class="spacer-32"></div>

      <section class="dashboard-section">
        <h3 class="dashboard-section__title dashboard-section__title--tight">
          Degree Planner Insights
        </h3>
        <p class="dashboard-section__subtitle">
          Program-level outcomes, interventions, and planning progress tracked through degree planner system
        </p>

        <div class="grid-main">
          <ProgressSection :data="progressData" />
          <AdvisingCoverage
            :stats="advisingStats"
            :capacity-metrics="capacityMetrics"
            @view-coverage="noopAction('View Advising Coverage')"
          />
        </div>

        <div class="spacer-24"></div>

        <div class="grid-main">
          <CriticalCourses
            :courses="criticalCourses"
            :total-impacted="totalImpacted"
            @view-course-impact="noopAction('View Course Impact & Interventions')"
          />
          <ReportsAnalytics
            :snapshot="snapshotMetrics"
            :reports="executiveReports"
            @export-report="noopAction('Export Custom Report')"
          />
        </div>
      </section>
    </main>

  </div>
</template>
