<template>
  <nav class="navbar fade-section">
    <h2 class="logo blink-me">CAR MEDIA</h2>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
  flex-direction: column;
  padding: 0rem 2rem;
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
}

.logo {
  font-size: 2rem;
  font-weight: 800;
  color: rgb(194, 1, 1);
  letter-spacing: 2px;
}

.blink-me {
  animation: blinker 2s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0.4;
  }
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;

  a {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    transition: all 1s;
    &:hover {
      color: rgb(255, 74, 29);
      transform: scale(1.2);
    }
  }
}


</style>
