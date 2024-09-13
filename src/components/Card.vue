<template>
  <div class="index-blocks">
  <div class="index-item item-card"
    v-for="(item, index) in items"
    >
    <router-link :to="item.link">
      <div class="item-card-img">
        <img :src="item.img">
      </div>
      <span class="item-card-title">
        {{ item.name }}
      </span>
    </router-link>
  </div>
</div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  items: String
})

</script>
