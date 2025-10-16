<template>
    <div class="card-page">
        <h1 class="title">Your Dream Cars</h1>

        <div v-if="error" class="status">Failed to load car images 😢</div>
        <div v-else-if="pending" class="status">Loading car images...</div>

        <div v-else class="card-grid">
            <ItemCard v-for="(car, index) in cars" :key="index" :title="car.title" :text="car.text" :image="car.image"
                :description="car.description" :photoId="car.id"/>
        </div>

    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ItemCard from './CarItem.vue'
import type { UnsplashPhoto, CarCard } from '@/types/car'


// API KEY Note: Harusnya jangan disini, sorry
const UNSPLASH_ACCESS_KEY = 'Yb4m5RBTpGiu646a-j9UaUnACxE_MiB0-PLm7V5jCs8'


const { data, pending, error, refresh } = useFetch<{ results: UnsplashPhoto[] }>(
    `https://api.unsplash.com/search/photos?query=sports+car&per_page=6&client_id=${UNSPLASH_ACCESS_KEY}`
)

const cars = computed<CarCard[]>(() => {
    const results = data.value?.results ?? []
    return results.map((photo) => ({
        id: photo.id,
        title: photo.alt_description || 'Sports Car',
        description: photo.description || 'Experience the thrill of pure speed and power with our latest sports car. Engineered for precision, designed for style, and built to dominate every road. Feel the adrenaline as performance meets elegance in one unstoppable driving experience.',
        text: `Photo by ${photo.user.name}`,
        image: photo.urls.regular,
    }))
})
</script>

<style lang="scss" scoped>
.card-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #000000;

    .title {
        margin: 2rem 5%;
        font-size: 2.5rem;
        font-weight: bold;
        color: #fff;
        text-align: center;
    }

    .card-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
        margin: 2rem 5%;

        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: 1024px) {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .status {
        color: #ccc;
        text-align: center;
        font-size: 1.2rem;
        margin-top: 2rem;
    }

    .refresh-container {
        text-align: center;
        margin: 2rem 0;

        .refresh-btn {
            background: #1976d2;
            color: #fff;
            padding: 0.6rem 1.4rem;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 1rem;
            transition: 0.3s;

            &:hover {
                background: #1565c0;
            }
        }
    }
}
</style>
