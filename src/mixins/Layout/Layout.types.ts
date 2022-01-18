import { GlobalValues } from '../../types/global';

export type VerticalAlignments =
  | GlobalValues
  | 'baseline'
  | 'bottom'
  | 'middle'
  | 'sub'
  | 'super'
  | 'text-bottom'
  | 'text-top'
  | 'top';

export type OverflowValues = GlobalValues | 'auto' | 'clip' | 'hidden' | 'scroll' | 'visible';

export type DisplayValues =
  | GlobalValues
  | 'block'
  | 'contents'
  | 'flow-root'
  | 'inline'
  | 'inline-block'
  | 'list-item'
  | 'none'
  | 'table'
  | 'table-row';

export interface ILayout {
  boxSize?: string;
  display?: DisplayValues;
  h?: string;
  maxH?: string;
  maxW?: string;
  minH?: string;
  minW?: string;
  overflow?: OverflowValues;
  overflowX?: OverflowValues;
  overflowY?: OverflowValues;
  vAlign?: string | VerticalAlignments;
  w?: string;
}
