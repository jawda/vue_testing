<template>
<div >
  <img :src="path" class="backgroundImg center ">
</div>
</template>

<script>
export default {
name: "Slide",
props: {
  id: Number,
  path: String

},


}
</script>

<style scoped>

.backgroundImg {
  width: 100%;
  height: auto;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
