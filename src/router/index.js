import { createRouter, createWebHistory } from "vue-router"

import Dashboard from "../views/Dashboard.vue"
import Appointments from "../views/Appointments.vue"
import Website from "../views/Website.vue"
import Forms from "../views/Forms.vue"
import DataTables from "../views/DataTables.vue"
import Charts from "../views/Charts.vue"
import More from "../views/More.vue"

const routes = [
  { path: "/", name:"Dashboard", component: Dashboard },
  { path: "/appointments", name:"Appointments", component: Appointments },
  { path: "/website", name:"Website",component: Website },
  { path: "/forms", name:"Forms",component: Forms },
  { path: "/tables", name:"Data Tables",component: DataTables },
  { path: "/charts", name:"Charts",component: Charts },
  { path: "/more", name:"More",component: More }
]

export default createRouter({
  history: createWebHistory(),
  routes
})