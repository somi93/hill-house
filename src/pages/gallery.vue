<template>
  <div style="margin-top: 132px">
    <gallery :photos="photos"></gallery>
  </div>
</template>

<script setup>
import Gallery from '@/components/gallery/gallery'
import {ref} from 'vue'

const photos = ref(
    [
      {
        "id": "DZQ58MV6VVoMzXy2",
        "url": "/src/assets/media/images/facilities/sauna.jpg",
        "description": "",
        "params": {"dimensions": {"width": 2738, "height": 1825}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "url": "/src/assets/media/images/facilities/fire.jpg",
        "description": "",
        "params": {"dimensions": {"width": 2738, "height": 1825}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "url": "/src/assets/media/images/facilities/jacuzi.jpg",
        "description": "",
        "params": {"dimensions": {"width": 2738, "height": 1825}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "url": "/src/assets/media/images/facilities/jacuzi2.jpg",
        "description": "",
        "params": {"dimensions": {"width": 2738, "height": 1825}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "url": "/src/assets/media/images/facilities/living.jpg",
        "description": "",
        "params": {"dimensions": {"width": 2738, "height": 1825}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "url": "/src/assets/media/images/facilities/living2.jpg",
        "description": "",
        "params": {"dimensions": {"width": 2738, "height": 1825}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "url": "/src/assets/media/images/facilities/living3.jpg",
        "description": "",
        "params": {"dimensions": {"width": 2738, "height": 1825}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "url": "/src/assets/media/images/facilities/pool.jpg",
        "description": "",
        "params": {"dimensions": {"width": 2738, "height": 1825}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "url": "/src/assets/media/images/facilities/pool2.jpg",
        "description": "",
        "params": {"dimensions": {"width": 2738, "height": 1825}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "url": "/src/assets/media/images/facilities/telescope.jpg",
        "description": "",
        "params": {"dimensions": {"width": 2738, "height": 1825}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "url": "/src/assets/media/images/facilities/terrace.jpg",
        "description": "",
        "params": {"dimensions": {"width": 2738, "height": 1825}},
      },
      {
        "id": "DZQ58MV6VVoMzXy2",
        "url": "/src/assets/media/images/facilities/testimonial.jpg",
        "description": "",
        "params": {"dimensions": {"width": 2738, "height": 1825}},
      }
    ]
);

</script>
