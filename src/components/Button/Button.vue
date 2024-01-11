<template>
  <a
    v-if="href"
    :href="href"
    :class="['button', theme, size]"
    :title="title"
    :target="target"
  >
    <span class="button__icon" v-if="icon">
      <Icon :name="icon"/>
    </span>
    <span class="button__text">{{ text }}</span>
  </a>
  <button
    v-else
    :type="type"
    :class="['button', theme, size]"
    :title="title"
    @click="click"
  >
    <span class="button__icon" v-if="icon">
      <Icon :name="icon"/>
    </span>
    <span class="button__text">{{ text }}</span>
  </button>
</template>

<script>
import Icon from '@/components/Icon/Icon.vue';

export default {
  name: 'Button',
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
    href() {
      return this.data.href || false;
    },
    target() {
      return this.data.target || false;
    },
    text() {
      return this.data.text || '';
    },
    title() {
      return this.data.title || this.text;
    },
    theme() {
      return this.data.theme
        ? `button--${this.data.theme}`
        : '';
    },
    icon() {
      return this.data.icon || false;
    },
    size() {
      return this.data.size
        ? `button--${this.data.size}`
        : '';
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
@import "Button";
</style>
