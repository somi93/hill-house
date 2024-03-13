<template>
  <div class="responsive-video-box" id="videoBox">
    <div class="responsive-video-overlay">
      <v-row class="fill-height flex-column" justify="center" align="center">
        <span class="text-primary text-body-2 font-weight-medium" v-html="$t('home.slider.welcome')"></span>
        <h1
            v-html="$t('home.slider.title')"
            class="text-white text-h2 font-weight-medium text-center my-6"
            style="line-height: 1.4">
        </h1>
        <v-btn color="primary" class="btn-reserve" flat width="300px" height="50px">
          {{ $t('home.slider.reserve') }}
        </v-btn>
      </v-row>
    </div>
    <video class="responsive-video" autoplay muted ref="video" loop>
      <source src="@/assets/media/videos/default.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';

const video = ref(null);

</script>

<style>
.responsive-video-box {
  position: relative;
  height: 100vh;
  width: 100vw;
  z-index: 6;
}

.responsive-video-overlay {
  background-color: rgba(0, 0, 0, .55);
  z-index: 2;
}

.responsive-video, .responsive-video-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0;
}

.responsive-video {
  object-fit: cover;
  z-index: 1;
}

</style>