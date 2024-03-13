<template>
  <v-app v-scroll="onScroll">
    <hill-header v-if="$route.name !== 'interactive-map'"></hill-header>
    <v-main>
      <RouterView/>
    </v-main>
    <v-progress-circular
        v-if="$route.name !== 'interactive-map'"
        :model-value="currentScroll"
        :size="72"
        :width="4"
        color="#FF8A00"
        style="bottom:16px;right: 16px;z-index: 5;position: fixed">
      <v-btn
          color="primary"
          class="btn-reserve"
          @click="scrollToTop"
          flat
          variant="flat"
          rounded="circle"
          height="64px"
          width="64px">
        <v-icon size="28px" :icon="mdiChevronUp"></v-icon>
      </v-btn>
    </v-progress-circular>
    <hill-footer v-if="$route.name !== 'interactive-map'"></hill-footer>
  </v-app>
</template>

<script setup>
import {computed, ref} from 'vue';
import HillHeader from '@/components/layout/header';
import HillFooter from '@/components/layout/footer';
import {mdiChevronUp} from '@mdi/js'

const currentScroll = ref(0);
const scrollToTop = () => {
  window.scrollTo(0, 0)
}

const onScroll = () => {
  const h = document.documentElement;
  const b = document.body;
  const st = "scrollTop";
  const sh = "scrollHeight";

  // Get the current scroll position and content height
  const scrollPosition = (h[st] || b[st]);
  const contentHeight = (h[sh] || b[sh]);

  // Get the viewport height
  const viewportHeight = window.innerHeight;

  // Calculate the scrollable distance
  const scrollableDistance = contentHeight - viewportHeight;

  // Calculate the percentage scrolled
  const scrollPercent = Math.round((scrollPosition / scrollableDistance) * 100);

  // Ensure value is between 0 and 100
  currentScroll.value = Math.max(0, Math.min(100, scrollPercent));
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
