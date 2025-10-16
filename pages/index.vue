<template>
  <main>
    <Navbar />

    <HeroSection />
    <AboutSection />
    <section class="card-section fade-section">
      <CarList />
    </section>
    <Footer/>
  </main>
</template>

<script setup lang="ts">

import Navbar from '~/components/common/Navbar.vue'
import Footer from '~/components/common/Footer.vue'
import HeroSection from '~/components/home/HeroSection.vue'
import AboutSection from '~/components/home/AboutSection.vue'
import CarList from '~/components/cars/CarList.vue'

onMounted(() => {
  const sections = document.querySelectorAll('.fade-section, .reveal-left')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('in-view')
      })
    },
    { threshold: 0.15 }
  )

  sections.forEach((sec) => observer.observe(sec))
})
</script>

<style scoped>
main {
  font-family: 'Inter', sans-serif;
  color: #fff;
  overflow-x: hidden;
}
</style>
