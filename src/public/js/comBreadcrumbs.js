const comPath = {
    props: ['link', 'isLast'],
    data() {
        return {
            delimiter: ' / ',
        }
    },
    template: `
    <div class="catalog-top__breadcrumbs">
        <div class="catalog-top__link" :class="{select: isLast}" @click="$root.change(link.path)">{{link.name}}</div><span > {{ delimiter }} </span>
    </div>
    `,
};

const comBreadcrumbs = {
    data() {
        return {
        }
    },
    components: { comPath },
    computed: {
        path: function () {
            return [{name: 'HOME', path: 'main',},
            {name: this.$root.currentPage.group, path: this.$root.currentPage.group,},
            {name: this.$root.currentPage.name, path: this.$root.currentPage.name,}]
        },
        headerPage: function () {
            if (this.$root.currentComp === 'registration') return 'REGISTRATION';
            if (this.$root.currentComp === 'product') return 'NEW ARRIVALS';
            if (this.$root.currentComp === 'catalog' && !this.$root.isMainPage) return 'NEW ARRIVALS';
            if (this.$root.currentComp === 'cart-order') return 'SHOPPING CART';
        },
    },
    mounted() {
    },
    template: `
<nav class="catalog-top center">
    <div class="catalog-top__header"><h3 class="catalog-top__article select">{{headerPage}}</h3></div>
    <com-path ref="comPath" v-for="link of path" :key="Math.floor(Math.random() * 10000)" :link="link" :isLast="path[path.length-1] === link"></com-path>
</nav>
    `,
};

export default comBreadcrumbs;