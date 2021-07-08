<template>
  <footer>
    <p>Copyright &copy; 2021</p>
<!--    links to the about page using the router without reloading page-->
    <router-link to="/about">About</router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  a {
    color: #333;
  }

  footer {
    margin-top: 30px;
    text-align: center;
  }
</style>
