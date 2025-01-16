<script setup>
import { ref } from 'vue';
import { useQuizStore } from '../store/quiz.js';

const props = defineProps({
  questions: Object,
  //answer: '',
});

const quizStore = useQuizStore();

//const count = ref(0);

function saveAnswerAndNextQuestion(answer) {
  console.log(quizStore.questionNumber);
  const isCorrect = answer === props.questions.correctAnswer; // Assuming correctAnswer is provided
  quizStore.addAnswer(quizStore.questionNumber, answer);
  if (isCorrect) {
    quizStore.incrementScore(); // Increment score if correct
  }
  quizStore.calculateScore();
  quizStore.nextQuestion();
  console.log(answer);
}
</script>

<template>
  <h1>This is a Quiz component</h1>
  <div v-if="questions" class="flex flex-col px-1">
    <!--- <p>{{ questions.enunt }}</p> -->
    <img
      :src="`https://matematicon.ro/m/mem/${questions.calea}${questions.enunt}.png`"
      class="bg-white p-8 py-2"
    />
    <!--- <p>{{ questions.calea }}</p> -->

    <!-- Option 1 -->
    <div class="flex flex-wrap gap-4 my-2">
      <button
        v-for="(answer, index) in [questions.v1, questions.v2, questions.v3]"
        :key="index"
        class="flex-grow basis-1/2 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="saveAnswerAndNextQuestion(answer)"
      >
        <img
          :src="`https://matematicon.ro/m/mem/${questions.calea}${answer}.png`"
          class="p-2 bg-blue-700 rounded px-2 py-2"
        />
      </button>
    </div>


  </div>
  <!--
  <div>
    <p>Question number: {{ quizStore.questionNumber }}</p>
    {{ quizStore.answers }}
  </div>
  -->
</template>
