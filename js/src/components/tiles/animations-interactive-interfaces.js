const resetT = 't0 t0 r0 s1 1'

export const onClick = [
  { element: "#text",
    from: resetT,
    to: "t0 -170",
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
  { element: "#orange",
    from: resetT,
    to: "t-45 16 s1 1 137.5 0",
    property: 'transform'
  },
  { element: "#red",
    from: resetT,
    to: "t47 -50 s.42",
    property: 'transform'
  },
  { element: "#wheat",
    from: resetT,
    to: "t50 -64 s.85",
    property: 'transform'
  },
  { element: "#lines",
    from: resetT,
    to: "t146 85 s.94",
    property: 'transform'
  },
  { element: "#black",
    from: "t0 0",
    to: "t125 119 s.5",
    property: 'transform'
  },
  { element: "#darken",
    from: 1,
    to: 0,
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
