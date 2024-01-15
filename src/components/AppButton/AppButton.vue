<template>
  <a
    v-if="href"
    :href="href"
    :class="['app-button', theme, size]"
    :title="title"
    :target="target"
  >
    <span class="app-button__icon" v-if="icon">
      <Icon :name="icon"/>
    </span>
    <span class="app-button__text">{{ text }}</span>
  </a>
  <button
    v-else
    :type="type"
    :class="['app-button', theme, size]"
    :title="title"
    @click="click"
  >
    <span class="app-button__icon" v-if="icon">
      <Icon :name="icon"/>
    </span>
    <span class="app-button__text">{{ text }}</span>
  </button>
</template>

<script>
import Icon from '@/components/Icon/Icon.vue';

export default {
  name: 'AppButton',
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
        ? `app-button--${this.data.theme}`
        : '';
    },
    icon() {
      return this.data.icon || false;
    },
    size() {
      return this.data.size
        ? `app-button--${this.data.size}`
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
@import "AppButton";
</style>
