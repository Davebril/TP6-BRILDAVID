<template>

  <section class="src-componentes-juego">
    <br>
    <div id="container">
      <button name="btnRGB" class="square" @click="tocoColor(0)" style="background-color: rgb(255, 0, 0);"></button>
      <button name="btnRGB" class="square" @click="tocoColor(1)" style="background-color: rgb(0, 255, 0);"></button>
      <button name="btnRGB" class="square" @click="tocoColor(2)" style="background-color: rgb(0, 0, 255);"></button>
    </div>
    
  </section>
</template>

<script>
  export default  {
    name: 'src-componentes-juego',
    props: [],
    mounted () {
      this.cargarBotones()
    },
    data () {
      return {

      }
    },
    methods: {
      cargarBotones()
      {
        let botones = document.getElementsByName("btnRGB")
        this.$store.dispatch('cargarBotones', botones)
        this.$store.dispatch('reiniciarJuego')
      },
      tocoColor(botonNum)
      {
        this.$store.dispatch('tocoBoton', botonNum)
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-juego {
      color: white ;
      background-color: rgb(61, 61, 61);
  }
  .square {
    background-color: rgb(61, 61, 61);
    width: 30%;
    background: rgb(61, 61, 61);
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
    border-radius: 10%;
    transition: background 0.8s;
    -webkit-transition: background 0.8s;
    -moz-transition: background 0.8s;

  }
  #container 
  {
    margin: 20px auto;
    max-width: 1000px;
  }
</style>
