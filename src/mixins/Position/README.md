# Padding

## 🤖 Installation

```sh
npm install @kaakao-ui/styled-mixins
```

## 🔧 Usage

Each mixin will check for an active Styled Components theme by using the `useTheme()` hook.

If a theme is present, the values will be used as theme keys. If no theme exists, the values themselves will be used for the styles.

```jsx
import styled from 'styled-components';
import { Position } from '@kaakao-ui/styled-mixins';

const Container = styled.section`
  ${Position({ p: 'absolute', t: 1 })};
`;
```

## 📓 Documentation

| Theme Key   | Props                                                     | CSS Map                                                                                                                                       | Interface                                                                                                                                                                                                           |
| ----------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| theme.space | bottom<br />left<br />position<br />right<br />top<br />z | inset-block-end / bottom<br />inset-inline-start / left<br />position<br />inset-inline-end / right<br />inset-block-start / top<br />z-index | <pre>interface IPosition {<br /> bottom?: string \| number;<br /> left?: string \| number;<br /> position?: Positions;<br /> right?: string \| number;<br /> top?: string \| number;<br /> z?: number;<br />}</pre> |

## 🚀 Examples

### 🖌️ With Theme

_theme.js_

```js
const theme = {
  space: [0, '4px', '8px', '12px', '16px']
};
```

_App.jsx_

```jsx
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

<ThemeProvider theme={theme}>{children}</ThemeProvider>;
```

_Component.jsx_

```jsx
import styled from 'styled-components';
import { Position } from '@kaakao-ui/styled-mixins';

const Container = styled.section`
  ${Position({ p: 'absolute', t: 1 })};
`;
```

**Styles Result**

```css
position: absolute;
inset-block-start: 4px;
```

### 🌈 Without Theme

_Component.jsx_

```jsx
import styled from 'styled-components';
import { Padding } from '@kaakao-ui/styled-mixins';

const Container = styled.section`
  ${Position({ p: 'absolute', t: '5px' })};
`;
```

**Styles Result**

```css
position: absolute;
inset-block-start: 5px;
```
