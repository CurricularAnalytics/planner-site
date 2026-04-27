<script setup>
defineProps({
  unreadCount: {
    type: Number,
    default: 0,
  },
  notificationsOpen: {
    type: Boolean,
    default: false,
  },
  settingsOpen: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['open-notifications', 'open-settings'])
</script>

<template>
  <header class="header-bar">
    <div class="header-inner">
      <div class="header-brand">
        <div class="header-brand-box">🎓</div>
        <div>
          <h1 class="header-title">Degree Planning &amp; Completion</h1>
          <p class="header-subtitle">Academic Leadership Dashboard</p>
        </div>
      </div>

      <div class="header-actions">
        <button
          class="icon-btn"
          :class="{ active: notificationsOpen }"
          type="button"
          aria-label="Open notifications"
          @click="$emit('open-notifications')"
        >
          🔔
          <span v-if="unreadCount > 0" class="notification-dot"></span>
        </button>

        <button
          class="icon-btn"
          :class="{ active: settingsOpen }"
          type="button"
          aria-label="Open settings"
          @click="$emit('open-settings')"
        >
          ⚙
        </button>

        <div class="profile-block">
          <div class="profile-circle">VP</div>
          <span>Vice Provost</span>
        </div>
      </div>
    </div>
  </header>
</template>