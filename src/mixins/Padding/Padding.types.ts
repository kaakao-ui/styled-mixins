import { DefaultTheme } from 'styled-components';

export interface IPadding {
  p?: keyof DefaultTheme['space'] | string | number;
  pb?: keyof DefaultTheme['space'] | string | number;
  pl?: keyof DefaultTheme['space'] | string | number;
  pr?: keyof DefaultTheme['space'] | string | number;
  pt?: keyof DefaultTheme['space'] | string | number;
  px?: keyof DefaultTheme['space'] | string | number;
  py?: keyof DefaultTheme['space'] | string | number;
}
