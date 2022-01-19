import { css, FlattenSimpleInterpolation } from 'styled-components';
import { IBorder } from './Border.types';

function Border(props: IBorder): FlattenSimpleInterpolation | undefined {
  return css`
    border: ${props.border};
    border-color: ${props.borderColor};
    border-style: ${props.borderStyle};
    border-width: ${props.borderWidth};

    border-block-end: ${props.borderY || props.borderBottom};
    border-block-end-color: ${props.borderYColor || props.borderBottomColor};
    border-block-end-style: ${props.borderYStyle || props.borderBottomStyle};
    border-block-end-width: ${props.borderYStyle || props.borderBottomStyle};

    border-block-start: ${props.borderY || props.borderTop};
    border-block-start-color: ${props.borderYColor || props.borderTopColor};
    border-block-start-style: ${props.borderYStyle || props.borderTopStyle};
    border-block-start-width: ${props.borderYStyle || props.borderTopStyle};

    border-inline-end: ${props.borderX || props.borderRight};
    border-inline-end-color: ${props.borderXColor || props.borderRightColor};
    border-inline-end-style: ${props.borderXStyle || props.borderRightStyle};
    border-inline-end-width: ${props.borderXStyle || props.borderRightStyle};

    border-inline-start: ${props.borderX || props.borderLeft};
    border-inline-start-color: ${props.borderXColor || props.borderLeftColor};
    border-inline-start-style: ${props.borderXStyle || props.borderLeftStyle};
    border-inline-start-width: ${props.borderXStyle || props.borderLeftStyle};

    @supports not (border-block-end: 1px solid #000000) {
      border-bottom: ${props.borderY || props.borderBottom};
      border-bottom-color: ${props.borderYColor || props.borderBottomColor};
      border-bottom-style: ${props.borderYStyle || props.borderBottomStyle};
      border-bottom-width: ${props.borderYStyle || props.borderBottomStyle};

      border-top: ${props.borderY || props.borderTop};
      border-top-color: ${props.borderYColor || props.borderTopColor};
      border-top-style: ${props.borderYStyle || props.borderTopStyle};
      border-top-width: ${props.borderYStyle || props.borderTopStyle};

      border-right: ${props.borderX || props.borderRight};
      border-right-color: ${props.borderXColor || props.borderRightColor};
      border-right-style: ${props.borderXStyle || props.borderRightStyle};
      border-right-width: ${props.borderXStyle || props.borderRightStyle};

      border-left: ${props.borderX || props.borderLeft};
      border-left-color: ${props.borderXColor || props.borderLeftColor};
      border-left-style: ${props.borderXStyle || props.borderLeftStyle};
      border-left-width: ${props.borderXStyle || props.borderLeftStyle};
    }
  `;
}

export default Border;
