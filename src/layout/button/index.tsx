import { ButtonType } from 'antd/lib/button';
import { ButtonHTMLType } from 'antd/lib/button/button';
import React, { FunctionComponent, memo, ReactNode } from 'react';

import { AntButton, AntPopconfirm } from '../ant';

interface Props {
    type?: ButtonType;
    htmlType?: ButtonHTMLType;
    children?: ReactNode
    fullWidth?: boolean;
    disabled?: boolean;
    danger?: boolean;
    title?: string;
    confirm?: boolean;
    testId?: string;
    onClick?(): void;
}

const ButtonBase: FunctionComponent<Props> = (props) => {
  const {
    children,
    type = 'primary',
    htmlType = 'button',
    fullWidth,
    disabled,
    danger,
    title,
    confirm,
    testId,
    onClick,
  } = props;

  const button = (
    <AntButton
      type={type}
      htmlType={htmlType}
      block={fullWidth}
      disabled={disabled}
      danger={danger}
      title={title}
      onClick={confirm ? undefined : onClick}
      data-testid={testId}
    >
      {children}
    </AntButton>
  );

  return confirm ? (
    <AntPopconfirm
      title="Are you sure you want to delete this item?"
      okText="Yes"
      onConfirm={onClick}
      okButtonProps={{ id: `confirm-${testId}` }}
      disabled={disabled}
    >
      {button}
    </AntPopconfirm>
  ) : button;
};

export const Button = memo(ButtonBase);
