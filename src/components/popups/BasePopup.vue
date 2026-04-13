<script setup>
defineProps({
  title:    { type: String, default: '' },
  subtitle: { type: String, default: '' },
  large:    { type: Boolean, default: false },
})
const emit = defineEmits(['close'])
</script>

<template>
  <div class="popup">
    <div class="popupoverlay" @click="emit('close')"></div>
    <div class="popupbox" :class="{ 'popupbox-lg': large }">
      <button class="popupclose" @click="emit('close')">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <h2 v-if="title" class="popuptitle">{{ title }}</h2>
      <p  v-if="subtitle" class="popupsub">{{ subtitle }}</p>
      <slot />
    </div>
  </div>
</template>
