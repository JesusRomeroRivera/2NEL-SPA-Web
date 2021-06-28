<template>
  <section class="bigSection absolute h-screen w-screen bg-white grid">
    <px-register-header :step="step"> </px-register-header>
    <first-step-rol
      @getUser="getUser"
      @changePageTwo="changePageTwo"
      v-show="step == '1'"
    ></first-step-rol>
    <second-step-account
      :data="this.getTheData"
      @changePageThree="changePageThree"
      @changePageOne="changePageOne"
      @getUser2="getUser2"
      v-show="step == '2'"
    ></second-step-account>
    <third-step-confirm
      :data="this.getTheData"
      @changePageTwo="changePageTwo"
      @changePageFourth="changePageFourth"
      v-show="step == '3'"
    ></third-step-confirm>
    <fourth-step-login
      :data="this.getTheData"
      @changePageThree="changePageThree"
      v-show="step == '4'"
    ></fourth-step-login>
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
      dataUser: {
        type: "",
        name: "",
        surname: "",
        description: "",
        urlImage: "",
        skills: [],
      },
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
  computed: {
    getTheData() {
      return this.dataUser;
    },
  },
  methods: {
    changePageOne() {
      this.step = "1";
    },
    changePageTwo() {
      this.step = "2";
    },
    changePageThree() {
      this.step = "3";
    },
    changePageFourth() {
      this.step = "4";
    },
    getUser(typeUser) {
      this.dataUser.type = typeUser;
    },
    getUser2(userDetails) {
      this.dataUser.name = userDetails.name;
      this.dataUser.surname = userDetails.surname;
      this.dataUser.description = userDetails.description;
      this.dataUser.urlImage = userDetails.urlImage;
      this.dataUser.skills = userDetails.skills;
    },
  },
};
</script>
<style scoped>
.bigSection {
  top: 0;
  z-index: 10;
  grid-template-rows: 20vh 80vh;
}
@media only screen and (max-width: 768px) {
  .bigSection {
    height: auto;
  }
}
@media only screen and (max-width: 580px) {
  .bigSection {
    grid-template-rows: 10vh 80vh;
  }
}
</style>
