<template>
  <div id="app" >
<!--    <img src="./assets/slide-0.png" class="backgroundImg center ">-->
<!--    <img src="viaJs" class="backgroundImg center ">-->
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <ul v-for="item in viaJSx" :key="item.id" v-show="curPage === item.id">
      <Slide :id="item.id" :path="item.path"></Slide>
    </ul>
  </div>
</template>

<script>
import Slide from "@/components/Slide";
export default {
  name: 'App',
  components: {
    Slide
  },
  data() {
    return {
      viaJSx: [
        {
          id:0,
          path: require('./assets/slide-0.png')
        },
        {
          id:1,
          path: require('./assets/slide-1.png')
        }
      ],
      curPage: 0
      // viaJs: [require('./assets/slide-0.png'),require('./assets/slide-1.png')] // eslint-disable-line no-undef
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
}


</style>
