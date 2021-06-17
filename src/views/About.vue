<template>
  <div class="flex-col items-center">
    <px-message :isAny="noButton"
      >Buscando conectar tus ideas y trabajos con otras personas</px-message
    >
    <section class="w-screen FirstText">
      <p class="text-3xl px-32 py-24">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        <br /><br />
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
        ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
        <br /><br />
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
    </section>
    <px-message :isAny="noButtonOtherImage"
      >"En 2NEL encontré la oportunidad para crecer
      profesionalmente"</px-message
    >
    <section
      class="
        FirstText
        flex
        justify-around
        items-center
        p-10
        gap-32
        text-justify
      "
    >
      <div class="flex flex-col items-center Text--container">
        <h1 class="font-bold text-6xl">Nuestra misión</h1>
        <p class="text-2xl p-6">
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.
        </p>
      </div>
      <div class="flex flex-col items-center Text--container">
        <h1 class="font-bold text-6xl">Nuestra visión</h1>
        <p class="text-2xl p-6">
          Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
          justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.
        </p>
      </div>
    </section>
    <px-message :isAny="withButton"
      >El éxito llega cuando tus sueños son más grandes que tus
      excusas</px-message
    >
  </div>
</template>
<script>
import PxMessage from "@/components/PxMessage";

export default {
  data() {
    return {
      withButton: {
        isButton: true,
        isText: false,
        imageUrl: "image4",
      },
      noButton: {
        isButton: false,
        isText: false,
        imageUrl: "image5",
      },
      noButtonOtherImage: {
        isButton: false,
        isText: false,
        imageUrl: "image6",
      },
    };
  },
  components: {
    PxMessage,
  },
};
</script>
<style scoped>
.FirstText {
}
h1 {
  font-family: var(--principal-font);
}
p {
  font-family: var(--text-font);
}
</style>
