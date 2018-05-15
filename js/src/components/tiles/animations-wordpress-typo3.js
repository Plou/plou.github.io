const resetT = ''

export const onClick = [
  { element: "#wt_text",
    from: resetT,
    to: "t0 -170",
    property: 'transform'
  },
  { element: "#wt_text",
    from: '#232222',
    to: '#FCFCFC',
    property: 'fill'
  },
  { element: "#wt_text-bg",
    from: '0',
    to: '.85',
    property: 'fill-opacity'
  },
]

export const onMouseEnter = [
  { element: "#wt_orange",
    from: resetT,
    to: "t-90 -25 r90",
    property: 'transform'
  },
  { element: "#wt_teal",
    from: resetT,
    to: "t-70 -28 s.75",
    property: 'transform'
  },
  { element: "#wt_wheat",
    from: resetT,
    to: "t45 50 s1.34",
    property: 'transform'
  },
  { element: "#wt_lines",
    from: "t180 140 s1",
    to: "t105 105 s2.5",
    property: 'transform'
  },
  { element: "#wt_black",
    from: resetT,
    to: "t-155 -75 s.6 r-180",
    property: 'transform'
  },
  { element: "#wt_darken",
    from: 1,
    to: 0,
    property: 'opacity'
  },
  { element: "#wt_title-bg",
    from: "t0 0",
    to: "t0 95",
    property: "transform",
  },
  { element: "#wt_text",
    from: "#FCFCFC",
    to: "#000",
    property: 'fill'
  }
]
