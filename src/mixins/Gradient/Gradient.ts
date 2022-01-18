import { css, FlattenSimpleInterpolation } from 'styled-components';
import { IGradient } from './Gradient.types';

function Gradient(props: IGradient): FlattenSimpleInterpolation | undefined {
  if (!props.bgClip && !props.bgGradient) return undefined;
  return css`
    background-clip: ${props.bgClip};
    background-image: ${props.bgGradient};
  `;
}

export default Gradient;
