<template>
    <div>
        <Header></Header>

        <h3 class="title">Skill</h3>

        <div>
          <router-link
            to="/skill/a"
            style="padding-right: 10px;"
            active-class="link--active"
            class="link"
          >skill01へ</router-link>
          <router-link
            to="/skill/b"
            active-class="link--active"
            class="link"
          >skill02へ</router-link>
          <router-link
            to="/skill/c"
            active-class="link--active"
            class="link"
          >skill03へ</router-link>
        </div>

        <router-view></router-view>

    </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  components: {
    Header,
    // Footer,
    // Main
  },  
}
</script>

<style scoped>

.title {
  margin-bottom: 50px;
}
</style>

