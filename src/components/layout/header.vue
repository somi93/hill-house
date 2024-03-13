<template>
  <v-app-bar
      v-scroll="onScroll"
      :color="color"
      flat
      theme="dark"
      height="132px"
      style="height: 132px"
      density="prominent">
    <v-row class="flex-column text-white" no-gutters>
      <div style="max-width: 1400px;width: 100%;margin: 0 auto;height: 132px;">
        <v-row no-gutters align="center" class="fill-height" justify="space-between">
          <v-col col="5" class="fill-height pt-8">
            <v-row no-gutters class="fill-height" align="space-between">
              <v-col cols="12" class="pl-4">
                <span class="text-caption text-uppercase">1250 WEST 6TH AVE, NEW YORK, NY 10036, Serbia</span><br/>
              </v-col>
              <v-col cols="12">
                <v-row class="fill-height" align="end" no-gutters>
                  <v-btn
                      v-for="(item, i) in menuLeft"
                      :key="i"
                      :to="item.to"
                      variant="text">
                    {{ item.title }}
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <img src="https://cozystay.loftocean.com/apartment/wp-content/uploads/sites/6/2023/03/logo-3-300x60.png"
               style="height: 70px"/>
          <v-col col="5" class="fill-height pt-8">
            <v-row no-gutters class="fill-height" align="space-between">
              <v-col cols="12" align="end">
                <v-btn
                    size="small"
                    variant="text"
                    :color="locale === 'en' ? 'white' : 'primary'"
                    @click="changeLocale('sr')">
                  Srpski
                </v-btn>
                <v-btn
                    size="small"
                    variant="text"
                    :color="locale === 'sr' ? 'white' : 'primary'"
                    @click="changeLocale('en')">
                  English
                </v-btn>
              </v-col>
              <v-col cols="12" align="end">
                <v-row class="fill-height" align="end" no-gutters justify="end">
                  <v-btn
                      v-for="(item, i) in menuRight"
                      :key="i"
                      :to="item.to"
                      variant="text">
                    {{ item.title }}
                  </v-btn>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-row>
  </v-app-bar>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
import {useI18n} from 'vue-i18n';
import {useRoute} from 'vue-router'

const route = useRoute();
const color = ref(route.name === 'home' ? 'rgba(0, 0, 0, .1' : '#151515');
const {locale, t} = useI18n({useScope: 'global'})

const menuLeft = computed(() => {
  return [
    {
      title: t('layout.menu.home'),
      to: {name: 'index'}
    },
    {
      title: t('layout.menu.about'),
      to: ''
    },
    {
      title: t('layout.menu.facilities'),
      to: ''
    },
    {
      title: t('layout.menu.utilities'),
      to: ''
    },
  ]
})

const menuRight = computed(() => {
  return [
    {
      title: t('layout.menu.testimonials'),
      to: ''
    },
    {
      title: t('layout.menu.gallery'),
      to: {name: 'gallery'}
    },
    {
      title: t('layout.menu.virtualTour'),
      to: {name: 'interactive-map'}
    },
    {
      title: t('layout.menu.map'),
      to: ''
    },
  ]
})

const onScroll = () => {
  if(route.name === 'home') {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const height = document.getElementById('videoBox').getBoundingClientRect().height;
    color.value = top >= (height - 132) ? '#151515' : 'rgba(0, 0, 0, .1)';
  } else {
    color.value = '#151515';
  }
}

const changeLocale = item => {
  locale.value = item;
}
</script>