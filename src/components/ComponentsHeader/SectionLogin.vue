<script>



</script>

<template>
    <section>
        <div class="container p-3">
            <div class="row">
                <div class="col-6">
                    <p class="text-white m-0 d-inline-block">
                        <font-awesome-icon class="vertical_allign" icon="fa-regular fa-envelope"/>
                        Superhit Top Movie
                        <span>**King Star**</span>
                    </p>
                    <p class="text-white m-0 ms-5 d-inline-block">
                        <font-awesome-icon class="facebook ms-3" icon="fa-brands fa-facebook-f" />
                        <font-awesome-icon class="twitter ms-3" icon="fa-brands fa-twitter" />
                        <font-awesome-icon class="linkedin ms-3" icon="fa-brands fa-linkedin-in" />
                        <font-awesome-icon class="instagram ms-3" icon="fa-brands fa-instagram"/>
                    </p>
                    <font-awesome-icon class="google ms-3" icon="fa-brands fa-google-plus-g" />
                </div>
                <div class="col-6">
                    <p class="text-white text-end m-0">
                        <font-awesome-icon icon="fa-solid fa-lock" />
                        Login
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/variables' as *;

.vertical_allign{
    vertical-align: middle;
}

section{
    border-bottom: 1px solid $color_grey;
}

span{
    color: $color_green;
}
</style>
