<template>
    <div>
      <Header></Header>
      <Comments></Comments>    
      <!-- <Button></Button> -->
      <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
// import Button from '../components/Button.vue'
import Footer from '../components/Footer.vue'
import Comments from '../components/Comments.vue'

export default {
  components: {
    Header,
    // Button,
    Footer,
    Comments
    // Main
  },  
}
</script>