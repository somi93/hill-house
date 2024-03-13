<template>
  <v-row justify="center" no-gutters>
    <v-overlay v-model="overlay"  style="z-index: 55555555555555555" opacity="0.9">
      <v-btn position="absolute" variant="plain" rounded="circle" size="40px" style="right: 4px;top: 4px" @click="overlay = false">
        <v-icon size="32px" color="#fff" :icon="mdiClose"></v-icon>
      </v-btn>
      <v-row no-gutters style="height: 100vh;width: 100vw;flex-wrap: nowrap" justify="space-between" align="center">
        <v-btn variant="plain" rounded="circle" size="64px" @click="previousImage" v-if="$vuetify.display.xlAndUp">
          <v-icon size="54px" color="#fff" :icon="mdiChevronLeft"></v-icon>
        </v-btn>
        <v-col cols="12" lg="11">
          <gallery-overlay-item
            @nextImage="nextImage"
            @previousImage="previousImage"
            @setImage="imageIndex = $event"
            :current-index="imageIndex"
            :image="imageOverlay">
          </gallery-overlay-item>
        </v-col>
        <v-btn variant="plain" rounded="circle" size="64px" @click="nextImage" v-if="$vuetify.display.xlAndUp">
          <v-icon size="54px" color="#fff" :icon="mdiChevronRight"></v-icon>
        </v-btn>
      </v-row>
    </v-overlay>
    <v-col cols="12" lg="8" class="mt-8">
      <div class="grid-wrapper" ref="gallery">
        <template v-for="(photo, i) in photos" v-if="galleryWidth">
          <gallery-item
              :photo="photo"
              @openGallery="openGallery(i)"
              :width="galleryWidth">
          </gallery-item>
        </template>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
import {mdiChevronLeft, mdiChevronRight, mdiClose} from '@mdi/js'
</script>

<script>
import GalleryItem from './item'
import GalleryOverlayItem from './overlay-item'

export default {
  props: {
    photos: {
      type: Array,
      required: true
    }
  },
  components: {
    GalleryItem,
    GalleryOverlayItem
  },
  data: () => ({
    overlay: false,
    imageIndex: 0,
    galleryWidth: 0
  }),
  mounted() {
    const divide = this.isDesktop ? 4 : 1;
    this.galleryWidth = Math.ceil((this.$refs.gallery.getBoundingClientRect().width - 48) / divide);
    window.addEventListener("keydown", event => {
      if (event.defaultPrevented) {
        return; // Should do nothing if the default action has been cancelled
      }
      if (this.overlay) {
        if (event.keyCode === 37) {
          this.previousImage()
        } else if (event.keyCode === 39) {
          this.nextImage();
        } else if (event.keyCode === 27) {
          this.overlay = false
        }
      }
    }, true);
  },
  methods: {
    previousImage() {
      if (!this.imageIndex) this.imageIndex = this.photos.length - 1;
      else this.imageIndex--;
    },
    nextImage() {
      if (this.imageIndex === this.photos.length - 1) this.imageIndex = 0;
      else this.imageIndex++;
    },
    openGallery(index) {
      this.imageIndex = index;
      this.overlay = true;
    }
  },
  computed: {
    imageOverlay() {
      return this.photos[this.imageIndex];
    }
  }
}
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
  columns: 4;
  column-gap: 16px;
  @media (max-width: 1200px) {
    columns: 3;
  }
  @media (max-width: 992px) {
    columns: auto;
    >div{
      width: 100%;
    }
  }
}
</style>
