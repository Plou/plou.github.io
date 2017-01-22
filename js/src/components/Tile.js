import 'snapsvg'

export default class Tile {
  constructor (name, animations) {
    this.animations = animations
    this.state = false
    this.container = Snap(`#tile-${name}`)

    Snap.load(`/img/tiles/${name}.svg`, (svg) => {
      this.container.append(svg.select(`#${name}`))
      this.on('click')
    })
  }

  animate (callback) {
    this.state = true
    this.animations.forEach((animation) => {
      const anim = {}
      anim[animation.property] = animation.to
      this.container.select(animation.element).animate(anim, 200, mina.easeOutQuad, callback)
    })
  }

  reset (callback) {
    this.state = false
    this.animations.forEach((animation) => {
      const anim = {}
      anim[animation.property] = animation.from
      this.container.select(animation.element).animate(anim, 200, mina.easeOutQuad, callback)
    })
  }

  on (event) {
    this.container[event](() => {
      if (this.state) {
        this.reset()
      }
      else {
        this.animate()
      }
    })
  }
}
