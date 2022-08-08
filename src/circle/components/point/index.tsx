import React, { FunctionComponent, memo } from 'react';
import { Circle, Layer } from 'react-konva';

import { PointType } from '../../types';

interface Props extends PointType {
    color: string;
}

const PointBase: FunctionComponent<Props> = (props) => {
  const {
    color,
    x,
    y,
  } = props;

  return (
    <Layer>
      <Circle
        fill={color}
        radius={4}
        x={x}
        y={y}
      />
    </Layer>
  );
};

export const Point = memo(PointBase);
