<script setup>
//import { StarIcon } from '@heroicons/vue/24/solid'; // Correct import
import { ref, onMounted } from 'vue';
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import RedStar from './Stars/RedStar.vue';
import YellowStar from './Stars/YellowStar.vue';
import HalfYellowStar from './Stars/HalfYellowStar.vue';

// Add the star-half-stroke icon to the library
library.add(faStarHalfStroke);
library.add(faStar);
// Define props
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

// Use props directly
const id = ref(props.id);
const score = ref(props.score);
// 0 = red, 1 = halfyellow 2 = yellow
function getStarComponent(score) {
  console.log('this is the score',score);
  if (score < 1) {
    return [0,0,0,0,0];
  } else if (score < 2) {
    return [0,0,0,0,1];
  } else if (score < 3) {
    return [0,0,0,0,2];
  } else if (score < 4) {
    return [0,0,0,1,2];
  } else if (score < 5) {
    return [0,0,0,2,2];
  } else if (score < 6) {
    return [0,0,1,2,2];
  } else if (score < 7) {
    return [0,0,2,2,2];
  } else if (score < 8) {
    return [0,1,2,2,2];
  } else if (score < 9) {
    return [0,2,2,2,2];
  } else if (score < 10) {
    return [1,2,2,2,2];
  } else {
    return [2,2,2,2,2];
  }
};
const starsArray = ref(getStarComponent(score.value));

// Optional: Log props for debugging
onMounted(() => {
  console.log('StarsComponent mounted with id:', id.value, 'and score:', score.value);
});
</script>

<template>
  <div class="flex items-center justify-center">
    <template v-for="(starType, index) in starsArray" :key="index">
      <RedStar v-if="starType === 0" />
      <HalfYellowStar v-else-if="starType === 1" />
      <YellowStar v-else-if="starType === 2" />
    </template>
  </div>
</template>




