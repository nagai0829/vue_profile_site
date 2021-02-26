<template>
    <div>
      
      <Header></Header>

      <!-- <button v-on:click="show" class="button">show!</button>
      <modal name="hello-world" :draggable="true" :resizable="true">
        <div class="modal-header">
          <h2>Modal title</h2>
        </div>
        <div class="modal-body">
          <p>you're reading this text in a modal!</p>
          <button v-on:click="hide">閉じる</button>
        </div>  
      </modal> -->
      
      <div class="about-wrappers">
        <!-- <div class="about-wrapper"> -->
          <!-- <div class="about-item">
            <p
              v-on:click="change1"
              v-if="show1"
              class="subtitle"
              >出身地</p>
            <div
              v-on:click="reverse1"
              v-else>
              <img src="data:image/png;base64,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"
               alt=""
               class="about-img">
              <p>山口県宇部市</p>   
            </div>

          </div> -->
          
          <div class="about-item">
            <p v-on:click="show1" class="subtitle">出身地</p>
            <modal name="hello-world1" :draggable="true" :resizable="true">
              <div class="modal-header">
                <h2>山口県宇部市</h2>
              </div>
              <div class="modal-body">
                <div class="modal-items">
                  <div class="modal-item">
                    <p><img src= 
                      "https://lh3.googleusercontent.com/proxy/sQIuyEDAmVKFTsBztOhip3ac_-jKh3f8aFQwknLIBZmbDLWEI0Z0Jw6N2XMl3A9gJH0SAurtYorRdvGWcY2VoRcPAV4g_PTUuCw1QNAn2Cpj0z_x6zM"
                      class="about-img"></p>
                    <p>ときわ湖</p>
                  </div>
                  <div class="modal-item">
                    <p><img src= 
                     "https://www.city.ube.yamaguchi.jp/kyouyou/choukoku/biennale/images/25th1_1.jpg"
                     class="about-img"></p>
                    <p>ときわ公園</p>
                  </div>
                </div>
                <button v-on:click="hide1" class="modal-btn">閉じる</button>
              </div>  
            </modal>
          </div>
          
          <div class="about-item">
            <p v-on:click="show2" class="subtitle">経歴</p>
            <modal name="hello-world2" :draggable="true" :resizable="true">
              <div class="modal-header">
                <h2>経歴</h2>
              </div>
              <div class="modal-body">
                <div class="modal-items">
                  <div class="modal-item">
                    <p><img src= 
                      "https://media.istockphoto.com/photos/side-view-image-of-young-happy-family-sitting-in-consulting-office-picture-id1187713019?b=1&k=6&m=1187713019&s=170667a&w=0&h=Fhz90Af6uAj6q05kZX4ZU6YrZtKt6JvYhqkXxYSHXYM="
                      class="about-img"></p>
                    <p>不動産営業(2年)</p>
                  </div>
                  <div class="modal-item">
                    <p><img src= 
                    "https://cdn.pixabay.com/photo/2019/02/26/11/33/chef-4021815__340.jpg"
                     class="about-img"></p>
                    <p>ラーメン屋(アルバイト4年)</p>
                  </div>
                </div>
                <button v-on:click="hide2" class="modal-btn">閉じる</button>
              </div>  
            </modal>
          </div>

          <div class="about-item">
            <p v-on:click="show3" class="subtitle">aa</p>
            <modal name="hello-world3" :draggable="true" :resizable="true">
              <div class="modal-header">
                <h2>aa</h2>
              </div>
              <div class="modal-body">
                <p><img src=""
              alt=""
              class="about-img"></p>
              <p>aa</p>
                <button v-on:click="hide3" class="modal-btn">閉じる</button>
              </div>  
            </modal>
          </div>

          <div class="about-item">
            <p v-on:click="show4" class="subtitle">趣味</p>
            <modal name="hello-world4" :draggable="true" :resizable="true">
              <div class="modal-header">
                <h2>趣味</h2>
              </div>
              <div class="modal-body">
                <p><img src="https://dol.ismcdn.jp/mwimgs/e/9/670m/img_b6db8aed6c38758f32b7fcd0a8ada00f219937.jpg"
              alt=""
              class="about-img"></p>
              <p>サウナ</p>
                <button v-on:click="hide4" class="modal-btn">閉じる</button>
              </div>  
            </modal>
            <!-- <p
              v-on:click="change4"
              v-if="show4"
              class="subtitle"
              >趣味</p>
            <div
              v-on:click="reverse4"
              v-else>
            <img src="https://dol.ismcdn.jp/mwimgs/e/9/670m/img_b6db8aed6c38758f32b7fcd0a8ada00f219937.jpg"
              alt=""
              class="about-img"> 
            <p>サウナ</p>
            </div> -->
          </div>

        <!-- </div> -->

      </div>

      <!-- <Button></Button> -->
      <Footer></Footer>
    </div>
</template>

<script>


import Header from '../components/Header.vue'
// import Button from '../components/Button.vue'
import Footer from '../components/Footer.vue'

export default {
  props: ['$model'],
  components: {
    Header,
    // Button,
    Footer,
    // Main
  },  
  data() {
    return {
      // show1: true,
      // show2: true,
      // show3: true,
      // show4: true,
    }
  },
  methods: {
    show1 : function() {
      this.$modal.show('hello-world1');
    },
    show2 : function() {
      this.$modal.show('hello-world2');
    },
    show3 : function() {
      this.$modal.show('hello-world3');
    },
    show4 : function() {
      this.$modal.show('hello-world4');
    },
    hide1 : function () {
      this.$modal.hide('hello-world1');
    },
    hide2 : function () {
      this.$modal.hide('hello-world2');
    },
    hide3 : function () {
      this.$modal.hide('hello-world3');
    },
    hide4 : function () {
      this.$modal.hide('hello-world4');
    },
  }
}
</script>

<style scoped>
.modal-header, .modal-body {
  padding: 5px 25px;
}

.modal-items {
  display: flex;
}

.modal-item {
  width: 50%;
  text-align: center;
}

.modal-header {
  border-bottom: 1px solid #ddd;
}

.modal-btn {
  float: right;
}

.about-wrappers {
  display: flex;
  flex-wrap: wrap;
}

.about-item {
  width: 50%;
}

.subtitle {
  position: relative;
  color: #333;
  display: inline-block;
  margin: 47px 0 150px;
  text-shadow: 0 0 2px white;
  padding: 30px;
}

.subtitle:before {
  content: "";
  position: absolute;
  background: #ffd69d;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
  z-index: -1;
}

.about-img {
  width: 180px;
  height: 100px;
}

</style>