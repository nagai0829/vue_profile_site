<template>
    <div>
        <nav>
      <router-link
        to="/about"
        active-class="link--active"
        class="link"
      >About</router-link>
      <router-link
        to="/work"
        active-class="link--active"
        class="link"
      >Work</router-link>
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
    <h3>Work</h3>
    

    </div>
</template>

<style scoped>
.link {
  margin-right: 10px;
  color: black;
  font-size: 28px;
}

.link--active {
  font-size: 36px;
  color: blue;
}
</style>