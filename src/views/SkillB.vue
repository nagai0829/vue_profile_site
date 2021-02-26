<template>
    <div>
        <h1>PHP&wordpress</h1>
        <div class="items">
            <a href="http://nagai-ignorance-blog.com/">
                <img src="@/assets/img/wordpress.png" alt="">
                <p>PHP&wordpress</p>
            </a>
            <a href="#">
                <img src="@/assets/img/sobolon.png" alt="">
                <p>PHP</p>
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


a {
    width: 48%;
    margin-right: 20px;
}

a img:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition-duration: 0.6s;
}

h1 {
    background: linear-gradient(transparent 0, #ff99ab 0);
    margin-bottom: 60px;
    padding: 5px 0;
}

</style>