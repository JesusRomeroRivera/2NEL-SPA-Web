<template>
  <section class="absolute h-screen w-screen bg-white grid">
    <px-register-header :step="step"> </px-register-header>
    <first-step-rol v-show="step == '1'"></first-step-rol>
    <second-step-account v-show="step == '2'"></second-step-account>
    <third-step-confirm v-show="step == '3'"></third-step-confirm>
    <fourth-step-login v-show="step == '4'"></fourth-step-login>
  </section>
</template>
<script>
// import PxButton from "@/components/PxButton"
import PxRegisterHeader from "@/components/welcomeComponents/PxRegisterHeader";
import FirstStepRol from "@/components/stepsRegister/FirstStepRol";
import SecondStepAccount from "@/components/stepsRegister/SecondStepAccount";
import ThirdStepConfirm from "@/components/stepsRegister/ThirdStepConfirm";
import FourthStepLogin from "@/components/stepsRegister/FourthStepLogin";

export default {
  data() {
    return {
      buttonColor: "black",
      step: "1",
    };
  },
  components: {
    //PxButton,
    PxRegisterHeader,
    FirstStepRol,
    SecondStepAccount,
    ThirdStepConfirm,
    FourthStepLogin,
  },
  watch: {
    $route() {
      this.getUrl();
    },
  },
  methods: {
    nextPage() {
      this.numberPage += 1;
    },
    getUrl() {
      const theStep = this.$route.params.step;
      switch (theStep) {
        case "stepRol":
          this.step = "1";
          break;
        case "stepAccount":
          this.step = "2";
          break;
        case "stepConfirm":
          this.step = "3";
          break;
        case "stepLogin":
          this.step = "4";
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style scoped>
section {
  top: 0;
  z-index: 10;
  grid-template-rows: 20vh 80vh;
}
</style>
