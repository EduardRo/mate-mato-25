<template>
  <div v-if="store.currentIndex < store.questions.length">
    <QuizQuestion :question="store.questions[store.currentIndex]" />
  </div>
  <div v-else>
    <router-link to="/results">See Results</router-link>
  </div>
  {{ questions }}
</template>

<script>
import { useQuizStore } from '../store/quizStore';
import QuizQuestion from '../components/QuizQuestion.vue';

export default {
  components: { QuizQuestion },
  setup() {
    const store = useQuizStore();
    store.fetchQuestions();

    return { store };
  },
};
</script>
