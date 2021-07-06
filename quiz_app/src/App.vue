<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    add elements from below-->

    <!--    pass values into header.vue using vbind-->
    <Header
        :numCorrect="numCorrect"
        :numTotal="numTotal"
    />
    <b-container class="bv-example-row">
      <b-row>
        <!--        full page is 12 so use 6 and move 3 columns to the right-->
        <b-col sm="6" offset="3">
          <!--          wait for length to populate before render, pull question from api data-->
          <QuestionBox
              v-if="questions.length"
              :currentQuestion="questions[index]"
              :next="next"
              :increment="increment"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//imports
import Header from './components/Header';
import QuestionBox from "@/components/QuestionBox";

//exports
export default
{
  name: 'App',
  components: {
    Header,
    QuestionBox
  },
  data() {
    return {
      //list to hold our questions
      questions: [],
      //keep up with current question
      index: 0,
      numCorrect: 0,
      numTotal: 0
    }
  },
  methods:
      {
        // increase index
        next()
        {
          this.index++
        },
        increment(isCorrect)
        {
          if(isCorrect)
          {
            this.numCorrect++
          }
          this.numTotal++
        }
      },
  mounted: function ()
  {
    // trivia question api link
    fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple',
        {
          //get data from api
          method: 'get'
        }).then((response) => {
      //return json response
      return response.json()
    }).then((jsonData) => {
      // associate questions from api with data element
      this.questions = jsonData.results
    })
  }
}
</script>

<style>
#app
{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
