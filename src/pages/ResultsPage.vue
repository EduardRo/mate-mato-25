<template>
  <div class="results-page">
    <h1>Quiz Results</h1>
    <p>Your final score is: <strong>{{ score }}</strong></p>

    <h2>Your Answers:</h2>
    <ul>
      <li v-for="(answer, questionId) in answers" :key="questionId">
        Question {{ questionId }}:{{ enunt[questionId] }} - {{ answer }} - {{calculateScore(answer)}}
      </li>
    </ul>

    <button @click="goBackToQuiz" class="bg-blue-700 text-white py-2 px-4 rounded mt-4">
      Retake Quiz
    </button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute(); // Access route parameters
const router = useRouter();

// Extract parameters from the route

const score = route.query.score;
const answers = JSON.parse(route.query.answers);
const enunt = JSON.parse(route.query.enunt);

// Function to go back to the quiz
function goBackToQuiz() {
  router.push({ name: 'Clase' }); // Redirect to the quiz page (adjust name as needed)
}

function calculateScore(answer) {
  //const score = 0;
  // Implement your logic to calculate the score
  if (answer.startsWith('R')) { // Check if the answer starts with "R"
          this.score=1;

    } else {this.score=0;}

    return this.score;
}
</script>

<style scoped>
.results-page {
  padding: 1rem;
  text-align: center;
}
</style>
