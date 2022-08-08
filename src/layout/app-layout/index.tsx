import React, { FunctionComponent, memo, PropsWithChildren } from 'react';

import { AntLayout } from '../ant';
import { Content } from '../content';
import { Title } from '../title';

interface Props {
  fullWidth?: boolean;
}

const AppLayoutBase: FunctionComponent<PropsWithChildren<Props>> = ({ children, fullWidth }) => (
  <AntLayout>
    <AntLayout.Header>
      <div>
        <Title isSiteTitle text="Minimum enclosing circle calculator" />
      </div>
    </AntLayout.Header>
    <Content>
      {children}
    </Content>
  </AntLayout>
);

export const AppLayout = memo(AppLayoutBase);
