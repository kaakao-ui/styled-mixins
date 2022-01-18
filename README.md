<img alt="Kaakao-UI" src="kaakao.jpg" width="100%">

# Kaakao-UI Styled Mixins [![npm version](https://flat.badgen.net/npm/v/@kaakao-ui/styled-mixins)](https://www.npmjs.com/package/@kaakao-ui/styled-mixins)

A framework-agnostic collection of Styled Components mixins for creating logical CSS styles with appropriate fallbacks.

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
  ${Margin({ m: 1, mx: 2 })};
`;
```

...

## 📓 Documentation

| Mixin                                     | Theme Key                            | Props                                                                                                                                            | CSS Map                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Background](/src/mixins/Background)      |                                      | bg<br />bgAttachment<br />bgImage<br />bgPosition<br />bgRepeat<br />bgSize                                                                      | background<br />background-attachment<br />background-image<br />background-position<br />background-repeat<br />background-size                                                                                                                                                                                                         |
| [Border Radius](/src/mixins/BorderRadius) | theme.radii                          |                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                          |
| [Box Shadow](/src/mixins/BoxShadow)       | theme.shadow                         | boxShadow                                                                                                                                        | box-shadow                                                                                                                                                                                                                                                                                                                               |
| [Gradient](/src/mixins/Gradient)          |                                      | bgClip<br />bgGradient                                                                                                                           | background-clip<br />background-image                                                                                                                                                                                                                                                                                                    |
| [Layout](/src/mixins/Layout)              |                                      | boxSize<br />display<br />h<br />maxH<br />maxW<br />minH<br />minW<br />overflow<br />overflowX<br />overflowY<br />vAlign<br />w               | block:inline-size / height:width<br />display<br />block-size / height<br />max-block-size / max-height<br />max-inline-size / max-width<br />min-block-size / min-height<br />min-inline-size / min-width<br />overflow<br />overflow-inline / overflow-x<br />overflow-block / overflow-y<br />vertical-align<br />inline-size / width |
| [Margin](/src/mixins/Margin)              | theme.space                          | m<br />mb<br />ml<br />mr<br />mt<br />mx<br />my                                                                                                | margin<br /> margin-block-end / margin-bottom<br /> margin-inline-start / margin-left<br /> margin-inline-end / margin-right<br /> margin-block-start / margin-top<br /> margin-inline-start:end / margin-left:right<br /> margin-block-start:end / margin-top:bottom                                                                    |
| [Other](/src/mixins/Other)                |                                      |                                                                                                                                                  |                                                                                                                                                                                                                                                                                                                                          |
| [Padding](/src/mixins/Padding)            | theme.space                          | p<br />pb<br />pl<br />pr<br />pt<br />px<br />py                                                                                                | padding<br /> padding-block-end / padding-bottom<br /> padding-inline-start / padding-left<br /> padding-inline-end / padding-right<br /> padding-block-start / padding-top<br /> padding-inline-start:end / padding-left:right<br /> padding-block-start:end / padding-top:bottom                                                       |
| [Position](/src/mixins/Position)          | theme.space                          | bottom<br />left<br />position<br />right<br />top<br />z                                                                                        | inset-block-end / bottom<br />inset-inline-start / left<br />position<br />inset-inline-end / right<br />inset-block-start / top<br />z-index                                                                                                                                                                                            |
| [Space](/src/mixins/Space)                | theme.space                          | See [Margin](../Margin)<br />See [Padding](../Padding)                                                                                           |                                                                                                                                                                                                                                                                                                                                          |
| [Typography](/src/mixins/Typography)      | theme.fontSize<br />theme.fontWeight | fontFamily<br />fontSize<br />fontStyle<br />fontWeight<br />letterSpacing<br />lineHeight<br />textAlign<br />textDecoration<br />textTransform | font-family<br />font-size<br />font-style<br />font-weight<br />letter-spacing<br />line-height<br />text-align<br />text-decoration<br />text-transform                                                                                                                                                                                |
