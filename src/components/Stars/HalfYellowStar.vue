<script setup>
//import { StarIcon } from '@heroicons/vue/24/solid'; // Correct import
//import { ref, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons'; // Regular (bordered) star

// Add the star-half-stroke icon to the library
library.add(faStarHalfStroke);
library.add(faStar);
library.add( faRegularStar);
// Define props


// Use props directly

</script>

<template>

<div class="star-container">
      <!-- Full star (red) -->
      <font-awesome-icon :icon="['fas', 'star']" class="full-star" />
      <!-- Half star (yellow) -->
      <font-awesome-icon :icon="['fas', 'star-half-stroke']" class="half-star" />
      <font-awesome-icon :icon="['far', 'star']" class="border-star" />


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
  border-color:1px, red;
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
.border-star {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: red; /* Red color for the full star */
  z-index: 3; /* Place the full star below the half star */
}

</style>
