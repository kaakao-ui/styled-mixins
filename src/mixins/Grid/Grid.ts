import { css, FlattenSimpleInterpolation } from 'styled-components';
import { IGrid } from './Grid.types';

function Grid(props: IGrid): FlattenSimpleInterpolation {
  return css`
    align-content: ${props.alignContent};
    align-items: ${props.alignItems};
    grid-area: ${props.gridArea};
    grid-auto-columns: ${props.gridAutoCols};
    grid-auto-flow: ${props.gridAutoFlow};
    grid-auto-rows: ${props.gridAutoRows};
    grid-column: ${props.gridCol};
    grid-column-gap: ${props.gridColGap};
    grid-gap: ${props.gridGap};
    grid-row: ${props.gridRow};
    grid-row-gap: ${props.gridRowGap};
    grid-template-areas: ${props.gridTemplateAreas};
    grid-template-columns: ${props.gridTemplateCols};
    grid-template-rows: ${props.gridTemplateRows};
    justify-content: ${props.justifyContent};
    justify-items: ${props.justifyItems};
    place-items: ${props.placeItems};
  `;
}

export default Grid;
