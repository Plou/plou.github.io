import 'snapsvg'

export default class Tile {
  constructor (name, onMouseEnterAnimations, onClickAnimations) {
    this.onMouseEnterAnimations = onMouseEnterAnimations
    this.onClickAnimations = onClickAnimations
    this.state = false
    this.isActive = false
    this.duration = {
      reset: 300,
      to: 200
    }
    this.container = Snap(`#${name}`)
    this.parent = document.querySelector(`#${name}`).parentElement
    this.bind()
  }

  toggle () {
    this.onMouseEnter()
    this.onClick()
  }

  onMouseEnter (callback) {
    this.state = true
    this.onMouseEnterAnimations.forEach((animation) => {
      const anim = {}
      anim[animation.property] = animation.to
      this.container.select(animation.element).animate(anim, this.duration.to, mina.easeOutQuint, callback)
    })
  }

  onMouseLeave (callback) {
    this.state = false
    this.onMouseEnterAnimations.forEach((animation) => {
      const anim = {}
      anim[animation.property] = animation.from
      this.container.select(animation.element).animate(anim, this.duration.reset, mina.easeInQuint, callback)
    })
  }

  onClick (callback) {
    if (!this.isActive) {
      this.isActive = true
      this.onClickAnimations.forEach((animation) => {
        const anim = {}
        anim[animation.property] = animation.to
        this.container.select(animation.element).animate(anim, this.duration.to, mina.easeOutQuint, callback)
      })
    }
    else {
      this.isActive = false
      this.onClickAnimations.forEach((animation) => {
        const anim = {}
        anim[animation.property] = animation.from
        this.container.select(animation.element).animate(anim, this.duration.reset, mina.easeInQuint, callback)
      })
    }

  }

  bind () {
    this.container.click(() => this.onClick())

    this.parent.addEventListener('mouseenter', () => {
      if (!this.isActive) {
        this.onMouseEnter()
      }
    })
    this.parent.addEventListener('mouseleave', () => {
      if (!this.isActive) {
        setTimeout(() =>{
          this.onMouseLeave()
        }, 400)
      }
    })
  }
}
