<template>
  <div class="w-screen flex-col items-center">
    <px-principal> </px-principal>
    <div
      class="
        list-container
        w-screen
        flex flex-col
        gap-y-4
        items-center
        justify-between
        py-20
      "
    >
      <px-list :users="freelancers"></px-list>
    </div>
    <px-message :isAny="propsMessage">
      Descubre la oportunidad de tu vida con 2NEL</px-message
    >
  </div>
</template>

<script>
import PxPrincipal from "@/components/welcomeComponents/PxPrincipal";
import PxList from "@/components/welcomeComponents/PxList";
import PxMessage from "@/components/PxMessage";

//API

export default {
  name: "Home",
  data() {
    return {
      propsMessage: {
        isButton: true,
        isText: false,
        imageUrl: "image1",
      },
      freelancers: [
        {
          name: "Javier Alanoca Farfán",
          description: '"Me considero una persona responsable y trabajadora"',
          enterprise: "Muru",
        },
        {
          name: "Dana Vallejos Nestares",
          description: '"Me considero una persona responsable y trabajadora"',
          enterprise: "Muru",
        },
        {
          name: "Jesús Romero Rivera",
          description: '"Me considero una persona responsable y trabajadora"',
          enterprise: "Muru",
        },
        {
          name: "Jesús Daniel Rivera",
          description: '"Me considero una persona responsable y trabajadora"',
          enterprise: "Muru",
        },
      ],
    };
  },
  components: {
    PxPrincipal,
    PxMessage,
    PxList,
  },
};
</script>

<style scoped>
.list-container {
  height: auto;
}
</style>
