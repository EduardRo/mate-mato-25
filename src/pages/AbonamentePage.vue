<template>

  <div class="abonamente-container">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div v-for="abonament in abonamente" :key="abonament.id" class="abonament-card">
      <h2 class="bg-violet-500 text-white py-2 px-4  text-size-700 font-sans">{{ abonament.denumireabonament }}</h2>

      <div class="price-section">
        <span class="label">Preț cu TVA:</span>
        <span class="value">{{ formatPrice(abonament.pret) }} RON</span>
      </div>

      <div class="price-section">
        <span class="label">Preț fără TVA:</span>
        <span class="value">{{ formatPrice(abonament.pretfaratva) }} RON</span>
      </div>

      <button @click="handlePurchase(abonament.codabonament)" class="buy-button">
        Cumpără acum
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const abonamente = ref([])
const loading = ref(true)
const error = ref(null)

const formatPrice = (price) => {
  return parseFloat(price).toFixed(2)
}

const handlePurchase = (codabonament) => {
  alert(`Inițiem cumpărarea pentru: ${codabonament}`)
}

onMounted(async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/abonamente')
    if (!response.ok) throw new Error('Failed to fetch data')
    abonamente.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.abonamente-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

}

.abonament-card {
  background: #fff;
  border-radius: none;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.abonament-card:hover {
  transform: translateY(-5px);
}

.price-section {
  font-size: 1.2rem;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
}

.label {
  color: #666;
  font-weight: 500;
}

.value {
  color: #2d3748;
  font-weight: bold;
}

.buy-button {
  width: 100%;
  padding: 0.8rem;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: none;
  cursor: pointer;
  transition: background 0.3s ease;
}

.buy-button:hover {
  background: #357abd;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
}
</style>
