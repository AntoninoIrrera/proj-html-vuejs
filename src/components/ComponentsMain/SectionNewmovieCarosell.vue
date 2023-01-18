<script >



</script>

<template>
    <section>
        <div class="container py-5 px-3">
            <div class="row">
                <div class="col-10">
                    <p class="m-0 text-white">prova</p>
                </div>
                <div class="col-2">
                    <p class="m-0 text-white text-end">prova</p>
                </div>
                <div class="col-12 mt-5 d-flex justify-content-between">
                    <div class="prova"></div>
                    <div class="prova"></div>
                    <div class="prova"></div>
                </div>
            </div>
        </div>        
    </section>
</template>

<style lang="scss" scoped>

@use '../../styles/partials/variables' as *;
div.col-10{
    border-bottom: 1px solid $color_grey;
}

.prova{
    background-color: red;
    width: 30%;
    height: 350px;
}

</style>