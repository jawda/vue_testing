<template>
  <div :key="task.id" v-for="task in tasks">
<!--    fire event up to app.vue from task.vue-->
    <Task @delete-task="$emit('delete-task', task.id)" :task="task" />
  </div>
</template>

<script>
import Task from './Task'

export default {
  name: "Tasks",
  props: {
    tasks: Array
  },
  components: {
    Task
  },
  emits: ['delete-task']
}
</script>

<style scoped>

</style>
