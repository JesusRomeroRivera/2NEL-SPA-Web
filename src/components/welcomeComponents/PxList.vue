<template>
  <section class="w-10/12 flex gap-x-4">
    <article class="card flex flex-col" v-for="u in users" :key="u.name">
      <img class="bg-gray-200" />
      <div class="p-8 w-full border-box text-container">
        <h1>{{ u.name }}</h1>
        <p class="my-8">{{ u.description }}</p>
        <small class="text-gray-700">De: {{ u.enterprise }}</small>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  props: ["users"],
  data() {
    return {
      buttonColor: "black",
    };
  },
  components: {},
};
</script>
<style scoped>
section {
  height: 38.5rem;
  overflow-x: scroll;
}
.card {
  height: 100%;
  min-width: 32.5%;
}
img {
  height: 20rem;
}
h1 {
  font-size: 2.5rem;
  font-family: var(--principal-font);
}
p {
  font-size: 1.6rem;
  font-family: var(--text-font);
}
small {
  font-size: 1.5rem;
  font-family: var(--text-font);
}
@media only screen and (max-width: 1024px) {
  h1 {
    font-size: 2.4rem;
    height: 6rem;
  }
  p {
    font-size: 1.5rem;
  }
  small {
    font-size: 1.4rem;
  }
}
@media only screen and (max-width: 768px) {
  .card {
    height: 100%;
    min-width: 50%;
  }
}
@media only screen and (max-width: 580px) {
  .card {
    height: 100%;
    min-width: 100%;
  }
  h1 {
    height: 3rem;
  }
}
</style>
