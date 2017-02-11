'use strict'

// Website wide scripts
// @Author Dummy Team

import Tile from './components/Tile.js'
import {animation as animationsUi, text as textUi} from './components/tiles/animationsUi.js'
import {animation as animationsIi, text as textIi} from './components/tiles/animationsIi.js'
import {animation as animationsWt, text as textWt} from './components/tiles/animationsWt.js'
import {animation as animationsCw, text as textCw} from './components/tiles/animationsCw.js'

new Tile('ui', animationsUi, textUi)
new Tile('ii', animationsIi, textIi)
new Tile('wt', animationsWt, textWt)
new Tile('cw', animationsCw, textCw)
