<template>

<div class="appointments-container">

<h2>Appointments</h2>

<div
  v-for="appt in appointments"
  :key="appt.id"
  class="appointment-card"
  :class="appt.status"
>

  <div class="left">
    <h3>{{ appt.name }}</h3>
    <p>{{ appt.type }}</p>
  </div>

  <div class="right">
    <div>{{ appt.date }}</div>
    <div>{{ appt.time }}</div>
    <span class="status" :class="appt.status">
      {{ capitalize(appt.status) }}
    </span>
  </div>

</div>

</div>

</template>

<script>

export default{

data(){
return{

/* Dummy data (replace later with backend API) */

appointments:[
{
id:1,
name:"Ava Williams",
type:"Degree Audit Review",
date:"Nov 17, 2025",
time:"10:00 AM",
status:"upcoming"
},
{
id:2,
name:"Liam Carter",
type:"Course Planning",
date:"Nov 16, 2025",
time:"3:00 PM",
status:"completed"
},
{
id:3,
name:"Noah Brown",
type:"Transfer Credits",
date:"Nov 15, 2025",
time:"11:00 AM",
status:"cancelled"
}
]

}
},

methods:{
capitalize(text){
return text.charAt(0).toUpperCase() + text.slice(1)
}
}

}

</script>

<style scoped>

.appointments-container{
  padding:40px;
  max-width:1200px;
  margin:auto;
}

.appointment-card{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:22px 30px;
  margin-bottom:25px;

  border-radius:12px;
  background:#f5f6f7;

  box-shadow:0 3px 10px rgba(0,0,0,0.08);
}

.status{
  margin-top:4px;
  padding:2px 8px;
  border-radius:6px;
  font-size:12px;
  color:white;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  line-height:1;
}

.status.upcoming{
  background:#22c55e;
}

.status.completed{
  background:#3b82f6;
}

.status.cancelled{
  background:#ef4444;
}

.appointment-card.upcoming{
  border-left:5px solid #22c55e;
  background:#dcefe4;
}

.appointment-card.completed{
  border-left:5px solid #3b82f6;
  background:#dbe7f8;
}

.appointment-card.cancelled{
  border-left:5px solid #ef4444;
  background:#f2dada;
}

h2{
  color:#0c3c60;
  font-weight:600;
  margin-bottom:20px;
}

.left h3{
  margin:0;
  font-size:18px;
  color:#1f2937;
}

.left p{
  margin-top:4px;
  color:#6b7280;
  font-size:14px;
}

.right{
  text-align:right;
  display:flex;
  flex-direction:column;
  gap:4px;
}

.right div:first-child{
  font-weight:600;
}

.right div:last-child{
  color:#6b7280;
  font-size:14px;
}

</style>