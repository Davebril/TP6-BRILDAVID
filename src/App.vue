<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from './components/header-component.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

html {
  
  background: #232323;
	margin: 0;
	font-family: "Montserrat", "Avenir";
}
</style>
