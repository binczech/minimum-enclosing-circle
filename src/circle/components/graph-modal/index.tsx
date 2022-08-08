import { Modal } from 'antd';
import { isEmpty } from 'lodash/fp';
import React, { FunctionComponent, memo } from 'react';

import { CircleType, PointType } from '../../types';
import { Graph } from '../graph';

interface Props {
  circle: CircleType;
  points: Array<PointType>;
  onClose(): void;
}

const GraphModalBase: FunctionComponent<Props> = (props) => {
  const { circle, points, onClose } = props;

  return (
    <Modal
      visible={!isEmpty(points)}
      onCancel={onClose}
      footer={null}
      destroyOnClose
      width="100%"
    >
      <div data-testid="graph-modal">
        <Graph
          circle={circle}
          points={points}
        />
      </div>
    </Modal>
  );
};

export const GraphModal = memo(GraphModalBase);
