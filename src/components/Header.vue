<template>
    <div>
      
        <nav class="nav">
          <a href="/" class="link02">
            NAGALOG
          </a>
          <router-link
            to="/about"
            active-class="link--active"
            class="link"
          >About</router-link>
          <!-- <router-link
            to="/work"
            active-class="link--active"
            class="link"
          >Work</router-link> -->
          <router-link
            to="/skill"
            active-class="link--active"
            class="link"
          >Skill</router-link>
          <router-link
            to="/comment"
            active-class="link--active"
            class="link"
          >Comment</router-link>
        </nav>   
        
      

      <hr>
        
    </div>
</template>

<style scoped>
div {
  margin-bottom: 100px;
}


.link {
  margin-right: 60px;
  color: black;
  font-size: 20px;
  text-decoration: none;
}


.link--active {
  /* font-size: 36px; */
  color: blue;
}

.link02 {
  margin-right: 160px;
  color: black;
  font-size: 20px;
  text-decoration: none;
  cursor: default;
}




</style>

