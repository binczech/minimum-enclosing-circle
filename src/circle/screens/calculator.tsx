import { random } from 'lodash/fp';
import React, {
  FunctionComponent, memo, useCallback, useState,
} from 'react';

import { GraphModal, GraphSetupForm } from '../components';
import { GraphSetupFormValues, PointType } from '../types';
import { getMinimumEnclosingCircle } from '../utils';

const CalculatorBase: FunctionComponent = (_) => {
  const [points, setPoints] = useState<Array<PointType>>([]);

  const graphWidth = window.innerWidth;
  const widthPadding = graphWidth * 0.2;
  const graphHeight = window.innerHeight / 2;
  const heightPadding = graphHeight * 0.2;

  const calculatePoints = useCallback(({ countOfPoints }: GraphSetupFormValues) => {
    const randomPoints: Array<PointType> = [...Array(countOfPoints)].map(() => ({
      x: random(widthPadding, graphWidth - widthPadding),
      y: random(heightPadding, graphHeight - heightPadding),
    }));
    setPoints(randomPoints);
  }, [graphHeight, graphWidth, heightPadding, widthPadding]);

  const resetPoints = useCallback(() => {
    setPoints([]);
  }, []);

  return (
    <>
      <GraphSetupForm
        onSubmit={calculatePoints}
      />
      <GraphModal
        circle={getMinimumEnclosingCircle(points)}
        points={points}
        onClose={resetPoints}
      />
    </>
  );
};

export const Calculator = memo(CalculatorBase);
