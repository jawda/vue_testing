<template >
  <div>
    <img :src="playLoc"  class="playBtn delayed" @click="buttonClick()" alt="nav-button"  v-show="!toggleOn">
    <img :src="stopLoc"  class="playBtn delayed" @click="buttonClick()" alt="nav-button" v-show="toggleOn">
  </div>
</template>

<script>

export default {
  name: "AudioToggle",
  props: {
    playLoc: String,
    stopLoc: String,
    localAudio: String,
    name: String

  },
  methods: {
    buttonClick() {
      this.toggleOn = !this.toggleOn
      this.isPlaying = !this.isPlaying

      if(this.isPlaying)
      {
        this.localAudioElement.play()
      }
      else
      {
        this.localAudioElement.pause()
        this.localAudioElement.currentTime = 0
      }
    }
  },
  data(){
    return{
      toggleOn: false,
      isPlaying: false,
      localAudioElement: new Audio(this.localAudio)
    }
  }
}
</script>

<style scoped>
.playBtn{
  max-width: 70%;
  height: auto;
  width: auto\9; /* ie8 */
  cursor: pointer;
}

.playBtn:active{
  transform: scaleY(0.98) scaleX(0.98);
}

</style>
