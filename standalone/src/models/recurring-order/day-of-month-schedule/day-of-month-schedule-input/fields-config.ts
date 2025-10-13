import { fake, type TModelFieldsConfig } from '@/core';
import type { TDayOfMonthScheduleInput } from '../types';

export const graphqlFieldsConfig: TModelFieldsConfig<TDayOfMonthScheduleInput> =
  {
    fields: {
      day: fake((f) => f.number.int({ min: 1, max: 31 })),
    },
  };
