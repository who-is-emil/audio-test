<template>
  <div class="program">
    <div class="program__content">
      <h3 class="program__title">
        {{ title }}
      </h3>

      <div class="program__items">
        <button type="button" class="program__item" v-for="(item, idx) in items" :key="idx">
            <span class="program__number">
              {{ item.id }}
            </span>

          <span class="program__info">
              <span class="program__name h5">
                {{ item.name }}
              </span>
              <span class="program__time text-small">
                <Icon name="16/clock"/>

                {{ item.time }}
              </span>
            </span>

          <span class="program__chevron">
              <Icon name="24/chevron-right"/>
            </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import Icon from '@/components/Icon/Icon.vue';

export default {
  name: 'Program',
  components: { Icon },
  data() {
    return {
      title: 'Программа',
      items: [
        {
          id: '0',
          name: 'Введение в медитацию',
          time: '11 мин',
        },
        {
          id: '1',
          name: 'Самоценность',
          time: '9 мин',
        },
        {
          id: '2',
          name: 'Радость и богатство жизни',
          time: '7 мин',
        },
        {
          id: '3',
          name: 'Ощущение границ, безопасность, защищенность',
          time: '12 мин',
        },
        {
          id: '4',
          name: 'Отпустить все лишнее',
          time: '10 мин',
        },
        {
          id: '5',
          name: 'Смотреть страху в глаза и открывать возможности',
          time: '6 мин',
        },
        {
          id: '6',
          name: 'Радость и благодарность, внутренняя сила',
          time: '11 мин',
        },
        {
          id: '7',
          name: 'Отношения с трудными людьми',
          time: '7 мин',
        },
        {
          id: '8',
          name: 'Уверенность в поведении и голосе',
          time: '11 мин',
        },
        {
          id: '9',
          name: 'О чем мы молчим со своими родителями',
          time: '8 мин',
        },
        {
          id: '10',
          name: 'Принятие (мнений, критики, инаковости)',
          time: '9 мин',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "Program";
</style>
