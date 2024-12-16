<template>
  <NaveBar />
  <router-view />
</template>

<script>
import NaveBar from './components/NaveBar.vue';

export default {
  components: {
    NaveBar,
  },
};
</script>

<style>

</style>
