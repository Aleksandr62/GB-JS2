import eventBus from './eventBus' // шина событий

const comFilter = {
    data(){
        return {
            searchTxt: '',
            isVisibleInp: false,
            apiCatalog: this.$root.$refs.comCatalog,
        }
    },
    methods: {
        search(items) {
            eventBus.$emit('filter-main', items);
        },
    },
    template: `
            <form action="#" class="search-form" @input="search(searchTxt)">
                <input type="text" class="search__fld" :class="{ search__hide : !isVisibleInp, search__vsbl : isVisibleInp }" v-model="searchTxt">
                <button class="search__btn" type="submit" @mouseover="isVisibleInp = true" @click="isVisibleInp = false">
                    <img class="search__img" src="img/search.svg" alt="search">
                </button>
            </form>
    `
};
export default comFilter;
