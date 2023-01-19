<script >



</script>

<template>
    <section>
        <p class="m-0 text-white text-center testo_centrale">
            <h2><span>COMING SOON MOVIE</span></h2>
            <h1>MAX STILL</h1>  
            <div class="riquadro">
                <h2>JON PLAYER <span>&</span> EMILY ROSE</h2>
                <h2>THE COUNTDOWN IS FINISHED!</h2>
            </div>
        </p>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

    section {
        background-image: url(../../assets/img/coming-bg.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top;
        height: 75vh;
        position: relative;
    }

    span{
        color: $color_green;
    }

    h2{
        font-size: 1.5rem;
    }

    .riquadro{
        background-color: $color_main;
        padding: 1rem;
    }
    .testo_centrale {
        position: absolute;
        left: 50%;
        top: 30%;
    }
</style>