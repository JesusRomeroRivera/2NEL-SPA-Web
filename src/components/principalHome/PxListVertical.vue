<template>
  <section class="flex flex-col gap-y-2">
    <article class="card flex" v-for="u in users" :key="u.name">
      <div class="p-6 border-box text-container">
        <h1>{{ u.name }}</h1>
        <p>{{ u.description.substring(0, 40) }}...</p>
        <small class="text-gray-700">De: {{ u.email }}</small>
      </div>
      <img :src="u.imageUrl" class="bg-gray-200" />
    </article>
  </section>
</template>
<script>
export default {
  props: ["users"],
  data() {
    return {
      userInformation: "",
    };
  },
};
</script>
<style scoped>
.text-container {
  width: 60%;
}
section {
  height: 50rem;
  overflow-y: scroll;
}
.card {
  min-height: 32.5%;
  align-items: center;
}
img {
  width: 40%;
  height: 15rem;
}
h1 {
  font-size: 2rem;
  font-family: var(--principal-font);
}
p {
  font-size: 1.4rem;
  font-family: var(--text-font);
  margin: 2rem 0;
}
small {
  font-size: 1.3rem;
  font-family: var(--text-font);
}
@media only screen and (max-width: 1024px) {
  .text-container {
    padding: 0.75rem !important;
  }
  h1 {
    font-size: 1.9rem;
  }
  p {
    font-size: 1.4rem;
    margin: 0.8rem 0;
  }
  small {
    font-size: 1.3rem;
  }
}
</style>
