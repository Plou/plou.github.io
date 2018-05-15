import 'snapsvg'

export default class Collapse {
  constructor (button) {
    this.isOpen = 1
    this.button = button
    this.content = document.querySelector(button.getAttribute("href"))
    this.close()
    this.bind()
  }

  toggle () {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.content.style.height = this.content.firstChild.clientHeight + 'px'

    this.isOpen = true
    this.content.classList.remove('is-close')
    return this
  }

  close() {
    this.content.style.height = 0

    this.isOpen = false
    this.content.classList.add('is-close')
    return this
  }

  bind () {
    this.button.addEventListener('click', (e) => {
      e.preventDefault()
      this.toggle()
    })
  }
}
