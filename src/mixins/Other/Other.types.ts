import { GlobalValues } from 'src/types/global';

export type ObjectFit = GlobalValues | 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

export type OverflowWrap = GlobalValues | 'anywhere' | 'break-word' | 'normal';

export type PointerEvents =
  | GlobalValues
  | 'all'
  | 'auto'
  | 'fill'
  | 'none'
  | 'painted'
  | 'stroke'
  | 'visible'
  | 'visibleFill'
  | 'visiblePainted'
  | 'visibleStroke';

export type Resize =
  | GlobalValues
  | 'block'
  | 'both'
  | 'horizontal'
  | 'inline'
  | 'none'
  | 'vertical';

export type Visibility = GlobalValues | 'collapse' | 'hidden' | 'visible';

export type WhiteSpace =
  | GlobalValues
  | 'break-spaces'
  | 'normal'
  | 'nowrap'
  | 'pre-line'
  | 'pre-wrap'
  | 'pre';

export type WordBreak = GlobalValues | 'break-all' | 'keep-all' | 'normal';

export interface IOther {
  animation?: string;
  boxSizing?: string;
  cursor?: string;
  objectFit?: ObjectFit;
  objectPosition?: string;
  outline?: string;
  overflowWrap?: OverflowWrap;
  pointerEvents?: PointerEvents;
  resize?: Resize;
  textOverflow?: string;
  transform?: string;
  transformOrigin?: string;
  transition?: string;
  userSelect?: string;
  visibility?: Visibility;
  whiteSpace?: WhiteSpace;
  wordBreak?: WordBreak;
}
