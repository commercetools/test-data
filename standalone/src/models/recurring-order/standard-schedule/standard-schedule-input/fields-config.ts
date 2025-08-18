import { fake, oneOf, type TModelFieldsConfig } from '@/core';
import { intervalUnit } from '../constants';
import type { TStandardScheduleInputGraphql } from '../types';

export const graphqlFieldsConfig: TModelFieldsConfig<TStandardScheduleInputGraphql> =
  {
    fields: {
      value: fake((f) => f.number.int({ min: 1, max: 10 })),
      intervalUnit: oneOf(...Object.values(intervalUnit)),
    },
  };
