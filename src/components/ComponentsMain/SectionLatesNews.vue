<script >

export default{
    data(){
        return{
            contatoreDisplayDate: -1,
            blogList:[
                {
                    img: 'blog2-570x570.jpg',
                    date: 'April 14, 2020',
                    text: 'Consequat Nam Lectus Nibh Aucibus It Has Turpis',
                },
                {
                    img: 'blog3-570x570.jpg',
                    date: 'April 14, 2020',
                    text: 'Nam Lectus Nibh Consequat Aucibus Turpis It Has',
                },
                {
                    img: 'blog4-570x570.jpg',
                    date: 'April 14, 2020',
                    text: 'Bring Me The Head Of Alfredo Garcia Best Movie In',
                },
                {
                    img: 'blog5-570x570.jpg',
                    date: 'April 14, 2020',
                    text: 'Pump Action Interaction English Action Movie (2020',
                },
            ]
        }
    },
    methods:{
        getImagePath(imgPath){
            return new URL(`../../assets/img/${imgPath}`, import.meta.url).href;
        }
    }
}


</script>

<template>
    <section>
        <div class="container py-5 px-3">
            <div class="row">
                <div class="col-12 righe_testi">
                    <p class="text-white m-0">
                        <span class="fw-bold fs-5">Latest News</span>
                        <p class="text-white m-0">Lorem Ipsum is simply dummy text of the printing and typesettin</p>
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
                <div class="col-6 mt-5 p-0">
                    <div class="row">
                        <div v-for="blog,index in blogList" :class="index > 1 ? `marginTop2rem` : ``, index < 2 ? `mt-0` : ``" class="col-6 g-4" @mouseover="this.contatoreDisplayDate = index" @mouseleave="this.contatoreDisplayDate = -1">
                            <img class="w-100 h-100" :src=getImagePath(blog.img) alt="blog">
                            <p :class="this.contatoreDisplayDate == index ? `` : `d-none`" class="m-0 text-white">{{blog.date}}</p>
                            <h2 class="text-white m-0 fs-5 scritta">
                                {{blog.text}}
                            </h2>
                            <a href="#" class="bottone-left">Details</a>
                            <a href="#" class="bottone-right">Share</a>
                        </div>
                        <!-- <div class="col-6 mt-0 g-4" @mouseover="this.contatoreDisplayDate = 1" @mouseleave="this.contatoreDisplayDate = 0">
                            <img class="w-100 h-100" src="../../assets/img/blog2-570x570.jpg" alt="blog">
                            <p :class="this.contatoreDisplayDate == 1 ? `` : `d-none`"  class="m-0 text-white">April 14, 2020</p>
                            <h2 class="text-white m-0 fs-5 scritta">
                                Consequat Nam Lectus Nibh Aucibus It Has Turpis  
                            </h2>
                            <a href="#" class="bottone-left">Details</a>
                            <a href="#" class="bottone-right">Share</a>
                        </div>
                        <div class="col-6 mt-0 g-4"  @mouseover="this.contatoreDisplayDate = 1" @mouseleave="this.contatoreDisplayDate = 0">
                            <img class="w-100 h-100" src="../../assets/img/blog3-570x570.jpg" alt="blog">
                            <p :class="this.contatoreDisplayDate == 1 ? `` : `d-none`"  class="m-0 text-white">April 14, 2020</p>
                            <h2 class="text-white m-0 fs-5 scritta">
                                Nam Lectus Nibh Consequat Aucibus Turpis It Has
                            </h2>
                            <a href="#" class="bottone-left">Details</a>
                            <a href="#" class="bottone-right">Share</a>
                        </div>
                        <div class="col-6 mt-5 g-4"  @mouseover="this.contatoreDisplayDate = 1" @mouseleave="this.contatoreDisplayDate = 0">
                            <img class="w-100 h-100" src="../../assets/img/blog4-570x570.jpg" alt="blog">
                            <p :class="this.contatoreDisplayDate == 1 ? `` : `d-none`"  class="m-0 text-white">April 14, 2020</p>
                            <h2 class="text-white m-0 fs-5 scritta">
                                Bring Me The Head Of Alfredo Garcia Best Movie In
                            </h2>
                            <a href="#" class="bottone-left">Details</a>
                            <a href="#" class="bottone-right">Share</a>
                        </div>
                        <div class="col-6 mt-5 g-4"  @mouseover="this.contatoreDisplayDate = 1" @mouseleave="this.contatoreDisplayDate = 0">
                            <img class="w-100 h-100" src="../../assets/img/blog5-570x570.jpg" alt="blog">
                            <p :class="this.contatoreDisplayDate == 1 ? `` : `d-none`"  class="m-0 text-white">April 14, 2020</p>
                            <h2 class="text-white m-0 fs-5 scritta">
                                Pump Action Interaction English Action Movie (2020
                            </h2>
                            <a href="#" class="bottone-left">Details</a>
                            <a href="#" class="bottone-right">Share</a>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

// div.col-12 {
//     border-bottom: 1px solid $color_grey;
//     border-left: 2px solid $color_green;
// }

img{
    filter: brightness(0.5);
}

.marginTop2rem{
    margin-top: 2rem;
}
div.col-6 {
    position: relative;
    

    h2 {
        font-size: 1.5rem;
    }

    p{
        position: absolute;
        top: 15px;
        right: 12px;

        font-size: 0.8rem;

        background-color: $color_green;
        padding: 0.5rem 1rem;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
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
        left: 0;

        text-decoration: none;
        background-color: $color_main;
        padding: 0.5rem 1rem;
        border-top-right-radius: 25px;
        border-bottom-right-radius: 25px;
        width: 85px;
        text-align: end;
    }

    a.bottone-right {
        position: absolute;
        color: white;
        bottom: 30px;
        right: 20px;

        text-decoration: none;
        padding: 0.5rem 1rem;
        
    }
}
</style>