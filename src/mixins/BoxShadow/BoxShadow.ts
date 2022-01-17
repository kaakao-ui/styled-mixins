import { css, useTheme, FlattenSimpleInterpolation, DefaultTheme } from 'styled-components';
import { IBoxShadow } from './BoxShadow.types';

function BoxShadow(props: IBoxShadow): FlattenSimpleInterpolation | undefined {
  const theme = useTheme();

  if (!props.boxShadow) return undefined;

  return css`
    box-shadow: ${theme?.shadow
      ? theme.shadow[props.boxShadow as keyof DefaultTheme['shadow']]
      : props.boxShadow};
  `;
}

export default BoxShadow;
