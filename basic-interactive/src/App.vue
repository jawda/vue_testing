<template>
  <div id="app" >
<!--    <img src="./assets/slide-0.png" class="backgroundImg center ">-->
<!--    <img src="viaJs" class="backgroundImg center ">-->
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <div style="position: relative; left: 0; top: 0;">
      <ul v-for="item in viaJSx" :key="item.id" v-show="curPage === item.id">
        <Slide :id="item.id" :path="item.path" class="topCont"></Slide>
      </ul>
      <NavButton :loc="forwardArrow.loc" :name="forwardArrow.name" class="forwardArr" @btn-click="forwardArrowClick"
       v-show="showFArrow"></NavButton>
      <NavButton :loc="backArrow.loc"  :name="backArrow.name" class="backArr" @btn-click="backArrowClick"
       v-show="showBArrow"></NavButton>
    </div>

  </div>
</template>

<script>
import Slide from "@/components/Slide";
import NavButton from "@/components/NavButton";

export default {
  name: 'App',
  components: {
    Slide,
    NavButton
  },
  methods: {
    forwardArrowClick(){
      if(this.curPage < (this.viaJSx.length - 1) )
      {
        this.curPage++
      }
      this.setArrows()
    },
    backArrowClick(){
      if(this.curPage > 0)
      {
        this.curPage--
      }
      this.setArrows()
    },
    setArrows(){
      if(this.curPage < this.viaJSx.length - 1)
      {
        this.showFArrow = true
      }
      else
      {
        this.showFArrow = false
      }
      if(this.curPage === 0)
      {
        this.showBArrow = false
      }
      else
      {
        this.showBArrow = true
      }
    }

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
        },
        {
          id:2,
          path: require('./assets/slide-2.png')
        }
      ],
      forwardArrow: {
        loc: require('./assets/forwardArrow.png'),
        name: "forwardArrow"
      },
      backArrow: {
        loc: require('./assets/backArrow.png'),
        name: "backArrow"
      },
      curPage: 0,
      showFArrow: true,
      showBArrow: false
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

.topCont
{
  position: relative;
  top: 0;
  left: 0;
}
.forwardArr
{
  position: absolute;
  //top: 280px;
  top: 50vh;
  //left: 950px;
  left: 150vh
}
.backArr
{
  position: absolute;
  //top: 280px;
  top: 50vh;
  //left: 250px;
  left: 38vh;
}

</style>
