<template>
  <button
    @click="buttonClick"
    class="button"
    :class="
      this.color == 'black'
        ? 'black'
        : this.color == 'white'
        ? 'white'
        : 'withBorder'
    "
    type="button"
  >
    <p>
      <slot></slot>
    </p>
  </button>
</template>

<script>
export default {
  name: "PxButton",

  props: {
    color: String,
  },

  methods: {
    buttonClick() {
      this.$emit("custom-click");
    },
  },
};
</script>
<style scoped>
.button {
  font-family: var(--principal-font);
  padding: 0.9rem 4.5rem;
  border: 0;
  border-radius: 3rem;
}
.black {
  background-color: black;
  color: white;
}
.withBorder {
  background-color: white;
  color: black;
  border: 3px solid black;
}
.white {
  background-color: white;
  color: black;
}
</style>
