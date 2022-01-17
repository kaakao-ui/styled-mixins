import { GlobalValues } from '../../types/global';

export type Positions = GlobalValues | 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';

export interface IPosition {
  bottom?: string | number;
  left?: string | number;
  position?: Positions;
  right?: string | number;
  top?: string | number;
  z?: number;
}
