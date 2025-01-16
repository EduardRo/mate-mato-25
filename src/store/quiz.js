import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    answers: {},
    questionNumber: 0,
    score: 0
  }),
  actions: {
    addAnswer(questionId, answer) {
      this.answers[questionId] = answer
    },
    nextQuestion() {
      this.questionNumber++;
    },

    calculateScore() {
      this.score++
      for (const questionId in this.answers) {

        if (this.answers[questionId] === 'correct') {
          this.score++
        }
      }
      return this.score
    }
  }
})
