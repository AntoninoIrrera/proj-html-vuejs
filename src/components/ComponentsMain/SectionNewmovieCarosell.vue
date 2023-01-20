<script >



</script>

<template>
    <section>
        <div class="container py-5 px-3">
            <div class="row">
                <div class="col-10 mb-5">
                    <p class="m-0 text-white">
                        New Movie
                        <p class="m-0 text-white">Lorem Ipsum is simply dummy text of the printing and typesettin</p>
                    </p>
                </div>
                <div class="col-2 mb-5">
                    <p class="m-0 text-white text-end">
                        <font-awesome-icon class="cambioSlider" icon="fa-solid fa-caret-left"/>
                        <font-awesome-icon class="cambioSlider" icon="fa-solid fa-caret-right" />
                    </p>
                </div>
                <div class="col-4 p-0">
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
                <div class="col-4 mt-4 p-0 div_centrale">
                    <img src="../../assets/img/2.jpg" alt="2">
                    <p class="text-white m-0">
                        <font-awesome-icon class="stella" icon="fa-solid fa-star" />
                        4/10
                    </p>
                    <h2 class="text-white m-0 scritta-up">
                        Quisque Auctor Movie In Strack
                    </h2>
                    <h2 class="text-white m-0 scritta-down">
                        Category: Coming Soon
                    </h2>
                    <a href="#" class="bottone-left">Details</a>
                    <a href="#" class="bottone-right">947 Views</a>
                </div>
                <div class="col-4 p-0">
                    <img src="../../assets/img/5.jpg" alt="5">
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
                    <a href="#" class="bottone-right">721 Views</a>
                </div>
            </div>
        </div>        
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
div.col-10{
    border-bottom: 1px solid $color_grey;
    border-left: 2px solid $color_green;
}

.stella{
    color: $color_green;
}
.cambioSlider{
    color: $color_green;
    border: 1px solid $color_grey;
    border-radius: 50%;
    padding: 0.5rem 0.75rem;
    margin-left: 0.5rem;
}

img{
    width: 100%;
    height: 100%;
    border-radius: 25px;
    filter: brightness(0.3);
}

div.col-4.div_centrale{
    height: 650px;
    z-index: 1;

    img{
        filter: brightness(0.6);
    }

    h2.scritta-up{
        filter: brightness(1);
    }

    h2.scritta-down {
        filter: brightness(1);
    }

    p{
        filter: brightness(1);
    }
}

div.col-4{
    position: relative;
    height: 550px;
    margin-top: 60px;


    p{
        position: absolute;
        top: 35px;
        right: 25px;
        filter: brightness(0.3);
    }

    h2.scritta-up{
        position: absolute;
        left: 25px;
        bottom: 175px;
        filter: brightness(0.3);
        font-size: 1.2rem;
    }

    h2.scritta-down {
        position: absolute;
        left: 25px;
        bottom: 125px;
        filter: brightness(0.3);
        font-size: 1.2rem;
    }
    a.bottone-left{
        position: absolute;
        color: white;
        bottom: 20px;
        left: 0;

        text-decoration: none;
        background-color: $color_main;
        padding: 0.5rem 1rem;
        border-bottom-right-radius: 25px;
        border-top-right-radius: 25px;
        width: 80px;
        text-align: end;
        filter: brightness(0.3);
    }

    a.bottone-right {
        position: absolute;
        color: white;
        bottom: 20px;
        right: 0;

        text-decoration: none;
        background-color: $color_main;
        padding: 0.5rem 1rem;
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
        width: 110px;
        filter: brightness(0.3);
    }
}
</style>