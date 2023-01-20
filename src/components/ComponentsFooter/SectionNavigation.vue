<script >


</script>

<template>
    <section>
        <div class="container py-5 px-3">
            <div class="row">
                <div class="col-3">
                    <p class="text-white m-0">
                        <ul class="text-white list-unstyled">
                            <li class="fw-bold fs-5">About Us</li>
                            <li class="riga m-0 mb-5"></li>
                            <li>Mauris malesuada arcu eu posuere eleifen. Ut egestas tortor at leo egestas tincidunt. Nan tincidunt metus tristique tristique viverra. Mauris erat ante, egestas vitae dapibus seds.</li>
                            <li>
                                <font-awesome-icon class="cerchio_facebook me-3" icon="fa-brands fa-facebook-f" />
                                <font-awesome-icon class="cerchio_twitter me-3" icon="fa-brands fa-twitter" />
                                <font-awesome-icon class="cerchio_linkedim me-3" icon="fa-brands fa-linkedin-in" />
                                <font-awesome-icon class="cerchio_instagram me-3" icon="fa-brands fa-instagram" />
                                <font-awesome-icon class="cerchio_pinterest me-3" icon="fa-brands fa-pinterest" />
                            </li>
                        </ul>
                    </p>
                </div>
                <div class="col-3">
                    <p class="text-white m-0">
                        <ul class="text-white list-unstyled">
                            <li class="fw-bold fs-5">Movie Category</li>
                            <li class="riga m-0 mb-5"></li>
                            <li>English New Movie</li>
                            <li>Hindi All Movie</li>
                            <li>Latest Tamil Movie</li>
                            <li>New Top Rating Movie</li>
                            <li>Hornn New Movie</li>
                            <li>Animation New Movie</li>
                        </ul>
                    </p>
                </div>
                <div class="col-3">
                    <p class="text-white m-0">
                        <ul class="text-white list-unstyled">
                            <li class="fw-bold fs-5">Information</li>
                            <li class="riga m-0 mb-5"></li>
                            <li>Youtube Video Post</li>
                            <li>Action Information</li>
                            <li>New Promotion</li>
                            <li>Latest Movie In English</li>
                            <li>Latest Film Product</li>
                            <li>Video New Video</li>
                        </ul>
                    </p>
                </div>
                <div class="col-3">
                    <p class="text-white m-0">
                        <ul class="text-white list-unstyled">
                            <li class="fw-bold fs-5">Recent Posts</li>
                            <li class="riga m-0 mb-5"></li>
                            <li class="d-flex">
                                <img src="../../assets/img/blog-100x100.jpg" alt="blog1">
                                <div class="ms-3">
                                    <p class="text-white m-0">Actor The Concept Movie High Concept Theory see</p>
                                    <p class="text-white m-0">April 14,2020</p>
                                </div>
                            </li>
                            <li class="d-flex">
                                <img src="../../assets/img/blog2-100x100.jpg" alt="blog2">
                                <div class="ms-3">
                                    <p class="text-white m-0">Actor The Concept Movie High Concept Theory see</p>
                                    <p class="text-white m-0">April 14,2020</p>
                                </div>
                            </li>
                            <li class="d-flex">
                                <img src="../../assets/img/blog3-100x100.jpg" alt="blog3">
                                <div class="ms-3">
                                    <p class="text-white m-0">Actor The Concept Movie High Concept Theory see</p>
                                    <p class="text-white m-0">April 14,2020</p>
                                </div>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

section{
    background: rgba($color_grey, 0.9) url(../../assets/img/ft-bg.jpg);
    background-position: left;
    position: relative;

    
    &:before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: inherit;
        content: ' ';
    }
    div{
        z-index: 5;
    }
        
}


li{
    margin-top: 1.5rem;
}

li.riga{
    width: 40px;
    border-bottom: 2px solid white;
}

.cerchio_facebook{
    background-color: hsl(195deg 98% 46%);
    padding: 0.75rem 1rem;
    border-radius: 50%;

    &:hover{
        background-color: transparent;
        color: $color_green;
    }
}

.cerchio_twitter {
    background-color: hsl(195deg 98% 46%);
    padding: 0.75rem 0.75rem;
    border-radius: 50%;

    &:hover {
        background-color: transparent;
        color: $color_green;
    }
}

.cerchio_linkedim {
    background-color: hsl(177deg 100% 31%);
    padding: 0.75rem 0.75rem;
    border-radius: 50%;

    &:hover {
        background-color: transparent;
        color: $color_green;
    }
}

.cerchio_instagram {
    background-color: hsl(2deg 64% 46%);
    padding: 0.75rem 0.75rem;
    border-radius: 50%;

    &:hover {
        background-color: transparent;
        color: $color_green;
    }
}

.cerchio_pinterest {
    background-color: hsl(354deg 89% 36%);
    padding: 0.75rem 0.75rem;
    border-radius: 50%;


    &:hover {
        background-color: transparent;
        color: $color_green;
    }
}
</style>
