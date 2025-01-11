<template>
  <div class="flex flex-col">
    <h1>This is TEST page</h1>

    <!-- Debugging -->
    <!--
    <p>Loading state: {{ loading }}</p>
    <p>Items length: {{ items.length }}</p>
    <p>Question number: {{ quizStore.questionNumber }}</p>
  -->
    <!-- Loading state -->

    <div v-if="loading" class="text-center">
      <p>Loading...</p>
    </div>

    <!-- Display quiz items -->
    <div v-else-if="showQuiz && items.length > 0">
      <div v-for="item in items" :key="item.id" class="flex justify-center">
        <!--
        <button
          @click="goToRoute('Test', item.codserie)"
          class="flex justify-between bg-blue-500 text-white font-bold py-2 px-1 border border-blue-500 rounded w-30rem">
          <div>{{ item.codserie }} - {{ item.codtest }} - {{ item.enunt }}</div>
        </button>

        {{ quizStore.answers }} -->
      </div>
    </div>

    <!-- Final test message -->
    <div v-else>
      <p>This is the final of the test</p>
    </div>

    <!-- Quiz component or score -->
    <div>
      <Quiz v-if="showQuiz && items.length > 0" :questions="items[quizStore.questionNumber]" />
      <Score v-else />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onBeforeUnmount } from 'vue';
import axios from 'axios';
import Quiz from '../components/QuizComponent.vue';
// import Score from '../components/Score.vue';
import { useQuizStore } from '../store/quiz.js';
import { useRoute, useRouter } from 'vue-router';

const items = ref([]);
const loading = ref(true);
const route = useRoute();
const router = useRouter();
const quizStore = useQuizStore();

// Computed property to determine if the quiz should still be shown
const showQuiz = computed(() => quizStore.questionNumber < 5);

// Function to reset state variables
function resetState() {
  items.value = [];
  loading.value = true;
  quizStore.questionNumber = 0; // Reset the question number
  quizStore.answers = []; // Clear answers if needed
  console.log('State reset');
}

// Function to navigate to another route
function goToRoute(routeName, codserie) {
  router.push({ name: routeName, params: { codserie } });
}

// Fetch data when the component is mounted
onMounted(async () => {
  resetState(); // Reset the state on mount
  try {
    console.log('Fetching data...');
    const response = await axios.get(`http://127.0.0.1:8000/api/test/${route.params.codserie}`);
    console.log('Response:', response.data);

    if (Array.isArray(response.data) && response.data.length > 0) {
      items.value = response.data;
      console.log('Items updated:', items.value);
    } else {
      console.warn('API returned no data or invalid format.');
    }
  } catch (error) {
    console.error('Error fetching items:', error);
  } finally {
    loading.value = false; // Stop loading state
  }
});

// Optional: Clean up when the component is unmounted
onBeforeUnmount(() => {
  resetState();
});
</script>
