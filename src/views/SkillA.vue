<template>
    <div>
        <!-- <h2>Skill01</h2> -->
        <h1>web制作 ~ coding&design ~</h1>
        <div class="items">
            <a href="https://epic-kepler-7ef586.netlify.app/">
                <img src="@/assets/img/1.jpg" alt="">
                <p>デザイン＆コーディング</p>
            </a>
            <a href="https://peaceful-hugle-b1b255.netlify.app/">
                <img src="@/assets/img/sobolon.png" alt="">
                <p>HTML&CSS&jQuery</p>
            </a>
        </div>
    </div>
</template>

<style scoped>
.items {
    display: flex;
}
img {
    border-radius: 20px;
    width: 100%;
    height: 200px;
}

h1 {
    margin-top: 50px;
}

a {
    width: 45%;
    margin-right: 10px;
}

a img:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition-duration: 0.6s;
}

</style>