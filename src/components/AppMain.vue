<script >
import SectionJumbotron1 from './ComponentsMain/SectionJumbotron1.vue';
import SectionNewmovieCarosell from './ComponentsMain/SectionNewmovieCarosell.vue';
import SectionMovieplaylist from './ComponentsMain/SectionMovieplaylist.vue';
import SectionJumbotron2 from './ComponentsMain/SectionJumbotron2.vue';
import SectionNewmovieList from './ComponentsMain/SectionNewmovieList.vue';
import SectionLatesNews from './ComponentsMain/SectionLatesNews.vue';
import SectionSubscribe from './ComponentsMain/SectionSubscribe.vue';

export default{
    components:{
        SectionJumbotron1,
        SectionNewmovieCarosell,
        SectionMovieplaylist,
        SectionJumbotron2,
        SectionNewmovieList,
        SectionLatesNews,
        SectionSubscribe
    
    }   

}

</script>

<template>
    <main>
        <SectionJumbotron1/>
        <SectionNewmovieCarosell />
        <SectionMovieplaylist />
        <SectionJumbotron2 />
        <SectionNewmovieList />
        <SectionLatesNews />
        <SectionSubscribe />
    </main>
</template>

<style lang="scss" scoped>

</style>
