<template>
  <span class="app-icon" :class="className">
   <inline-svg :src="src"/>
  </span>
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
  name: 'AppIcon',
  components: {
    InlineSvg,
  },
  props: {
    name: {
      required: true,
      type: String,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    src() {
      // eslint-disable-next-line global-require,import/no-dynamic-require
      return require(`@/assets/icons/${this.name}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "AppIcon";
</style>
