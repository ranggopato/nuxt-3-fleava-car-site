<script setup lang="ts">
import type { UnsplashPhoto } from '@/types/car'
const route = useRoute()
const photoId = route.params.id as string
const UNSPLASH_ACCESS_KEY = 'Yb4m5RBTpGiu646a-j9UaUnACxE_MiB0-PLm7V5jCs8'

// Fetch foto dari Unsplash berdasarkan ID
const { data, pending, error } = useFetch<UnsplashPhoto>(
  `https://api.unsplash.com/photos/${photoId}?client_id=${UNSPLASH_ACCESS_KEY}`
)
</script>

<template>
  <section class="hero">
    <div v-if="pending" class="loading">Loading photo...</div>
    <div v-else-if="error" class="error">Gagal memuat foto 😢</div>

    <div v-else class="hero-content">
      <!-- Kiri: Teks -->
      <div class="hero-text">
        <h1>{{ data?.alt_description || 'Stunning Automotive Photography' }}</h1>

        <div class="rating">
          <div class="stars">⭐️⭐️⭐️⭐️⭐️</div>
          <span class="reviews">Our Collection</span>
        </div>

        <p class="desc">
          Experience the thrill of pure speed and power with our latest sports car. Engineered for precision, designed for style, and built to dominate every road. Feel the adrenaline as performance meets elegance in one unstoppable driving experience.
        </p>

        <ul class="features">
          <li>High-Quality Speed</li>
          <li>Elegant Design System</li>
        </ul>

        <div class="buttons">
          <button class="btn-yellow">BUY NOW</button>
          <button class="btn-outline" @click="$router.back()">BACK TO HOME</button>
        </div>
      </div>

      <!-- Kanan: Foto -->
      <div class="hero-image">
        <img :src="data?.urls?.regular" :alt="data?.alt_description" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  background-color: #0b0b0b;
  color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 6rem;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }

  .hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 900px) {
      flex-direction: column;
    }
  }

  .hero-text {
    flex: 1;

    h1 {
      font-size: 2.8rem;
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 1rem;

      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: #1a1a1a;
      padding: 0.4rem 0.8rem;
      border-radius: 6px;
      margin-bottom: 1rem;
      font-size: 0.9rem;

      .stars {
        color: #fbbf24;
      }

      .reviews {
        color: #bbb;
      }
    }

    .desc {
      color: #ccc;
      margin-bottom: 1.5rem;
      max-width: 480px;
      line-height: 1.6;
    }

    .features {
      list-style: none;
      padding: 0;
      margin: 1rem 0 2rem 0;

      li {
        margin-bottom: 0.5rem;
        color: #ddd;
      }
    }

    .buttons {
      display: flex;
      gap: 1rem;

      .btn-yellow {
        background: #fbbf24;
        color: #000;
        font-weight: 700;
        padding: 0.8rem 1.6rem;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background: #facc15;
        }
      }

      .btn-outline {
        background: transparent;
        color: #fff;
        border: 1px solid #666;
        padding: 0.8rem 1.6rem;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          border-color: #fff;
        }
      }
    }
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      max-width: 420px;
      height: 420px;
      object-fit: cover;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
      transition: transform 0.4s ease;

      &:hover {
        transform: scale(1.03);
      }
    }

    .loading,
    .error {
      color: #ccc;
      font-size: 1.2rem;
    }
  }
}
</style>
