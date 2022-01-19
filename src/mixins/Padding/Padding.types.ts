import { DefaultTheme } from 'styled-components';

export interface IPadding {
  p?: keyof DefaultTheme['space'];
  pb?: keyof DefaultTheme['space'];
  pl?: keyof DefaultTheme['space'];
  pr?: keyof DefaultTheme['space'];
  pt?: keyof DefaultTheme['space'];
  px?: keyof DefaultTheme['space'];
  py?: keyof DefaultTheme['space'];
}
