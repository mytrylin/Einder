<template>
  <div class="header header-bar">
    <h1>
      <!-- <a href="./index.html">EinDer</a> -->
      <router-link to="/">EinDer</router-link>
    </h1>
    <div class="self-img">
      <img src="../assets/imges/1280.jpeg">
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
