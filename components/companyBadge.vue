<template>
  <div class="company-badge pb-2 pl-3 pr-2 d-flex">
    <div class="curved-corner-topleft"></div>
    <div class="Company-Logo align-self-end">
      <v-img v-if="companyLogoUrl" class="mt-1" :src="companyLogoUrl" width="35" cover></v-img>
      <v-icon v-else style="padding-top: 5px" icon="mdi-domain" :size="22"></v-icon>
    </div>
    <div class="ml-1 company-name align-self-end">{{ companyName }}</div>
    <div class="curved-corner-bottomright"></div>
  </div>
</template>

<script>
export default {
  props: {
    companyName: String,
    companyLogoUrl: String,
  },
};
</script>

<style scoped>
.company-badge {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border-radius: 0 0 0 10px;
  position: relative;
}

.curved-corner-topleft {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-100%, 0);
  height: 20px;
  width: 20px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-top-right-radius: 50%;
    box-shadow: 10px 0 0 0 rgba(0, 0, 0, 0.5);
  }
}

.curved-corner-bottomright {
  overflow: hidden;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(0, 100%);
  height: 20px;
  width: 20px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-top-right-radius: 50%;
    box-shadow: 10px 0 0 0 rgba(0, 0, 0, 0.5);
  }
}

.company-name {
  line-height: 24px;
  height: 18px;
}
</style>
