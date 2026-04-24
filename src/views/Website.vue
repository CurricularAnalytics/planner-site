<template>

<div class="catalogue-page">

<h2 class="title">Computer Science Course Catalogue</h2>

<p class="description">
Below is the current course catalogue for the Computer Science major at The University of Arizona.
Each course includes details such as level, prerequisites, credits, and instructor information.
</p>

<!-- Sections -->
<div v-for="section in sections" :key="section.title">

<h3 class="section-title">{{ section.title }}</h3>

<div
  v-for="course in section.courses"
  :key="course.code"
  class="course-card"
>

  <div class="top-row">
    <h4>{{ course.code }}: {{ course.name }}</h4>
    <span class="credits">{{ course.credits }} Credits</span>
  </div>

  <p class="desc">{{ course.description }}</p>

  <div class="meta">
    <p><strong>Level:</strong> {{ course.level }}</p>
    <p><strong>Prerequisite:</strong> {{ course.prerequisite }}</p>
    <p><strong>Instructor:</strong> {{ course.instructor }}</p>
  </div>

</div>

</div>

<p class="note">
* Course data subject to periodic updates by the Department of Computer Science.
Always verify prerequisites and course offerings in UAccess.
</p>

</div>

</template>

<script>

export default{

data(){
return{

/* Dummy data (backend replace later) */

sections:[

{
title:"Core Courses",
courses:[
{
code:"CSC 110",
name:"Introduction to Programming",
credits:3,
description:"An introduction to programming fundamentals using Python.",
level:"Lower Division",
prerequisite:"None",
instructor:"Dr. Adams"
},
{
code:"CSC 120",
name:"Object-Oriented Programming",
credits:3,
description:"Focuses on object-oriented principles using Java.",
level:"Lower Division",
prerequisite:"CSC 110",
instructor:"Dr. Kim"
},
{
code:"CSC 210",
name:"Computer Organization",
credits:4,
description:"Introduces digital logic and CPU architecture.",
level:"Lower Division",
prerequisite:"CSC 120",
instructor:"Dr. Nguyen"
}
]
},

{
title:"Upper Division Core",
courses:[
{
code:"CSC 335",
name:"Software Engineering",
credits:3,
description:"Principles of software design and development.",
level:"Upper Division",
prerequisite:"CSC 210",
instructor:"Dr. Reed"
},
{
code:"CSC 345",
name:"Algorithms and Data Structures",
credits:3,
description:"Study of algorithm design and analysis.",
level:"Upper Division",
prerequisite:"CSC 120 and MATH 243",
instructor:"Dr. Patel"
},
{
code:"CSC 352",
name:"Systems Programming",
credits:3,
description:"Hands-on experience in C programming.",
level:"Upper Division",
prerequisite:"CSC 210",
instructor:"Dr. Miller"
}
]
},

{
title:"Electives and Specialized Topics",
courses:[
{
code:"CSC 401",
name:"Operating Systems II",
credits:4,
description:"Advanced study of OS concepts.",
level:"Advanced",
prerequisite:"CSC 352",
instructor:"Dr. Torres"
},
{
code:"CSC 430",
name:"Machine Learning",
credits:3,
description:"Covers ML models and applications.",
level:"Advanced",
prerequisite:"CSC 345 and STAT 250",
instructor:"Dr. Wang"
},
{
code:"CSC 440",
name:"AI Principles",
credits:3,
description:"Explores AI theory and algorithms.",
level:"Advanced",
prerequisite:"CSC 345",
instructor:"Dr. Reed"
},
{
code:"CSC 450",
name:"Cybersecurity",
credits:3,
description:"Examines data protection and encryption.",
level:"Advanced",
prerequisite:"CSC 335 or CSC 352",
instructor:"Dr. Martinez"
}
]
}

]

}
}

}

</script>

<style scoped>

.catalogue-page{
  padding:40px;
  max-width:1200px;
  margin:auto;
}

.title{
  color:#0c3c60;
  margin-bottom:10px;
}

.description{
  color:#6b7280;
  margin-bottom:25px;
}

.section-title{
  margin-top:30px;
  margin-bottom:15px;
  color:#0c3c60;
}

.course-card{
  background:#f9fafb;
  padding:20px;
  margin-bottom:20px;
  border-radius:10px;
  box-shadow:0 2px 6px rgba(0,0,0,0.08);
}

.top-row{
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.credits{
  color:#6b7280;
  font-size:14px;
}

.desc{
  margin:10px 0;
  color:#4b5563;
}

.meta p{
  margin:2px 0;
  font-size:14px;
}

.note{
  margin-top:20px;
  font-size:13px;
  color:#6b7280;
}

</style>