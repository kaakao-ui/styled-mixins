# Margin

## Installation

```sh
npm install @kaakao-ui/styled-mixins
```

## 🔧 Usage

Each mixin will check for an active Styled Components theme by using the `useTheme()` hook.

If a theme is present, the values will be used as theme keys. If no theme exists, the values themselves will be used for the styles.

```jsx
import styled from 'styled-components';
import { Margin } from '@kaakao-ui/styled-mixins';

const Container = styled.section`
  ${Margin({ mt: 1, mx: 2 })};
`;
```

## 📓 Documentation

| Theme Key   | Props                                             | CSS Map                                                                                                                                                                                                                                                               | Interface                                                                                                                                                                                                                                       |
| ----------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| theme.space | m<br />mb<br />ml<br />mr<br />mt<br />mx<br />my | margin<br /> margin-block-end / margin-bottom<br /> margin-inline-start / margin-left<br /> margin-inline-end / margin-right<br /> margin-block-start / margin-top<br /> margin-inline-start:end / margin-left:right<br /> margin-block-start:end / margin-top:bottom | <pre>interface IMargin {<br /> m?: string \| number;<br /> mb?: string \| number;<br /> ml?: string \| number;<br /> mr?: string \| number;<br /> mt?: string \| number;<br /> mx?: string \| number;<br /> my?: string \| number;<br />}</pre> |

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
import { Margin } from '@kaakao-ui/styled-mixins';

const Container = styled.section`
  ${Margin({ mt: 1, mx: 2 })};
`;
```

**Styles Result**

```css
margin-block-start: 4px;
margin-inline-start: 8px;
margin-inline-end: 8px;
```

### 🌈 Without Theme

_Component.jsx_

```jsx
import styled from 'styled-components';
import { Margin } from '@kaakao-ui/styled-mixins';

const Container = styled.section`
  ${Margin({ mt: '1rem', mx: 'auto' })};
`;
```

**Styles Result**

```css
margin-block-start: 1rem;
margin-inline-start: auto;
margin-inline-end: auto;
```
