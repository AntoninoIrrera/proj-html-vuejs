<script >

export default{
    data(){
        return{
            indexJumbo: 0,
        }
    },
}


</script>

<template>
    <section :class="indexJumbo == 1 ? `secondoJumbo` : `primoJumbo`">
        <p class="m-0 text-white text-center testo_centrale">
            <p>Welcome To Our Movie Site</p>
            <h1>OUR SPECIAL <span>MOVIES</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown</p>
            <a href="#" class="bottone">Read More</a>
        </p>
        <p class="m-0 bottone_laterale" @click="indexJumbo == 1 ? indexJumbo = 0 : indexJumbo++">
            <font-awesome-icon icon="fa-solid fa-angle-up"/>
        </p>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.primoJumbo{
    background-image: url(../../assets/img/slider.jpg);
}

.secondoJumbo{
    background-image: url(../../assets/img/slider-2.jpg);
}

section{
    background-repeat: no-repeat;
    background-size: cover;
    height: 75vh;
    position: relative;
}

a{
    text-decoration: none;
    color: $color_white;
}
.testo_centrale{
    position: absolute;
    width: 450px;
    left: 50%;
    top: 30%;
}

.bottone{
    background-color: $color_green;
    padding: 0.5rem 1rem;
    border-radius: 25px;

    &:hover{
        background-color: white;
        color: black;
    }

}

span{
    color: $color_green;
}

.bottone_laterale{
    position: absolute;
    bottom: 60px;
    right: 75px;

    background-color: $color_white;
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
}
</style>