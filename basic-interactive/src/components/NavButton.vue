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
  //height: 100px;
  //width: 100px;
  max-width: 70%;
  height: auto;
  width: auto\9; /* ie8 */
  cursor: pointer;
}

</style>
