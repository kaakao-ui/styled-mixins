import { css, useTheme, FlattenSimpleInterpolation } from 'styled-components';
import { IBorderRadius } from './BorderRadius.types';

function BorderRadius(props: IBorderRadius): FlattenSimpleInterpolation | undefined {
  const theme = useTheme();
  const r = {
    bl: props.borderBottomLeftRadius || props.borderBottomRadius || props.borderLeftRadius,
    br: props.borderBottomRightRadius || props.borderBottomRadius || props.borderRightRadius,
    r: props.borderRadius,
    tl: props.borderTopLeftRadius || props.borderTopRadius || props.borderLeftRadius,
    tr: props.borderTopRightRadius || props.borderTopRadius || props.borderRightRadius
  };

  if (!Object.keys(r)) return undefined;

  r.bl = r.bl && r.bl !== r.r && theme.radii?.[r.bl];
  r.br = r.br && r.br !== r.r && theme.radii?.[r.br];
  r.tl = r.tl && r.tl !== r.r && theme.radii?.[r.tl];
  r.tr = r.tr && r.tr !== r.r && theme.radii?.[r.tr];
  r.r = r.r && theme.radii?.[r.r];

  return css`
    border-end-end-radius: ${r.br};
    border-end-start-radius: ${r.bl};
    border-radius: ${r.r};
    border-start-end-radius: ${r.tr};
    border-start-start-radius: ${r.tl};

    @supports not (border-end-end-radius: 1rem) {
      border-bottom-left-radius: ${r.bl};
      border-bottom-right-radius: ${r.br};
      border-top-left-radius: ${r.tl};
      border-top-right-radius: ${r.tr};
    }
  `;
}

export default BorderRadius;
