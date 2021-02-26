<template>
    <div>

        <Header></Header>

        <!-- <h3 class="title">Skill</h3> -->
        <transition name="fade">
        <div class="skill-header" v-on:click.once="show = !show">
          <router-link
            to="/skill/a"
            style="padding-right: 100px;"
            active-class="link--active"
            class="links"
          >coding&design</router-link>
          <router-link
            to="/skill/b"
            style="padding-right: 100px;"
            active-class="link--active"
            class="links"
          >PHP&wordpress</router-link>
          <!-- <router-link
            to="/skill/c"
            active-class="link--active"
            class="links"
          >Vue.js</router-link> -->
        </div>
        </transition>

        <transition name="view" mode="out-in">
          <router-view></router-view>
        </transition>

        <p v-if="show">
          <img src="@/assets/img/skill.jpg" style="width: 800px; height: auto;" alt="">
        </p>

        <!-- <Button></Button> -->
        <Footer></Footer>

    </div>
</template>

<script>
import Header from '../components/Header.vue'
// import Button from '../components/Button.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    // Button,
    Footer,
    // Main
  },  
  data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>

a:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition-duration: 0.6s;
}

.skill-header {
  margin-bottom: 140px;

}

.links {
  font-size: 28px;
  text-decoration: none;
  color: black;
  /* background: linear-gradient(transparent 70%, #ff99ab 70%); */
  margin-right: 10px;
}

.link--active {
  /* color: white; */
  opacity: 0.1;
}

.links:hover {
  cursor: pointer;
  /* transform: scale(1.2); */
  transition-duration: 0.3s;
  opacity: 0.5;
  background: none;
}

.title {
  margin-bottom: 100px;
}

p:hover {
    opacity: 0.7;
}
</style>

