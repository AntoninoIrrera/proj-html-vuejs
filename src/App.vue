<script >

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default{
  components:{
    AppHeader,
    AppMain,
    AppFooter,
  }
}


</script>

<template>
  <AppHeader/>
  <AppMain/>
  <AppFooter/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables' as *;
@use '../node_modules/bootstrap/scss/bootstrap.scss' as *;

body{
  background-color: $color_main;
}
</style>
