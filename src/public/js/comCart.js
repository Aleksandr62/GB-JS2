const comCartM = {
    props: ['product',],
    data() {
        return {
        };
    },
    template: `
            <div class="cart-box__cart">
                <p class="close" @click="$root.$refs.comCart.remove(product)"></p>
                <img class="cart-box__img" :src="product.img" alt="card">
                <div class="cart-box__cart__info" mini >
                    <div class="cart-box__cart__h" mini @click="$root.selectProduct(product)" :product="product">{{ product.product_name }}</div>	
                    <p class="cart-box__cart__p" mini>Price: <span>$ {{ product.price }}</span></p>
                    <p class="cart-box__cart__p" mini>Color: {{ product.color }}</p>
                    <p class="cart-box__cart__p" mini>Size: {{ product.size }}</p>
                    <label class="cart-box__cart__p " mini>Quantity:<input type="text" :value="product.quantity" :product="product"></label>
                </div>
            </div>
    `,
};

const comCart = {
    data() {
        return {
            cartList: [],
            isCartVisible: false,
        };
    },
    components: { comCartM, },
     methods: {
        addProduct(product) {
            let find = this.cartList.find(el => el.id === product.id);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id}`, {
                    find,
                    quantity: 1
                })
                    .then(data => {
                        if (data.result === 1) find.quantity++;
                    });
            } else {
                let prod = Object.assign({
                    quantity: 1
                }, product);
                this.$parent.postJson('/api/cart', prod)
                    .then(data => {
                        if (data.result === 1) this.cartList.push(prod);
                    });
            }
        },
        remove(item) {
            let find = this.cartList.find(el => el.id === item.id);
            if (find.quantity > 1) {
                this.$parent.putJson(`/api/cart/${find.id}`, {
                    find,
                    quantity: -1
                })
                    .then(data => {
                        if (data.result === 1) find.quantity--;
                    });
            } else {
                this.$parent.deleteJson(`/api/cart/${find.id}`, item)
                    .then(data => {
                        if (data.result === 1) {
                            this.cartList.splice(this.cartList.indexOf(item), 1);
                        }
                    });
            }
        },
        removeAll() {
            this.$parent.putJson(`/api/cart/all`, this.cartList)
                .then(data => {
                    if (data.result === 1) this.cartList = [];
                });

        },
    },
    computed: {
        summary() {
            return this.cartList.reduce((sum, el) => sum += el.price * el.quantity, 0);
        }
    },
    mounted() {
        this.$parent.getJson('/api/cart')
            .then(data => {
                for (let el of data) {
                    this.cartList.push(el);
                }
            });
    },
    template: `
    <div>
    <img class="header__right__link" src="img/cart.svg " alt="cart" @click="isCartVisible = !isCartVisible">
    <div class="back-filter" v-if="isCartVisible" @click="isCartVisible = !isCartVisible"></div>
    <form class="cart-box center" mini v-show="isCartVisible">
        <div class="cart-box__products">
            <com-cart-m ref="comCartM" mini v-for="product of cartList" :key="product.id * Math.floor(Math.random() * 100)" :product="product"></com-cart-m>
            <div class="cart-box__buttons" mini>
                <p class="cart-box__summary__p">SUB TOTAL<span>$ {{this.summary}}</span></p>
                <input class="cart-box__button" mini type="button" value="CLEAR SHOPPING CART" @click="removeAll()">
                <input class="cart-box__button" mini type="button" value="CONTINUE SHOPPING" @click="$root.change('cart-order')">
            </div>
        </div>
    </form>
    </div>
    `,
};

export default comCart;