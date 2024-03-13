<template>
  <v-container class="pt-15">
    <hill-section>
      <template #title>
        Facilities
      </template>
      <template #description>
        Those looking for some time away from their screens can take each other on a swing, sip cocktails in the relaxed
        zone immersed in the green overhearing the sound of birds or some background classical music.
      </template>
      <div class="grid-wrapper" ref="gallery">
        <template v-for="(element, i) in elements">
          <div
              data-aos="flip-left"
              data-aos-once="true"
              :style="[
              {
                'aspect-ratio': element.aspectRatio
              }
          ]"
              style="background-color: #2c3e50;width: 100%">
            <v-img v-if="element.img" cover :src="element.img">
              <v-row class="fill-height pl-4 pb-4" no-gutters align="end">
                <span class="text-h5 text-white" style="text-shadow: 1px 1px #333">{{ element.title }}</span>
              </v-row>
            </v-img>
          </div>
        </template>
      </div>
    </hill-section>
  </v-container>
</template>

<script setup>
import {ref} from 'vue'
import HillSection from "@/components/global/hill-section";

const elements = ref([
  {
    aspectRatio: 1.81,
    img: '/src/assets/media/images/facilities/terrace.jpg',
    title: 'Hill house'
  },
  {
    aspectRatio: 0.9,
    img: '/src/assets/media/images/facilities/jacuzi.jpg',
    title: 'Đakuzi'
  },
  {
    aspectRatio: 0.85,
    img: '/src/assets/media/images/facilities/sauna.jpg',
    title: 'Sauna'
  },
  {
    aspectRatio: 2.05,
    img: '/src/assets/media/images/facilities/fire.jpg',
    title: 'Hill house'
  },
  {
    aspectRatio: 1.2,
    img: '/src/assets/media/images/facilities/pool.jpg',
    title: 'Bazen'
  },
  {
    aspectRatio: 1.2,
    img: '/src/assets/media/images/facilities/living.jpg',
    title: 'Hill house'
  },
])
</script>

<style lang="scss">

/* Main CSS */
.grid-wrapper > div {
  display: inline-block;
  margin-bottom: 16px;
  position: relative;

  &:before {
    border-radius: 5px;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  img {
    width: 100%;
    border-radius: 5px;
  }
}

.grid-wrapper {
  columns: 3;
  column-gap: 16px;
  @media (max-width: 1200px) {
    columns: 3;
  }
  @media (max-width: 992px) {
    columns: auto;
    > div {
      width: 100%;
    }
  }
}
</style>