const resetT = ''

export const text = [
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

export const animation = [
  { element: "#red",
    from: resetT,
    to: 't187 -85 r90 s1.7',
    property: 'transform'
  },
  { element: "#teal",
    from: resetT,
    to: 't-92 -2 s.5 .57 r-90',
    property: 'transform'
  },
  { element: "#wheat",
    from: resetT,
    to: 't-105 -10 s1.1 1',
    property: 'transform'
  },
  { element: "#lines",
    from: "t95 150",
    to: 't47 -95',
    property: 'transform'
  },
  { element: "#black",
    from: resetT,
    to: 't50 38 s1.15 .95 r-90',
    property: 'transform'
  },
  { element: "#darken",
    from: 1,
    to: 0,
    property: 'opacity'
  },
  { element: "#mask",
    from: 0.8,
    to: 0.6,
    property: 'opacity'
  },
  { element: "#title-bg",
    from: "t0 0",
    to: 't0 95',
    property: "transform",
  },
  { element: "#text",
    from: "#FCFCFC",
    to: "#000",
    property: 'fill'
  }
]
