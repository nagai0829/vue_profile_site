<template>
  <div id="app">
    <transition mode="out-in">    
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
// import Main from './components/Main.vue'
// import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    // Button
    // Header,
    // Footer,
    // Main
  },
  data() {
    return {
      show: false
    }
  }
  
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding-top: 60px;
  width: 800px;
  margin: auto; 
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  opacity: 0.8;
}


/* main {
  margin: 200px 0 400px;
  font-size: 48px;
  transition-duration: 0.3s;
}

main:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition-duration: 0.3s;
} */

.view-enter-active, .view-leave-active {
  transition: opacity .3s;
}

/* .view-leave-active {
  position: absolute;
} */

.view-enter, .view-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
