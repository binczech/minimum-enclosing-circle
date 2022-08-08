import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppLayout } from 'layout';

import { OurRoutes } from './routes';

import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App: FunctionComponent = () => (
  <BrowserRouter>
    <AppLayout>
      <OurRoutes />
    </AppLayout>
  </BrowserRouter>
);

export default App;
