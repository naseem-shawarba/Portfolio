<template>
  <v-layout>
    <v-main>
      <v-btn
        v-show="showGoToTop"
        class="mr-5 mb-8 position-fixed right-0 bottom-0"
        style="z-index: 1000"
        color="green"
        icon="mdi-chevron-up"
        v-scroll="onScroll"
        @click="scrollToTop"
      ></v-btn>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
    <LayoutFooter />
  </v-layout>
</template>

<script>
import { useGoTo } from "vuetify";
export default {
  setup() {
    const goTo = useGoTo();
    return { goTo };
  },
  data() {
    return {
      offsetTop: 0
    };
  },
  computed: {
    showGoToTop() {
      return this.offsetTop > 200;
    },
  },
  methods: {
    onScroll(event) {
      this.offsetTop = event.target.scrollingElement.scrollTop;
    },
    scrollToTop() {
      this.goTo(0);
    },
  },
};
</script>
