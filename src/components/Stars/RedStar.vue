<script setup>
//import { StarIcon } from '@heroicons/vue/24/solid'; // Correct import
//import { ref, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Add the star-half-stroke icon to the library
library.add(faStarHalfStroke);
library.add(faStar);
// Define props


// Use props directly

</script>

<template>

<div class="star-container">
      <!-- Full star (red) -->
      <font-awesome-icon :icon="['fas', 'star']" class="full-star" />
      <!-- Half star (yellow) -->


</div>
</template>


<style scoped>
.star-container {
  position: relative;
  display: inline-block;
  width: 2rem; /* Adjust size as needed */
  height: 2rem;
}

.full-star {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: red; /* Red color for the full star */
  z-index: 1; /* Place the full star below the half star */
}
.full-star-yellow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: yellow; /* Red color for the full star */
  z-index: 1; /* Place the full star below the half star */
}

.half-star {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: yellow; /* Yellow color for the half star */
  z-index: 2; /* Place the half star above the full star */
}
</style>
