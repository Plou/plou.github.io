import 'snapsvg'

export default class Tile {
  constructor (name, animations) {
    this.animations = animations
    this.state = false
    this.duration = {
      reset: 300,
      to: 300
    }
    this.container = Snap(`#tile-${name}`)
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
      this.container.select(animation.element).animate(anim, this.duration.to, mina.easeOutQuad, callback)
    })
  }

  reset (callback) {
    this.state = false
    this.animations.forEach((animation) => {
      const anim = {}
      anim[animation.property] = animation.from
      this.container.select(animation.element).animate(anim, this.duration.reset, mina.easeOutQuad, callback)
    })
  }

  bind () {
    this.container.click(() => {
      if (this.state) {
        this.reset()
      }
      else {
        this.animate()
      }
    })

    this.container.hover(() => this.animate(), () =>
    setTimeout(() =>{
      this.reset()
    }, 400)
   )
  }
}
