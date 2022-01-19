import { DefaultTheme } from 'styled-components';

export interface IMargin {
  m?: keyof DefaultTheme['space'];
  mb?: keyof DefaultTheme['space'];
  ml?: keyof DefaultTheme['space'];
  mr?: keyof DefaultTheme['space'];
  mt?: keyof DefaultTheme['space'];
  mx?: keyof DefaultTheme['space'];
  my?: keyof DefaultTheme['space'];
}
