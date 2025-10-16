<template>
  <div class="card">
    <img :src="image" :alt="title" class="card-img" />

    <div class="card-overlay">
      <p class="card-title">{{ truncate(title) }}</p>
      <p class="card-text">{{ description }}</p>
      <NuxtLink :to="`/cars/${photoId}`">
        <button class="card-btn">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 448 512">
            <path
              fill="#ffffff"
              d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l176 0 0 176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
            />
          </svg>
        </button>
      </NuxtLink>
      
    </div>
  </div>
</template>

<script setup>
import { NuxtLink } from '#components'
defineProps({
  photoId:String,
  title: String,
  text: String,
  image: String,
  description:String
});
function truncate(text) {
  return text.length > 15 ? text.slice(0, 15) + '...' : text
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  height: 16rem;
  border-radius: 1rem;
  overflow: hidden;
  background: linear-gradient(to bottom, #f9a8d4, #ef4444);
  cursor: pointer;

  .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover .card-img {
    transform: scale(1.05);
  }

  .card-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(100%);
    transition: transform 0.5s ease;

    .card-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .card-text {
      font-size: 1rem;
      text-align: center;
      padding: 0 1rem;
      margin-bottom: 1rem;
    }

    .card-btn {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: none;
      transition: all 0.5s ease;

      &:hover {
        transform: scale(1.1);
        background-color: #ef4444;
      }

      svg {
        pointer-events: none;
      }
    }
  }

  &:hover .card-overlay {
    transform: translateY(0);
  }
}
</style>
