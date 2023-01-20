<script>



</script>

<template>
    <section>
        <div class="container py-5 px-3">
            <div class="row">
                <div class="col-6">
                    <p class="text-white m-0">
                        <img src="../../assets/img/cropped-logo.png" alt="Logo">
                    </p>
                </div>
                <div class="col-6">
                    <p class="text-white text-end m-0">
                        <input type="text" placeholder="Search ...">
                        <a href="#" class="bottone">Search</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

    section{
        border-bottom: 1px solid $color_grey;
    }

    input{
        height: 53.5px;
        width: 300px;
        background-color: transparent;
        border: none;
        border-top: 1px solid $color_grey;
        border-bottom: 1px solid $color_grey;
    }

    a{
        text-decoration: none;
        color: $color_white;
    }


    .bottone{
        background-color: $color_green;
        padding: 1rem;

        &:hover{
            background-color: white;
            color: black;
        }
    }
</style>
