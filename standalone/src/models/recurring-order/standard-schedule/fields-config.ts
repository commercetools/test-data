import { fake, oneOf, type TModelFieldsConfig } from '@/core';
import { intervalUnit } from './constants';
import type { TStandardScheduleGraphql } from './types';

const commonFieldsConfig = {
  type: 'Standard',
  value: fake((f) => f.number.int({ min: 1, max: 100 })),
  intervalUnit: oneOf(...Object.values(intervalUnit)),
};
export const graphqlFieldsConfig: TModelFieldsConfig<TStandardScheduleGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'StandardSchedule',
    },
  };
