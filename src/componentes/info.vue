<template>

  <section class="src-componentes-info">
    <h2>RGB Guess</h2>
    <h3>Adivina el color RGB:</h3>
    <h1>{{pasarATexto($store.state.color)}}</h1>
    <button class="btn btn-secondary btn-lg m-3" @click="reiniciarJuego()">{{$store.state.mensaje}}</button>
  </section>

</template>

<script>

  export default  {
    name: 'src-componentes-info',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      pasarATexto(texto)
      {
        return texto.split('b')[1]
      },
      reiniciarJuego()
      {
        this.$store.dispatch('reiniciarJuego')
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-info {

  }
</style>
