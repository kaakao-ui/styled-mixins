import { css, useTheme, FlattenSimpleInterpolation } from 'styled-components';
import { IMargin } from './Margin.types';

function Margin(props: IMargin): FlattenSimpleInterpolation | undefined {
  const theme = useTheme();
  const m = {
    b: props.mb || props.my || props.m,
    l: props.ml || props.mx || props.m,
    m: props.m,
    r: props.mr || props.mx || props.m,
    t: props.mt || props.my || props.m
  };

  if (!Object.keys(m)) return undefined;

  m.b = m.b && m.b !== m.m ? theme?.space?.[Number(m.b)] : m.b;
  m.l = m.l && m.l !== m.m ? theme?.space?.[Number(m.l)] : m.l;
  m.m = m.m ? theme?.space?.[Number(m.m)] : m.m;
  m.r = m.r && m.r !== m.m ? theme?.space?.[Number(m.r)] : m.r;
  m.t = m.t && m.t !== m.m ? theme?.space?.[Number(m.t)] : m.t;

  return css`
    margin: ${m.m};
    margin-block-end: ${m.b};
    margin-block-start: ${m.t};
    margin-inline-end: ${m.r};
    margin-inline-start: ${m.l};

    @supports not (margin-block-end: 1rem) {
      margin-bottom: ${m.b};
      margin-left: ${m.t};
      margin-right: ${m.r};
      margin-top: ${m.l};
    }
  `;
}

export default Margin;
