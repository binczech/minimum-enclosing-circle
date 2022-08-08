import React, { FunctionComponent, memo } from 'react';

import { AntCol, AntRow, Button } from 'layout';

interface Props {
    edit?: boolean;
    submitDisabled?: boolean;
    onCancel(): void;
}

const FormButtonsBase: FunctionComponent<Props> = (props) => {
  const { edit, submitDisabled, onCancel } = props;

  return (
    <AntRow justify="end" gutter={8}>
      <AntCol>
        <Button type="default" onClick={onCancel}>
          Reset
        </Button>
      </AntCol>
      <AntCol>
        <Button
          htmlType="submit"
          disabled={submitDisabled}
          testId="submit-form"
        >
          {edit ? 'Edit' : 'Create'}
        </Button>
      </AntCol>
    </AntRow>
  );
};

export const FormButtons = memo(FormButtonsBase);
