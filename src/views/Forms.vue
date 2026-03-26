<template>

<div class="forms-page">

<h2 class="title">Current Classes Info</h2>

<div class="table-container">

<table>

<thead>
<tr>
<th>COURSE CODE</th>
<th>COURSE NAME</th>
<th>CHANGE TYPE</th>
<th>DATE</th>
<th>EDITOR</th>
</tr>
</thead>

<tbody>

<tr v-for="course in courses" :key="course.code">

<td>{{ course.code }}</td>
<td>{{ course.name }}</td>
<td>{{ course.change }}</td>
<td>{{ course.date }}</td>
<td>{{ course.editor }}</td>

</tr>

</tbody>

</table>

</div>

<p class="note">
Data reflects the most recent updates and changes made by instructors or course coordinators.
</p>

</div>

</template>

<script>

export default {

data(){
return{

/* Dummy data (replace with backend later) */

courses:[
{
code:"CSC 345",
name:"Discrete Structures",
change:"Prerequisite Updated",
date:"Nov 15, 2025",
editor:"Dr. Kim"
},
{
code:"CSC 335",
name:"Software Engineering",
change:"New Section Added",
date:"Nov 13, 2025",
editor:"Dr. Reed"
},
{
code:"CSC 452",
name:"Operating Systems",
change:"Syllabus Revised",
date:"Nov 11, 2025",
editor:"Dr. Patel"
},
{
code:"CSC 320",
name:"Database Systems",
change:"Lab Session Time Changed",
date:"Nov 10, 2025",
editor:"Dr. Nguyen"
},
{
code:"CSC 401",
name:"Operating Systems II",
change:"New Instructor Assigned",
date:"Nov 08, 2025",
editor:"Dr. White"
},
{
code:"CSC 430",
name:"Machine Learning",
change:"Additional Project Added",
date:"Nov 07, 2025",
editor:"Dr. Chen"
},
{
code:"CSC 210",
name:"Computer Organization",
change:"Course Materials Updated",
date:"Nov 06, 2025",
editor:"Dr. Adams"
}
]

}
}

}

</script>

<style scoped>

.forms-page{
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

tr:hover{
background:#f8fafc;
}

.note{
margin-top:10px;
font-size:13px;
color:#6b7280;
}

</style>