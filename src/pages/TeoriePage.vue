<template>
  <div class="flex flex-col">


    <div v-if="loading" class="text-center">
      <p>Loading...</p>
    </div>
    <!-- Display quiz items -->
    <div v-else-if="showQuiz && items.length > 0">
      <div v-for="item in items" :key="item.id" class="flex justify-center">

      </div>
    </div>
    <!-- Final test message -->
    <div v-else>
    <p>Error</p>

    </div>
    <!-- Quiz component or score -->

    <div>
      <TeorieComponent :tests="items" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, onBeforeUnmount } from 'vue';
import axios from 'axios';

import TeorieComponent from '@/components/TeorieComponent.vue';
import { useQuizStore } from '../store/quiz.js';
import { useRoute } from 'vue-router';

const items = ref([]);
const loading = ref(true);
const route = useRoute();
//const router = useRouter();
const quizStore = useQuizStore();

// Computed property to determine if the quiz should still be shown
const showQuiz = computed(() => quizStore.questionNumber < 5);

// Function to reset state variables
function resetState() {
  items.value = [];
  loading.value = true;
  quizStore.questionNumber = 0; // Reset the question number
  quizStore.score = 0;
  quizStore.answers = []; // Clear answers if needed
  console.log('State reset');
}

// Function to navigate to another route


// Fetch data when the component is mounted
onMounted(async () => {
  resetState(); // Reset the state on mount
  try {

    console.log('Fetching data...');
    console.log(route.params.codserie);
    console.log(route.params.codclasa);
    const response = await axios.get(`http://127.0.0.1:8000/api/teorie/${route.params.codclasa}/${route.params.codserie}`);
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
