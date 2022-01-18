import { DefaultTheme } from 'styled-components';
import { GlobalAlignments, GlobalValues } from '../../types/global';

export type AutoFlow = GlobalValues | 'column' | 'column dense' | 'dense' | 'row' | 'row dense';
export type ContentAlignment =
  | GlobalValues
  | GlobalAlignments
  | 'baseline'
  | 'normal'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'stretch';

export interface IGrid {
  alignContent?: ContentAlignment;
  alignItems?: ContentAlignment;
  gridArea?: string;
  gridAutoCols?: string;
  gridAutoFlow?: AutoFlow;
  gridAutoRows?: string;
  gridCol?: GlobalValues | string;
  gridColGap?: keyof DefaultTheme['space'] | string | number;
  gridGap?: keyof DefaultTheme['space'] | string | number;
  gridRow?: GlobalValues | string;
  gridRowGap?: keyof DefaultTheme['space'] | string | number;
  gridTemplateAreas?: string;
  gridTemplateCols?: string;
  gridTemplateRows?: string;
  justifyContent?: ContentAlignment;
  justifyItems?: ContentAlignment;
  placeItems?: string;
}
