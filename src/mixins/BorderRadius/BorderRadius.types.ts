import { DefaultTheme } from 'styled-components';

export interface IBorderRadius {
  borderBottomLeftRadius?: keyof DefaultTheme['radii'] | string | number;
  borderBottomRadius?: keyof DefaultTheme['radii'] | string | number;
  borderBottomRightRadius?: keyof DefaultTheme['radii'] | string | number;
  borderLeftRadius?: keyof DefaultTheme['radii'] | string | number;
  borderRadius?: keyof DefaultTheme['radii'] | string | number;
  borderRightRadius?: keyof DefaultTheme['radii'] | string | number;
  borderTopLeftRadius?: keyof DefaultTheme['radii'] | string | number;
  borderTopRadius?: keyof DefaultTheme['radii'] | string | number;
  borderTopRightRadius?: keyof DefaultTheme['radii'] | string | number;
}
