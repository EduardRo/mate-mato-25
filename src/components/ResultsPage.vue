<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const score = ref(0);
const answers = ref([]);

onMounted(() => {
  score.value = Number(route.query.score);
  answers.value = JSON.parse(route.query.answers || '[]');
});
</script>

<template>
  <h1>Results Page</h1>
  <p>Your Score: {{ score }}</p>
  <h2>Answers:</h2>
  <ul>
    <li v-for="(answer, index) in answers" :key="index">
      Question {{ index + 1 }}: {{ answer.isCorrect ? 'Correct' : 'Incorrect' }}
    </li>
  </ul>
</template>
