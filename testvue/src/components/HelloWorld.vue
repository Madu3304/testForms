<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>


<template>
  <div class="greetings">
    <h1 class="black">{{ msg }}</h1>
    <h3>
      Faça a diferença, seja voluntário!</h3>
      <router-link to="/app-dois">
              <button type="button" class="btn btn-primary btn-lg">Cadastrar</button>
      </router-link>
  </div>
</template>

<style scoped>
h1 {
  font-size: 3.0rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 2.0rem;
  color: green;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
