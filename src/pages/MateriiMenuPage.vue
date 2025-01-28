<template>
  <div class="greetings">
    <p v-if="$route.params.codclasa" class="green">
      Materia Clasei a {{ $route.params.codclasa }}-a
    </p>
    <p class="green">Alege materia din meniul de mai jos:</p>

    <div class="flex items-center justify-center">
      <div class="space-y-0 py-2 w-full">
        <div v-for="item in items" :key="item.id" class="flex justify-center w-full">
          <button @click="goToRoute('Test', item.codserie)" class="shared-button">
            <!-- Text on the left -->
            <span>{{ item.denumireserie }} - {{ item.codserie }}</span>
            <!-- Icons on the right -->
            <div class="flex space-x-1">
              <!-- Dynamically pass score -->
              <StarsComponent v-if="scores[item.codserie] !== undefined" :id="item.id"
                :score="getSeriesScore(item.codserie)" />
              <span v-else>Loading...</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import StarsComponent from '@/components/StarsComponent.vue';
import { useAuthStore } from '@/store/auth';

export default {
  name: 'TeorieMateriiMenuPage',
  data() {
    return {
      items: [], // Fetched items
      scores: {}, // Map of codserie to scores
    };
  },
  components: {
    StarsComponent,
  },
  computed: {
    codclasa() {
      return this.$route.params.codclasa;
    },
  },
  mounted() {
    const authStore = useAuthStore();
    authStore.initialize();
    this.user = authStore.user;

    axios
      .get(`http://127.0.0.1:8000/api/serii/${this.$route.params.codclasa}`)
      .then((response) => {
        this.items = response.data; // Store fetched items
        // Calculate scores for each item
        this.items.forEach((item) => {
          this.calculateScore(item.codserie);
        });
      })
      .catch((error) => {
        console.error('Error fetching items', error);
      });
  },
  methods: {
    goToRoute(routeName, codserie) {
      this.$router.push({ name: routeName, params: { codserie: codserie } });
    },
    async calculateScore(codserie) {
      if (!this.user) {
        console.warn('User is not defined. Cannot calculate score.');
        return;
      }

      try {
        const response = await axios.post(
          'http://127.0.0.1:8000/api/calculate-score',
          { codserie, user: this.user }, // Send codserie and user
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );

        // Update scores object reactively
        this.scores[codserie] = response.data.data.average_score;
      } catch (error) {
        console.error('Error calculating score:', error.response?.data || error);
      }
    },
    getSeriesScore(codserie) {
      // Return the score for the given codserie, defaulting to 0
      //return this.scores[codserie] || 0;
      return this.scores[codserie] || 0;
    },
  },
};
</script>


<style scoped>
.greetings {
  width: 100%;
  /* Full width */
  max-width: 1200px;
  /* Optional: limit the width for better readability */
  margin: 0 auto;
  /* Center align for larger screens */
  padding: 0rem;
  /* Consistent padding */
  font-size: larger;
  background: blueviolet;
  color: white;
  font-weight: 100;
}

.green {
  width: 100%;
  /* Full width */
  max-width: 1200px;
  /* Optional: limit the width for better readability */
  margin: 0 auto;
  /* Center align for larger screens */
  padding: 1rem;
  /* Consistent padding */
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
  padding: 1.5rem;
  /* Consistent padding */
  font-size: 1.1rem;
  /* Consistent font size */
  border: 2px solid #d413c4;
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
