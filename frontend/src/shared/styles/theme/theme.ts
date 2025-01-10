import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'system',
  },

  colors: {
    light: {
      backgrounds: {
        primary: '#ffffff',
      },
      primaryTextColor: '#141414',
      primaryAccentColor: '#483ab0',
      icons: {
        themeToggle: '#0c2f577a',
      },
    },
    dark: {
      backgrounds: {
        primary: 'linear(to-r,#04173c, #020925)',
        secondary: '#0d132b',
        accenture: '#12796b19',
      },
      primaryTextColor: '#F5F5F5',
      secondaryTextColor: '#707979ea',
      accentureTextColor: '#5dead5',
      primaryBorderColor: '#034078',
      primaryAccentColor: '#483ab0',
      icons: {
        themeToggle: '#d8d10a',
      },
    },
    shared: {
      buttons: {
        confirmButton: {
          backgroundColor: '#32de85c9',
          borderColor: '#32de85c9',
          color: '#f5f0f0',
        },
      },
      text: {
        warning: '#a4130e',
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bgGradient:
          props.colorMode === 'dark'
            ? theme.colors.dark.backgrounds.primary
            : '',
        background:
          props.colorMode === 'light'
            ? theme.colors.light.backgrounds.primary
            : '',
        color:
          props.colorMode === 'light'
            ? theme.colors.light.primaryTextColor
            : theme.colors.dark.primaryTextColor,
        fontWeight: 600,
        fontFamily: 'sans-serif, system-ui, Arial',
        lineHeight: '1.5',
      },
    }),
  },
});

export default theme;
