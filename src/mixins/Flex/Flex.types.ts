import { GlobalAlignments, GlobalValues } from '../../types/global';

export type ContentAlignment =
  | GlobalValues
  | GlobalAlignments
  | 'flex-start'
  | 'flex-end'
  | 'normal'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch';
export type Direction = GlobalValues | 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type Wrap = GlobalValues | 'nowrap' | 'wrap' | 'wrap-reverse';

export interface IFlex {
  alignContent?: ContentAlignment;
  alignItems?: ContentAlignment;
  alignSelf?: string;
  flex?: string;
  flexBasis?: string;
  flexDirection?: Direction;
  flexGrow?: number | GlobalValues;
  flexShrink?: number | GlobalValues;
  flexWrap?: Wrap;
  justifyContent?: ContentAlignment;
  justifyItems?: ContentAlignment;
  justifySelf?: string;
  order?: number;
}
