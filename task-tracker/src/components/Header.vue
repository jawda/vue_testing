<template>
  <header>
    <h1>{{title}}</h1>
<!--    text and color change depending on if form if visible in app.vue for add task-->
    <Button v-show="homePage"
        @btn-click="$emit('toggle-add-task')"
    :text="showAddTask ? 'Close' : 'Add Task'"
    :color="showAddTask ? 'red' : 'green'"/>
  </header>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Header",
  // props coming from app.vue
  props: {
      title: String,
      showAddTask: Boolean
  },
  components: {
    Button
  },
  computed: {
    homePage() {
      // check if on home page
      if(this.$route.path === '/'){
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>
