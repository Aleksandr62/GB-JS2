const comFilterItem = {
    props: ['item'],
    data(){
        return {
        }
    },
    template: `
    <ul class="filter__menu__list"><p class="filter__menu__title" @click="$emit('filter-select', group)">{{item.group}}</p>
        <li class="filter__menu__item" v-for="el of item.items" :key="el" :group="item.group" :item="item" @click="$emit('filter-select', group, el)">{{el}}</li>
    </ul>  
    `
};

const comFilterCat = {
    data() {
        return {
            filterItem: '',
	    filterList: [
			{ group: 'Category', 
			items: [
			'Accessories',
			'Bags',
			'Denim',
			'Hoodies & Sweatshirts',
			'Jackets & Coats',
			'Polos',
			'Shirts',
			'Shoes',
			'Sweaters & Knits',
			'T-Shirts',
			'Tanks',] },
			{ group: 'Brend', items: [], },
			{ group: 'Designer', items: [], },
			],
	    isVisibleFilterCat: false,
        };
    },
    components: { comFilterItem },
    template: `
        <div class="filter-cat">
            <div class="filter__button" @click="isVisibleFilterCat = !isVisibleFilterCat">FILTER<img class="filter__img" src="img/filter.svg" alt="filter"></div>
            <div class="filter__menu" v-show="isVisibleFilterCat">
                <div class="filter__button" expand @click="isVisibleFilterCat = !isVisibleFilterCat">FILTER<img class="filter__img" src="img/filter-rose.svg" alt="filter"></div>
		        <com-filter-item v-for="item of filterList" :key="item.group" :item="item" @filter-select="$root.change('catalog')"></com-filter-item>
            </div>
	</div>
	</div>
    `,
};

export default comFilterCat;