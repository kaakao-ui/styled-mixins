# Space

## 🤖 Installation

```sh
npm install @kaakao-ui/styled-mixins
```

## 🔧 Usage

Each mixin will check for an active Styled Components theme by using the `useTheme()` hook.

If a theme is present, the values will be used as theme keys. If no theme exists, the values themselves will be used for the styles.

```jsx
import styled from 'styled-components';
import { Space } from '@kaakao-ui/styled-mixins';

const Container = styled.section`
  ${Space({ m: { t: 1 }, p: { x: 2 } })};
`;
```

## 📓 Documentation

| Theme Key   | Props    | CSS Map                                                | Interface                                                                   |
| ----------- | -------- | ------------------------------------------------------ | --------------------------------------------------------------------------- |
| theme.space | m<br />p | See [Margin](../Margin)<br />See [Padding](../Padding) | <pre>interface ISpace {<br /> m?: IMargin;<br /> p?: IPadding;<br />}</pre> |

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
import { Space } from '@kaakao-ui/styled-mixins';

const Container = styled.section`
  ${Space({ m: { t: 1 }, p: { x: 2 } })};
`;
```

**Styles Result**

```css
margin-block-start: 4px;
padding-inline-start: 8px;
padding-inline-end: 8px;
```

### 🌈 Without Theme

_Component.jsx_

```jsx
import styled from 'styled-components';
import { Space } from '@kaakao-ui/styled-mixins';

const Container = styled.section`
  ${Space({ m: { t: '1rem' }, p: { x: '5px' } })};
`;
```

**Styles Result**

```css
margin-block-start: 1rem;
padding-inline-end: 5px;
padding-inline-start: 5px;
```
