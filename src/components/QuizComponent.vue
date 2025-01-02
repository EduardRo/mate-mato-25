<script setup>
import { ref } from 'vue';
import {useQuizStore} from '../stores/quiz.js';
const props = defineProps({
    questions: Object,
    answer:'',
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
        <div class="bg-white font-bold m-2 py-2 px-4 rounded">
        <img  :src="`https://matematicon.ro/m/mem/${questions.calea}${questions.enunt}.png`" />
    </div>
       {{ questions.calea }}
        
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded" @click="saveAnswerAndNextQuestion(questions.v1)">
            <img :src="`https://matematicon.ro/m/mem/${questions.calea}${questions.v1}.png`" />
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded" @click="saveAnswerAndNextQuestion(questions.v2)">
            <img :src="`https://matematicon.ro/m/mem/${questions.calea}${questions.v2}.png`" />
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 py-2 px-4 rounded" @click="saveAnswerAndNextQuestion(questions.v3)">
            <img :src="`https://matematicon.ro/m/mem/${questions.calea}${questions.v3}.png`" /></button>

        <p>Question number: {{ quizStore.questionNumber }}</p>
        
    </div>

    
    
    <p>{{ quizStore.answers }}</p>

</template>
