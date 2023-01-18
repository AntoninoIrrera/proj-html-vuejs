<script >



</script>

<template>
    <section>
        <div class="container py-5 px-3">
            <div class="row">
                <div class="col-12">
                    <p class="m-0 text-white">prova</p>
                </div>
                <div class="col-8 mt-5">
                    <div class="prova"></div>
                </div>
                <div class="col-4 mt-5">
                    <div class="prova"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

div.col-12{
    border-bottom: 1px solid $color_grey;
}

.prova{
    background-color: red;
    width: 100%;
    height: 350px;
}

</style>