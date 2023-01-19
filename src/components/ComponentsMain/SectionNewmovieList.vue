<script >



</script>

<template>
    <section>
        <div class="container py-5 px-3">
            <div class="row">
                <div class="col-11">
                    <p class="text-white m-0">
                        New Movie
                        <p class="text-white m-0">Lorem Ipsum is simply dummy text of the printing and typesettin</p>
                    </p>
                </div>
                <div class="col-10 mt-5">
                    <p class="text-white m-0">
                        <ul class="d-flex justify-content-start list-unstyled text-white">
                            <li class="ms-4">All</li>
                            <li class="ms-4">Comin Soon</li>
                            <li class="ms-4">Latest Movie</li>
                            <li class="ms-4">Top Rating</li>
                            <li class="ms-4">TV Series</li>
                        </ul>
                    </p>
                </div>
                <div class="col-4 mt-5">
                    <img src="../../assets/img/1.jpg" alt="1">
                    <p class="text-white m-0">
                        <font-awesome-icon class="stella" icon="fa-solid fa-star" />
                        0/10
                    </p>
                    <h2 class="text-white m-0 scritta-up">
                        Hurry Animate Blue Strack New Movie
                    </h2>
                    <h2 class="text-white m-0 scritta-down">
                        Category: Top Rating
                    </h2>
                    <a href="#" class="bottone-left">Details</a>
                    <a href="#" class="bottone-right">381 Views</a>
                </div>
                <div class="col-4 mt-5">
                    <img src="../../assets/img/5-1.jpg" alt="5-1">
                     <p class="text-white m-0">
                        <font-awesome-icon class="stella" icon="fa-solid fa-star" />
                        0/10
                    </p>
                    <h2 class="text-white m-0 scritta-up">
                        Animate Blue Strack New Movie
                    </h2>
                    <h2 class="text-white m-0 scritta-down">
                        Category: Latest Movie
                    </h2>
                    <a href="#" class="bottone-left">Details</a>
                    <a href="#" class="bottone-right">343 Views</a>
                </div>
                <div class="col-4 mt-5">
                    <img src="../../assets/img/3.jpg" alt="3">
                     <p class="text-white m-0">
                        <font-awesome-icon class="stella" icon="fa-solid fa-star" />
                        0/10
                    </p>
                    <h2 class="text-white m-0 scritta-up">
                        Blue Strack New Animate Movie
                    </h2>
                    <h2 class="text-white m-0 scritta-down">
                        Category: Coming Soon
                    </h2>
                    <a href="#" class="bottone-left">Details</a>
                    <a href="#" class="bottone-right">420 Views</a>
                </div>
                <div class="col-4 mt-5">
                    <img src="../../assets/img/4.jpg" alt="4">
                     <p class="text-white m-0">
                        <font-awesome-icon class="stella" icon="fa-solid fa-star" />
                        0/10
                    </p>
                    <h2 class="text-white m-0 scritta-up">
                        Nulla Strack New Animate Movie
                    </h2>
                    <h2 class="text-white m-0 scritta-down">
                        Category: TV Series
                    </h2>
                    <a href="#" class="bottone-left">Details</a>
                    <a href="#" class="bottone-right">324 Views</a>
                </div>
                <div class="col-4 mt-5">
                    <img src="../../assets/img/3 (1).jpg" alt="3">
                     <p class="text-white m-0">
                        <font-awesome-icon class="stella" icon="fa-solid fa-star" />
                        1/10
                    </p>
                    <h2 class="text-white m-0 scritta-up">
                        Quisque In Strack New Movie
                    </h2>
                    <h2 class="text-white m-0 scritta-down">
                        Category: Top Rating
                    </h2>
                    <a href="#" class="bottone-left">Details</a>
                    <a href="#" class="bottone-right">339 Views</a>
                </div>
                <div class="col-4 mt-5">
                    <img src="../../assets/img/2.jpg" alt="2">
                     <p class="text-white m-0">
                        <font-awesome-icon class="stella" icon="fa-solid fa-star" />
                        0/10
                    </p>
                    <h2 class="text-white m-0 scritta-up">
                        New Movie Quisque In Strack
                    </h2>
                    <h2 class="text-white m-0 scritta-down">
                        Category: Latest Movie
                    </h2>
                    <a href="#" class="bottone-left">Details</a>
                    <a href="#" class="bottone-right">503 Views</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

div.col-11 {
    border-bottom: 1px solid $color_grey;
    border-left: 2px solid $color_green;
}

li:nth-child(1){
    color: $color_green;
}

.stella {
    color: $color_green;
}

img{
    width: 100%;
    height: 100%;
    filter: brightness(0.5);
}
div.col-4 {
    position: relative;
    height: 550px;

    p {
        position: absolute;
        top: 35px;
        right: 40px;
    }

    h2{
        font-size: 1.5rem;
    }
    h2.scritta-up {
        position: absolute;
        left: 25px;
        bottom: 175px;
    }

    h2.scritta-down {
        position: absolute;
        left: 25px;
        bottom: 125px;
    }

    a.bottone-left {
        position: absolute;
        color: white;
        bottom: 55px;
        left: -15px;

        text-decoration: none;
        background-color: $color_main;
        padding: 0.5rem 1rem;
        border-radius: 25px;
        width: 100px;
        text-align: end;
    }

    a.bottone-right {
        position: absolute;
        color: white;
        bottom: 55px;
        right: -10px;

        text-decoration: none;
        background-color: $color_main;
        padding: 0.5rem 1rem;
        border-radius: 25px;
        width: 120px;
    }
}
</style>