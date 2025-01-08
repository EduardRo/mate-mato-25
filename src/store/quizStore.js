import { defineStore } from 'pinia';
import axios from 'axios';

export const useQuizStore = defineStore('quizStore', {
  state: () => ({
    questions: [],
    currentIndex: 0,
    score: 0,
  }),
  actions: {
    async fetchQuestions() {
      const response = await axios.get('http://127.0.0.1:8000/api/test/M09AL06');
      this.questions = response.data;
    },
    submitScore(userId) {
      axios.post('http://127.0.0.1:8000/api/save/results', {
        user_id: userId,
        score: this.score,
      });
    },
    nextQuestion(isCorrect) {
      if (isCorrect) this.score += 10;
      this.currentIndex += 1;
    },
  },
});
