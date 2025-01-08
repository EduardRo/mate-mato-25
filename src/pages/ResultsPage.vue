<template>
  <div>
    <h1>Your Score: {{ store.score }}</h1>
    <button @click="saveScore">Save Score</button>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
import { useQuizStore } from '../store/quizStore';

export default {
  setup() {
    const store = useQuizStore();

    const saveScore = () => {
      const userId = 1; // Replace with dynamic user ID
      store.submitScore(userId);
    };

    return { store, saveScore };
  },
};
</script>
