<template>
  <div class="flex-col items-center">
    <px-message :isAny="propsMessage2"
      >De pequeños comienzos surgen grandes cosas</px-message
    >
    <px-membership
      :title="'Comienza tu propia startup'"
      :numberImg="1"
      :text="'Crea tu propia StartUp y dala a conocer a nuestra comunidad - Membresía para emprendedores. Puedes crear StartUps ilimitadas y subir información adicional.'"
    ></px-membership>
    <px-membership
      :title="'Sé parte del comienzo de una StartUp'"
      :numberImg="2"
      :text="'Apoya a las StartUps que te parezcan más interesantes - Membresía para Colaboradores. Postula a un número ilimitado de StartUp que cumplan con tus intereses.'"
    ></px-membership>
    <px-membership
      :title="'Invierte en la StartUp que quieres ver crecer'"
      :numberImg="3"
      :text="'Invierte en las StartUps que cumplan con tus intereses - Membresía para Inversionistas. Visualiza información adicional de un número ilimitado de StartUps.'"
    ></px-membership>
    <px-message :isAny="propsMessage"
      >El éxito llega cuando tus sueños son más grandes que tus
      excusas</px-message
    >
  </div>
</template>
<script>
import PxMessage from "@/components/PxMessage";
import PxMembership from "@/components/welcomeComponents/PxMembership";

export default {
  components: {
    PxMessage,
    PxMembership,
  },
  data() {
    return {
      propsMessage: {
        isButton: true,
        isText: false,
        imageUrl: "image2",
      },
      propsMessage2: {
        isButton: true,
        isText: true,
        imageUrl: "image3",
      },
    };
  },
};
</script>
<style scoped></style>
