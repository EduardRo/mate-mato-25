<script setup>
import { ref } from 'vue';
import { useQuizStore } from '../store/quiz.js';

const props = defineProps({
  questions: Object,
  answer: '',
});

const quizStore = useQuizStore();

const count = ref(0);

function saveAnswerAndNextQuestion(answer) {
  console.log(quizStore.questionNumber);
  quizStore.addAnswer(quizStore.questionNumber, answer);
  quizStore.nextQuestion();
  console.log(answer);
}
</script>

<template>
  <h1>This is a Quiz component</h1>
  <div v-if="questions" class="flex flex-col">
    <p>{{ questions.enunt }}</p>
    <img
      :src="`https://matematicon.ro/m/mem/${questions.calea}${questions.enunt}.png`"
      class="bg-white p-2"
    />
    <p>{{ questions.calea }}</p>

    <!-- Option 1 -->
    <div class="flex flex-wrap gap-4">
      <button
        v-for="(answer, index) in [questions.v1, questions.v2, questions.v3]"
        :key="index"
        class="flex-grow basis-1/2 bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        @click="saveAnswerAndNextQuestion(answer)"
      >
        <img
          :src="`https://matematicon.ro/m/mem/${questions.calea}${answer}.png`"
          class="p-2 bg-blue-700 rounded"
        />
      </button>
    </div>

    <p>Question number: {{ quizStore.questionNumber }}</p>
  </div>

  <div>{{ quizStore.answers }}</div>
</template>
