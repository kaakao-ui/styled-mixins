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
    inset-block-end: ${p.b ? (theme?.space ? theme.space[Number(p.b)] : p.b) : ''};
    inset-block-start: ${p.t ? (theme?.space ? theme.space[Number(p.t)] : p.t) : ''};
    inset-inline-end: ${p.r ? (theme?.space ? theme.space[Number(p.r)] : p.r) : ''};
    inset-inline-start: ${p.l ? (theme?.space ? theme.space[Number(p.l)] : p.l) : ''};
    position: ${p.p};
    z-index: ${p.z};

    @supports not (inset-block-end: 1rem) {
      bottom: ${p.b ? (theme?.space ? theme.space[Number(p.b)] : p.b) : ''};
    }

    @supports not (inset-block-start: 1rem) {
      top: ${p.t ? (theme?.space ? theme.space[Number(p.t)] : p.t) : ''};
    }

    @supports not (inset-inline-end: 1rem) {
      right: ${p.r ? (theme?.space ? theme.space[Number(p.r)] : p.r) : ''};
    }

    @supports not (inset-inline-start: 1rem) {
      left: ${p.l ? (theme?.space ? theme.space[Number(p.l)] : p.l) : ''};
    }
  `;
}

export default Position;
