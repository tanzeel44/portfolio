//  colors: https://colorhunt.co/palette/ff304f002651775ada28c7fa

const fonts = {
  navbar: '\'Open Sans\', sans-serif',
  headings: '\'Red Hat Text\', sans-serif',
  main: '\'Source Code Pro\', monospace',
};

const theme = {
  light: {
    background: '#fcfcfc',
    color: '#002651',
    headerText: '#775ada',
    resumeButtonBG: '#ff304f',
    resumeButtonTextMobile: '#fcfcfc',
    cardShadow: 'rgba(0,0,0,0.5);',
    fonts,
  },
  dark: {
    background: '#002651',
    color: '#fcfcfc',
    headerText: '#28c7fa',
    resumeButtonBG: '#ff304f',
    resumeButtonTextMobile: '#fcfcfc',
    cardShadow: 'rgba(252,252,252,0.5);',
    fonts,
  },
};

export default theme;
