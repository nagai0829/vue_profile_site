<template>
    <div>
      <transition name="fade">
        <nav v-if="show" name="fade">
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
        <main> 
            <p
              v-if="!show"
              @click.once="show = !show"
            >Welcome to my site</p>      
        </main>
    </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
    component: {
        Header,

    },
    data() {
        return {
        show: false
        }
    },
    methods: {
        toUsers() {
            this.$router.push('about');
        }
    }
}
</script>

<style scoped>
main {
  margin: 200px 0 400px;
  font-size: 48px;
  transition-duration: 0.3s;
}

main:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition-duration: 0.3s;
}

.link:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition-duration: 0.3s;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>