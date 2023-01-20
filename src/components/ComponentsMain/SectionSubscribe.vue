<script >



</script>

<template>
    <section class="mb-5">
        <div class="container">
            <div class="row h-100">
                <div class="col-4 mt-5">
                    <p class="text-white m-0">
                        <input type="text" placeholder="First Name">
                    </p>
                </div>
                <div class="col-4 mt-5">
                    <p class="text-white m-0">
                        <input type="text" placeholder="Last Name">
                    </p>
                </div>
                <div class="col-4 mt-5">
                    <p class="text-white m-0">
                        <input type="text" placeholder="Email Address">
                    </p>
                </div>
                <div class="col-12">
                    <p class="text-white text-center m-0">
                        <a href="#" class="bottone">Subscribe</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

a{
    text-decoration: none;
    color: white;
}

input{
    background-color: $color_green;
    border: 1px solid white;
    padding: 1rem;
    width: 300px;
    border-radius: 25px;

}
.bottone{
    background-color: $color_main;
    padding: 1rem 2.5rem;
    border-radius: 25px;

    &:hover{
        background-color: white;
        color: black;
    }
}

div.col-4{
    align-self: center;
    text-align: center;
}
div.container{
    background-image: url(../../assets/img/form-bg-1.png);
    background-repeat: no-repeat;
    background-size: contain;
    height: 400px;
}
</style>