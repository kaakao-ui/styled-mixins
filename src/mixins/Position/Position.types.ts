import { DefaultTheme } from 'styled-components';
import { GlobalValues } from '../../types/global';

export type Positions = GlobalValues | 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';

export interface IPosition {
  bottom?: keyof DefaultTheme['space'];
  left?: keyof DefaultTheme['space'];
  position?: Positions;
  right?: keyof DefaultTheme['space'];
  top?: keyof DefaultTheme['space'];
  z?: number; // TODO: Tie to theme
}
