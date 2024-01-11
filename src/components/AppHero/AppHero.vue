<template>
  <div class="app-hero">
    <div class="app-hero__logo">
      <AppIcon name="logo/logo.svg"/>
    </div>

    <h1 class="app-hero__title" v-if="title">
      {{ title }}
    </h1>

    <p class="app-hero__text" v-if="text">
      {{ text }}
    </p>

    <AppImage :data="background"/>
  </div>
</template>

<script>
import AppIcon from '@/components/AppIcon/AppIcon.vue';
import AppImage from '@/components/AppImage/AppImage.vue';

export default {
  name: 'AppHero',
  components: { AppImage, AppIcon },
  data() {
    return {
      title: 'Стальная закалка',
      text: 'Медитации для ясности ума и эмоциональной стабильности в любых ситуациях',
      background: {
        src: 'hero-bg.jpg',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "AppHero";
</style>
