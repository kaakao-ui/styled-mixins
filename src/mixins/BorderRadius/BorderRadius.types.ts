import { DefaultTheme } from 'styled-components';

export interface IBorderRadius {
  borderBottomLeftRadius?: keyof DefaultTheme['radii'] | string;
  borderBottomRadius?: keyof DefaultTheme['radii'] | string;
  borderBottomRightRadius?: keyof DefaultTheme['radii'] | string;
  borderLeftRadius?: keyof DefaultTheme['radii'] | string;
  borderRadius?: keyof DefaultTheme['radii'] | string;
  borderRightRadius?: keyof DefaultTheme['radii'] | string;
  borderTopLeftRadius?: keyof DefaultTheme['radii'] | string;
  borderTopRadius?: keyof DefaultTheme['radii'] | string;
  borderTopRightRadius?: keyof DefaultTheme['radii'] | string;
}
