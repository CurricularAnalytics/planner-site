<script setup>
import { reactive } from 'vue'
import BasePopup from './BasePopup.vue'
import { planDefaults } from '../../data/data.js'

const emit = defineEmits(['close'])

const form = reactive({
  credits:  localStorage.getItem('plan_creditsinput')  ?? planDefaults.credits,
  classes:  localStorage.getItem('plan_classesinput')  ?? planDefaults.classes,
  gradYear: localStorage.getItem('plan_gradyearinput') ?? planDefaults.gradYear,
  location: localStorage.getItem('plan_location')      ?? planDefaults.location,
  hasMinor: localStorage.getItem('plan_hasminor') === 'true',
})

function save() {
  localStorage.setItem('plan_creditsinput',  form.credits)
  localStorage.setItem('plan_classesinput',  form.classes)
  localStorage.setItem('plan_gradyearinput', form.gradYear)
  localStorage.setItem('plan_location',      form.location)
  localStorage.setItem('plan_hasminor',      form.hasMinor)
  emit('close')
}
</script>

<template>
  <BasePopup @close="emit('close')">
    <h2 id="editplantitle">Edit Your Pathway Plan</h2>
    <p class="popupsub">Customize your academic plan based on your preferences.</p>

    <div class="editformrow">
      <label class="editquestion" for="creditsinput">How many credits per semester do you want to take?</label>
      <input type="number" class="editinput" id="creditsinput" v-model="form.credits" min="1" max="30">
      <p class="editrangehint">Typical range: 12-18 credits</p>
    </div>
    <div class="editformrow">
      <label class="editquestion" for="classesinput">How many classes per semester do you want to take?</label>
      <input type="number" class="editinput" id="classesinput" v-model="form.classes" min="1" max="10">
      <p class="editrangehint">Typical range: 4-6 classes</p>
    </div>
    <div class="editformrow">
      <label class="editquestion" for="gradyearinput">Which year do you want to graduate?</label>
      <input type="number" class="editinput" id="gradyearinput" v-model="form.gradYear" min="2025" max="2035">
    </div>
    <div class="editformrow">
      <p class="editquestion">Preferred Location</p>
      <label class="radiolabel"><input type="radio" name="location" value="inperson" v-model="form.location"> In Person</label>
      <label class="radiolabel"><input type="radio" name="location" value="online"   v-model="form.location"> Online</label>
      <label class="radiolabel"><input type="radio" name="location" value="hybrid"   v-model="form.location"> Hybrid (Mix of both)</label>
    </div>
    <div class="editformrow">
      <label class="checklabel"><input type="checkbox" v-model="form.hasMinor"> I have a minor</label>
    </div>
    <div class="editactions">
      <button class="editcancelbtn" @click="emit('close')">Cancel</button>
      <button class="popupbtn" @click="save">Save Changes</button>
    </div>
  </BasePopup>
</template>

<style scoped>
#editplantitle {
    margin: 0 0 6px;
    font-size: 22px;
    color: rgb(20, 20, 20);
}

.editformrow {
    margin-bottom: 22px;
}

.editquestion {
    display: block;
    font-size: 15px;
    font-weight: bold;
    color: rgb(20, 20, 20);
    margin: 0 0 10px;
}

.editinput {
    width: 100%;
    padding: 11px 14px;
    border: 1px solid lightgray;
    border-radius: 8px;
    font-size: 16px;
    box-sizing: border-box;
    font-family: sans-serif;
    color: rgb(30, 30, 30);
}

.editinput:focus {
    outline: none;
    border-color: rgb(20, 50, 102);
}

.editrangehint {
    margin: 6px 0 0;
    font-size: 13px;
    color: gray;
}

.radiolabel,
.checklabel {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    cursor: pointer;
}

.radiolabel {
    margin-bottom: 12px;
}

.radiolabel input[type="radio"],
.checklabel input[type="checkbox"] {
    accent-color: rgb(171, 5, 32);
    cursor: pointer;
    flex-shrink: 0;
}

.radiolabel input[type="radio"] {
    width: 18px;
    height: 18px;
}

.checklabel input[type="checkbox"] {
    width: 16px;
    height: 16px;
}

.editactions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    align-items: center;
    margin-top: 10px;
    padding-top: 15px;
    border-top: 1px solid lightgray;
}

.editcancelbtn {
    background: none;
    font-size: 14px;
    font-weight: bold;
    color: gray;
    padding: 10px 18px;
    border-radius: 25px;
    border: 2px solid lightgray;
    cursor: pointer;
    font-family: sans-serif;
}
</style>
