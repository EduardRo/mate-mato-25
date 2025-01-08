<template>
  <div>
    <!-- Question Image -->
    <img :src="questionPath(question.enunt)" alt="Question" />

    <!-- Answer Options -->
    <div class="answers">
      <img
        v-for="(answer, index) in answers"
        :key="index"
        :src="questionPath(answer)"
        alt="Answer Option"
        class="answer"
        @click="checkAnswer(answer)"
      />
    </div>
  </div>
</template>

<script>
import { useQuizStore } from '../store/quizStore';

export default {
  props: ['question'],
  setup(props) {
    const store = useQuizStore();

    // Generate the full path for an image
    const questionPath = (imageKey) => {
      return `https://matematicon.ro/m/mem/${props.question.calea}${imageKey}.png`;
    };

    // Collect the possible answers (v1, v2, v3)
    const answers = [props.question.v1, props.question.v2, props.question.v3];

    // Check if the selected answer is correct
    const checkAnswer = (selected) => {
      const isCorrect = selected === props.question.r;
      store.nextQuestion(isCorrect);
    };

    return { questionPath, answers, checkAnswer };
  },
};
</script>

<style>
.answers {
  display: inline-grid;
  justify-content: space-around;
  margin-top: 20px;
}

.answer {
  cursor: pointer;
  width: 600px;
  height: auto;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: border 0.3s ease;
}

.answer:hover {
  border: 2px solid #3498db;
}
</style>
