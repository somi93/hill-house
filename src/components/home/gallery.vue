<template>
  <div style="background-color: #f6f6f6" class="pt-15 pb-15">
    <div style="max-width: 1400px;margin: 0 auto;width: 100%">
      <hill-section>
        <template #title>
          Gallery
        </template>
        <template #description>
          <p class="mb-3 text-grey-darken-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad of veniam, quis nostrud exercitation ullamco.
          </p>
        </template>
      </hill-section>
      <v-row justify="center">
        <v-col cols="12" lg="3" data-aos="zoom-in" data-aos-once="true">
          <v-img cover aspect-ratio="1" src="@/assets/media/images/facilities/fire.jpg"></v-img>
        </v-col>
        <v-col cols="12" lg="3" data-aos="zoom-in" data-aos-once="true">
          <v-img cover aspect-ratio="1" src="@/assets/media/images/facilities/jacuzi.jpg"></v-img>
        </v-col>
        <v-col cols="12" lg="3" data-aos="zoom-in" data-aos-once="true">
          <v-img cover aspect-ratio="1" src="@/assets/media/images/facilities/living.jpg"></v-img>
        </v-col>
        <v-col cols="12" lg="3" data-aos="zoom-in" data-aos-once="true">
          <v-img cover aspect-ratio="1" src="@/assets/media/images/facilities/pool.jpg"></v-img>
        </v-col>
        <v-col cols="12" lg="3" data-aos="zoom-in" data-aos-once="true">
          <v-img cover aspect-ratio="1" src="@/assets/media/images/facilities/sauna.jpg"></v-img>
        </v-col>
        <v-col cols="12" lg="6" data-aos="zoom-in" data-aos-once="true">
          <v-img cover aspect-ratio="2.07" src="@/assets/media/images/facilities/telescope.jpg"></v-img>
        </v-col>
        <v-col cols="12" lg="3" data-aos="zoom-in" data-aos-once="true">
          <v-img cover aspect-ratio="1" src="@/assets/media/images/facilities/living2.jpg"></v-img>
        </v-col>
        <v-col cols="12" lg="3" data-aos="zoom-in" data-aos-once="true">
          <v-img cover aspect-ratio="1" src="@/assets/media/images/facilities/living3.jpg"></v-img>
        </v-col>
        <v-col cols="12" lg="3" data-aos="zoom-in" data-aos-once="true">
          <v-img cover aspect-ratio="1" src="@/assets/media/images/facilities/terrace.jpg"></v-img>
        </v-col>
        <v-col cols="12" lg="3" data-aos="zoom-in" data-aos-once="true">
          <v-img cover aspect-ratio="1" src="@/assets/media/images/facilities/jacuzi2.jpg"></v-img>
        </v-col>
        <v-col cols="12" lg="3" data-aos="zoom-in" data-aos-once="true">
          <v-img cover aspect-ratio="1" src="@/assets/media/images/facilities/pool2.jpg"></v-img>
        </v-col>
        <v-btn color="primary" class="btn-reserve mt-6" flat width="300px" height="50px">View all</v-btn>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import HillSection from "@/components/global/hill-section";

</script>

<style lang="scss">
</style>