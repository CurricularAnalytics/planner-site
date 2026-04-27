<script setup>
defineProps({
  notifications: {
    type: Array,
    default: () => [],
  },
})

defineEmits(['close', 'mark-read'])
</script>

<template>
  <div class="dropdown-panel notifications-panel" @click.stop>
    <div class="notifications-panel__header">
      <div>
        <h3 class="notifications-panel__title">Notifications</h3>
        <p class="notifications-panel__subtitle">Recent alerts and updates for the dashboard</p>
      </div>
      <button class="panel-close" type="button" @click="$emit('close')">✕</button>
    </div>

    <div class="notifications-actions">
      <button class="btn" type="button" @click="$emit('mark-read')">Mark all as read</button>
    </div>

    <div class="notifications-list">
      <div
        v-for="item in notifications"
        :key="item.id"
        class="notification-item"
        :class="{ 'notification-item--unread': item.unread }"
      >
        <div class="notification-item__top">
          <h4 class="notification-item__title">{{ item.title }}</h4>
          <span v-if="item.unread" class="notification-badge">New</span>
        </div>

        <p class="notification-item__description">{{ item.description }}</p>
        <span class="notification-time">{{ item.time }}</span>
      </div>
    </div>
  </div>
</template>