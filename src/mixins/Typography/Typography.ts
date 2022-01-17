import { css, useTheme, FlattenSimpleInterpolation, DefaultTheme } from 'styled-components';
import { ITypography } from './Typography.types';

function Typography(props: ITypography): FlattenSimpleInterpolation {
  const theme = useTheme();

  return css`
    font-family: ${props.fontFamily};
    font-size: ${props.fontSize && theme?.fontSize
      ? theme.fontSize[props.fontSize as keyof DefaultTheme['fontSize']]
      : props.fontSize};
    font-style: ${props.fontStyle};
    font-weight: ${props.fontWeight && theme?.fontWeight
      ? theme.fontWeight[props.fontWeight as keyof DefaultTheme['fontWeight']]
      : props.fontWeight};
    letter-spacing: ${props.letterSpacing};
    line-height: ${props.lineHeight};
    text-align: ${props.textAlign};
    text-decoration: ${props.textDecoration};
    text-transform: ${props.textTransform};
  `;
}

export default Typography;
