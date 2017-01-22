'use strict'

// Website wide scripts
// @Author Dummy Team

import Tile from './components/Tile.js'
import animationsUi from './components/tiles/animationsUi.js'
import animationsIi from './components/tiles/animationsIi.js'
import animationsWt from './components/tiles/animationsWt.js'
import animationsCw from './components/tiles/animationsCw.js'


new Tile('ui', animationsUi)
new Tile('ii', animationsIi)
new Tile('wt', animationsWt)
new Tile('cw', animationsCw)
