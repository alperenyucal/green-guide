/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export enum Color {
  white = '#fff',
  green = '#71d38a',
  navy = '#1d274b',
  blue = '#047cfb',
  lightBlue = '#dbedff',
  black = '#222526',
  gray = '#9ca3af',
  red = '#f87171',
}

export const Colors = {
  light: {
    text: Color.black,
    background: Color.white,
    tint: Color.green,
    icon: Color.blue,
    tabIconDefault: Color.blue,
    tabIconSelected: Color.lightBlue,
  },
  dark: {
    text: Color.lightBlue,
    background: Color.navy,
    tint: Color.white,
    icon: Color.lightBlue,
    tabIconDefault: Color.lightBlue,
    tabIconSelected: Color.white,
  },
};
