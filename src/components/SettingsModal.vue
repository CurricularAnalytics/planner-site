<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  defaultTerm: {
    type: String,
    default: 'Spring 2026',
  },
  compactView: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close', 'save'])

const selectedDefaultTerm = ref(props.defaultTerm || 'Spring 2026')
const compactViewLocal = ref(props.compactView)

watch(
  () => props.defaultTerm,
  (value) => {
    selectedDefaultTerm.value = value || 'Spring 2026'
  }
)

watch(
  () => props.compactView,
  (value) => {
    compactViewLocal.value = value
  }
)

function saveSettings() {
  emit('save', {
    defaultTerm: selectedDefaultTerm.value,
    compactView: compactViewLocal.value,
  })
}
</script>

<template>
  <div class="modal settings-modal" @click.stop>
    <div class="settings-modal__header">
      <h3 class="settings-modal__title">Settings</h3>
      <button class="panel-close" type="button" @click="$emit('close')">✕</button>
    </div>

    <div class="settings-section-list">
      <button class="settings-item" type="button">
        <div class="settings-item__icon settings-item__icon--accent">⚙</div>
        <div class="settings-item__content">
          <div class="settings-item__title">Dashboard Preferences</div>
          <div class="settings-item__subtitle">Customize layout and default views</div>
        </div>
        <span class="settings-item__arrow">›</span>
      </button>

      <button class="settings-item" type="button">
        <div class="settings-item__icon settings-item__icon--blue">⇩</div>
        <div class="settings-item__content">
          <div class="settings-item__title">Export Defaults</div>
          <div class="settings-item__subtitle">Set default format and recipients</div>
        </div>
        <span class="settings-item__arrow">›</span>
      </button>

      <button class="settings-item" type="button">
        <div class="settings-item__icon settings-item__icon--green">📊</div>
        <div class="settings-item__content">
          <div class="settings-item__title">Report Settings</div>
          <div class="settings-item__subtitle">Configure automated reports</div>
        </div>
        <span class="settings-item__arrow">›</span>
      </button>

      <button class="settings-item" type="button">
        <div class="settings-item__icon settings-item__icon--gray">👤</div>
        <div class="settings-item__content">
          <div class="settings-item__title">Account &amp; Role Info</div>
          <div class="settings-item__subtitle">View permissions and access</div>
        </div>
        <span class="settings-item__arrow">›</span>
      </button>
    </div>

    <div class="settings-bottom">
      <div class="field-group">
        <label class="field-label">Default Term</label>
        <select v-model="selectedDefaultTerm" class="field-select">
          <option>Spring 2026</option>
          <option>Fall 2025</option>
          <option>Summer 2025</option>
          <option>Spring 2025</option>
        </select>
      </div>

      <div class="compact-row">
        <div>
          <div class="compact-title">Compact Dashboard View</div>
          <div class="compact-subtitle">Show more information in a denser layout</div>
        </div>

        <button
          class="toggle"
          :class="{ 'toggle--on': compactViewLocal }"
          type="button"
          @click="compactViewLocal = !compactViewLocal"
        >
          <span class="toggle__knob"></span>
        </button>
      </div>

      <div class="settings-actions">
        <button class="btn" type="button" @click="$emit('close')">Cancel</button>
        <button class="btn btn-red" type="button" @click="saveSettings">Save</button>
      </div>
    </div>
  </div>
</template>
