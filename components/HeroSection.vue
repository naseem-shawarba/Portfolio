<template>
  <section id="hero" class="h-screen position-relative">
    <NuxtParticles id="particles" :options="options" :key="particlesNumber"/>
    <div class="d-flex flex-column justify-center align-center h-100">
      <div class="mb-4" style="width: 150px; height: 150px">
        <v-img width="150" height="150" :src="imageSRC" rounded="circle">
        </v-img>
      </div>
      <h3 class="mb-2 text-blue-grey-darken-1">{{ title }}</h3>
      <div class="mb-4">
        <VueWriter
          class="font-weight-bold text-h4"
          :array="messages"
          :typeSpeed="130"
          :eraseSpeed="100"
          caret="underscore"
          :delay="2000"
          :start="1000"
        />
      </div>
      <div class="d-flex flex-wrap justify-center">
        <v-btn
          color="blue-darken-4"
          variant="outlined"
          rounded
          class="ma-3"
          :to="{ path: '/', hash: '#about-me' }"
          >About me</v-btn
        >
        <v-btn
          color="blue-darken-4"
          variant="outlined"
          rounded
          class="ma-3"
          :to="{ path: '/', hash: '#projects' }"
          >Projects</v-btn
        >
        <v-btn
          variant="outlined"
          rounded
          color="blue-darken-4"
          class="ma-3"
          :to="{ path: '/', hash: '#contact' }"
          >Contact</v-btn
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      imageSRC: "https://avatars.githubusercontent.com/u/113713562?v=4",
      messages: [
        "Hi, I'm Naseem Shawarba ",
        "Passionate about digital products ",
        "Always learning new things ",
        "Love building beautiful interfaces ",
        "Web and mobile apps excite me ",
        "Ready to collaborate on cool projects",
        "Let's build something awesome ",
      ],
      title: "SOFTWARE DEVELOPER",
      particlesNumber:0
    };
  },
  computed: {
    options() {
      if(this.$vuetify.display.smAndDown){
        this.particlesNumber =10
      }else if(this.$vuetify.display.lgAndDown){
        this.particlesNumber =30
      }else {
        this.particlesNumber=45
      }
      return {
        fullScreen: {
          enable: false,
        },
        particles: {
          number: {
            value: this.particlesNumber,
          },
          color: {
            value: "#191970",
          },
          links: {
            color: "#191970",
            enable: true,
            distance: 200,
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.2,
          },
          size: {
            value: {
              min: 4,
              max: 6,
            },
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
        background: {
          color: "#ffffff",
        },
        poisson: {
          enable: true,
        },
      };
    },
  },
};
</script>

<style>
.is-typed span.underscore {
  display: inline-flex;
  width: 10px;
  height: 1px;
  align-items: flex-end;
  background-color: black;
  animation: blink 1s infinite;
}

#particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
