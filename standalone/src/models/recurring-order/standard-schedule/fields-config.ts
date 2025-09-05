import { fake, oneOf, type TModelFieldsConfig } from '@/core';
import { intervalUnit } from './constants';
import type { TStandardScheduleGraphql, TStandardScheduleRest } from './types';

const commonFieldsConfig = {
  type: 'standard',
  value: fake((f) => f.number.int({ min: 1, max: 100 })),
  intervalUnit: oneOf(...Object.values(intervalUnit)),
};

export const restFieldsConfig: TModelFieldsConfig<TStandardScheduleRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TStandardScheduleGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'StandardSchedule',
    },
  };
