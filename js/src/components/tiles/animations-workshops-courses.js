const resetT = ''

export const onClick = [
  { element: "#wc_text",
    from: resetT,
    to: "t0 -170",
    property: 'transform'
  },
  { element: "#wc_text",
    from: '#232222',
    to: '#FCFCFC',
    property: 'fill'
  },
  { element: "#wc_text-bg",
    from: '0',
    to: '.85',
    property: 'fill-opacity'
  },
]

export const onMouseEnter = [
  { element: "#wc_red",
    from: resetT,
    to: 't187 -85 r90 s1.7',
    property: 'transform'
  },
  { element: "#wc_teal",
    from: resetT,
    to: 't-92 -2 s.5 .57 r-90',
    property: 'transform'
  },
  { element: "#wc_wheat",
    from: resetT,
    to: 't-105 -10 s1.1 1',
    property: 'transform'
  },
  { element: "#wc_lines",
    from: resetT,
    to: 't47 -95',
    property: 'transform'
  },
  { element: "#wc_black",
    from: resetT,
    to: 't50 38 s1.15 .95 r-90',
    property: 'transform'
  },
  { element: "#wc_darken",
    from: 1,
    to: 0,
    property: 'opacity'
  },
  { element: "#wc_background",
    from: 0.8,
    to: 0.6,
    property: 'opacity'
  },
  { element: "#wc_title-bg",
    from: "t0 0",
    to: 't0 95',
    property: "transform",
  },
  { element: "#wc_text",
    from: "#FCFCFC",
    to: "#000",
    property: 'fill'
  }
]
