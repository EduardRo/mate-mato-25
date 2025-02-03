<template>
  <div class="greetings">
    <p class="green">REZULTATE - Alege clasa din meniul de mai jos:</p>

    <div class="flex items-center justify-center ">
      <div class=" py-2 w-full">
        <div v-for="item in items" :key="item.id" class="flex justify-center w-full">
          <button
            @click="goToRoute('RezultateMateriiMenu', item.codclasa)"
            class="shared-button"
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
  name: 'RezultateClaseMenuPage',
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
        console.log(this.items);
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
<style scoped>
.greetings {
  width: 100%; /* Full width */
  max-width: 1200px; /* Optional: limit the width for better readability */
  margin: 0 auto; /* Center align for larger screens */
  padding: 0rem; /* Consistent padding */
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
