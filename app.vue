<template>
  <transition name="page" mode="out-in">
    
      <NuxtPage />
    
  </transition>
</template>


<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 360ms ease, transform 360ms ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
body {
  background: #000;
  overflow-x: hidden;
  transition: background-color 0.5s ease;
}
</style>