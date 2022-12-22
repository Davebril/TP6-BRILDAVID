export default{
    randomRGB()
        {
          let rX = this.getRandomInt(0, 255)
          let gX = this.getRandomInt(0, 255)
          let bX = this.getRandomInt(0, 255)
  
          return {
            r: rX,
            g: gX,
            b: bX
          }
        },
        getRandomInt(min, max)
        {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min) + min);
        }
}