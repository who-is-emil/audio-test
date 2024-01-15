<template>
  <div class="video-block">
    <div class="video-block__top">
      <h3 class="video-block__title">
        {{ title }}
      </h3>

      <div class="video-block__arrows">
        <div class="video-block__arrow">
          <ButtonRound
              :data="arrowLeft"
              @click="slideChange('prev')"
          />
        </div>
        <div class="video-block__arrow">
          <ButtonRound
              :data="arrowRight"
              @click="slideChange('next')"
          />
        </div>
      </div>
    </div>

    <div class="video-block__slider">
      <div class="swiper-container">
        <Swiper
            v-bind="swiperOptions"
            @swiper="onSwiper"
            @slideChange="swiperSlideChange">
          <SwiperSlide v-for="(item, idx) in items" :key="idx">
            <div class="video-block__slide">
              <CardVideo :data="item"/>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import CardVideo from '@/components/CardVideo/CardVideo.vue';
import ButtonRound from '@/components/ButtonRound/ButtonRound.vue';

export default {
  name: 'VideoBlock',
  components: {
    ButtonRound,
    CardVideo,
    Swiper,
    SwiperSlide,
  },
  setup() {
    // eslint-disable-next-line no-unused-vars
    const swiperRef = ref(null);
    const swiperOptions = ref({
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 800,
      a11y: false,
      loop: false,
      preventInteractionOnTransition: true,
    });

    return {
      swiperOptions,
    };
  },
  data() {
    return {
      realIndex: 0,

      title: 'Видео и подкасты',
      items: [
        {
          title: 'Пережить декабрь и не выгореть',
          href: 'https://www.youtube.com/watch?v=lyh2kAjcmSY',
          image: {
            src: 'https://i.ytimg.com/vi/lyh2kAjcmSY/hq720.jpg',
          },
        },
        {
          title: 'Знания, которые помогут защитить себя и близких',
          href: 'https://www.youtube.com/watch?v=KLuTLF3x9sA',
          image: {
            src: 'https://i.ytimg.com/vi/KLuTLF3x9sA/hq720.jpg',
          },
        },
        {
          title: 'Пережить декабрь и не выгореть',
          href: 'https://www.youtube.com/watch?v=lyh2kAjcmSY',
          image: {
            src: 'https://i.ytimg.com/vi/lyh2kAjcmSY/hq720.jpg',
          },
        },
      ],
      link: {
        text: 'Больше видео на YouTube',
        href: '#!',
      },
    };
  },
  computed: {
    arrowLeft() {
      return {
        icon: '24/chevron-left',
        disabled: this.realIndex === 0,
      };
    },
    arrowRight() {
      return {
        icon: '24/chevron-right',
        disabled: this.realIndex === this.items.length - 1,
      };
    },
  },
  methods: {
    onSwiper(swiper) {
      this.swiperRef = swiper;

      this.realIndex = swiper.realIndex;
    },
    slideChange(direction) {
      if (direction === 'prev') {
        this.swiperRef.slidePrev();
      }

      if (direction === 'next') {
        this.swiperRef.slideNext();
      }
    },
    swiperSlideChange(swiper) {
      this.realIndex = swiper.realIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "VideoBlock";
</style>
