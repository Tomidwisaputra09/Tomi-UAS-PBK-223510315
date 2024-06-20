<template>
  <div class="weather">
    <q-card class="my-card">
      <q-card-section class="q-gutter-md">
        <div class="input-container q-pa-md">
          <q-input 
            filled 
            v-model="city" 
            label="Masukkan Nama Kota di Indonesia" 
            dense
            outlined
            clearable
            @keyup.enter="fetchWeather"
            class="large-input"
          />
        </div>
        <div class="button-container">
          <q-btn 
            class="dark-blue-btn"
            label="Cari" 
            @click="fetchWeather"
          />
        </div>
      </q-card-section>
      <q-card-section v-if="weatherData">
        <div class="q-pa-md">
          <h2 class="location-title">Lokasi: {{ weatherData.name }}</h2>
          <p class="temperature">Temperatur: {{ weatherData.main.temp }}°C</p>
          <p>Deskripsi: {{ weatherData.weather[0].description }}</p>
        </div>
      </q-card-section>
      <q-card-section v-if="loading">
        <div class="q-pa-md">
          <q-spinner color="primary" />
          <p>Loading data...</p>
        </div>
      </q-card-section>
      <q-card-section v-if="error">
        <div class="q-pa-md">
          <q-icon name="warning" color="negative" />
          <p>Error: {{ error }}</p>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      city: '',
      weatherData: null,
      loading: false,
      error: null,
    }
  },
  methods: {
    async fetchWeather() {
      if (this.city === '') return
      this.loading = true
      this.error = null
      this.weatherData = null
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city},ID&appid=f17a18c62fb1ddaa1238f6cee106988a&units=metric`
        )
        this.weatherData = response.data
      } catch (error) {
        console.error(error)
        this.error = 'Kota tidak ditemukan atau terjadi kesalahan pada server.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
.weather {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  padding-top: 50px; /* Added padding to the top for more space */
}

.my-card {
  margin-top: 20px;
}

.q-input input {
  text-align: center;
}

.input-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.large-input {
  width: 100%;
  max-width: 350px; /* Increase the size of the input field */
}

.temperature {
  color: #FF4500;
  font-size: 1.5rem;
}

.button-container {
  display: flex;
  justify-content: center;
  padding: 0 1rem;
}

.dark-blue-btn {
  width: 100%;
  max-width: 150px;
  background-color: #2610cd; /* Dark blue color */
  color: white;
}

.location-title {
  font-size: 1.9rem; /* Adjust the font size for "Lokasi" and city name */
  margin: 0;
}
</style>
