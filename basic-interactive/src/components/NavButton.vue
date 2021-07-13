<template >
  <div id="forwardArrowCont">
    <img :src="loc"  class="arrow" @click="buttonClick()" alt="nav-button">
  </div>
  </template>

<script>
export default {
  name: "NavButton",
  props: {
    loc: String,
    name: String
  },
  methods: {
    buttonClick() {
      this.$emit('btn-click')
    }
  }
}
</script>

<style scoped>
.arrow{
  max-width: 70%;
  height: auto;
  width: auto\9; /* ie8 */
  cursor: pointer;
  //opacity: 1;
  //-webkit-filter: brightness(100%);
  //-webkit-transition: .3s ease-in-out;
  //transition: .3s ease-in-out;
}
.arrow:hover{
  //box-shadow: 0 5px #666;
  //opacity: .9;
  //-webkit-filter: brightness(80%);
}
.arrow:active{
  transform: scaleY(0.98) scaleX(0.98);
}

</style>
