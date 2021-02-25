<template>
    <div>

        <Header></Header>

        <!-- <h3 class="title">Skill</h3> -->
        <transition name="fade">
        <div name="fade">
          <router-link
            to="/skill/a"
            style="padding-right: 100px;"
            active-class="link--active"
            class="link"
          >coding&design</router-link>
          <router-link
            to="/skill/b"
            style="padding-right: 100px;"
            active-class="link--active"
            class="link"
          >PHP&wordpress</router-link>
          <router-link
            to="/skill/c"
            active-class="link--active"
            class="link"
          >Vue.js</router-link>
        </div>

        </transition>


        <router-view></router-view>
        <Button></Button>
        <Footer></Footer>

    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Button,
    Footer,
    // Main
  },  
}
</script>

<style scoped>
a:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition-duration: 0.6s;
}

.link {
  font-size: 20px;
}

.link--active {
  color: white;
}

.title {
  margin-bottom: 100px;
}
</style>

