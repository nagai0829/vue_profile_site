<template>
<div>
    <!-- <div class="sns">
        <p>T</p>
        <p>G</p>
    </div> -->
    <router-link
            to="/hello"
            class="link"
          ><button class="btn btn--orange btn--cubic btn--shadow">Homeへもどる</button>
    </router-link>

    <div class="footer">

    <p class="sns">
        <a href="#">
            <img src="@/assets/img/2.png" alt="#" class="sns-item">
        </a>        
        <a href="#">
            <img src="@/assets/img/1.png" alt="#" class="sns-item">
        </a>
    </p>
    <p class="footer-text">copyright@2020 nagaiseiya</p>    
    </div>
</div>
</template>

<script>
import Button from './Button.vue'


export default {
    Button,
    
}
</script>

<style scoped>


 div {
    /* display: flex; */
    /* margin: 100px 0 20px; */
    width: 800px;
    margin-bottom: 0;
}

button {
  margin: 80px 0 0;
  color: #fff;
  background-color: #0066cc;
  /* border-bottom: 5px solid #0066cc; */
  opacity: 0.7;
  border: none;
  padding: 15px;
  border-radius: 50px;
  
}
button:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition-duration: 0.5s;
  background-color: #0066cc;
  opacity: 1;
  /* border-bottom: 5px solid #0066cc; */
}

.footer {
    display: flex;
}


.sns {
    margin: auto;
    display: flex;
}

.sns-item {
    width: 60px;
    height: auto;
}

.sns-item:hover {
  cursor: pointer;
  transform: scale(1.3);
  transition-duration: 0.3s;
}

.footer-text {
    margin: auto;
     text-align: right;
 }
</style>