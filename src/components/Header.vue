<template>
    <div>
      <transition name="fade">
        <nav>
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
      </transition>
        
    </div>
</template>

<style scoped>
.link {
  margin-right: 10px;
  color: black;
}

.link--active {
  font-size: 36px;
  color: blue;
}

</style>