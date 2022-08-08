import React, { FunctionComponent, memo, ReactNode } from 'react';

import { AntContent } from 'layout';

import './styles.scss';

interface Props {
    children?: ReactNode
}

const ContentBase: FunctionComponent<Props> = (props) => {
  const { children } = props;

  return (
    <AntContent>
      <div className="content">
        {children}
      </div>
    </AntContent>
  );
};

export const Content = memo(ContentBase);
