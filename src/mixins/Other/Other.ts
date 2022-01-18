import { css, FlattenSimpleInterpolation } from 'styled-components';
import { IOther } from './Other.types';

function Other(props: IOther): FlattenSimpleInterpolation {
  return css`
    animation: ${props.animation};
    box-sizing: ${props.boxSizing};
    cursor: ${props.cursor};
    object-fit: ${props.objectFit};
    object-position: ${props.objectPosition};
    outline: ${props.outline};
    overflow-wrap: ${props.overflowWrap};
    pointer-events: ${props.pointerEvents};
    resize: ${props.resize};
    text-overflow: ${props.textOverflow};
    transform-origin: ${props.transformOrigin};
    transform: ${props.transform};
    transition: ${props.transition};
    user-select: ${props.userSelect};
    visibility: ${props.visibility};
    white-space: ${props.whiteSpace};
    word-break: ${props.wordBreak};
  `;
}

export default Other;
