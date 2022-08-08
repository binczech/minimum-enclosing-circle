import React, { FunctionComponent, memo } from 'react';
import { Routes } from 'react-router-dom';

import { circleRoutes } from 'circle';

const OurRoutesBase: FunctionComponent = () => (
  <Routes>
    {circleRoutes}
  </Routes>
);

export const OurRoutes = memo(OurRoutesBase);
