<template>
  <section id="pulsar" class="hero is-dark is-fullheight has-text-centered" style="background-color: 	#1A1617">
    <div class="hero-body">
    
      <img class="c-hero-image"
           :src="require('@/assets/images/v.gif')"
           alt="zebo.ai">

      <canvas id="space" class="space"></canvas>

      <div class="container">
        <h1 class="title is-uppercase">
          Zebo.ai
        </h1>
      
         
        <h2><vue-typer class="vue-typer subtitle" 
        :text="['Ground Breaking Advances','In Medical AI', 'Coming Soon..!']" 
        :pre-type-delay="800" 
        :type-delay="160" 
        :pre-erase-delay="1000" 
        :erase-delay="80" 
        erase-style="backspace" 
        caret-animation="solid">
        </vue-typer></h2>
      
      </div>
    </div>
  </section>
</template>

<script>
  let canvas
  let c

  let numStars = 1024
  let radius = '100'
  let focalLength
  let centerX, centerY

  let stars = []
  let star
  let i

  let animate = true

  export default {
    name: 'hero-index',
    mounted () {
      if (process.browser) {
        canvas = document.getElementById('space')
        c = canvas.getContext('2d')
        focalLength = canvas.width * 2

        window.requestAnimFrame = (function () { return window.requestAnimationFrame })()

        this.initializeStars()

        this.executeFrame()
      }
    },
    methods: {
      executeFrame () {
        if (animate) {
          window.requestAnimFrame(this.executeFrame)
        }
        this.moveStars()
        this.drawStars()
      },

      initializeStars () {
        centerX = canvas.width / 2
        centerY = canvas.height / 2

        stars = []
        for (i = 0; i < numStars; i++) {
          star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            o: '0.' + Math.floor(Math.random() * 99) + 1
          }
          stars.push(star)
        }
      },

      moveStars () {
        for (i = 0; i < numStars; i++) {
          star = stars[i]
          star.z--

          if (star.z <= 0) {
            star.z = canvas.width
          }
        }
      },

      drawStars () {
        let pixelX, pixelY, pixelRadius

        // Resize to the screen
        if (canvas.width !== window.innerWidth || canvas.width !== window.innerWidth) {
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
          this.initializeStars()
        }

        c.fillStyle = 'rgba(0,0,0,1)' // rgba(0,10,20,1)

        c.fillRect(0, 0, canvas.width, canvas.height)

        c.fillStyle = 'rgba(209, 255, 255, ' + radius + ')'
        for (i = 0; i < numStars; i++) {
          star = stars[i]

          pixelX = (star.x - centerX) * (focalLength / star.z)
          pixelX += centerX
          pixelY = (star.y - centerY) * (focalLength / star.z)
          pixelY += centerY
          pixelRadius = (focalLength / star.z)

          c.beginPath()
          c.arc(pixelX, pixelY, pixelRadius / 2, 0, 2 * Math.PI)
          c.fillStyle = 'rgba(209, 255, 255, ' + star.o + ')'
          c.fill()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

.vue-typer {
  background-color:white;
  font-size:30px;
  color:white;
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */

  .custom.char {
    /* Styles for each character
       e.g. color, background-color */
       color: #D4D4BD;
       

    &.typed {
      /* Styles specific to typed characters
         i.e. characters to the left of the caret */
         color: #D4D4BD;
    }
    &.selected {
      color: #E91E63;
      /* Styles specific to selected characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a selection-based style */
    }
    &.erased {
      /* Styles specific to erased characters
         i.e. characters to the right of the caret while VueTyper's
              'eraseStyle' is set to a non-selection-based style */
    }
  }

  .custom.caret {
    /* Styles for the caret
       e.g. background-color, animation, display */

    &.pre-type {
      /* Styles for the caret when it is idle before typing
         i.e. before a string starts being typed, during 'preTypeDelay' */
    }
    &.pre-erase {
      /* Styles for the caret when it is idle before erasing
         i.e. before a string starts being erased, during 'preEraseDelay' */
    }
    &.idle {
      /* Styles for the caret when it is idle, but VueTyper has not yet completed typing
         i.e. when 'pre-type' or 'pre-erase' is set, but not 'complete' */
    }
    &.typing {
      color:white;
      /* Styles for the caret while VueTyper is typing
         i.e. when the caret is moving forwards */
    }
    &.selecting {
      /* Styles for the caret while VueTyper is selecting
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a selection-based style */
    }
    &.erasing {
      /* Styles for the caret while VueTyper is erasing
         i.e. when the caret is moving backwards and 'eraseStyle' is
         set to a non-selection-based style */
    }
    &.complete {
      /* Styles for the idle caret when VueTyper has finished all typing/erasing */
    }
  }
}

  .hero {
    position: relative;
    overflow: hidden;
  }

  .title {
    font-size: 6rem;
    color: white;
    mix-blend-mode: difference;
    letter-spacing: 4rem;
    margin-left: 4rem;
  }
  @media (min-width: 300px) and (max-width: 320px) {
 .title{
   font-size: 4rem;
    color: white;
    mix-blend-mode: difference;
    letter-spacing: 5rem;
    margin-left: 4rem;
 }
 .c-hero-image {
   top:150px;
  object-position: center;
 }
}

@media (min-width: 321px) and (max-width: 375px) {
 .title{
   font-size: 4rem;
    color: white;
    mix-blend-mode: difference;
    letter-spacing: 6.6rem;
    margin-left: 6rem;
 }
 .c-hero-image {
   -webkit-align-items: center;
   align-items: center;
 }
}
@media (min-width:768px)and (max-width: 900px)  {
 .title{
   font-size: 4rem;
    color: white;
    mix-blend-mode: difference;
    letter-spacing: 3.4rem;
    margin-left: 6rem;
 }
 .c-hero-image {
   -webkit-align-items: center;
   align-items: center;
 }
}

@media (min-width: 376px) and (max-width: 425px) {
 .title{
   font-size: 4rem;
    color: white;
    mix-blend-mode: difference;
    letter-spacing: 7.5rem;
    margin-left: 6.5rem;
 }
 .c-hero-image {
   -webkit-align-items: center;
   align-items: center;
 }
}

@media (min-width: 426px) and (max-width: 447px) {
 .title{
   font-size: 4rem;
    color: white;
    mix-blend-mode: difference;
    letter-spacing: 8rem;
    margin-left: 6.5rem;
 }
 .c-hero-image {
   -webkit-align-items: center;
   align-items: center;
 }
}
@media (min-width: 447px) and (max-width: 500px) {
 .title{
   font-size: 4rem;
    color: white;
    mix-blend-mode: difference;
    letter-spacing: 9rem;
    margin-left: 7rem;
 }
 .c-hero-image {
   -webkit-align-items: center;
   align-items: center;
 }
}
@media (min-width: 500px) and (max-width: 546px) {
 .title{
   font-size: 4rem;
    color: white;
    mix-blend-mode: difference;
    letter-spacing: 10rem;
    margin-left: 8rem;
 }
 .c-hero-image {
   -webkit-align-items: center;
   align-items: center;
 }
}
@media (min-width: 547px) and (max-width: 600px) {
 .title{
   font-size: 4rem;
    color: white;
    mix-blend-mode: difference;
    letter-spacing: 15rem;
    margin-left: 13rem;
 }
 .c-hero-image {
   -webkit-align-items: center;
   align-items: center;
 }
}
@media (min-width: 601px) and (max-width: 767px) {
 .title{
   font-size: 4rem;
    color: white;
    mix-blend-mode: difference;
    letter-spacing: 20rem;
    margin-left: 19rem;
 }
 .c-hero-image {
   -webkit-align-items: center;
   align-items: center;
 }
}

  .button {
    border-radius: 50%;
  }

  .space {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    mix-blend-mode: screen;
  }

  .c-hero-image {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    height:100%;
    
    object-fit: contain;
    object-position: top center;
    opacity: 0.4
  }
</style>
