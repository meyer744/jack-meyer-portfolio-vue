<template>
<the-nav-bar-new :resumeLink="'https://area.emlaunch.com/wp-content/uploads/2021/01/jackMeyerResume.pdf'"></the-nav-bar-new>
<router-view />
<footer-bar>Jack Meyer All Rights Reserved  2021
Created with Vue 3</footer-bar>
</template>

<script>
import TheNavBarNew from './components/layout/TheNavBarNew.vue'
import FooterBar from './components/layout/FooterBar'

export default {
  components: {
    TheNavBarNew,
    FooterBar
  }
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Sriracha&display=swap');

a {
  text-decoration: none;
}

#app {
 font-family: 'roboto', sans-serif;
}
</style>
