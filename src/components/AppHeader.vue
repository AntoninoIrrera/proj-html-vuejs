<script >
    import SectionLogin from './ComponentsHeader/SectionLogin.vue';
    import SectionSerchbar from './ComponentsHeader/SectionSerchbar.vue';
    import SectionNavbar from './ComponentsHeader/SectionNavbar.vue';

    export default{
        components:{
            SectionLogin,
            SectionSerchbar,
            SectionNavbar,
        }
    }

</script>

<template>
    <header>
        <SectionLogin/>
        <SectionSerchbar/>
        <SectionNavbar/>
    </header>
</template>

<style lang="scss" scoped>


</style>
