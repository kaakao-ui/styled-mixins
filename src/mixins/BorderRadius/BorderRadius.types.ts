import { DefaultTheme } from 'styled-components';

export interface IBorderRadius {
  borderBottomLeftRadius?: keyof DefaultTheme['radii'];
  borderBottomRadius?: keyof DefaultTheme['radii'];
  borderBottomRightRadius?: keyof DefaultTheme['radii'];
  borderLeftRadius?: keyof DefaultTheme['radii'];
  borderRadius?: keyof DefaultTheme['radii'];
  borderRightRadius?: keyof DefaultTheme['radii'];
  borderTopLeftRadius?: keyof DefaultTheme['radii'];
  borderTopRadius?: keyof DefaultTheme['radii'];
  borderTopRightRadius?: keyof DefaultTheme['radii'];
}
