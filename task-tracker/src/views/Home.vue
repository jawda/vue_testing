<template>
    <AddTask v-show="showAddTask" @add-task="addTask" />
  <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks"/>
</template>

<script>

import Tasks from "@/components/Tasks";
import AddTask from "@/components/AddTask";

export default {
  name: "Home",
  props: {
    showAddTask: Boolean
  },
  components: {
    Tasks,
    AddTask
  },
  data(){
    return{
      tasks: []
    }
  },
  methods: {
    async addTask(task) {
      //post new task to db.json
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })
      //wait for response
      const data = await res.json()

      //update page with what is new data
      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id){
      // console.log('task', id)
      if(confirm('Are you sure?')){

        //attempt to delete based on id
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE'
        })

        // make a new list where id doesnt match one clicked on if status is delete success
        res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id )) :
            alert('Error deleting task')

      }
    },
    // changes the reminder property to the opposite of what it was on double click
    async toggleReminder(id){
      // console.log(id)
      //get task from server
      const taskToToggle = await this.fetchTask(id)
      //update task and store local
      const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}
      //update server
      const res = await fetch(`api/tasks/${id}`,{
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })
      //get data back from server
      const data = await res.json()

      //update page
      this.tasks = this.tasks.map((task) =>
          task.id === id ? {...task, reminder: data.reminder} : task)
    },
    async fetchTasks(){
      // get data from local server api is a proxy from config file
      const res = await fetch('api/tasks')
      // read as json
      const data = await res.json()

      return data
    },
    async fetchTask(id){
      // get data from local server
      const res = await fetch(`api/tasks/${id}`)
      // read as json
      const data = await res.json()

      return data
    }
  },
  async created(){
    this.tasks = await this.fetchTasks()
  }
}
</script>

<style scoped>

</style>
