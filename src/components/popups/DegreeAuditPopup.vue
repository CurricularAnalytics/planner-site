<script setup>
import BasePopup from './BasePopup.vue'
import { auditSummary, auditSections } from '../../data/data.js'

const emit = defineEmits(['close'])
</script>

<template>
  <BasePopup title="DEGREE AUDIT" subtitle="Requirements and Completion Status" :large="true" @close="emit('close')">

    <!-- Summary strip -->
    <div id="auditsummary">
      <div v-for="item in auditSummary" :key="item.label" class="sumreq">
        <span class="sumlabel">{{ item.label }}</span>
        <span class="sumstat">{{ item.stat }}</span>
        <span class="sumsub">{{ item.sub }}</span>
      </div>
    </div>

    <!-- Audit sections -->
    <div v-for="section in auditSections" :key="section.bold" class="auditcard">
      <div class="auditheader">
        <div class="auditheadertop">
          <h2 class="auditcathead"><strong>{{ section.bold }}</strong> {{ section.rest }}</h2>
          <span class="auditcredits">{{ section.earned }} / {{ section.required }} credits</span>
        </div>
        <div class="progressbar">
          <div class="progressfill" :class="section.fillClass" :style="{ width: section.fillWidth }"></div>
        </div>
      </div>

      <!-- Major Requirements table -->
      <table v-if="section.type === 'course'" class="semtable">
        <thead>
          <tr>
            <td class="coursehead">COURSE</td>
            <td class="coursehead">CREDITS</td>
            <td class="coursehead">TYPE</td>
            <td class="coursehead">GRADE</td>
            <td class="coursehead">STATUS</td>
          </tr>
        </thead>
        <tr v-for="row in section.rows" :key="row.code">
          <td class="courseinfo"><span class="coursecode">{{ row.code }}</span>{{ row.name }}</td>
          <td class="coursehour">{{ row.credits }}</td>
          <td class="coursecat"><mark :class="row.typeClass">{{ row.typeLabel }}</mark></td>
          <td class="coursegrade">{{ row.grade }}</td>
          <td class="coursecat"><mark :class="row.statusClass">{{ row.statusLabel }}</mark></td>
        </tr>
      </table>

      <!-- Gen Ed / Language / Electives table -->
      <table v-else class="semtable">
        <thead>
          <tr>
            <td class="coursehead">REQUIREMENT</td>
            <td class="coursehead">CREDITS</td>
            <td class="coursehead">COURSE TAKEN</td>
            <td class="coursehead">GRADE</td>
            <td class="coursehead">STATUS</td>
          </tr>
        </thead>
        <tr v-for="(row, i) in section.rows" :key="i">
          <td class="courseinfo">{{ row.req }}</td>
          <td class="coursehour">{{ row.credits }}</td>
          <td class="courseinfo">{{ row.course }}</td>
          <td class="coursegrade">{{ row.grade }}</td>
          <td class="coursecat"><mark :class="row.statusClass">{{ row.statusLabel }}</mark></td>
        </tr>
      </table>
    </div>

  </BasePopup>
</template>

<style scoped>
#auditsummary {
    display: flex;
    flex-wrap: wrap;
    padding: 5px 10px;
    margin-bottom: 15px;
    background-color: whitesmoke;
    border-radius: 15px;
}

.sumreq {
    padding: 15px 25px;
    display: inline-flex;
    flex-direction: column;
    gap: 4px;
}

.sumlabel {
    font-size: 13px;
    color: rgb(73, 72, 72);
}

.sumstat {
    font-size: 28px;
    color: black;
    font-weight: bold;
    line-height: 1;
}

.sumsub {
    font-size: 13px;
    color: rgb(73, 72, 72);
}

.auditcard {
    background-color: white;
    border: 2px solid lightgray;
    border-radius: 15px;
    margin-bottom: 15px;
    overflow: hidden;
}

.auditheader {
    padding: 18px 20px 14px;
    border-bottom: 1px solid lightgray;
}

.auditheadertop {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 12px;
}

.auditcathead {
    margin: 0;
    font-size: 17px;
    color: rgb(20, 50, 102);
    font-weight: normal;
}

.auditcredits {
    font-size: 13px;
    color: gray;
    font-weight: normal;
    white-space: nowrap;
}

.coursegrade {
    text-align: center;
    font-weight: bold;
    color: rgb(20, 50, 102);
}

mark {
    padding: 8px 10px;
    border-radius: 25px;
    font-weight: 500;
}

mark.majorclass {
    background-color: rgba(59, 108, 212, 0.15);
    color: rgb(20, 50, 102);
}

mark.majorelective {
    background-color: rgba(129, 156, 215, 0.25);
    color: rgb(40, 70, 140);
}

mark.complete {
    background-color: rgba(60, 179, 113, 0.2);
    color: rgb(20, 110, 60);
}

mark.inprogress {
    background-color: rgba(59, 108, 212, 0.15);
    color: rgb(20, 50, 102);
}

mark.incomplete {
    background-color: rgba(220, 220, 220, 0.5);
    color: rgb(100, 100, 100);
}
</style>
