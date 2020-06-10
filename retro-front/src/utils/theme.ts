interface ColorsInterface {
  blue: string;
  grey: string;
  white: string;
  red: string;
  black: string;
  green: string;
}

interface ThemeInterface {
  colors: ColorsInterface;
}

export const theme: ThemeInterface = {
  colors: {
    blue: '#2980b9',
    grey: '#bdc3c7',
    white: '#ffffff',
    red: '#c0392b',
    black: '#34495e',
    green: '#27ae60'
  }
};
