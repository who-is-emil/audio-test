<template>
  <span class="icon" :class="className">
   <inline-svg :src="src"/>
  </span>
</template>

<script>
import InlineSvg from 'vue-inline-svg';

export default {
  name: 'Icon',
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
      return require(`@/assets/icons/${this.name}.svg`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "Icon";
</style>
