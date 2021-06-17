<template>
  <section>
    <router-link :to="{ name: 'registerDetails', params: { step: 'stepRol' } }">
      <px-button :color="bottonWhite">Volver</px-button>
    </router-link>
    <router-link
      :to="{ name: 'registerDetails', params: { step: 'stepConfirm' } }"
    >
      <px-button :color="bottonBlack">Siguiente</px-button>
    </router-link>
  </section>
</template>
<script>
import PxButton from "@/components/PxButton";

export default {
  data() {
    return {
      bottonWhite: "white",
      bottonBlack: "black",
    };
  },
  components: {
    PxButton,
  },
};
</script>
<style scoped></style>
