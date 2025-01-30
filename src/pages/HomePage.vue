<!-- src/components/Home.vue -->
<template>
    <div class="home">
      <h1>Home Page</h1>
      <p>Welcome to the home page.dfedf</p>
    </div>
    <div><BeakerIcon class="h-6 w-6 text-green-500" />
      Bine ati venit pe aplicatia Mate-Mato pentru elevi si profesori!
    </div>
  </template>

  <script>
  import { BeakerIcon } from '@heroicons/vue/24/solid';

  export default {
    name: 'HomePage',
    components: {
      BeakerIcon
    }
  };
  </script>

<style scoped>
@media (min-width: 1024px) {
  .home {

    display: flex;
    align-items: center;
  }
}
</style>
