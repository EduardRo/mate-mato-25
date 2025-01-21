<script>
export default {
  name: "TeorieComponent",
  props: ["tests"],
  setup() {
    return {};
  },

};


</script>

<template>

  <div v-for="test in tests" :key="test.id" class="flex flex-col">
    <!--- <p>{{ questions.enunt }}</p> -->
    <div class="flex flex-wrap  ">
    <img
      :src="`https://matematicon.ro/m/mem/${test.calea}${test.enunt}.png`"
      class="flex-grow basis-1/2 bg-white px-32 py-10"
    />
    <!--- <p>{{ questions.calea }}</p> -->

    <!-- Option 1 -->
  </div>
    <div class="flex flex-wrap  ">

        <img
          :src="`https://matematicon.ro/m/mem/${test.calea}${test.raspuns}.png`"
          class="flex-grow basis-1/2 bg-blue-700 px-32 py-10"
        />

    </div>

    <hr class="border-t-8 border-red-500 py-5">
  </div>

</template>
