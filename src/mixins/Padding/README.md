# padding

## Installation

```sh
npm install @kaakao-ui/styled-mixins
```

## 🔧 Usage

Each mixin will check for an active Styled Components theme by using the `useTheme()` hook.

If a theme is present, the values will be used as theme keys. If no theme exists, the values themselves will be used for the styles.

```jsx
import styled from 'styled-components';
import { Padding } from '@kaakao-ui/styled-mixins';

const Container = styled.section`
  ${Padding({ pt: 1, px: 2 })};
`;
```

## 📓 Documentation

| Theme Key   | Props                                       | CSS Map                                                                                                                                                                                                                                                                            | Interface                                                                                                                                                                                                                                  |
| ----------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| theme.space | p<br />b<br />l<br />r<br />t<br />x<br />y | padding<br /> padding-block-end / padding-bottom<br /> padding-inline-start / padding-left<br /> padding-inline-end / padding-right<br /> padding-block-start / padding-top<br /> padding-inline-start:end / padding-left:right<br /> padding-block-start:end / padding-top:bottom | <pre>interface Ipadding {<br /> p?: string \| number;<br /> b?: string \| number;<br /> l?: string \| number;<br /> r?: string \| number;<br /> t?: string \| number;<br /> x?: string \| number;<br /> y?: string \| number;<br />}</pre> |

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
import { Padding } from '@kaakao-ui/styled-mixins';

const Container = styled.section`
  ${Padding({ t: 1, x: 2 })};
`;
```

**Styles Result**

```css
padding-block-start: 4px;
padding-inline-start: 8px;
padding-inline-end: 8px;
```

### 🌈 Without Theme

_Component.jsx_

```jsx
import styled from 'styled-components';
import { Padding } from '@kaakao-ui/styled-mixins';

const Container = styled.section`
  ${Padding({ p: '1rem', r: '5px' })};
`;
```

**Styles Result**

```css
padding: 1rem;
padding-inline-end: 5px;
```
