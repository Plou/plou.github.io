const resetT = 't0 t0 r0 s1 1'

export default [
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
  { element: "#title",
    from: "#FCFCFC",
    to: "#232222",
    property: 'fill'
  }
]
