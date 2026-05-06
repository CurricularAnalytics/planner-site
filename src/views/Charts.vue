<template>
  <div class="charts-page">
    <div class="content-layout">

      <!-- LEFT PANEL -->
      <div class="left-panel">

        <h2 class="title">Student Progress Analytics</h2>

        <!-- FILTERS -->
        <div class="filters">

          <select v-model="selectedDegree">
            <option value="">All Degrees</option>
            <option>Computer Science</option>
            <option>Data Science</option>
            <option>Chemical Engineering</option>
            <option>Aerospace Engineering</option>
          </select>

          <select v-model="selectedIPEDS">
            <option value="">All IPEDS</option>
            <option>First Time</option>
            <option>Transfer</option>
          </select>

          <select v-model="selectedYear">
            <option value="">All Years</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
          </select>

          <div class="filter-actions">
            <button class="show-btn" @click="generateChart">
              Show
            </button>
          </div>

        </div>

        <!-- LOADING -->
        <div v-if="loading" class="state">
          Loading...
        </div>

        <!-- NO DATA -->
        <div v-if="noData && !loading" class="state no-data">
          No data found
        </div>

        <!-- PIE CHART -->
        <div
          v-if="showChart && !loading && !noData"
          class="chart-section"
        >
          <canvas ref="pieChart"></canvas>
        </div>

      </div>

      <!-- RIGHT PANEL -->
      <div class="right-panel">

        <div v-if="selectedCategory" class="student-list">

          <h3 class="table-title">
            {{ selectedCategory }} Students
          </h3>

          <!-- SEARCH + SORT -->
          <div class="toolbar">

            <input
              type="text"
              v-model="searchText"
              placeholder="Search name, degree, IPEDS or year..."
              class="search-box"
            />

            <button
              class="sort-btn"
              @click="showSortMenu = !showSortMenu"
            >
              Filter ▼
            </button>

            <!-- SORT MENU -->
            <div
              v-if="showSortMenu"
              class="sort-menu"
            >
              <div @click="applySort('name','asc')">
                Name (A-Z)
              </div>

              <div @click="applySort('name','desc')">
                Name (Z-A)
              </div>

              <div @click="applySort('degree','asc')">
                Degree (A-Z)
              </div>

              <div @click="applySort('degree','desc')">
                Degree (Z-A)
              </div>

              <div @click="applySort('year','asc')">
                Year Ascending
              </div>

              <div @click="applySort('year','desc')">
                Year Descending
              </div>
            </div>

          </div>

          <!-- TABLE -->
          <div class="student-table">

            <table>

              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Degree</th>
                  <th>IPEDS</th>
                  <th>Year</th>
                </tr>
              </thead>

              <tbody>

                <tr
                  v-for="s in filteredList"
                  :key="s.name"
                >
                  <td>
                    <span
                      class="student-link"
                      @click="showPopup(s.name)"
                    >
                      {{ s.name }}
                    </span>
                  </td>

                  <td>{{ s.degree }}</td>
                  <td>{{ s.ipeds }}</td>
                  <td>{{ s.year }}</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

        <div
          v-else
          class="placeholder-box"
        >
          Click a pie slice to view students
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import {
  Chart,
  PieController,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js"

Chart.register(
  PieController,
  ArcElement,
  Tooltip,
  Legend
)

export default {
  data() {
    return {
      selectedDegree: "",
      selectedIPEDS: "",
      selectedYear: "",

      loading: false,
      noData: false,
      showChart: false,

      chart: null,

      selectedCategory: "",

      searchText: "",

      sortKey: "name",
      sortOrder: "asc",

      showSortMenu: false,

      studentsData: [

        {name:"Emma Johnson",degree:"Computer Science",ipeds:"First Time",year:2025,status:"On Schedule"},
        {name:"Liam Carter",degree:"Data Science",ipeds:"Transfer",year:2024,status:"On Schedule"},
        {name:"Ava Williams",degree:"Chemical Engineering",ipeds:"First Time",year:2023,status:"Ahead of Schedule"},
        {name:"Noah Brown",degree:"Aerospace Engineering",ipeds:"Transfer",year:2025,status:"Behind Schedule"},
        {name:"Sophia Lee",degree:"Computer Science",ipeds:"First Time",year:2026,status:"On Schedule"},
        {name:"James Parker",degree:"Data Science",ipeds:"Transfer",year:2025,status:"On Schedule"},
        {name:"Olivia Smith",degree:"Chemical Engineering",ipeds:"First Time",year:2024,status:"Behind Schedule"},
        {name:"Ethan Davis",degree:"Aerospace Engineering",ipeds:"Transfer",year:2026,status:"Ahead of Schedule"},
        {name:"Mia Wilson",degree:"Computer Science",ipeds:"First Time",year:2025,status:"On Schedule"},
        {name:"Lucas Moore",degree:"Data Science",ipeds:"Transfer",year:2023,status:"On Schedule"},
        {name:"Isabella Taylor",degree:"Chemical Engineering",ipeds:"First Time",year:2026,status:"Ahead of Schedule"},
        {name:"Mason Anderson",degree:"Aerospace Engineering",ipeds:"Transfer",year:2024,status:"Behind Schedule"},
        {name:"Charlotte Thomas",degree:"Computer Science",ipeds:"First Time",year:2025,status:"On Schedule"},
        {name:"Amelia Jackson",degree:"Data Science",ipeds:"Transfer",year:2024,status:"On Schedule"},
        {name:"Harper White",degree:"Chemical Engineering",ipeds:"First Time",year:2025,status:"On Schedule"},
        {name:"Henry King",degree:"Data Science",ipeds:"Transfer",year:2025,status:"On Schedule"}

      ]
    }
  },

  computed: {

    filteredList() {

      let search = this.searchText.toLowerCase()

      let list = this.studentsData.filter(s => {

        let matchesSearch =
          s.name.toLowerCase().includes(search) ||
          s.degree.toLowerCase().includes(search) ||
          s.ipeds.toLowerCase().includes(search) ||
          s.year.toString().includes(search)

        return (
          s.status === this.selectedCategory &&
          matchesSearch
        )

      })

      list.sort((a,b)=>{

        let A = a[this.sortKey]
        let B = b[this.sortKey]

        if(this.sortKey === "year"){
          return this.sortOrder === "asc"
            ? A - B
            : B - A
        }

        A = A.toString().toLowerCase()
        B = B.toString().toLowerCase()

        return this.sortOrder === "asc"
          ? A.localeCompare(B)
          : B.localeCompare(A)

      })

      return list
    }

  },

  methods: {

    generateChart() {

      this.loading = true
      this.showChart = false
      this.noData = false
      this.selectedCategory = ""

      setTimeout(()=>{

        const filtered = this.studentsData.filter(s => {

          return (
            (!this.selectedDegree || s.degree === this.selectedDegree) &&
            (!this.selectedIPEDS || s.ipeds === this.selectedIPEDS) &&
            (!this.selectedYear || s.year == this.selectedYear)
          )

        })

        if(filtered.length === 0){
          this.noData = true
          this.loading = false
          return
        }

        const counts = {
          "On Schedule":0,
          "Behind Schedule":0,
          "Ahead of Schedule":0
        }

        filtered.forEach(s=>{
          counts[s.status]++
        })

        this.showChart = true

        this.$nextTick(()=>{

          if(this.chart){
            this.chart.destroy()
          }

          const ctx =
            this.$refs.pieChart.getContext("2d")

          this.chart = new Chart(ctx,{
            type:"pie",
            data:{
              labels:[
                "On Schedule",
                "Behind Schedule",
                "Ahead of Schedule"
              ],
              datasets:[{
                data:[
                  counts["On Schedule"],
                  counts["Behind Schedule"],
                  counts["Ahead of Schedule"]
                ],
                backgroundColor:[
                  "#22c55e",
                  "#ef4444",
                  "#3b82f6"
                ]
              }]
            },
            options:{
              responsive:true,
              maintainAspectRatio:false,

              onClick:(e,elements)=>{

                if(elements.length>0){
                  this.selectedCategory =
                    this.chart.data.labels[
                      elements[0].index
                    ]
                }

              }
            }
          })

        })

        this.loading = false

      },500)

    },

    applySort(key,order){
      this.sortKey = key
      this.sortOrder = order
      this.showSortMenu = false
    },

    showPopup(name){
      alert(name + " feature under development")
    }

  }
}
</script>

<style scoped>

.charts-page{
  padding:30px;
}

.content-layout{
  display:grid;
  grid-template-columns:46% 54%;
  gap:30px;
}

/* LEFT */

.title{
  font-size:28px;
  font-weight:700;
  color:#0f3f68;
  margin-bottom:30px;
}

.filters{
  display:flex;
  flex-direction:column;
  gap:15px;
}

.filters select{
  padding:14px 45px 14px 14px;
  border-radius:8px;
  border:1px solid #ccc;
  font-size:16px;
}

.filter-actions{
  display:flex;
  justify-content:center;
  margin-top:20px;
}

.show-btn{
  width:60%;
  padding:14px;
  background:#0f3f68;
  color:white;
  border:none;
  border-radius:8px;
  cursor:pointer;
}

.chart-section{
  margin-top:40px;
  width:400px;
  height:400px;
  margin-left:auto;
  margin-right:auto;
}

.state{
  margin-top:30px;
}

.no-data{
  color:red;
}

/* RIGHT */

.right-panel{
  padding-right:35px;
  box-sizing:border-box;
}

.placeholder-box{
  background:white;
  padding:60px;
  border-radius:14px;
  text-align:center;
  color:#777;
}

.table-title{
  font-size:22px;
  font-weight:700;
  margin-bottom:18px;
}

.toolbar{
  display:flex;
  gap:12px;
  margin-bottom:18px;
  position:relative;
}

.search-box{
  flex:1;
  padding:12px;
  border-radius:8px;
  border:1px solid #ccc;
}

.sort-btn{
  background:#0f3f68;
  color:white;
  border:none;
  padding:12px 16px;
  border-radius:8px;
  cursor:pointer;
}

.sort-menu{
  position:absolute;
  top:52px;
  right:0;
  width:220px;
  background:white;
  border-radius:10px;
  box-shadow:0 8px 20px rgba(0,0,0,0.12);
  z-index:10;
  overflow:hidden;
}

.sort-menu div{
  padding:12px 16px;
  cursor:pointer;
}

.sort-menu div:hover{
  background:#f3f4f6;
}

.student-table{
  background:white;
  border-radius:14px;
  overflow:hidden;
}

table{
  width:100%;
  border-collapse:collapse;
}

thead{
  background:#0f3f68;
  color:white;
}

th,td{
  padding:16px;
  text-align:left;
}

tbody tr{
  border-bottom:1px solid #eee;
}

.student-link{
  color:#0f3f68;
  font-weight:600;
  cursor:pointer;
}

.student-link:hover{
  text-decoration:underline;
}

</style>