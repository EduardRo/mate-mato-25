<template>
  <div class="greetings">
    <h1 class="green">Alege clasa din meniul de mai jos:</h1>


    <div class="flex items-center justify-center min-h-screen">
      <div class="space-y-1 w-full">
        <div v-for="item in items" :key="item.id" class="flex justify-center w-full">
          <button
            @click="goToRoute('MateriiMenu', item.codclasa)"
            class="flex-grow basis-1/2 bg-blue-500 hover:bg-blue-700 text-white font-thin py-2 px-4 h-20 border border-blue-700 rounded-none"
          >
            {{ item.denumireclasa }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ClaseMenuPage',
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    axios
      .get('http://127.0.0.1:8000/api/clase')
      .then((response) => {
        this.items = response.data;
      })
      .catch((error) => {
        console.error('Error fetching items', error);
      });
    console.log(this.items);
  },
  methods: {
    goToRoute(routeName, codclasa) {
      this.$router.push({ name: routeName, params: { codclasa: codclasa } });
      console.log(codclasa);
      console.log(routeName);
    },
  },
};
</script>

