'use strict'

// Website wide scripts
// @Author Dummy Team

import Tile from './components/Tile.js'
import {onMouseEnter as uiOnMouseEnter, onClick as uiOnClick} from './components/tiles/animations-ui-systems.js'
import {onMouseEnter as iiOnMouseEnter, onClick as iiOnClick} from './components/tiles/animations-interactive-interfaces.js'
import {onMouseEnter as wtOnMouseEnter, onClick as wtOnClick} from './components/tiles/animations-wordpress-typo3.js'
import {onMouseEnter as cwOnMouseEnter, onClick as cwOnClick} from './components/tiles/animations-workshops-courses.js'

const tiles = {
  ui: new Tile('ui-systems', uiOnMouseEnter, uiOnClick),
  ii: new Tile('interactive-interfaces', iiOnMouseEnter, iiOnClick),
  wt: new Tile('wordpress-typo3', wtOnMouseEnter, wtOnClick),
  cw: new Tile('workshops-courses', cwOnMouseEnter, cwOnClick)
}

document.querySelectorAll('.header-logo, .footer-logo').forEach((button) => {
 button.addEventListener('click', () => {
    Object.getOwnPropertyNames(tiles).forEach((tile) => tiles[tile].toggle())
  })
})
