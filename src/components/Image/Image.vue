<template>
  <div class="image">
    <img :v-lazy-load="!disableLazy" :src="src" :alt="alt">
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
    local() {
      return !!this.data.local;
    },
    src() {
      if (this.local) {
        // eslint-disable-next-line global-require,import/no-dynamic-require
        return require(`@/assets/images/${this.data.src}`);
      }

      return this.data.src;
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
