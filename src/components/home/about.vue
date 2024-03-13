<template>
  <div style="background-color: #f6f6f6" class="pt-15 pb-15">
    <div style="max-width: 1400px;margin: 0 auto;width: 100%" class="py-15">
      <v-row justify="end" style="position: relative" class="mb-15">
        <v-col cols="12" lg="6" class="pl-8 pt-15">
          <hill-section align="start">
            <template #title>
              {{ $t('layout.menu.about') }}
            </template>
            <template #description>
              <p class="mb-3 text-grey-darken-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad of veniam, quis nostrud exercitation ullamco.
              </p>
              <p class="text-grey-darken-2">
                Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
              </p>
              <v-btn
                  color="primary"
                  class="btn-reserve mt-8"
                  flat
                  width="300px"
                  height="50px">
                Interaktivna mapa
              </v-btn>
            </template>
          </hill-section>
        </v-col>
        <v-col cols="12" lg="6" style="position: relative;aspect-ratio: 1.4" data-aos="fade-left" data-aos-once="true">
          <div style="position: absolute;top: 0;right: 0%;width: 70%;">
            <v-img style="box-shadow: 0 15px 46px rgba(0, 0, 0, .1)" src="@/assets/media/images/facilities/fire.jpg"
                   aspect-ratio="1.1" cover/>
          </div>
          <div style="position: absolute;bottom: 0;left: 3.8%;width: 50%;">
            <v-img style="box-shadow: 0 15px 46px rgba(0, 0, 0, .1)" src="@/assets/media/images/facilities/terrace.jpg"
                   aspect-ratio="0.9" cover/>
          </div>
        </v-col>
        <v-col cols="12" class="px-0" style="position: absolute;bottom: -120px;left:0" data-aos="fade-bottom"
               data-aos-once="true">
          <v-row class="pl-7">
            <template v-for="item in items">
              <v-col cols="6" lg="3">
                <div class="about-card px-8 py-6">
                  <v-row class="fill-height" align="center" no-gutters>
                    <v-icon :icon="item.icon" size="60px" color="grey-darken-2"></v-icon>
                    <div class="ml-8">
                      <span class="text-primary text-h4 font-weight-bold" v-html="item.value">

                      </span><br/>
                      <span class="font-weight-bold text-h6">{{ item.title }}</span>
                    </div>
                  </v-row>
                </div>
              </v-col>
            </template>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {mdiVectorSquareClose, mdiBathtubOutline, mdiBedDoubleOutline} from '@mdi/js';
import HillSection from "@/components/global/hill-section";

const items = computed(() => {
  return [
    {
      value: '320&#13217;',
      title: 'Indoor',
      icon: mdiVectorSquareClose
    },
    {
      value: '4',
      title: 'Bedrooms',
      icon: mdiBedDoubleOutline
    },
    {
      value: '2',
      title: 'Bathrooms',
      icon: mdiBathtubOutline
    },
    {
      value: '2190&#13217;',
      title: 'Outdoor',
      icon: mdiVectorSquareClose
    },
  ]
})
</script>

<style lang="scss">
.about-card {
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #fff;
  aspect-ratio: 2.4;
  box-shadow: 0 15px 46px rgba(0, 0, 0, .1);
}

.about-card:after {
  content: "";
  width: 150px;
  height: 50px;
  position: absolute;
  right: -38px;
  bottom: -39px;
  background: url("/src/assets/media/images/patterns/dots.png") center center no-repeat;
  background-repeat: repeat;
  transform: rotate(-42deg);
}
</style>