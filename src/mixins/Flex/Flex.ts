import { css, FlattenSimpleInterpolation } from 'styled-components';
import { IFlex } from './Flex.types';

function Flex(props: IFlex): FlattenSimpleInterpolation {
  return css`
    align-content: ${props.alignContent};
    align-items: ${props.alignItems};
    align-self: ${props.alignSelf};
    display: flex;
    flex: ${props.flex};
    flex-basis: ${props.flexBasis};
    flex-direction: ${props.flexDirection};
    flex-grow: ${props.flexGrow};
    flex-shrink: ${props.flexShrink};
    flex-wrap: ${props.flexWrap};
    justify-content: ${props.justifyContent};
    justify-items: ${props.justifyItems};
    justify-self: ${props.justifySelf};
    order: ${props.order};
  `;
}

export default Flex;
