<template>
  <div class="container">
    <header class="header center"></header>
    <section class="promo"></section>
    <section class="sale center"></section>
    <section class="product-section center">
      <catalog-products></catalog-products>
    </section>
    <section class="advantages center"></section>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import catalogProducts from './catalogProducts'
module.exports = {
  data() {
    return {
      userSearch: "",
    };
  },
  components: {
      catalogProducts,
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then((result) => result.json())
        .catch((error) => {
          this.$refs.error.setError(error);
        });
    },
    postJson(url, data) {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => {
          this.$refs.error.setError(error);
        });
    },
    putJson(url, data) {
      return fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => {
          this.$refs.error.setError(error);
        });
    },
    deleteJson(url, data) {
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((result) => result.json())
        .catch((error) => {
          this.$refs.error.setError(error);
        });
    },
  },
};
</script>


