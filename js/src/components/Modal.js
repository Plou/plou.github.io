import 'snapsvg'

export default class Tile {
  constructor (modal, button) {
    this.modal = modal
    this.button = button
    this.isOpen = false

    this.bind()
  }

  open () {
    this.isOpen = true
    this.modal.classList.add('is-open')
    this.modal.parentElement.classList.add('has-modal')
  }

  close () {
    this.isOpen = false
    this.modal.classList.remove('is-open')
    this.modal.parentElement.classList.remove('has-modal')
  }

  bind () {
    this.button.addEventListener('click', () => this.open())
    this.modal.addEventListener('click', () => this.close())
  }

}
