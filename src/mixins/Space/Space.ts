import { css, FlattenSimpleInterpolation } from 'styled-components';
import { Margin } from '../Margin';
import { Padding } from '../Padding';
import { ISpace } from './Space.types';

function Space(props: ISpace): FlattenSimpleInterpolation | undefined {
  return css`
    ${Margin(props)};
    ${Padding(props)};
  `;
}

export default Space;
