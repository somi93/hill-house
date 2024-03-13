<template>
  <v-footer color="#151515" class="pt-12 pb-6">
    <v-container style="max-width: 1400px">
      <v-row>
        <v-col cols="12" lg="4" class="pr-8">
          <p class="text-h4 mb-4">Hill Luxury House</p>
          <p class="text-body-2">
            Established in 1998, CozyStay Hotel is a boutique hotel in the heart of the Swiss Alps, offering
            contemporary accommodation and unrivaled access to ski and hiking trails, immersing you in an idyllic
            setting against pristine skies in search of a truly serene experience.
          </p>
        </v-col>
        <v-col cols="12" lg="4" class="px-8">
          <p class="text-h5 mb-4">Reach out</p>
          <p class="text-body-2">
            Email: booking@cozystay.com<br/>
            Tel: +41 22 345 66 77<br/>
            Fax: +41 22 345 77 89<br/>
            Rue de Lausanne, 1202 Genève, Switzerland
          </p>
        </v-col>
        <v-col cols="12" lg="4" class="pl-8">
          <p class="text-h5 mb-4">Stay connected</p>
          <v-row no-gutters>
            <v-icon :icon="mdiFacebook" class="mr-4" size="22px"></v-icon>
            <v-icon :icon="mdiInstagram" class="mr-4" size="22px"></v-icon>
            <v-icon :icon="mdiEmail" class="mr-4" size="22px"></v-icon>
            <v-icon :icon="mdiYoutube" size="22px"></v-icon>
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="my-12"></v-divider>
      <v-row justify="space-between" align="center" class="px-2">
        <div>
          <v-btn variant="text">Home</v-btn>
          <v-btn variant="text">About</v-btn>
          <v-btn variant="text">Gallery</v-btn>
          <v-btn variant="text">Contact</v-btn>
        </div>
        <span class="text-body-2">Copyright © Enigma IT. All rights reserved.</span>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup>
import {mdiFacebook, mdiInstagram, mdiEmail, mdiYoutube} from "@mdi/js";
</script>