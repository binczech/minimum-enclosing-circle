import { RuleObject } from 'antd/lib/form';
import { isNumber } from 'lodash/fp';

export const validator = (_rule: RuleObject, value: number) => {
  if (isNumber(value) && value < 4) {
    return Promise.reject(new Error('Count of points must be greater than 3'));
  }
  if (isNumber(value) && value > 100) {
    return Promise.reject(new Error('Count of points must be less than 101'));
  }
  return Promise.resolve();
};
