<script >



</script>

<template>
    <section>
        <div class="container py-5 px-3">
            <div class="row">
                <div class="col-12">
                    <p class="text-white m-0">
                        Latest News
                        <p class="text-white m-0">Lorem Ipsum is simply dummy text of the printing and typesettin   </p>
                    </p>
                </div>
                <div class="col-6 p-0 pe-3 mt-5">
                    <img class="w-100 h-100" src="../../assets/img/blog-570x570.jpg" alt="blog">
                    <h2 class="text-white m-0 scritta">
                        Actor The Concept Movie High Concept Theory See The Post 
                    </h2>
                    <a href="#" class="bottone-left">Details</a>
                    <a href="#" class="bottone-right">moviestar 0 comment Share</a>
                </div>
                <div class="col-6 mt-5">
                    <div class="row">
                        <div class="col-6 mt-0 g-4">
                            <img class="w-100 h-100" src="../../assets/img/blog2-570x570.jpg" alt="">
                            <h2 class="text-white m-0 fs-5 scritta">
                                Consequat Nam Lectus Nibh Aucibus It Has Turpis  
                            </h2>
                            <a href="#" class="bottone-left">Details</a>
                            <a href="#" class="bottone-right">Share</a>
                        </div>
                        <div class="col-6 mt-0 g-4">
                            <img class="w-100 h-100" src="../../assets/img/blog3-570x570.jpg" alt="">
                            <h2 class="text-white m-0 fs-5 scritta">
                                Nam Lectus Nibh Consequat Aucibus Turpis It Has
                            </h2>
                            <a href="#" class="bottone-left">Details</a>
                            <a href="#" class="bottone-right">Share</a>
                        </div>
                        <div class="col-6 mt-5 g-4">
                            <img class="w-100 h-100" src="../../assets/img/blog4-570x570.jpg" alt="">
                            <h2 class="text-white m-0 fs-5 scritta">
                                Bring Me The Head Of Alfredo Garcia Best Movie In
                            </h2>
                            <a href="#" class="bottone-left">Details</a>
                            <a href="#" class="bottone-right">Share</a>
                        </div>
                        <div class="col-6 mt-5 g-4">
                            <img class="w-100 h-100" src="../../assets/img/blog5-570x570.jpg" alt="">
                            <h2 class="text-white m-0 fs-5 scritta">
                                Pump Action Interaction English Action Movie (2020
                            </h2>
                            <a href="#" class="bottone-left">Details</a>
                            <a href="#" class="bottone-right">Share</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

div.col-12 {
    border-bottom: 1px solid $color_grey;
    border-left: 2px solid $color_green;
}

img{
    filter: brightness(0.5);
}

div.col-6 {
    position: relative;

    

    h2 {
        font-size: 1.5rem;
    }

   

    h2.scritta {
        position: absolute;
        left: 25px;
        bottom: 100px;
        width: 80%;
    }

    a.bottone-left {
        position: absolute;
        color: white;
        bottom: 30px;
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
        bottom: 30px;
        right: 20px;

        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 25px;
    }
}
</style>