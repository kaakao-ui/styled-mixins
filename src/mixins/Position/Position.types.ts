import { DefaultTheme } from 'styled-components';
import { GlobalValues } from '../../types/global';

export type Positions = GlobalValues | 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';

export interface IPosition {
  bottom?: keyof DefaultTheme['space'] | string | number;
  left?: keyof DefaultTheme['space'] | string | number;
  position?: Positions;
  right?: keyof DefaultTheme['space'] | string | number;
  top?: keyof DefaultTheme['space'] | string | number;
  z?: number; // TODO: Tie to theme
}
