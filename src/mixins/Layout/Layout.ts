import { css, FlattenSimpleInterpolation } from 'styled-components';
import { ILayout } from './Layout.types';

function Layout(props: ILayout): FlattenSimpleInterpolation {
  return css`
    block-size: ${props.boxSize || props.h};
    display: ${props.display};
    inline-size: ${props.boxSize || props.w};
    max-block-size: ${props.maxH};
    max-inline-size: ${props.maxW};
    min-block-size: ${props.minH};
    min-inline-size: ${props.minW};
    overflow: ${props.overflow};
    overflow-block: ${props.overflowY};
    overflow-inline: ${props.overflowX};
    vertical-align: ${props.vAlign};

    @supports not (block-size: 1rem) {
      height: ${props.boxSize || props.h};
      max-height: ${props.maxH};
      min-height: ${props.minH};
    }

    @supports not (inline-size: 1rem) {
      max-width: ${props.maxW};
      min-width: ${props.minW};
      width: ${props.boxSize || props.w};
    }

    ${(props.overflowX || props.overflowY) &&
    css`
      @supports not (overflow-block: scroll) {
        overflow-x: ${props.overflowX};
        overflow-y: ${props.overflowY};
      }
    `}
  `;
}

export default Layout;
