<script setup>
import { ref } from 'vue'

const note      = ref(localStorage.getItem('advisorNote') ?? '')
const btnLabel  = ref('Save')
const isSaving  = ref(false)

function save() {
  localStorage.setItem('advisorNote', note.value)
  btnLabel.value = 'Saved!'
  isSaving.value = true
  setTimeout(() => {
    btnLabel.value = 'Save'
    isSaving.value = false
  }, 1500)
}
</script>

<template>
  <div class="container" id="notesdiv">
    <h2 id="notestitle">STUDENT PREPARATION NOTES <span>(FOR ADVISOR MEETING)</span></h2>
    <p id="notessubtitle">Briefly jot down key points or questions to discuss with your advisor.</p>
    <textarea id="notesarea" v-model="note" placeholder="Write a short note..."></textarea>
    <div id="notesactions">
      <button id="notessavebtn" :disabled="isSaving" @click="save">{{ btnLabel }}</button>
    </div>
  </div>
</template>

<style scoped>
#notesdiv {
    padding: 25px 30px;
    margin-bottom: 5px;
}

#notestitle {
    font-size: 15px;
    font-weight: bold;
    color: rgb(20, 50, 102);
    letter-spacing: 1px;
    margin: 0 0 5px;
}

#notestitle span {
    font-weight: normal;
    color: gray;
    font-size: 13px;
}

#notessubtitle {
    font-size: 13px;
    color: gray;
    font-style: italic;
    margin: 0 0 12px;
}

#notesarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 12px 15px;
    font-family: sans-serif;
    font-size: 14px;
    resize: vertical;
    min-height: 80px;
    color: rgb(30, 30, 30);
}

#notesarea:focus {
    outline: none;
    border-color: rgb(20, 50, 102);
}

#notesactions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    margin-top: 8px;
}

#notessavebtn {
    background-color: rgb(20, 50, 102);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 8px 22px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    font-family: sans-serif;
}

#notessavebtn:hover {
    background-color: rgb(12, 35, 75);
}
</style>
