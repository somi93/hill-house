<template>
  <div style="width: 100%;height: 600px;position: relative">
    <v-img cover src="@/assets/media/images/facilities/testimonial.jpg"></v-img>
    <div class="testimonails-overlay">
      <v-row justify="center" align="center" no-gutters class="fill-height text-white flex-column">
        <v-col cols="12" lg="4" class="text-center">
          <p class="font-weight-medium text-center mb-4" style="text-shadow: 1px 1px #000">VOICE FROM OUR GUESTS</p>
          <p class="text-h5 text-center mb-4" style="text-shadow: 1px 1px #000">
            “Everything here was great: the staff, the room layout, the property amenities with indoor
            pool, and the quality of the food. But the high point is the view from the mountains.”
          </p>
          <p class="text-subtitle-1 font-weight-bold text-center mb-4" style="text-shadow: 1px 1px #000">ANNA WILLIAMS – TRIPADVISOR</p>
          <v-rating
              readonly
              v-model="rating"
              density="compact"
              active-color="primary"
          ></v-rating>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const rating = ref(5);
</script>

<style>
.testimonails-overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .45);
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
}
</style>