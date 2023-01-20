<script >


export default{
    data(){
        return{
            movieList:[
                {
                    img:'1.jpg',
                    title: 'Hurry Animate Blue Strack New Movie',
                    category: 'Top Rating',
                    views: '381',
                    star: '0/10'
                },
                {
                    img: '2.jpg',
                    title: 'Quisque Auctor Movie In Strack',
                    category: 'Coming Soon',
                    views: '947',
                    star: '4/10'
                },
                {
                    img: '5.jpg',
                    title: 'New Movie Quisque In Strack',
                    category: 'Latest Movie',
                    views: '721',
                    star: '0/10'
                },
            ]
        }
    },
    methods:{
        prova(arr, old_index1, new_index1, old_index2, new_index2){
            this.array_move(arr, old_index1, new_index1);

            this.array_move(arr, old_index2, new_index2);
        },
        array_move(arr, old_index, new_index){
            if (new_index >= arr.length) { 
                var k = new_index - arr.length + 1; 
                while (k--) { 
                    arr.push(undefined); 
                } 
            }
            arr.splice(new_index, 0, arr.splice(old_index, 1)[0]); 
            return arr; 
            // for testing }; // returns [2, 1, 3] console.log(array_move([1, 2, 3], 0, 1)); 
        },
        getImagePath(imgPath) {
            return new URL(`../../assets/img/${imgPath}`, import.meta.url).href;
        }

    }
}



</script>

<template>
    <section>
        <div class="container py-5">
            <div class="row">
                <div class="col-11 mb-5 righe_testi">
                    <p class="m-0 mb-3 text-white">
                        <span class="fw-bold fs-5">New Movie</span>
                        <p class="m-0 text-white">Lorem Ipsum is simply dummy text of the printing and typesettin</p>
                    </p>
                </div>
                <div class="col-1 mb-5">
                    <p class="m-0 text-white text-end">
                        <font-awesome-icon class="cambioSlider" @click="array_move(movieList, 0 , 2, 1, 0)" icon="fa-solid fa-caret-left"/>
                        <font-awesome-icon class="cambioSlider" @click="array_move(movieList, 2 , 0, 1, 2)" icon="fa-solid fa-caret-right" />
                    </p>
                </div>
                <div v-for="movie,index in movieList" class="col-4 p-0" :class="index == 1 ? `div_centrale mt-4` : ``">
                    <img :src=getImagePath(movie.img) alt="1">
                    <p class="text-white m-0">
                        <font-awesome-icon class="stella" icon="fa-solid fa-star" />
                        {{movie.star}}
                    </p>
                    <h2 class="text-white m-0 scritta-up">
                        {{movie.title}}
                    </h2>
                    <h2 class="text-white m-0 scritta-down">
                        Category: {{movie.category}}
                    </h2>
                    <a href="#" class="bottone-left">Details</a>
                    <a href="#" class="bottone-right">{{movie.views}} Views</a>
                </div>
                <!-- <div class="col-4 p-0">
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
                </div> -->
            </div>
        </div>        
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
// div.col-10{
//     border-bottom: 1px solid $color_grey;
//     border-left: 2px solid $color_green;
// }

.stella{
    color: $color_green;
}
.cambioSlider{
    color: $color_green;
    border: 1px solid $color_grey;
    border-radius: 50%;
    padding: 0.5rem 0.75rem;
    margin-left: 0.5rem;

    cursor: pointer;
}

img{
    width: 100%;
    height: 100%;
    border-radius: 25px;
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

    a.bottone-left{
        filter: brightness(1);
    }

    a.bottone-right {
        filter: brightness(1);
    }
}

div.col-4{
    position: relative;
    height: 550px;
    margin-top: 60px;

    img{
        filter: brightness(0.3);
    }

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