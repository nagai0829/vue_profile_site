<template>
    <div>
      <Header></Header>
      <keep-alive>
        <Comments></Comments>
      </keep-alive>
        
        <!-- <h3>About</h3> -->
      <Button></Button>
      <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Button from '../components/Button.vue'
import Footer from '../components/Footer.vue'
import Comments from '../components/Comments.vue'

export default {
  components: {
    Header,
    Button,
    Footer,
    Comments
    // Main
  },  
}
</script>