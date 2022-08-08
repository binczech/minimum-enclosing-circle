import { isNull } from 'lodash/fp';
import React, {
  FunctionComponent, memo, useCallback,
} from 'react';

import {
  AntCol, AntForm, AntRow, FormButtons, FormItem,
} from 'layout';

import { graphSetupFormInitialValues, graphSetupFormName, GraphSetupFormValues } from '../../types';
import { validator } from './validator';

import './styles.scss';

interface Props {
    onSubmit(values: GraphSetupFormValues): void;
}

const GraphSetupFormBase: FunctionComponent<Props> = (props) => {
  const { onSubmit } = props;

  const [form] = AntForm.useForm<GraphSetupFormValues>();
  const countOfPoints: number | null = AntForm.useWatch('countOfPoints', form);

  const onCancel = useCallback(() => {
    form.resetFields();
  }, [form]);

  return (
    <div className="graphSetupForm">
      <AntForm
        name={graphSetupFormName}
        form={form}
        initialValues={graphSetupFormInitialValues}
        onFinish={onSubmit}
      >
        <AntRow gutter={[16, 16]}>
          <AntCol xs={24}>
            <FormItem
              name="countOfPoints"
              label="Count of points"
              type="number"
              required
              customRules={[{ validator }]}
            />
          </AntCol>
          <AntCol xs={24}>
            <FormButtons
              submitDisabled={isNull(countOfPoints)}
              onCancel={onCancel}
            />
          </AntCol>
        </AntRow>
      </AntForm>
    </div>
  );
};

export const GraphSetupForm = memo(GraphSetupFormBase);
