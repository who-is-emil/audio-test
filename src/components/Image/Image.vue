<template>
  <div class="image">
    <picture v-if="src">
      <source v-if="srcset" :srcset="srcset">
      <img :v-lazy-load="!disableLazy" :src="src" :alt="alt">
    </picture>
  </div>
</template>

<script>
export default {
  name: 'Image',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    srcset() {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return this.data.srcset?.map((item) => require(`@/assets/images/${item}`))?.join(', ');
    },
    src() {
      if (!this.data.src) { return ''; }

      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/images/${this.data.src}`);
    },
    alt() {
      return this.data.alt || '';
    },
    disableLazy() {
      return this.data.disableLazy || false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "Image";
</style>
