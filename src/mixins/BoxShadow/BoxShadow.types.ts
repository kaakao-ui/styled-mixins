import { DefaultTheme } from 'styled-components';

export interface IBoxShadow {
  boxShadow?: keyof DefaultTheme['shadow'] | string | number;
}
