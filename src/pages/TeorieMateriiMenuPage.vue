<template>
  <div class="greetings">
    <p v-if="$route.params.codclasa" class="green">
      Materia Clasei a {{ $route.params.codclasa }}-a

    </p>
    <p class="green">TEORIE - Alege materia din meniul de mai jos:</p>




    <div class="flex items-center justify-center">
      <div class="space-y-0 py-2 w-full">
        <div v-for="item in items" :key="item.id" class="flex justify-center w-full">
          <button @click="goToRoute('Teorie', item.codserie, item.codclasa )"

            class="shared-button">
            <!-- Text on the left -->
            <span>{{ item.denumireserie }} - {{ item.codserie }}</span>
            <!-- Icons on the right -->
            <div class="flex space-x-1">

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
//import { StarIcon } from '@heroicons/vue/24/outline';
export default {
  name: 'MateriiMenuPage',
  data() {
    return {
      items: [],

    };

  },
  components: {
    //StarIcon
  },
  computed: {
    codclasa() {
      return this.$route.params.codclasa;
    }
  },
  mounted() {

    console.log(this.codclasa);
    axios.get(`http://127.0.0.1:8000/api/teorie/${this.$route.params.codclasa}`)
      .then(response => { this.items = response.data; })
      .catch(error => { console.error('Error fetching items', error); });
    console.log(this.items)

  },
  methods: {
    goToRoute(routeName, codserie, codclasa) {
      this.$router.push({ name: routeName, params: { codserie: codserie, codclasa: codclasa } });
      console.log(codserie);
      console.log(routeName);
      console.log('those are the items',this.items)
    }
  }
};



</script>

<style scoped>
.greetings {
  width: 100%; /* Full width */
  max-width: 1200px; /* Optional: limit the width for better readability */
  margin: 0 auto; /* Center align for larger screens */
  padding: 0rem; /* Consistent padding */
  font-size: larger;
  background: blueviolet;
  color: white;
  font-weight: 100;
}
.green {
  width: 100%; /* Full width */
  max-width: 1200px; /* Optional: limit the width for better readability */
  margin: 0 auto; /* Center align for larger screens */
  padding: 1rem; /* Consistent padding */
  font-size: larger;
  background: blueviolet;
  color: white;
  font-weight: 100;
}

.shared-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  background-color: #3498db;
  color: white;
  font-weight: 100;
  padding: 1.5rem; /* Consistent padding */
  font-size: 1.1rem; /* Consistent font size */
  border: 1px solid #ffffff;
  border-radius: none;
  transition: background-color 0.3s ease, color 0.3s ease;

  /* Ensure consistent size */
  min-height: 5rem;
  width: 100%;
}

.shared-button:hover {
  background-color: #2980b9;
  color: #ecf0f1;
}
</style>
