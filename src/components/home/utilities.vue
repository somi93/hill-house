<template>
  <v-container class="py-15">
    <hill-section>
      <template #title>
        Utilities
      </template>
    </hill-section>
    <v-row justify="center" data-aos="zoom-in" data-aos-once="true">
      <template v-for="utility in utilities">
        <div class="px-6">
          <v-row no-gutters align="center" class="flex-column">
            <v-icon :icon="utility.icon" size="42px" color="primary"></v-icon>
            <span v-html="utility.title" class="text-center text-caption mt-2"></span>
          </v-row>
        </div>
      </template>
    </v-row>
  </v-container>
</template>

<script setup>
import {ref} from 'vue'
import HillSection from "@/components/global/hill-section";
import {mdiParking, mdiPool, mdiGrill, mdiFire, mdiTableChair, mdiBathtub, mdiTelescope, mdiBalcony} from '@mdi/js';

const utilities = ref([
  {
    title: 'Parking Area',
    icon: mdiParking
  },
  {
    title: 'Swimming Pool',
    icon: mdiPool
  },
  {
    title: 'Barbecue',
    icon: mdiGrill
  },
  {
    title: 'Fire',
    icon: mdiFire
  },
  {
    title: 'Alfresco Dining',
    icon: mdiTableChair
  },
  {
    title: 'Swimming pool with<br/> hydromassage',
    icon: mdiBathtub
  },
  {
    title: 'Telescope',
    icon: mdiTelescope
  },
  {
    title: 'Multiple terraces',
    icon: mdiBalcony
  },
])
</script>

<style lang="scss">

</style>