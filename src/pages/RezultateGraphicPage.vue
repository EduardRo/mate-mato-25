<template>
  <div class="greetings">
    <h1 class="green">Evoluția Punctajului</h1>
    <div v-if="chartData.labels.length">
      <!-- Pass the prop as `data` instead of `chart-data` -->
      <LineChart :data="chartData" :options="chartOptions" />
    </div>

    <div v-else>
      Încărcare date...
    </div>
    <div class="text-2xl text-yellow-500">Denumire Serie: {{ denumireserie }}</div>
    <div class="text-2xl text-yellow-500">Numarul de teste: {{ items.length }}</div>
    <div class="text-2xl text-yellow-500">Media obtinuta: {{ calculateScore(items) }}</div>
  </div>
</template>

<script>
import axios from 'axios';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

export default {
  name: 'RezultateGraphicPage',
  components: {
    LineChart: Line
  },
  data() {
    return {
      denumireserie: '',
      items: [],
      chartData: {
        labels: [],
        datasets: [{
          label: 'Punctaj',
          data: [],
          borderColor: 'green',
          color: 'blue',
          backgroundColor: 'rgba(76, 175, 80, 0.2)',

          tension: 0.2
        }]
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Punctaj'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Data'
            }
          }
        }
      }
    };
  },
  methods: {
    calculateScore(items) {
      const totalPunctaj = items.reduce((sum, item) => sum + item.punctaj, 0);

// Calculate the average
    const averagePunctaj = totalPunctaj / items.length;
    return averagePunctaj;

    }
  },
  mounted() {
    axios.get('http://127.0.0.1:8000/api/rezultate/1/M10AL02')
      .then(response => {
        this.items = response.data;
        console.log(this.items);
        this.denumireserie = this.items[0].denumireserie

        // Format labels from created_at
        this.chartData.labels = this.items.map(item =>
          new Date(item.created_at).toLocaleDateString('ro-RO')
        );

        // Set chart data
        this.chartData.datasets[0].data = this.items.map(item => item.punctaj);
      })
      .catch(error => {
        console.error('Eroare la încărcarea datelor:', error);
      });
  }
};
</script>
