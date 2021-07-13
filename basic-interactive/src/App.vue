<template>
  <div id="app" >=
    <div style="position: relative; left: 0; top: 0;">
      <ul v-for="item in viaJSx" :key="item.id" v-show="curPage === item.id">
        <Slide :id="item.id" :path="item.path" class="topCont"></Slide>
      </ul>
      <NavButton :loc="forwardArrow.loc" :name="forwardArrow.name" class="forwardArr" @btn-click="forwardArrowClick"
       v-show="showFArrow"></NavButton>
      <NavButton :loc="backArrow.loc"  :name="backArrow.name" class="backArr" @btn-click="backArrowClick"
       v-show="showBArrow"></NavButton>
      <AudioToggle :play-loc="audioToggle.playLoc" :stop-loc="audioToggle.stopLoc" :local-audio="audioToggle.localAudio"
                   :name="audioToggle.name" class="playButton1" />

        <AudioToggle :play-loc="audioToggle.playLoc" :stop-loc="audioToggle.stopLoc" :local-audio="audioToggle.serverAudio"
                     :name="audioToggle.name" class="playButton2" />

    </div>

  </div>
</template>

<script>
import Slide from "@/components/Slide";
import NavButton from "@/components/NavButton";
import AudioToggle from "@/components/AudioToggle";

export default {
  name: 'App',
  components: {
    Slide,
    NavButton,
    AudioToggle
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
      audioToggle: {
        playLoc: require('./assets/play.png'),
        stopLoc: require('./assets/stop.png'),
        localAudio: require('./assets/audio/swvader04.wav'),
        serverAudio: 'https://dev.quavermusic.com/media/audio/quaver/b83ae018-7e61-4af1-a070-b564fe0a8626.mp3',
        name: "audioToggle"
      },
      curPage: 0,
      showFArrow: true,
      showBArrow: false
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
  top: 50vh;
  left: 150vh
}
.backArr
{
  position: absolute;
  top: 50vh;
  left: 38vh;
}
.playButton1{
  position: absolute;
  top: 60vh;
  left: 58vh;
}

.playButton2{
  position: absolute;
  top: 60vh;
  left: 108vh;
}

</style>
