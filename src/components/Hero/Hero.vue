<template>
  <div class="hero">
    <div class="hero__background">
      <Image :data="background"/>
    </div>

    <div class="hero__container container">
      <div class="hero__content">
        <div class="hero__logo">
          <Icon name="logo/logo"/>
        </div>

        <h1 class="hero__title" v-if="title">
          {{ title }}
        </h1>

        <p class="hero__text" v-if="text">
          {{ text }}
        </p>

        <div class="hero__action">
          <AppButton :data="action"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Image from '@/components/Image/Image.vue';
import Icon from '@/components/Icon/Icon.vue';
import AppButton from '@/components/AppButton/AppButton.vue';

export default {
  name: 'Hero',
  components: {
    AppButton, Icon, Image,
  },
  data() {
    return {
      title: 'Стальная закалка',
      text: 'Медитации для ясности ума и эмоциональной стабильности в любых ситуациях',
      background: {
        local: true,
        src: 'hero-bg.jpg',
      },
      action: {
        title: 'Начать',
        text: 'Начать',
        icon: '24/play',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "Hero";
</style>
