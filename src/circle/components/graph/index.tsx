import React, { FunctionComponent, memo } from 'react';
import { Stage } from 'react-konva';

import { CircleType, PointType } from '../../types';
import { isPointOnCircle } from '../../utils';
import { Circle } from '../circle';
import { Point } from '../point';

interface Props {
    circle: CircleType;
    points: Array<PointType>;
}

const GraphBase: FunctionComponent<Props> = (props) => {
  const { circle, points } = props;

  return (
    <div id="graph">
      <Stage
        width={window.innerWidth}
        height={window.innerHeight / 2}
      >
        <Circle
          radius={circle.radius}
          x={circle.x}
          y={circle.y}
        />
        {points.map((point) => (
          <Point
            color={isPointOnCircle(point, circle) ? 'red' : 'black'}
            x={point.x}
            y={point.y}
            key={`point-${point.x}-${point.y}`}
          />
        ))}

      </Stage>
    </div>
  );
};

export const Graph = memo(GraphBase);
