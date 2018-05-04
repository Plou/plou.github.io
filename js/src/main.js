'use strict'

// serviceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'})
  .then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}


// Website wide scripts
// @Author Plou

import Tile from './components/Tile.js'
import {onMouseEnter as uiOnMouseEnter, onClick as uiOnClick} from './components/tiles/animations-ui-systems.js'
import {onMouseEnter as iiOnMouseEnter, onClick as iiOnClick} from './components/tiles/animations-interactive-interfaces.js'
import {onMouseEnter as wtOnMouseEnter, onClick as wtOnClick} from './components/tiles/animations-wordpress-typo3.js'
import {onMouseEnter as cwOnMouseEnter, onClick as cwOnClick} from './components/tiles/animations-workshops-courses.js'

import Collapse from './components/Collapse.js'

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

document.querySelectorAll('.work-banner').forEach((button) => {
  new Collapse(button)
})
