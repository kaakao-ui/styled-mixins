import { DefaultTheme } from 'styled-components';
import { GlobalAlignments, GlobalValues } from '../../types/global';

export type FontStyle = GlobalValues | 'normal' | 'italic' | 'oblique';
export type TextDecoration = GlobalValues | 'none' | 'underline' | 'overline' | string;
export type TextTransform = GlobalValues | 'capitalize' | 'lowercase' | 'none' | 'uppercase';

export interface ITypography {
  fontFamily?: string; // TODO: Tie to theme font families
  fontSize?: keyof DefaultTheme['fontSize'];
  fontStyle?: FontStyle;
  fontWeight?: keyof DefaultTheme['fontWeight'];
  letterSpacing?: string | number; // TODO: Add optional theme
  lineHeight?: string | number; // TODO: Add optional theme
  textAlign?: GlobalAlignments;
  textDecoration?: TextDecoration;
  textTransform?: TextTransform;
}
