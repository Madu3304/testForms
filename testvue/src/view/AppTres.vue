<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- Carrossel (carousel) -->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../assets/bmp.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/images.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/banco.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
    <div class="wrapper">
      <HelloWorld msg="Seja um voluntário" />
    </div>

  </header>
</template>

<style scoped>
/* Logo */
/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* Wrapper */
.wrapper {
  font-family: Arial, sans-serif;
  color: blue;
  text-align: center;
  border-radius: 10px;
  margin-top: 1rem;
  font-weight: 0;
}

/* Carousel styling */
.carousel-inner img {
  width: 100%;
  height: auto;
}

/* Ensuring the carousel controls are properly displayed */
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: black;
}

/* Media query for larger screens */
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
