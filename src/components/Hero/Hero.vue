<template>
  <div class="hero">
    <div class="hero__background">
      <Image :data="background"/>
    </div>

    <div class="hero__container container">
      <div class="hero__content">
        <div class="hero__logo">
          <Icon name="logo/logo.svg"/>
        </div>

        <h1 class="hero__title" v-if="title">
          {{ title }}
        </h1>

        <p class="hero__text" v-if="text">
          {{ text }}
        </p>

        <div class="hero__action">
          <Button :data="action"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Image from '@/components/Image/Image.vue';
import Icon from '@/components/Icon/Icon.vue';
import Button from '@/components/Button/Button.vue';

export default {
  name: 'Hero',
  components: { Button, Icon, Image },
  data() {
    return {
      title: 'Стальная закалка',
      text: 'Медитации для ясности ума и эмоциональной стабильности в любых ситуациях',
      background: {
        src: 'hero-bg.jpg',
      },
      action: {
        title: 'Начать',
        text: 'Начать',
        icon: '24/play.svg',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "Hero";
</style>
