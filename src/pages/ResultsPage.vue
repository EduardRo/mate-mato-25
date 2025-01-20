<template>
  <div class="results-page">

    <p class="text-2xl font-size-100 font-sans">Your final score is: {{ score }}</p>
    <!-- Your answers
    <h2>Your Answers:</h2>
    <ul>
      <li v-for="(answer, questionId) in answers" :key="questionId">
        Question {{ questionId }}:
        {{ enunt[questionId] }} - {{ answer }} -
        {{ calculateScore(answer) }} - {{ calea }} - {{ correctanswer[questionId] }}
      </li>
    </ul>
    -->
    <!-- Images and answer display -->
    <div v-for="(answer, questionId) in answers" :key="questionId"
    class="flex flex-col px-1 pt-10">
      <!-- Question image -->
      <hr class="my-10 border-t-red-500 border-b-violet-500 py-0">
      <img
        :src="`https://matematicon.ro/m/mem/${calea}${enunt[questionId]}.png`"
        class="bg-white p-5 object-contain w-full h-[300px]"
        alt="Question Image"
      />
      <hr class="border-t-8 border-violet-500 py-0">

      <!-- Answer image -->
      <div class="flex flex-wrap gap-4 my-2">
        <img
          :src="`https://matematicon.ro/m/mem/${calea}${answer}.png`"
          :class="{ 'bg-red-500': calculateScore(answer) === 0, 'bg-green-500': calculateScore(answer) !== 0 }"
    class=" px-5 py-2 object-contain w-full h-[300px]"
          alt="Answer Image"
        />
        <p v-if="calculateScore(answer) === 1"
        class="text-green-500 text-4xl">Raspuns corect, ai primit {{calculateScore(answer)}} punct!</p>
      <p v-else class="text-red-500 text-4xl">Raspuns gresit, ai primit {{calculateScore(answer)}} puncte!</p>
      <h5 v-if="calculateScore(answer) === 0"
        class="text-blue-500 text-4xl">Raspuns corect este:</h5>
      <img v-if="calculateScore(answer) === 0"
          :src="`https://matematicon.ro/m/mem/${calea}${correctanswer[questionId]}.png`"
          :class="{ 'bg-blue-500': calculateScore(answer) === 0 }"
          class="p-5  object-contain w-full h-[300px]"
          alt="Answer Image"
        />
      </div>




    </div>

    <button @click="goBackToQuiz" class="bg-blue-700 text-white py-2 px-4 rounded mt-4">
      Retake Quiz
    </button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute(); // Access route parameters
const router = useRouter();
console.log(route.query);

// Extract parameters from the route
const score = route.query.score;
const answers = JSON.parse(route.query.answers);
const enunt = JSON.parse(route.query.enunt);
const correctanswer = JSON.parse(route.query.correctanswer);
let calea = route.query.calea;

// Parse if `calea` is a JSON string
if (typeof calea === 'string') {
  try {
    const parsedCalea = JSON.parse(calea);
    calea = parsedCalea.calea; // Extract the actual path
  } catch (e) {
    console.error("Failed to parse calea:", e);
  }
}
// Function to go back to the quiz
function goBackToQuiz() {
  router.push({ name: 'Clase' }); // Redirect to the quiz page (adjust name as needed)
}

// Function to calculate the score
function calculateScore(answer) {
  // Check if the answer starts with "R"
  return answer.startsWith('R') ? 1 : 0;
}
</script>

<style scoped>
.results-page {
  padding: 1rem;
  text-align: center;
}
</style>
