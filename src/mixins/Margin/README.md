# Margin

## 🤖 Installation

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
  ${Margin({ t: 1, x: 2 })};
`;
```

## 📓 Documentation

| Theme Key   | Props                                       | CSS Map                                                                                                                                                                                                                                                               | Interface                                                                                                                                                                                                                                 |
| ----------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| theme.space | m<br />b<br />l<br />r<br />t<br />x<br />y | margin<br /> margin-block-end / margin-bottom<br /> margin-inline-start / margin-left<br /> margin-inline-end / margin-right<br /> margin-block-start / margin-top<br /> margin-inline-start:end / margin-left:right<br /> margin-block-start:end / margin-top:bottom | <pre>interface IMargin {<br /> m?: string \| number;<br /> b?: string \| number;<br /> l?: string \| number;<br /> r?: string \| number;<br /> t?: string \| number;<br /> x?: string \| number;<br /> y?: string \| number;<br />}</pre> |

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
  ${Margin({ t: 1, x: 2 })};
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
  ${Margin({ m: '1rem', r: '5px' })};
`;
```

**Styles Result**

```css
margin: 1rem;
margin-inline-end: 5px;
```
