import { defineStore } from 'pinia'
//import {  useRouter } from 'vue-router';

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    answers: {},
    enunt:{},
    correctanswer:{},
    questionNumber: 0,
    score: 0,
    calea:'',
  }),
  actions: {
    addAnswer(questionId, answer) {
      this.answers[questionId] = answer;
      this.calea = answer.calea;
      //this.correctAnswer = answer.r;
    },
    nextQuestion() {
      this.questionNumber++;
    },
    addEnunt(questionId, enunt) {
      this.enunt[questionId] = enunt;
    },
    addCorrectAnswer(questionId, r) {
      this.correctanswer[questionId] = r;
    },


    calculateScore() {
      let calculatedScore = 0; // Start with 0
      for (const questionId in this.answers) {
        const answer = this.answers[questionId];
        if (answer.startsWith('R')) { // Check if the answer starts with "R"
          calculatedScore++;
        }
      }
      this.score = calculatedScore; // Update the reactive score
      console.log('Recalculated Score:', this.score);
      return this.score;
    },

  }
})
