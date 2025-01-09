<!-- src/components/Home.vue -->
<template>
    <div class="home">
      <h1>Home Page</h1>
      <p>Welcome to the home page.dfedf</p>
    </div>
    <div>Pula<BeakerIcon class="h-6 w-6 text-green-500" />

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
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
