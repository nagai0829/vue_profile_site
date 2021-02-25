<template>
  <div id="app">
    
    <router-view></router-view>

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

.link {
  margin-right: 100px;
  color: black;
  font-size: 20px;
  text-decoration: none;
}

.link--active {
  font-size: 36px;
  color: blue;
}



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



</style>
