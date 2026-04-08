<script setup>
import { ref } from 'vue'
import { studentProfile } from './data/data.js'
import DegreeProgress    from './components/DegreeProgress.vue'
import RequirementsPanel from './components/RequirementsPanel.vue'
import SemesterPlanner   from './components/SemesterPlanner.vue'
import NotesSection      from './components/NotesSection.vue'
import QuickLinks        from './components/QuickLinks.vue'
import EditPlanPopup     from './components/popups/EditPlanPopup.vue'
import AdvisorPopup      from './components/popups/AdvisorPopup.vue'
import TrellisPopup      from './components/popups/TrellisPopup.vue'
import MajorComparePopup from './components/popups/MajorComparePopup.vue'
import DegreeAuditPopup  from './components/popups/DegreeAuditPopup.vue'

const activePopup  = ref(null)
const openPopup    = (name) => { activePopup.value = name }
const closePopup   = ()     => { activePopup.value = null }

const showBell    = ref(false)
const showMessage = ref(false)
const showMenu    = ref(false)
</script>

<template>
  <!-- Header -->
  <header class="header">
    <div id="headerlogo">
      <div class="circle" id="headercircle">A</div>
      <div id="headerlogotext">The University<br>of Arizona</div>
    </div>
    <span id="headertitle">DEGREE PLANNER</span>
    <div id="headericons">
      <div class="hicon-wrap">
        <svg @click="showBell = !showBell; showMessage = false" class="hicon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        <div v-if="showBell" class="notif-tab">
          <svg class="notif-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(20, 50, 102)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <div>
            <p class="notif-text">Your pathway plan has been updated.</p>
            <span class="notif-time">Now</span>
          </div>
        </div>
      </div>
      <div class="hicon-wrap">
        <svg @click="showMessage = !showMessage; showBell = false" class="hicon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <div v-if="showMessage" class="notif-tab">
          <svg class="notif-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgb(20, 50, 102)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          <div>
            <p class="notif-text">Your advisor has sent you a message.</p>
            <span class="notif-time">Now</span>
          </div>
        </div>
      </div>
      <div class="circle" id="headerusercircle">S</div>
      <div class="hicon-wrap">
        <svg @click="showMenu = !showMenu; showBell = false; showMessage = false" class="hicon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="6"  x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        <div v-if="showMenu" class="menu-tab">
          <div class="menu-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(20, 50, 102)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span>Profile</span>
          </div>
          <div class="menu-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(20, 50, 102)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            <span>Settings</span>
          </div>
          <hr class="menu-sep">
          <div class="menu-item menu-item-red">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(171, 5, 32)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div id="contentdiv">
    <main class="main">
      <div id="mainbody">

        <!-- Profile Card -->
        <div class="container" id="profilecontainer">
          <div class="circle" id="profilecircle">{{ studentProfile.name[0] }}</div>
          <div id="profiledetails">
            <h2 id="profilename">{{ studentProfile.name }}</h2>
            <p class="profilelabel">{{ studentProfile.degree }}</p>
          </div>
          <div id="profileright">
            <p class="profilelabel">STUDENT ID: {{ studentProfile.studentId }}</p>
            <p class="profilelabel">ESTIMATED GRADUATION: {{ studentProfile.estimatedGraduation }}</p>
          </div>
        </div>

        <div id="progressreqdiv">
          <DegreeProgress />
          <RequirementsPanel @open-popup="openPopup" />
        </div>

        <SemesterPlanner @open-popup="openPopup" />
        <NotesSection />
        <QuickLinks @open-popup="openPopup" />
      </div>
    </main>
  </div>

  <EditPlanPopup     v-if="activePopup === 'editplan'" @close="closePopup" />
  <AdvisorPopup      v-if="activePopup === 'advisor'"  @close="closePopup" />
  <TrellisPopup      v-if="activePopup === 'trellis'"  @close="closePopup" />
  <MajorComparePopup v-if="activePopup === 'compare'"  @close="closePopup" />
  <DegreeAuditPopup  v-if="activePopup === 'audit'"    @close="closePopup" />
</template>

<style scoped>
/* Header */
.header {
    height: 50px;
    width: 100%;
    background-color: rgb(171, 5, 32);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
}

#headerlogo {
    display: flex;
    align-items: center;
    gap: 8px;
}

#headercircle {
    color: rgb(171, 5, 32);
    flex-shrink: 0;
}

#headerlogotext {
    font-size: 11px;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.9);
}

#headertitle {
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 3px;
}

#headericons {
    display: flex;
    align-items: center;
    gap: 14px;
}

.hicon-wrap {
    position: relative;
}

.hicon {
    cursor: pointer;
    opacity: 0.85;
    display: block;
}

.hicon:hover {
    opacity: 1;
}

.notif-tab {
    position: absolute;
    top: 36px;
    right: 0;
    background: white;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 12px 14px;
    width: 220px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 300;
}

.notif-icon {
    flex-shrink: 0;
}

.notif-text {
    margin: 0 0 4px;
    font-size: 13px;
    color: rgb(20, 20, 20);
    font-weight: normal;
}

.notif-time {
    font-size: 11px;
    color: gray;
}

.menu-tab {
    position: absolute;
    top: 36px;
    right: 0;
    background: white;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 6px;
    width: 160px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    z-index: 300;
}

.menu-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 10px;
    border-radius: 6px;
    font-size: 14px;
    color: rgb(20, 20, 20);
    cursor: pointer;
}

.menu-item:hover {
    background-color: whitesmoke;
}

.menu-item-red {
    color: rgb(171, 5, 32);
}

.menu-sep {
    border: none;
    border-top: 1px solid lightgray;
    margin: 4px 0;
}

#headerusercircle {
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.5);
    color: white;
    font-size: 13px;
}

/* Profile Card */
#profilecontainer {
    display: flex;
    align-items: center;
    margin: 20px 0 5px;
    padding: 20px 30px;
    box-sizing: border-box;
}

#profilecircle {
    width: 90px;
    height: 90px;
    background-color: rgb(171, 5, 32);
    color: white;
    font-size: 40px;
    border-radius: 50%;
    flex-shrink: 0;
}

#profiledetails {
    margin-left: 25px;
    flex-grow: 1;
}

#profilename {
    margin: 0 0 6px;
    font-size: 22px;
}

.profilelabel {
    margin: 4px 0;
    font-size: 14px;
}

#profileright {
    text-align: right;
    font-size: 14px;
}

#profileright p {
    margin: 5px 0;
}
</style>
