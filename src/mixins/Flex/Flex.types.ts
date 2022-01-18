import { GlobalValues } from '../../types/global';

export type Direction = GlobalValues | 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type Wrap = GlobalValues | 'nowrap' | 'wrap' | 'wrap-reverse';

export interface IFlex {
  alignContent?: string;
  alignItems?: string;
  alignSelf?: string;
  flex?: string;
  flexBasis?: string;
  flexDirection?: Direction;
  flexGrow?: number | GlobalValues;
  flexShrink?: number | GlobalValues;
  flexWrap?: Wrap;
  justifyContent?: string;
  justifyItems?: string;
  justifySelf?: string;
  order?: number;
}
