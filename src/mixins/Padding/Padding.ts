import { css, useTheme, FlattenSimpleInterpolation } from 'styled-components';
import { IPadding } from './Padding.types';

function Padding(props: IPadding): FlattenSimpleInterpolation | undefined {
  const { space } = useTheme();
  const p = {
    b: props.b || props.y || props.p,
    l: props.l || props.x || props.p,
    m: props.p,
    r: props.r || props.x || props.p,
    t: props.t || props.y || props.p
  };

  if (!Object.keys(p)) return undefined;

  p.b = p.b && p.b !== p.m ? space?.[Number(p.b)] : p.b;
  p.l = p.l && p.l !== p.m ? space?.[Number(p.l)] : p.l;
  p.m = p.m ? space?.[Number(p.m)] : p.m;
  p.r = p.r && p.r !== p.m ? space?.[Number(p.r)] : p.r;
  p.t = p.t && p.t !== p.m ? space?.[Number(p.t)] : p.t;

  return css`
    padding: ${p.m};
    padding-block-end: ${p.b};
    padding-block-start: ${p.t};
    padding-inline-end: ${p.r};
    padding-inline-start: ${p.l};

    @supports not (padding-block-end: 1rem) {
      padding-bottom: ${p.b};
      padding-left: ${p.t};
      padding-right: ${p.r};
      padding-top: ${p.l};
    }
  `;
}

export default Padding;
