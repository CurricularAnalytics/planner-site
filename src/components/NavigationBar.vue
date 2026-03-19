<template>

<nav class="nav-bar">

<router-link 
  v-for="item in navItems"
  :key="item.name"
  :to="item.route"
  class="nav-item"
>
  <div class="icon">
    <i :class="item.icon"></i>
  </div>
  <span>{{item.name}}</span>
</router-link>

</nav>

</template>

<script>
export default{
  data(){
    return{
      navItems:[
        {name:"DASHBOARD", icon:"fas fa-home", route:"/"},
        {name:"WEBSITE", icon:"fas fa-globe", route:"/website"},
        {name:"FORMS", icon:"fas fa-file-alt", route:"/forms"},
        {name:"DATA TABLES", icon:"fas fa-database", route:"/tables"},
        {name:"CHARTS", icon:"fas fa-chart-line", route:"/charts"},
        {name:"APPOINTMENTS", icon:"fas fa-calendar", route:"/appointments"},
        {name:"MORE", icon:"fas fa-ellipsis-h", route:"/more"}
]
    }
  }
}
</script>

<style scoped>

.nav-bar{
  background:#0c3c60;
  display:flex;
  justify-content:space-around;
  padding:20px 0;
  color:white;
}

.nav-item{
  display:flex;
  flex-direction:column;
  align-items:center;
  font-size:12px;
  cursor:pointer;

  text-decoration:none;   /* remove underline */
  color:white;            /* text color */
  padding:15px 30px;
}

.nav-item:visited{
  color:white;
}

.nav-item:link{
  color:white;
}

.nav-item:hover{
  background:#123e63;
}

.nav-item i{
  text-decoration:none;
}

.icon{
  background:#e6e6e6;     /* light gray circle */
  color:#0c3c60;          /* dark blue icon */
  width:45px;
  height:45px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-bottom:6px;
  font-size:18px;
}

</style>