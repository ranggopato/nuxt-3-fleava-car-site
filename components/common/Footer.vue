<template>
  <footer class="footer">
    <div class="footer-left">
      <h1 class="logo">
        CAR<span class="highlight">MEDIA</span>
      </h1>
      <nav class="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>

    <div class="footer-right">
      <div class="socials">
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/145/145808.png" alt="Pinterest" /></a>
        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" /></a>
      </div>
      <p>&copy; 2022 Loopstudios. All Rights Reserved</p>
    </div>
  </footer>
</template>

<script setup>
// Komponen sederhana, tidak pakai script logic
</script>

<style lang="scss" scoped>
.footer {
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    padding: 2.5rem 5rem;
  }

  .footer-left {
    .logo {
      font-size: 1.8rem;
      font-weight: bold;

      .highlight {
        color: #ef4444;
      }
    }

    .nav {
      margin-top: 1rem;

      ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        @media (min-width: 768px) {
          flex-direction: row;
          gap: 1.5rem;
        }

        a {
          color: #d1d5db;
          text-decoration: none;
          transition: all 0.4s ease;

          &:hover {
            color: #fff;
            transform: scale(1.1);
          }
        }
      }
    }
  }

  .footer-right {
    margin-top: 2rem;

    @media (min-width: 768px) {
      margin-top: 0;
      text-align: right;
    }

    .socials {
      display: flex;
      justify-content: center;
      gap: 1rem;

      @media (min-width: 768px) {
        justify-content: flex-end;
      }

      img {
        width: 24px;
        transition: all 0.4s ease;
        opacity: 1;

        &:hover {
          transform: scale(1.1);
          opacity: 0.75;
        }
      }
    }

    p {
      color: #9ca3af;
      font-size: 0.9rem;
      margin-top: 1rem;
    }
  }
}
</style>
