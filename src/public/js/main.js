import comCart from './comCart'  // мини корзина - отображение при нажатии на кнопку
import comCartOrder from './comCartOrder' // открытие оформления ордера
import comCatalog from './comCatalog'
import comProduct from './comProduct'
import comBreadcrumbs from './comBreadcrumbs'
import comPromo from './comPromo' // выделил раздел, для возможности перекомпоновки и редактирования
import comAdvantages from './comAdvantages' // выделил раздел, для возможности перекомпоновки и редактирования
import comError from './comError'
import comMenu from './comMenu'
import comSale from './comSale' // выделил раздел, для возможности перекомпоновки и редактирования
import comRegistration from './comRegistration'
import comFilter from './comFilter' // фильтр основной в шапке
import comFilterCat from './comFilterCat' // фильтер в каталоге (выбор по брендам, типу и т.д.)
import comFooter from './comFooter' // выделил раздел, для возможности перекомпоновки и редактирования

const app = {
    el: '#app',
    data() {
        return {
            userSearch: '',
            currentComp: 'catalog',
            isMainPage: true,
            currentProduct: null,
            currentPage: {},
        };
    },
    components: {
        comCart,
        comCartOrder,
        comCatalog,
        comProduct,
        comBreadcrumbs,
        comPromo,
        comSale,
        comMenu,
        comAdvantages,
        comError,
        comFilter,
        comFilterCat,
        comRegistration,
        comFooter,
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.comError.setError(error);
                })
        },
        postJson(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.comError.setError(error);
                });
        },
        putJson(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.comError.setError(error);
                });
        },
        deleteJson(url, data) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(result => result.json())
                .catch(error => {
                    this.$refs.comError.setError(error);
                });
        },
        change(comp, group, el) {
            this.isMainPage = true;
            this.currentComp = comp;
            if (comp !== 'main') this.isMainPage = false;
            if (comp === 'main') this.currentComp = 'catalog';
            if(group) this.currentPage.group = group;
            if(el) this.currentPage.name = el;
        },
        selectProduct(product) {
            this.currentProduct = product;
            this.change('product');            
        },
    },
    computed: {
        currentComponent() {
            return  {comp: `com-${this.currentComp}`, 
                    name: `com${this.currentComp}`};
        },
    },
};

export default app;