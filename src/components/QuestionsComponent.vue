<template>
    <div>
      <h2>{{ question.text }}</h2>
      <ul>
        <li v-for="(option, index) in question.options" :key="index">
          <input type="radio" :id="`option-${index}`" :value="option" @input="$emit('answer', question.id, option)">
          <label :for="`option-${index}`">{{ option }}</label>
        </li>
      </ul>
    </div>
</template>
  
  <script>
  export default {
    props: {
      question: {
        type: Object,
        required: true
      }
    }
  }
  </script>