<script setup>
import BasePopup from './BasePopup.vue'
import { majorOptions } from '../../data/data.js'

const emit = defineEmits(['close'])
</script>

<template>
  <BasePopup title="MAJOR COMPARISON" subtitle="Computer Science degree tracks at UArizona" @close="emit('close')">
    <table class="semtable">
      <thead>
        <tr>
          <td class="coursehead">DEGREE</td>
          <td class="coursehead">FOCUS</td>
          <td class="coursehead">CREDITS</td>
          <td class="coursehead">STATUS</td>
        </tr>
      </thead>
      <tr v-for="deg in majorOptions" :key="deg.code">
        <td class="courseinfo"><span class="coursecode">{{ deg.code }}</span>{{ deg.name }}</td>
        <td>{{ deg.focus }}</td>
        <td class="coursehour">{{ deg.credits }}</td>
        <td>{{ deg.enrolled ? 'Enrolled' : 'Not Enrolled' }}</td>
      </tr>
    </table>
  </BasePopup>
</template>
