<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';




</script>

<template>
    <section>
        <div class="container p-4">
            <div class="row">
                <div class="col-6">
                    <p class="text-white m-0">
                        <ul class="d-flex justify-content-between list-unstyled">
                            <li>
                                Home
                                <font-awesome-icon class="navbar_header" icon="fa-solid fa-sort-down"/>
                            </li>
                            <li>
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
                            </li>
                        </ul>
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-white text-end m-0">
                        <font-awesome-icon icon="fa-solid fa-basket-shopping"/>
                        <span>0</span>
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

span{
    position: absolute;

    top: -15px;
    right: -5px;

    font-size: 0.7rem;
    background-color: $color_green;
    padding: 0.05rem 0.25rem;
    border-radius: 50%;
}

.navbar_header{
    vertical-align: top;
}


</style>
