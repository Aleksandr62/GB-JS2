const menuItem = {
    props: ['item'],
    data(){
        return {
        }
    },
    template: `
    <ul class="menu__item"><p class="menu__item__group" @click="$emit('menu-select', group)">{{item.group}}</p>
        <li class="menu__item__link" v-for="el of item.items" :key="el" :group="item.group" :item="item" @click="$root.change('catalog', item.group, el)">{{el}}</li>
    </ul>  
    `
};

const comMenu = {
    data() {
        return {
            productsList: [],
            filtered: [],
            menuList: [
                {group: 'Man', 
                items: ['Accessories', 'Bags', 'Denim', 'T-Shirts',]},
                {group: 'Woman', 
                items: ['Accessories', 'Jackets & Coats', 'Polos', 'T-Shirts', 'Shirts',]},
                {group: 'Kids', 
                items: ['Accessories', 'Jackets & Coats', 'Polos', 'T-Shirts', 'Shirts', 'Bags',]},
            ],
            isVisible: false,
        };
    },
    components: { menuItem },
    template: `
    <div class="menu-box" >
        <img src="img/menu.svg" alt="menu" @click="isVisible = !isVisible">
        <div class="back-filter" v-if="isVisible" @click="isVisible = !isVisible"></div>
        <div class="menu" v-show="isVisible">
        <span class="close" @click="isVisible = !isVisible"></span>
            <p class="menu__header">MENU</p>
            <menu-item v-for="item of menuList" :key="item.group" :item="item" ></menu-item>
        </div>
    </div>
    `,
};
export default comMenu;
