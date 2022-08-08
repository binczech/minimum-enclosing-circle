import React, { FunctionComponent, memo } from 'react';
import { Circle as CircleShape, Layer } from 'react-konva';

import { CircleType } from '../../types';

type Props = CircleType;

const CircleBase: FunctionComponent<Props> = (props) => {
  const { radius, x, y } = props;

  return (
    <Layer>
      <CircleShape
        x={x}
        y={y}
        radius={radius}
        stroke="black"
      />
    </Layer>
  );
};

export const Circle = memo(CircleBase);
