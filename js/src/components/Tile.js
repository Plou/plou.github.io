import 'snapsvg'

export default class Tile {
  constructor (name, animations) {
    this.animations = animations
    this.state = false
    this.duration = {
      reset: 300,
      to: 200
    }
    this.container = Snap(`#tile-${name}`)
    this.parent = document.querySelector(`#tile-${name}`).parentElement
    Snap.load(`/img/tiles/${name}.svg`, (svg) => {
      this.container.append(svg.select(`#${name}`))
      this.bind()
      // this.animate()
    })
  }

  animate (callback) {
    this.state = true
    this.animations.forEach((animation) => {
      const anim = {}
      anim[animation.property] = animation.to
      this.container.select(animation.element).animate(anim, this.duration.to, mina.easeOutQuint, callback)
    })
  }

  reset (callback) {
    this.state = false
    this.animations.forEach((animation) => {
      const anim = {}
      anim[animation.property] = animation.from
      this.container.select(animation.element).animate(anim, this.duration.reset, mina.easeInQuint, callback)
    })
  }

  bind () {
    // this.container.click(() => {
    //   if (this.state) {
    //     this.reset()
    //   }
    //   else {
    //     this.animate()
    //   }
    // })

  // !Causes bug on ios
    this.parent.addEventListener('mouseenter', () => this.animate())
    this.parent.addEventListener('mouseleave', () => {
      setTimeout(() =>{
        this.reset()
      }, 400)
    })    
  }
}
