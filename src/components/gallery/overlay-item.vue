<template>
  <div
    ref="item">
    <v-row
      justify="center"
      align="center"
      v-touch="{
      left: () => $emit('previousImage'),
      right: () => $emit('nextImage')
    }"
      v-if="image"
      class="pt-8"
      style="height: 85vh">
      <img style="max-width: 100%;max-height: 100%;border: 2px solid #fff" :src="image.url"/>
      <p className="mt-2">{{ image.description }}</p>
    </v-row>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue';

const props = defineProps({
  image: {
    type: Object,
    required: true
  },
  currentIndex: {
    type: Number,
    required: true
  }
})

const item = ref(null);
const elWidth = ref(0);
const elHeight = ref(0);

onMounted(() => {
  console.log(item.value)
  const bounding = item.value.getBoundingClientRect();
  elWidth.value = bounding.width;
  elHeight.value = bounding.height;
})


const dimensions = computed(() => {
  return props.image.params.dimensions;
})
const height = computed(() => {
  return dimensions.value.height;
});
const width = computed(() => {
  return dimensions.value.width;
})
const maxWidth = computed(() => {
  return Math.floor(Math.min(elWidth.value, width.value))
})
const maxHeight = computed(() => {
  return Math.floor(Math.min(elHeight.value, height.value))
})
const aspectRatio = computed(() => {
  return height.value / width.value;
})
const aspectRatio2 = computed(() => {
  return 0.62;
})
</script>
