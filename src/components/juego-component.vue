<template lang="html">

  <section class="juego-component">
    <body>
      <div id="navigator">
        <button id="reset" @click="restart()" style="backgroundcolor: red;">{{restartButtonText}}</button>
        <span id="message" :style="{color: messageDisplayColor}">{{messageDisplay}}</span>

        <button id="easy" :class="{selected: easyClassSelected}" @click="easyMode()">easy</button>
        <button id="hard" :class="{selected: hardClassSelected}" @click="hardMode()">hard</button>
      </div>

      <div id="container">
        <div class="square" v-for="(square,index) in squares" :key="index" :style="{backgroundColor: square.backgroundColor}" @click="squarePress(index)"></div>
      </div>

    </body>
  </section>
  
</template>

<script>
  
  export default  {
    name: 'juego-component',
    props: [],
    mounted () {
      this.restart()
      
    },
    data () {
      return {
        colorCount: 6,
        colors: [],
        squares: [],
        restartButtonText: "",
        messageDisplay: "",
        messageDisplayColor: "",
        easyClassSelected: false,
        hardClassSelected: true
      }
    },
    methods: {
      setAllColorsTo(color) {
        this.squares.forEach(function (square){
          square.backgroundColor = color;
        })
      }, 
      PickColor(){
        return Math.floor(Math.random() * this.colorCount );
      },
      createNewColors(){
        var arr = [];
        for (var i = 0; i < this.colorCount; i++) {
          arr.push(this.createRandomStringColor());
        }

        return arr;
      },
      createRandomStringColor(){
        return "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
      },
      randomInt(){
        return Math.floor(Math.random() * 256);
      },
      restart(){
        this.colors = this.createNewColors();
        this.setPickedColor(this.colors[this.PickColor()]) 
        // this.$emit('picked-color', this.pickedColor)
        this.textContent = "Pick New Colors!";
        this.setHeaderBackgroundColor("steelblue")
        this.$emit('header-background-color', this.mostrarHeaderBackgroundColor)
        this.messageDisplay = "";
        this.restartButtonText = "New Colors!";
        this.squares = []

        for (var i = 0; i < this.colorCount; i++) {
          var square = {backgroundColor: this.colors[i]}
          this.squares.push(square)
        }
      },

      easyMode(){
        if (this.hardClassSelected) {
          this.easyClassSelected = true;
          this.hardClassSelected = false;
          this.colorCount = 3;
          this.restart();
        }
      },
      hardMode(){
        if (!this.hardClassSelected) {
          this.easyClassSelected = false;
          this.hardClassSelected = true;
          this.colorCount = 6;
          this.restart();
        }
      },
      squarePress(index){
        if (this.squares[index].backgroundColor === this.mostrarPickedColor) {
          this.messageDisplay = "You Picked Right!";
          this.setAllColorsTo(this.mostrarPickedColor);
          this.restartButtonText = "Play Again!";
          this.setHeaderBackgroundColor(this.mostrarPickedColor);
          this.$emit('header-background-color', this.mostrarHeaderBackgroundColor)
        } else {
          this.squares[index].backgroundColor = "#232323";
          this.messageDisplay = "Try Again!";
          this.messageDisplayColor = "#000000";
        }
      }
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
  #navigator {

    background: #ffffff;
    height: 30px;
    text-align: center;
    margin: 0;
    margin-top: -30px;

  }
  .square {
    width: 30%;
    background: blue;
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
    border-radius: 10%;
    transition: background 0.8s;
    -webkit-transition: background 0.8s;
    -moz-transition: background 0.8s;

  }
  #container {
    margin: 20px auto;
    max-width: 600px;
  }
  #message {
    color: #ffffff;
    display: inline-block;
    width: 20%;
  }
  .selected {
    background-color: steelblue;
    color: white;
  }
  button {
    border: none;
    background-color: white;
    font-family: "Montserrat", "Avenir";
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
  }
  button:hover {
    color: white;
    background-color: steelblue;
  }
</style>
