<template>
  <div class="banner">
    <span class="banner-text">{{ testP }}</span>
  </div>
  <Card :items="randomList"></Card>
  <div class="ad">
    <span class="ad-text">{{ testAD }}</span>
  </div>
  <Card :items="indexItems"></Card>
</template>
<script setup>
import { ref, onMounted, nextTick, computed } from 'vue'
import Card from '../components/Card.vue'
import { indexItems } from '../options/index.js'

const testP = ref('')
const testAD = ref('')
const randomList = ref([])

const indexItemsList = () => {
  let itemsCopy = [...indexItems]
  let firstItem = itemsCopy.shift()
  let shuffledItems = itemsCopy.sort(() => Math.random() - 0.5)
  shuffledItems.unshift(firstItem)
  console.log('shuffledItems', shuffledItems)
  // return shuffledItems
}

randomList.value = indexItemsList()

onMounted(() => {
  console.log('TT')
})

</script>
