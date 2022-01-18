import { css, FlattenSimpleInterpolation } from 'styled-components';
import { IBackground } from './Background.types';

function Background(props: IBackground): FlattenSimpleInterpolation | undefined {
  return css`
    background: ${props.bg};
    background-attachment: ${props.bgAttachment};
    background-image: ${props.bgImage};
    background-position: ${props.bgPosition};
    background-repeat: ${props.bgRepeat};
    background-size: ${props.bgSize};
  `;
}

export default Background;
