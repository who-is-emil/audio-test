<template>
  <button
      :type="type"
      class="button-round"
      :disabled="disabled"
      @click="click">
    <span class="button-round__icon">
      <Icon :name="icon"/>
    </span>
  </button>
</template>

<script>
import Icon from '@/components/Icon/Icon.vue';

export default {
  name: 'ButtonRound',
  components: { Icon },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    type() {
      return this.data.type || 'button';
    },
    icon() {
      return this.data.icon || '';
    },
    disabled() {
      return this.data.disabled;
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "ButtonRound";
</style>
