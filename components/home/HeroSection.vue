<template>
  <section class="hero fade-section">
    <div class="hero-content reveal-left">
      <h1>BRINGING<br />THE UNSEEN<br />ON SCREEN</h1>
      <p>
        We’re a global media company that specializes in emerging markets. We find powerful
        stories from unique creators and take them from development & financing to production
        & distribution.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1508974239320-0a029497e820?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')
    center/cover no-repeat;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 8rem 3rem;
  text-align: left;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, #000 90%);
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 700px;
  }

  h1 {
    font-size: 4rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
    max-width: 480px;
    color: #ccc;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
}
</style>
