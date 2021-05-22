const comCartItem = {
    props: ['product',],
    data() {
        return {
        };
    },
    template: `
            <div class="cart-box__cart">
                <p class="close"  @click="$emit('remove'), product"></p>
                <img class="cart-box__img" :src="product.img" alt="card">
                <div class="cart-box__cart__info">
                    <div class="cart-box__cart__h" @click="$root.selectProduct(product)">{{ product.product_name }}</div>
                    <p class="cart-box__cart__p">Price: <span>$ {{ product.price }}</span></p>
                    <p class="cart-box__cart__p">Color: {{ product.color }}</p>
                    <p class="cart-box__cart__p">Size: {{ product.size }}</p>
                    <label class="cart-box__cart__p ">Quantity:<input type="text" :value="product.quantity" :product="product"></label>
                </div>
            </div>
    `,
};

const comCartOrder = {
    data() {
        return {
	    apiCart: this.$root.$refs.comCart,
        };
    },
    components: { comCartItem },
    template: `
    <form class="cart-box center">
        <div class="cart-box__products">
            <com-cart-item ref="comCartItem" v-for="product of orderList" :key="product.id" :product="product" @remove="apiCart.remove(product)"></com-cart-item>
            <div class="cart-box__buttons">
                <input class="cart-box__button" type="button" value="CLEAR SHOPPING CART" @click="apiCart.removeAll()">
                <input class="cart-box__button" type="button" value="CONTINUE SHOPPING" @click="$root.currentComp = 'cart-order'">
            </div>
        </div>
        <div class="order__accept">
            <p class="order__adress">SHIPPING ADRESS</p>
            <input class="order__adress__input" type="text" value="Bangladesh" id="сcountry">
            <input class="order__adress__input" type="text" placeholder="State" id="state">
            <input class="order__adress__input" type="text" placeholder="Postcode / Zip" id="zip ">
            <input class="order__accept__quote" type="button" value="GET A QUOTE">
            <div class="order__summary">
                <p class="order__summary__p">SUB TOTAL<span class="ml-summary">$ {{this.summary}}</span></p>
                <p class="order__summary__h">SUB TOTAL<span class="ml-summary select">$ {{this.summary}}</span></p>
                <input class="order__button submit" type="submit" value="PROCEED TO CHECKOUT">
            </div>
        </div>
    </form>
    `,
    computed: {
	summary() {
		return this.orderList.reduce((sum, el) => sum += el.price * el.quantity, 0);
	},
	orderList() {
		return this.apiCart.cartList;		
	},
    },
    created() {
	this.orderList;
	this.apiCart.isCartVisible = false;
    }
};

export default comCartOrder;