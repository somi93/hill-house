<template>
  <v-row :align="align" no-gutters class="flex-column">
    <h2 class="text-h4 hill-title">
      <slot name="title"></slot>
    </h2>
    <span class="title-separator separator-border theme-color-bg"></span>
  </v-row>
  <div
      style="max-width: 800px;margin: 0 auto"
      class="mb-8">
    <p :class="align === 'center' && 'text-center'">
      <slot name="description">

      </slot>
    </p>
  </div>
  <slot></slot>
</template>

<script setup>
const props = defineProps({
  align: {
    type: String,
    required: false,
    default: 'center'
  }
})
</script>

<style>
.hill-title {
  position: relative;
  margin-bottom: 8px;
}

.title-separator.separator-border {
  background-color: #FF8A00;
  width: 6px;
  position: relative;
  height: 3px;
  display: block;
  margin-bottom: 32px;
  margin-right: 90px;
}

.title-separator.separator-border:before, .title-separator.separator-border:after {
  content: "";
  height: 3px;
  width: 12px;
  background: #000;
  position: absolute;
  left: 11px;
  opacity: 0.8;
}
.title-separator.separator-border:after, .title-separator.separator-border:before {
  background-color: #FF8A00;
}
.title-separator.separator-border:after {
  left: 29px;
  width: 70px;
  opacity: 0.6;
  height: 1px;
  top: 1px;
}
</style>