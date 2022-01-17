import { DefaultTheme } from 'styled-components';

export interface IMargin {
  m?: keyof DefaultTheme['space'] | string | number;
  mb?: keyof DefaultTheme['space'] | string | number;
  ml?: keyof DefaultTheme['space'] | string | number;
  mr?: keyof DefaultTheme['space'] | string | number;
  mt?: keyof DefaultTheme['space'] | string | number;
  mx?: keyof DefaultTheme['space'] | string | number;
  my?: keyof DefaultTheme['space'] | string | number;
}
