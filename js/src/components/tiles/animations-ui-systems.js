const resetT = 't0 t0 r0 s1 1'

export const onClick = [
  { element: "#us_text",
    from: resetT,
    to: "t0 -207",
    property: 'transform'
  },
  { element: "#us_text",
    from: '#232222',
    to: '#FCFCFC',
    property: 'fill'
  },
  { element: "#us_text-bg",
    from: '0',
    to: '.85',
    property: 'fill-opacity'
  },
]

export const onMouseEnter = [
  { element: "#us_rect-teal",
    from: resetT,
    to: "t112 -25 s.942 .8 -107 -36 r90",
    property: 'transform'
  },
  { element: "#us_rect-orange",
    from: resetT,
    to: "t-10 -10",
    property: 'transform'
  },
  { element: "#us_rect-red",
    from: resetT,
    to: "t-39 63",
    property: 'transform'
  },
  { element: "#us_lines-black",
    from: "t38 185",
    to: "t38 155",
    property: 'transform'
  },
  { element: "#us_tri-wheat",
    from: resetT,
    to: "t85 84 s2.4 2.4",
    property: 'transform'
  },
  { element: "#us_darken",
    from: 1,
    to: 0,
    property: 'opacity'
  },
  { element: "#us_mask",
    from: 0.5,
    to: 0.7,
    property: 'opacity'
  },
  { element: "#us_title-bg",
    from: "t0 0",
    to: "t0 95",
    property: 'transform'
  },
  { element: "#us_text",
    from: "#FCFCFC",
    to: "#232222",
    property: 'fill'
  }
]
