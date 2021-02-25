<template>
    <router-link
            to="/hello"
            class="link"
          ><button class="btn btn--orange btn--cubic btn--shadow">Homeへもどる</button>
    </router-link>
</template>

<style scoped>
button {
  margin-top: 80px;
  color: #fff;
  background-color: #0066cc;
  border-bottom: 5px solid #0066cc;
  border: none;
  padding: 15px;
  border-radius: 50px;
  
}
button:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition-duration: 0.3s;
}
</style>