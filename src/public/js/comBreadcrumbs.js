import eventBus from './eventBus' // шина событий

const comPath = {
    props: ['link', 'isLast'],
    data() {
        return {
        }
    },
    template: `
    <div class="catalog-top__breadcrumbs">
        <div class="catalog-top__link" :class="{select: isLast}" @click="$root.change(link.path)">{{link.name}}</div><span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
    </div>
    `,
};

const comBreadcrumbs = {
    data() {
        return {
            path: null,
        }
    },
    components: { comPath },
    computed: {

        headerPage: function () {
            if (this.$root.currentComp === 'registration') return 'REGISTRATION';
            if (this.$root.currentComp === 'product') return 'NEW ARRIVALS';
            if (this.$root.currentComp === 'catalog' && !this.$root.isMainPage) return 'NEW ARRIVALS';
            if (this.$root.currentComp === 'cart-order') return 'SHOPPING CART';
        },
    },
    created() {
          eventBus.$on('breadcrumbs-item', (group, el) => {
            this.path = [{name: 'HOME', path: 'main',},
                {name: group, path: group,},
                {name: el, path: el,}]
          });      
      },
    template: `
<nav class="catalog-top center">
    <div class="catalog-top__header"><h3 class="catalog-top__article select">{{headerPage}}</h3></div>
    <com-path ref="comPath" v-for="link of path" :key="Math.floor(Math.random() * 10000)" :link="link" :isLast="path[path.length-1] === link"></com-path>
</nav>
    `,
};

export default comBreadcrumbs;
