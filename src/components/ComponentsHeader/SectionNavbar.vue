<script>

    export default{
        data(){
            return{
                contatoreDisplayNavbar: -1,
                navList:[
                    {
                        title: 'Home',
                        clickList: [
                            'Home',
                            'Home',
                            'Home',
                            'Home',
                            'Home',
                            'Home',
                        ]
                    },
                    {
                        title: 'Celebrity',
                        clickList: [
                            'Celebrity',
                            'Celebrity',
                            'Celebrity',
                            'Celebrity',
                            'Celebrity',
                            'Celebrity',
                        ]
                    },
                    {
                        title: 'Movie',
                        clickList: [
                            'Movie',
                            'Movie',
                            'Movie',
                            'Movie',
                            'Movie',
                            'Movie',
                        ]
                    },
                    {
                        title: 'Page',
                        clickList: [
                            'Page',
                            'Page',
                            'Page',
                            'Page',
                            'Page',
                            'Page',
                        ]
                    },
                    {
                        title: 'Shop',
                        clickList: [
                            'Shop',
                            'Shop',
                            'Shop',
                            'Shop',
                            'Shop',
                            'Shop',
                        ]
                    },
                    {
                        title: 'Blog',
                    },
                    {
                        title: 'Contact Us',
                    },
                ]
            }
        }
    }



</script>

<template>
    <section>
        <div class="container p-4">
            <div class="row">
                <div class="col-6">
                    <p class="text-white m-0">
                        <ul class="d-flex justify-content-between list-unstyled">
                            <li v-for="element,index in navList" @click="this.contatoreDisplayNavbar = index" class="position-relative">
                                <span :class="this.contatoreDisplayNavbar == index ? index > 4 ? `` : `active` : ``">
                                    {{element.title}}
                                </span>
                                <font-awesome-icon :class="index > 4 ? `d-none` : ``, this.contatoreDisplayNavbar == index ? `active` : ``" class="navbar_header" icon="fa-solid fa-sort-down"/>
                                <ul :class="this.contatoreDisplayNavbar == index ? `` : `d-none`, index > 4 ? `d-none` : ``" @mouseleave="this.contatoreDisplayNavbar = -1" class="list-unstyled position-absolute">
                                    <li v-for="click,index in element.clickList">
                                        {{click}}
                                        <span :class="index == 0 ? `d-none` : ``">{{ index + 1 }}</span>
                                    </li>
                                    <!-- <li>
                                        Home 2
                                    </li>
                                    <li>
                                        Home 3
                                    </li>
                                    <li>
                                        Home 4
                                    </li>
                                    <li>
                                        Home 5
                                    </li>
                                    <li>
                                        Home 6
                                    </li> -->
                                </ul>
                            </li>
                            <!-- <li>
                                Celebrity
                                <font-awesome-icon class="navbar_header" icon="fa-solid fa-sort-down"/>
                            </li>
                            <li>
                                Movie
                                <font-awesome-icon class="navbar_header" icon="fa-solid fa-sort-down"/>
                            </li>
                            <li>
                                Page
                                <font-awesome-icon class="navbar_header" icon="fa-solid fa-sort-down"/>
                            </li>
                            <li>
                                Shop
                                <font-awesome-icon class="navbar_header" icon="fa-solid fa-sort-down"/>
                            </li>
                            <li>
                                Blog
                            </li>
                            <li>
                                Contact Us
                            </li> -->
                        </ul>
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-white text-end m-0">
                        <font-awesome-icon icon="fa-solid fa-basket-shopping"/>
                        <span class="element_carello">0</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

p{
    position: relative;
}

li{
    cursor: pointer;
}

.element_carello{
    position: absolute;

    top: -15px;
    right: -5px;

    font-size: 0.7rem;
    background-color: $color_green;
    padding: 0.05rem 0.25rem;
    border-radius: 50%;
}

.active{
    color: $color_green;
}
.navbar_header{
    vertical-align: top;
}

ul.position-absolute{

    background-color: $color_main;
    width: 180px;
    padding: 0.5rem;

    left: -15px;
    bottom: -280px;
    z-index: 2;

    li{
        padding: 0.5rem;
    }
}
</style>
