<template>
<div class="imgbox">
  <img :src="path" class="center-fit" alt="slide">
</div>
</template>

<script>
export default {
  name: "Slide",
  props: {
    id: Number,
    path: String

  }


}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}
.imgbox {
  display: grid;
  height: 100%;
}
.center-fit {
  max-width: 100%;
  max-height: 100vh;
  margin: auto;
}
</style>
