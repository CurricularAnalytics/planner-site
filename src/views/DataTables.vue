<template>

<div class="table-page">

<h2 class="title">Current Students</h2>

<div class="table-container">

<table>

<thead>
<tr>
<th>NAME</th>
<th>STUDENT ID</th>
<th>MAJOR</th>
<th>PROGRESS</th>
<th>LAST LOGIN</th>
<th>ADVISOR</th>
</tr>
</thead>

<tbody>

<tr v-for="student in students" :key="student.id">

<td>
{{ student.name }}
<span v-if="student.new">*</span>
</td>

<td>{{ student.id }}</td>

<td>{{ student.major }}</td>

<td class="progress-cell">

<div class="progress-bar">
<div
class="progress-fill"
:style="{ width: student.progress + '%' }"
:class="progressColor(student.progress)"
></div>
</div>

<span class="progress-text">{{ student.progress }}%</span>

</td>

<td>{{ student.lastLogin }}</td>

<td>{{ student.advisor }}</td>

</tr>

</tbody>

</table>

</div>

<p class="note">
* Indicates a newly enrolled student.
</p>

</div>

</template>

<script>

export default{

data(){
return{

/* Dummy data (replace with backend later) */

students:[
{
name:"Emma Johnson",
id:"A001",
major:"Computer Science",
progress:86,
lastLogin:"Nov 14, 2025",
advisor:"Dr. Wells",
new:true
},
{
name:"Liam Carter",
id:"A002",
major:"Software Engineering",
progress:74,
lastLogin:"Nov 15, 2025",
advisor:"Dr. Reed",
new:true
},
{
name:"Ava Williams",
id:"A003",
major:"Data Science",
progress:92,
lastLogin:"Nov 12, 2025",
advisor:"Dr. Torres"
},
{
name:"Noah Brown",
id:"A004",
major:"Information Systems",
progress:63,
lastLogin:"Nov 16, 2025",
advisor:"Dr. Miller"
},
{
name:"Sophia Lee",
id:"A005",
major:"Cybersecurity",
progress:79,
lastLogin:"Nov 17, 2025",
advisor:"Dr. Adams"
},
{
name:"James Parker",
id:"A006",
major:"Computer Engineering",
progress:88,
lastLogin:"Nov 13, 2025",
advisor:"Dr. Nguyen"
}

]

}
},

methods:{

progressColor(progress){

if(progress >= 85){
return "green"
}

if(progress >= 70){
return "yellow"
}

return "red"

}

}

}

</script>

<style scoped>

.table-page{
padding:40px;
}

.title{
color:#0c3c60;
margin-bottom:20px;
font-weight:600;
}

.table-container{
background:white;
border-radius:10px;
overflow:hidden;
box-shadow:0 3px 10px rgba(0,0,0,0.08);
}

table{
width:100%;
border-collapse:collapse;
}

thead{
background:#0c3c60;
color:white;
}

th{
padding:16px;
text-align:left;
font-size:14px;
}

td{
padding:16px;
border-bottom:1px solid #e5e7eb;
font-size:15px;
}

.progress-cell{
display:flex;
align-items:center;
gap:10px;
}

.progress-bar{
width:100px;
height:8px;
background:#e5e7eb;
border-radius:6px;
overflow:hidden;
}

.progress-fill{
height:100%;
border-radius:6px;
}

.green{
background:#22c55e;
}

.yellow{
background:#facc15;
}

.red{
background:#ef4444;
}

.progress-text{
font-size:14px;
color:#374151;
}

.note{
margin-top:10px;
font-size:13px;
color:#6b7280;
}

</style>