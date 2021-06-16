const THEMES = [
  {
    name: "VS Code Dark+",
    path: "prism-vsc-dark-plus",
    containerStyle: {
      backgroundColor: "#1e1e1e",
    },
    codeStyle: {
      color: "#d4d4d4",
      fontFamily: `Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono",
          "Courier New", monospace`,
    },
  },
  {
    name: "VS",
    path: "prism-vs",
    containerStyle: {
      backgroundColor: "white",
    },
    codeStyle: {
      color: "#393a34",
      fontFamily: `"Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier,
  monospace`,
    },
  },
  {
    name: "CB",
    path: "prism-cb",
    containerStyle: {
      backgroundColor: "#222",
    },
    codeStyle: {
      color: "#fff",
      fontFamily: `Menlo, Monaco, "Courier New", monospace`,
      textShadow: "0 1px 1px #000",
    },
  },
  {
    name: "Synthwave '84",
    path: "prism-cb",
    containerStyle: {
      backgroundColor: "transparent !important",
      backgroundImage: "linear-gradient(to bottom, #2a2139 75%, #34294f)",
    },
    codeStyle: {
      color: "#f92aad",
      fontFamily: `Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace`,
      textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",
    },
  },
  {
    name: "Material Dark",
    path: "prism-material-dark",
    containerStyle: {
      backgroundColor: "#2f2f2f",
    },
    codeStyle: {
      color: "#eee",
      fontFamily: `Roboto Mono, monospace`,
    },
  },
];

export default THEMES;
