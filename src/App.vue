<template>
  <div class="app">
    <template v-if="!test">
      <Hero/>

      <div class="content-container">
        <AboutBlock/>
        <Program/>
        <Contacts/>
        <VideoBlock/>
      </div>
    </template>

    <template v-else>
      <button @click="playSound">Play Sound</button>
      <button @click="togglePlayPause">Toggle Play/Pause</button>
      <label for="kek">
        <input id="kek" type="range" min="0" max="1" step="0.1"
               v-model="volume" @input="changeVolume">
      </label>
      <br>
      <br>
      <br>
      <hr>
      <br>
      <br>
      <br>
      <button @click="playSound2">Play Sound2</button>
      <button @click="togglePlayPause2">Toggle Play/Pause2</button>
      <label for="kek2">
        <input id="kek2" type="range" min="0" max="1" step="0.1"
               v-model="volume2" @input="changeVolume2">
      </label>
    </template>

  </div>
</template>

<script>

import Hero from '@/components/Hero/Hero.vue';
import Program from '@/components/Program/Program.vue';
import AboutBlock from '@/components/AboutBlock/AboutBlock.vue';
import Contacts from '@/components/Contacts/Contacts.vue';
import VideoBlock from '@/components/VideoBlock/VideoBlock.vue';

import { Howl } from 'howler';

export default {
  components: {
    VideoBlock, Contacts, Program, AboutBlock, Hero,
  },
  data() {
    return {
      test: true,

      sound: null,
      sound2: null,
      volume: 1.0,
      volume2: 1.0,
    };
  },
  methods: {
    playSound() {
      // require(`@/assets/icons/${this.name}.svg`);
      this.sound = new Howl({
        // src: ['@/assets/media/1.mp3'],
        // eslint-disable-next-line global-require
        src: [`${require('@/assets/media/1.mp3')}`],
        volume: 1.0,
      });

      this.sound.play();
    },
    playSound2() {
      // require(`@/assets/icons/${this.name}.svg`);
      this.sound2 = new Howl({
        // src: ['@/assets/media/1.mp3'],
        // eslint-disable-next-line global-require
        src: [`${require('@/assets/media/2.mp3')}`],
        volume: 1.0,
      });

      this.sound2.play();
    },
    togglePlayPause() {
      if (this.sound.playing()) {
        this.sound.pause();
      } else {
        this.sound.play();
      }
    },
    togglePlayPause2() {
      if (this.sound2.playing()) {
        this.sound2.pause();
      } else {
        this.sound2.play();
      }
    },
    changeVolume(event) {
      this.sound.volume(event.target.value);
    },
    changeVolume2(event) {
      this.sound2.volume(event.target.value);
    },
  },
};
</script>
