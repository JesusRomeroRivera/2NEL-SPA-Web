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
      :type="this.type"
      @changePageThree="changePageThree"
      @changePageOne="changePageOne"
      @getUser2="getUser2"
      v-show="step == '2'"
    ></second-step-account>
    <third-step-confirm
      :data="this.getTheData"
      :type="this.type"
      @changePageTwo="changePageTwo"
      @changePageFourth="changePageFourth"
      @changePageEnterprise="changePageEnterprise"
      v-show="step == '3'"
    ></third-step-confirm>
    <fourth-step-login
      :data="this.getTheData"
      @changePageThree="changePageThree"
      v-show="step == '4'"
    ></fourth-step-login>
    <enterprise-step-register
      :data="this.getTheData"
      :type="this.type"
      :id="this.id"
      @changePageThree="changePageThree"
      @changePageFourth="changePageFourth"
      v-show="step == '5'"
    ></enterprise-step-register>
  </section>
</template>
<script>
// import PxButton from "@/components/PxButton"
import PxRegisterHeader from "@/components/welcomeComponents/PxRegisterHeader";
import FirstStepRol from "@/components/stepsRegister/FirstStepRol";
import SecondStepAccount from "@/components/stepsRegister/SecondStepAccount";
import ThirdStepConfirm from "@/components/stepsRegister/ThirdStepConfirm";
import FourthStepLogin from "@/components/stepsRegister/FourthStepLogin";
import EnterpriseStepRegister from "@/components/stepsRegister/EnterpriseStepRegister";

export default {
  data() {
    return {
      buttonColor: "black",
      step: "1",
      type: "",
      dataUser: {
        firstName: "",
        lastName: "",
        description: "",
        imageUrl: "",
        specialty: "",
        city: "",
        membershipType: "Free",
      },
      id: 0,
    };
  },
  components: {
    //PxButton,
    PxRegisterHeader,
    FirstStepRol,
    SecondStepAccount,
    ThirdStepConfirm,
    FourthStepLogin,
    EnterpriseStepRegister,
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
    changePageEnterprise(id) {
      this.id = id;
      this.step = "5";
    },
    getUser(typeUser) {
      this.type = typeUser;
    },
    getUser2(userDetails) {
      this.dataUser.firstName = userDetails.firstName;
      this.dataUser.lastName = userDetails.lastName;
      this.dataUser.description = userDetails.description;
      this.dataUser.imageUrl = userDetails.imageUrl;
      this.dataUser.specialty = userDetails.specialty;
      this.dataUser.city = userDetails.city;
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
