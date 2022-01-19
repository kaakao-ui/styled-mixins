import { css, useTheme, FlattenSimpleInterpolation } from 'styled-components';
import { IPosition } from './Position.types';

function Position(props: IPosition): FlattenSimpleInterpolation | undefined {
  const theme = useTheme();
  const { bottom, left, position, right, top, z } = props;
  const p = {
    b: bottom,
    l: left,
    p: position,
    r: right,
    t: top,
    z
  };

  if (!props.position || !Object.keys(p)) return undefined;

  return css`
    inset-block-end: ${p.b && theme.space?.[p.b]};
    inset-block-start: ${p.t && theme.space?.[p.t]};
    inset-inline-end: ${p.r && theme.space?.[p.r]};
    inset-inline-start: ${p.l && theme.space?.[p.l]};
    position: ${p.p};
    z-index: ${p.z};

    @supports not (inset-block-end: 1rem) {
      bottom: ${p.b && theme.space?.[p.b]};
      left: ${p.l && theme.space?.[p.l]};
      right: ${p.r && theme.space?.[p.r]};
      top: ${p.t && theme.space?.[p.t]};
    }
  `;
}

export default Position;
