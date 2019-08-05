import { createMuiTheme } from '@material-ui/core/styles';

// const color = '#424242';
const color = 'rgb(0, 0, 0)';
const fonts = ['Poppins', 'sans-serif'].join(',');

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    color: color,
    fontFamily: fonts,
    body1: {
      color: '#4f4f4f',
      fontFamily: fonts,
      fontSize: '14px',
      letterSpacing: '0px',
      lineHeight: 1.2
    },
    button: {
      color: '#FFFFFF',
      fontFamily: fonts,
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: 1,
      textTransform: 'none',
      letterSpacing: '0px'
    },
    h1: {
      color: color,
      fontFamily: fonts,
      fontWeight: '500',
      fontSize: '36px',
      letterSpacing: '0px',
      lineHeight: 1.2
    },
    h2: {
      color: color,
      fontFamily: fonts,
      fontWeight: '500',
      fontSize: '24px',
      letterSpacing: '0px',
      lineHeight: 2
    },
    h3: {
      color: color,
      fontFamily: fonts,
      fontWeight: '500',
      fontSize: '18px',
      letterSpacing: '0px',
      lineHeight: 1.2
    },
    h4: {
      color: color,
      fontFamily: fonts,
      fontWeight: '500',
      fontSize: '14px',
      letterSpacing: '0px',
      lineHeight: 1.2
    }
  },
  palette: {
    primary: {
      main: '#8DC26F'
    },
    secondary: {
      main: '#76b852'
    },
    error: {
      main: '#D8000C'
    },
    action: {
      disabledBackground: '#ECECEC',
      disabled: '#ffffff'
    },
    text: {
      primary: '#555555',
      secondary: '#888888'
    },
    grey: {
      300: '#ffffff'
    }
  }
});
export default theme;
