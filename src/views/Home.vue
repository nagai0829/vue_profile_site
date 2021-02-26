<template>
    <div>
      
      <transition name="fade">
        <nav v-if="show" name="fade">
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
        
      </transition>
      <main> 
        <p v-if="!show"
          @click.once="show = !show"
          class="main"
          >Welcome to my site</p>      
        <p v-else>
          <router-link to="/about">
            <img src="@/assets/img/home1.png" class="main" alt="">
          </router-link>
          <router-link to="/skill">
            <img src="@/assets/img/home2.png" class="main" alt="">
          </router-link>
          <router-link to="/comment">
            <img src="@/assets/img/home3.png" class="main" alt="">
          </router-link>
        </p>
      </main>        
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import { db } from '../main'
import Vue2Filters from 'vue2-filters' 

export default {
    component: {
        Header,

    },
    data() {
        return {
        show: false,
        whispers: []
        }
    },
    firestore () {
    return {
      whispers: db.collection('whispers')
    }
  },
    methods: {
        toUsers() {
            this.$router.push('about');
        }
    },
    mixins: [Vue2Filters.mixin] 
}
</script>

<style scoped>
.main {
  margin: 200px 0 400px;
  font-size: 48px;
  transition-duration: 0.3s;
}

.main:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition-duration: 0.3s;
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

.link:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition-duration: 0.3s;
}

.link02 {
  margin-right: 160px;
  color: black;
  font-size: 20px;
  text-decoration: none;
  cursor: default;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>