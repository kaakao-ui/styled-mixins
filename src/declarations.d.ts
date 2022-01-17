import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    radii?: Record<string | number, string> | string[];
    space?: Record<string | number, string> | string[];
  }
}
