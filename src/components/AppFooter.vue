<script >

import SectionNavigation from './ComponentsFooter/SectionNavigation.vue';
import SectionCredits from './ComponentsFooter/SectionCredits.vue';

export default{
    components:{
        SectionNavigation,
        SectionCredits
    }
}

</script>

<template>
    <footer>
        <SectionNavigation/>
        <SectionCredits/>
    </footer>
</template>

<style lang="scss" scoped>

</style>
