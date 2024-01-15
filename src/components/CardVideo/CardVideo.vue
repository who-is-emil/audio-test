<template>
  <a :href="href" class="card-video" target="_blank" rel="nofollow">

    <span class="card-video__image">
      <Image :data="image"/>
    </span>

    <span class="card-video__title h5">
      {{ title }}
    </span>

    <span class="card-video__play">
      <Icon name="24/play"/>
    </span>
  </a>
</template>

<script>
import Image from '@/components/Image/Image.vue';
import Icon from '@/components/Icon/Icon.vue';

export default {
  name: 'CardVideo',
  components: { Icon, Image },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    href() {
      return this.data.href;
    },
    image() {
      return this.data.image;
    },
    title() {
      return this.data.title;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "CardVideo";
</style>
