const resetT = 't0 t0 r0 s1 1'

export const onClick = [
  { element: "#text",
    from: resetT,
    to: "t0 -207",
    property: 'transform'
  },
  { element: "#text",
    from: '#232222',
    to: '#FCFCFC',
    property: 'fill'
  },
  { element: "#text-bg",
    from: '0',
    to: '.85',
    property: 'fill-opacity'
  },
]

export const onMouseEnter = [
  { element: "#rect-teal",
    from: resetT,
    to: "t112 -25 s.942 .8 -107 -36 r90",
    property: 'transform'
  },
  { element: "#rect-orange",
    from: resetT,
    to: "t-10 -10",
    property: 'transform'
  },
  { element: "#rect-red",
    from: resetT,
    to: "t-39 63",
    property: 'transform'
  },
  { element: "#lines-black",
    from: "t38 185",
    to: "t38 155",
    property: 'transform'
  },
  { element: "#tri-wheat",
    from: resetT,
    to: "t85 84 s2.4 2.4",
    property: 'transform'
  },
  { element: "#darken",
    from: 1,
    to: 0,
    property: 'opacity'
  },
  { element: "#mask",
    from: 0.5,
    to: 0.7,
    property: 'opacity'
  },
  { element: "#title-bg",
    from: "t0 0",
    to: "t0 95",
    property: 'transform'
  },
  { element: "#text",
    from: "#FCFCFC",
    to: "#232222",
    property: 'fill'
  }
]
