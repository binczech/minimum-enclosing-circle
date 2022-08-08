import React from 'react';
import { Route } from 'react-router-dom';

import { Calculator } from './screens';

export const circleRoutes = [
  (
    <Route
      key="circle-calculator"
      path="/"
      element={<Calculator />}
    />
  ),
  (
    <Route
      key="default"
      path="*"
      element={<Calculator />}
    />
  ),
];
