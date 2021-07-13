<template>
  <div class="job-list">
    <p>Ordered by {{order}}</p>
<!--    using transition group instead of ul to do some animation stuff-->
    <transition-group name="list" tag="ul">
      <li v-for="job in orderedJobs" :key="job.id">
        <h2>{{job.title}} in {{job.location}}</h2>
        <div class="salary">
          <img src="../assets/rupee.svg" alt="rupee icon">
          <p>{{job.salary}} rupees</p>
        </div>
        <div class="description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores blanditiis consectetur ducimus, eveniet harum laudantium nostrum odit quas saepe voluptate! Animi aspernatur eius et ex illo nostrum odio perferendis tenetur.</p>
        </div>
      </li>
    </transition-group>
  </div>
</template>
<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import Job from '@/types/Job'
import OrderTerm from "@/types/OrderTerm";

export default defineComponent({
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>
    },
    order: {
      required: true,
      type: String as PropType<OrderTerm>
    }
  },
  setup(props) {

    //value will rerun anytime change is made
    const orderedJobs = computed(() => {
      //create a new array and sort
      return [...props.jobs].sort((a: Job,b: Job)=> {
        //compare the passed in order property to see if need to reorder
        //1 means they switch and -1 means they don't
        return a[props.order] > b[props.order] ? 1 : -1
      })
    })

    //now return the results of orderedJobs
    return { orderedJobs }
  }
})
</script>

<style scoped>

.job-list {
  max-width: 960px;
  margin: 40px auto;
}
.job-list ul {
  padding: 0;
}
.job-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}
.job-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}
.salary {
  display: flex;
}
.salary img {
  width: 30px;
}
.salary p {
  color: #17bf66;
  font-weight: bold;
  margin: 10px 4px;
}
.list-move{
  transition: all 1s;
}
</style>
