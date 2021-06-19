<template>
  <section class="w-screen headerRegister flex flex-col items-center">
    <div class="textCircles">
      <div class="stepRol flex flex-col justify-center items-center">
        <h1>Elegir Rol</h1>
        <div :class="getStep() >= 1 ? 'black' : ''" class="circle"></div>
      </div>
      <div class="stepAccount flex flex-col justify-center items-center">
        <h1>Información de Cuenta</h1>
        <div :class="getStep() >= 2 ? 'black' : ''" class="circle"></div>
      </div>
      <div class="stepConfirm flex flex-col justify-center items-center">
        <h1>Confirmación</h1>
        <div :class="getStep() >= 3 ? 'black' : ''" class="circle"></div>
      </div>
      <div class="stepLogin flex flex-col justify-center items-center">
        <h1>Iniciar Sesión</h1>
        <div :class="getStep() >= 4 ? 'black' : ''" class="circle"></div>
      </div>
    </div>
    <div class="textLine">
      <div
        :class="getStep() >= 1 ? 'black' : ''"
        class="rounded-l-2xl line"
      ></div>
      <div :class="getStep() >= 1 ? 'black' : ''" class="line"></div>
      <div :class="getStep() >= 2 ? 'black' : ''" class="line"></div>
      <div :class="getStep() >= 3 ? 'black' : ''" class="line"></div>
      <div
        :class="getStep() >= 4 ? 'black' : ''"
        class="rounded-r-2xl line"
      ></div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["step"],
  data() {
    return {};
  },
  methods: {
    getStep() {
      switch (this.step) {
        case "1":
          return 1;
        case "2":
          return 2;
        case "3":
          return 3;
        case "4":
          return 4;
        default:
          break;
      }
    },
  },
};
</script>
<style scoped>
.textLine {
  position: absolute;
  top: 11vh;
  display: 100%;
  display: grid;
  grid-template-columns: 27.5vw 7.5vw 10vw 5vw 30vw;
  justify-items: center;
  align-items: center;
}
.line {
  width: 20vw;
  height: 0.6rem;
  background-color: #ababab;
}
.headerRegister {
  width: 80vw;
}
h1 {
  font-size: 1.6rem;
  font-family: var(--principal-font);
}
.textCircles {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
}
.circle {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.8rem;
  background-color: #ababab;
}
.black {
  background-color: black;
}
</style>
