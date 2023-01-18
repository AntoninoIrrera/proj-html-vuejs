<script >



</script>

<template>
    <section>
        <div class="container py-5 px-3">
            <div class="row">
                <div class="col-12">
                    <p class="text-white m-0">prova</p>
                </div>
                <div class="col-6 mt-5">
                    <div class="provaPlus mt-4"></div>
                </div>
                <div class="col-6 mt-5">
                    <div class="row">
                        <div class="col-6 g-4">
                            <div class="prova"></div>
                        </div>
                        <div class="col-6 g-4">
                            <div class="prova"></div>
                        </div>
                        <div class="col-6 g-4">
                            <div class="prova"></div>
                        </div>
                        <div class="col-6 g-4">
                            <div class="prova"></div>
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
}

.provaPlus {
    background-color: red;
    width: 100%;
    height: 525px;
}

.prova {
    background-color: red;
    width: 100%;
    height: 250px;
}
</style>