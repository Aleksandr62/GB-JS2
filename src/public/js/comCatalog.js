const productCard = {
  props: ['product'],
  data() {
    return {
      cartAPI: this.$root.$refs.comCart,
    }
  },
  template: `
  <div class="card">
    <div class="card__img">
      <img class="card__photo" :src="product.img" :alt="product.product_name"/>
      <div class="card__select">
        <div class="card__select__link" @click="cartAPI.addProduct(product)">
          <img
            class="card__select__img"
            src="img/cart.svg"
            alt="add_cart" />Add to Cart
          </div>
      </div>
    </div>
    <div class="card__heading" @click="$emit('sel-product', product)">{{product.product_name}}</div>
    <p class="card__descr">{{product.description}}</p>
    <p class="card__price">$ {{product.price}}</p>
  </div>
  `
};

const comCatalog = {
  data() {
    return {
      productsList: [],
      filtered: [],
    };
  },
  components: { productCard },
  methods: {
    filter(value) {
      let regexp = new RegExp(value, 'i');
      this.filtered = this.productsList.filter(el => regexp.test(el.product_name));
    }
  },
  mounted() {
    this.$root.getJson('/api/products')
      .then(data => {
        for (let el of data) {          
          this.productsList.push(Object.assign({img: `img/card-${el.id}.png`}, el));
          this.filtered.push(Object.assign({img: `img/card-${el.id}.png`}, el));
        }
      });
  },
  template: `
  <div class="catalog center" ref="comCatalog">
    <product-card ref="product-card" v-for="product of filtered" :key="product.id" :product="product" @sel-product="$root.selectProduct(product)"></product-card>
  </div>
  `,
};

export default comCatalog;