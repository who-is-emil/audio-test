<template>
  <div class="contacts">
    <p class="contacts__title h6">
      {{ title }}
    </p>

    <a :href="href" class="contacts__link h3">
      {{ text }}
    </a>

    <div class="contacts__chevron">
      <Icon name="24/chevron-right"/>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon/Icon.vue';

export default {
  name: 'Contacts',
  components: { Icon },
  data() {
    return {
      title: 'Бесплатная консультация психолога',
      href: 'tel:+78007750405',
      text: '+7 800 775 04 05',
    };
  },
};
</script>

<style lang="scss" scoped>
@import "Contacts";
</style>
