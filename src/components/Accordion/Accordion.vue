<template>
  <div class="accordion" ref="accordion">
    {{ state }}
    <button type="button" class="accordion__toggle" @click="toggle">
      {{ title }}
    </button>

    <div class="accordion__roll" ref="roll">
      <div class="accordion__content user-text">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Accordion',
  data() {
    return {
      timeline: null,
      state: false,
      animate: false,
    };
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    title() {
      return this.data.title || '';
    },
    content() {
      return this.data.content || '';
    },
  },
  methods: {
    toggle() {
      if (this.animate) return;

      const { accordion } = this.$refs;

      if (this.state) {
        accordion.classList.remove('is-active');
        this.animation('reverse');
      } else {
        accordion.classList.add('is-active');
        this.animation('play');
      }
    },
    animation(direction) {
      const { roll } = this.$refs;

      if (direction === 'play') {
        this.$gsap.fromTo(
          roll,
          {
            minHeight: 0,
            height: 0,
          },
          {
            minHeight: 'auto',
            height: 'auto',
            duration: '0.6',
            ease: 'power1.out',
            onStart: () => {
              this.animate = true;
            },
            onComplete: () => {
              this.state = true;
              this.animate = false;
            },
          },
        );
      } else {
        this.$gsap.to(
          roll,
          {
            minHeight: 0,
            height: 0,
            duration: '0.6',
            ease: 'power1.out',
            onStart: () => {
              this.animate = true;
            },
            onComplete: () => {
              this.state = false;
              this.animate = false;
            },
          },
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "Accordion";
</style>
