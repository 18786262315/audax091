<template>
  <div id="app">
    <div class="phonepop">
    <img src="@/assets/img/mobile-rotate.png" alt="">
    <p>This page is best viewed in Landscape, Please rotate your mobile or tablet!</p>
    </div>
    <navigation>
      <router-view />
    </navigation>
  </div>
</template>

<style>

@media screen and (orientation: portrait) {
  /*竖屏 css*/
  .phonepop{
    display: flex !important;
  }

}
@media screen and (orientation: landscape) {
  /*横屏 css*/
    .phonepop{
    display: none !important;
  }
}
.phonepop{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: black;
  color: white;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  font-family: Regular; 
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
html,body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  
}

@font-face {
    font-family: din-bold; 
    src: url('~@/assets/font/Poppins-BoldItalic.ttf');
  }
@font-face {
    font-family: Regular; 
    src: url('~@/assets/font/Poppins-Regular.ttf');
  }



</style>
