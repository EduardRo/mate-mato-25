import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    answers: {},
    questionNumber: 0
  }),
  actions: {
    addAnswer(questionId, answer) {
      this.answers[questionId] = answer
    },
    nextQuestion() {
      this.questionNumber++;
    },
    
    calculateScore() {
      let score = 0
      for (const questionId in this.answers) {
        if (this.answers[questionId] === 'correct') {
          score++
        }
      }
      return score
    }
  }
})