<template>
    <div class="flex flex-col">
        <h1>This is TEST page</h1>
       <!-- {{ $route.params.codtest }} --> 
    
        <div v-if="showQuiz" v-for="item in items" :key="item.id" class="flex justify-center">
            <!--
            <button 
            @click="goToRoute('Test', item.codserie)"
            class="flex justify-between bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-1 border border-blue-700 rounded w-30rem ">
            <div >{{ item.codserie }} - {{ item.codtest }} - {{ item.enunt }} </div>  
            
            </button>
            <div>{{ quizStore.answers }}</div>
            -->
        </div>
        
        <div>
        
            
            <Quiz v-if="showQuiz" :questions="items[quizStore.questionNumber]" />
            <Score 
            v-else 
          />
        </div>
    </div>
    </template>
    
    
    <script setup>
    import { ref, onMounted, computed } from 'vue';
    import axios from 'axios';
    import Quiz from '../components/Quiz.vue';
    import Score from '../components/Score.vue';
    import { useQuizStore } from '../stores/quiz.js';
    import { useRoute, useRouter } from 'vue-router';
    
    const items = ref([]);
    const route = useRoute();
    const router = useRouter();
    const quizStore = useQuizStore();
    
    const showQuiz = computed(() => {
        
      return quizStore.questionNumber < 5;
    });
    
    function goToRoute(routeName, codserie) {
      router.push({ name: routeName, params: { codserie } });
    }
    
    onMounted(() => {
      axios.get(`http://127.0.0.1:8000/api/test/${route.params.codserie}`)
        .then(response => {
          items.value = response.data;
          console.log(items.value);
        })
        .catch(error => {
          console.error('Error fetching items', error);
        });
    
      console.log(quizStore.questionNumber);
      console.log(quizStore.answers);
    });
    </script>
    
    <style scoped>
    /* Add your styles here */
    </style>