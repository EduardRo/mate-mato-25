

<template>
    <div class="greetings">
      <h1 class="green">Alege materia din meniul de mai jos:</h1>
      <h3 v-if="$route.params.codclasa">
        Materia Clasa: {{ $route.params.codclasa }}

      </h3>



      <div class="flex items-center justify-center min-h-screen">
  <div class="space-y-1 py-2 w-full">
    <div v-for="item in items" :key="item.id" class="flex justify-center w-full">
      <button
        @click="goToRoute('Test', item.codserie)"
        class="flex items-center justify-between flex-grow basis-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700"
      >
        <!-- Text on the left -->
        <span>{{ item.denumireserie }} - {{ item.codserie }}</span>
        <!-- Icons on the right -->
        <div class="flex space-x-1">
          <StarIcon class="h-5 w-5 " />
          <StarIcon class="h-5 w-5 d" />
          <StarIcon class="h-5 w-5 text-red-500" />
          <StarIcon class="h-5 w-5 text-red-500" />
          <StarIcon class="h-5 w-5"  style="fill: url(#half-gradient);" />
          <!-- Gradient definition -->

        </div>
      </button>
    </div>
  </div>
</div>

    </div>


    <svg class="visible">
  <defs>
    <linearGradient id="half-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="50%" style="stop-color: red; stop-opacity: 1;" />
      <stop offset="50%" style="stop-color: transparent; stop-opacity: 1;" />
    </linearGradient>
  </defs>
</svg>
  </template>



  <script>
  import axios from 'axios';
  import { StarIcon } from '@heroicons/vue/24/outline';
  export default {
    name: 'MateriiMenuPage',
    data(){
        return {
            items:[],

        };

    },
    components: {
      StarIcon
    },
    computed: {
    codclasa() {
      return this.$route.params.codclasa;
    }
    },
    mounted(){

        console.log(this.codclasa);
        axios.get(`http://127.0.0.1:8000/api/serii/${this.$route.params.codclasa}`)
        .then(response =>{this.items=response.data;})
        .catch(error=>{console.error('Error fetching items', error);});
        console.log(this.items)

    },
    methods:{
      goToRoute(routeName,codserie) {
      this.$router.push({ name: routeName, params: { codserie: codserie } });
      console.log(codserie);
      console.log(routeName);
    }
    }
  };



  </script>

  <style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  .button-class {
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  min-height: 2.5rem; /* Set a consistent height */
  width: 100%; /* Ensure full width */
}



  </style>
