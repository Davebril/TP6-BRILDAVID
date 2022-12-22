<template lang="html">

  <section class="header-component">
    <div id="header" :style="{backgroundColor: mostrarHeaderBackgroundColor}">
      <h1>The Great <br>
        <span id="colorDisplay">{{mostrarPickedColor}}</span>
        <br>
        Guessing Game</h1>
    </div>
    <Juego/>
  </section>

</template>

<script lang="js">
  import Juego from './juego-component.vue'
  export default  {
    name: 'header-component',
    props: [],
    components : {
      Juego
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  body {
	background: #232323;
	margin: 0;
	font-family: "Montserrat", "Avenir";
  }
  h1 {
    font-weight: normal;
    line-height: 1.1;
    padding: 20px 0;
    font-size: 2em;

  }
  #header {
    transition: all 0.3s;
    background: steelblue;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    color: white;

  }
  #colorDisplay {
    font-size: 200%;
  }
</style>
