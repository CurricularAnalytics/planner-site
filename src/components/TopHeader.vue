<template>
  <header class="top-header">

    <div class="left">
        <div class="profile-icon">
            <i class="fas fa-user"></i>
        </div>
        <span class="advisor">ADVISOR NAME</span>
    </div>

    <div class="search">
        <i class="fas fa-search search-icon"></i>
        <input type="text" placeholder="Search college by ID or name..." />
    </div>

    <div class="right">
      <span class="uni">The University of Arizona</span>
      <div class="avatar">A</div>
    </div>

  </header>
</template>

<style scoped>

.top-header{
  background:#c8102e;
  height:70px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 30px;
  color:white;
}

.left{
  display:flex;
  align-items:center;
  gap:10px;
}

.profile-icon{
  background:white;
  color:#c8102e;
  width:40px;
  height:40px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
}

.profile-icon i{
  font-size:18px;
}

.search{
  position: relative;
}

.search input{
  width:400px;
  padding:10px 10px 10px 35px; /* space for icon */
  border-radius:8px;
  border:none;
}

.search-icon{
  position:absolute;
  left:10px;
  top:50%;
  transform:translateY(-50%);
  color:#888;
  font-size:14px;
}

.right{
  display:flex;
  align-items:center;
  gap:15px;
}

.avatar{
  background:white;
  color:#c8102e;
  width:40px;
  height:40px;
  border-radius:6px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-weight:bold;
}

</style>