<template>
  <div class="product-section__cards">
    <product
      ref=""
      v-for="item of filtered"
      :key="item.id_product"
      :img="imgCatalog"
      :product="item"
    ></product>
  </div>
</template>

<script>
module.exports = {
      data(){
        return {
            productsList: [],
            filtered: [],
        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.productsList.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson('/api/products')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
};
</script>

<style lang="sass" scoped>
.product-section
    &__cards
        padding-top: 48px
        padding-bottom: 48px
        display: flex
        justify-content: center
        flex-wrap: wrap

</style>