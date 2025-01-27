<script setup>

import { useQuizStore } from '../store/quiz.js';
import { useAuthStore } from '@/store/auth.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  questions: Object,
  codserie: String,
});
const quizStore = useQuizStore();

function saveAnswerAndNextQuestion(answer, enunt, calea,r) {

  const isCorrect = answer === props.questions.correctAnswer; // Assuming correctAnswer is provided
  quizStore.addAnswer(quizStore.questionNumber, answer);
  quizStore.addEnunt(quizStore.questionNumber, enunt);
  quizStore.addCorrectAnswer(quizStore.questionNumber, r);

  if (isCorrect) {
    quizStore.incrementScore(); // Increment score if correct
  }

  quizStore.calculateScore(); // verificare score
  quizStore.nextQuestion();
  //console.log(answer);
  //console.log(quizStore.correctanswer)
  if (quizStore.questionNumber > 4) {
    //console.log('final');
    //console.log(quizStore.score);
    //console.log(quizStore.answers);
    //console.log("calea",{calea});

    router.push({
  name: 'ResultsPage',
  query: { score: quizStore.score,
    answers: JSON.stringify(quizStore.answers),
    enunt: JSON.stringify(quizStore.enunt),
    calea:JSON.stringify({calea}),
    correctanswer: JSON.stringify(quizStore.correctanswer),
    iduser: useAuthStore().user.id,
    codserie: props.codserie,
  },

});

  }
}
</script>

<template>

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
        @click="saveAnswerAndNextQuestion(answer, questions.enunt, questions.calea, questions.r)"
      >
        <img
          :src="`https://matematicon.ro/m/mem/${questions.calea}${answer}.png`"
          class="p-2 bg-blue-700 rounded px-2 py-2"
        />
      </button>
    </div>


  </div>

</template>
