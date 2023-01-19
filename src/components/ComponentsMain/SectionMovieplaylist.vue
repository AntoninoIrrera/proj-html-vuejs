<script >



</script>

<template>
    <section>
        <div class="container py-5 px-3">
            <div class="row">
                <div class="col-11">
                    <p class="m-0 text-white">
                        Movie Playlist
                        <p class="text-white m-0">Lorem Ipsum is simply dummy text of the printing and typesettin</p>
                    </p>
                </div>
                <div class="col-8 mt-5 p-0">
                    <div class="sfondoYoutube w-100">
                        <div class="row w-100 m-0 h-100">
                            <div class="col-12 p-2">
                                <img class="icon_profile" src="../../assets/img/channels4_profile.jpg" alt="chnnelsLogo">
                                <p class="m-0 text-white d-inline-block ms-3">Yeh Saali Aashiqui | Official Trailer | Vardhan Puri, Shivaleek...</p>
                                <font-awesome-icon class="text-white clock fs-5" icon="fa-solid fa-clock" />
                                <font-awesome-icon class="text-white fs-5 share" icon="fa-solid fa-share" />
                                <span class="text-white guarda_tardi">Guarda più...</span>
                                <span class="text-white condividi">Condividi</span>
                            </div>
                            <div class="col-12 youtube text-white">
                                Guarda su 
                                <font-awesome-icon class="text-white" icon="fa-brands fa-youtube" />
                                Youtube
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 mt-5">
                    <div class="layer_laterale">
                        <div class="row linea_sotto">
                            <div class="col-12 text-white py-3 px-4">
                                New Movie
                                <p class="text-white m-0">plying 24</p>
                            </div>
                        </div>
                        <div class="row p-3">
                            <div class="col-4">
                                <img src="../../assets/img/2-1-100x100.jpg" alt="">
                            </div>
                            <div class="col-8">
                                <p class="text-white m-0">Quisque Auctor Movie in Strack</p>
                                <p class="text-white m-0">947 Views</p>
                                <p class="text-white m-0 d-inline-block">February 12, 2016</p>
                                <p class="text-white m-0 d-inline-block ms-3">2.30.00</p>
                            </div>
                            <div class="col-4 mt-4">
                                <img src="../../assets/img/5-100x100.jpg" alt="">
                            </div>
                            <div class="col-8 mt-4">
                                <p class="text-white m-0">New Movie Quisque in Strack</p>
                                <p class="text-white m-0">721 Views</p>
                                <p class="text-white m-0 d-inline-block">February 12, 2016</p>
                                <p class="text-white m-0 d-inline-block ms-3">2.30.00</p>
                            </div>
                            <div class="col-4 mt-4">
                                <img src="../../assets/img/3-100x100.jpg" alt="">
                            </div>
                            <div class="col-8 mt-4">
                                 <p class="text-white m-0">Movie Action Garila English</p>
                                <p class="text-white m-0">362 Views</p>
                                <p class="text-white m-0 d-inline-block">February 12, 2016</p>
                                <p class="text-white m-0 d-inline-block ms-3">2.30.00</p>
                            </div>
                            <div class="col-4 mt-4">
                                <img src="../../assets/img/3-1-100x100.jpg" alt="">
                            </div>
                            <div class="col-8 mt-4">
                                 <p class="text-white m-0">Action Garila English Movie</p>
                                <p class="text-white m-0">269 Views</p>
                                <p class="text-white m-0 d-inline-block">February 12, 2016</p>
                                <p class="text-white m-0 d-inline-block ms-3">2.30.00</p>
                            </div>
                            <div class="col-4 mt-4">
                                <img src="../../assets/img/4-1-100x100.jpg" alt="">
                            </div>
                            <div class="col-8 mt-4">
                                 <p class="text-white m-0">Quisque Auctor Movie in Strack</p>
                                <p class="text-white m-0">947 Views</p>
                                <p class="text-white m-0 d-inline-block">February 12, 2016</p>
                                <p class="text-white m-0 d-inline-block ms-3">2.30.00</p>
                            </div>
                            <div class="col-4 mt-4">
                                <img src="../../assets/img/2-1-100x100 (1).jpg" alt="">
                            </div>
                            <div class="col-8 mt-4">
                                 <p class="text-white m-0">Quisque Auctor Movie in Strack</p>
                                <p class="text-white m-0">947 Views</p>
                                <p class="text-white m-0 d-inline-block">February 12, 2016</p>
                                <p class="text-white m-0 d-inline-block ms-3">2.30.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

div.col-11{
    border-bottom: 1px solid $color_grey;
    border-left: 2px solid $color_green;
}

.linea_sotto{
    border-bottom: 1px solid $color_main;
}

.sfondoYoutube{
    background-color: black;
    height: 600px;
    position: relative;
}

.guarda_tardi{
    position: absolute;
    top: 40px;
    right: 200px;
}

.clock{
    margin-left: 8.5rem;
}
.share{
    margin-left: 9rem;
}
.condividi{
    position: absolute;
    top: 40px;
    right: 50px;
}
.icon_profile{
    border-radius: 50%;
    width: 40px;
}

.youtube{
    background-color: $color_grey;
    height: 50px;
    width: 180px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}
.layer_laterale{
    background-color: $color_grey;
    height: 600px;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>