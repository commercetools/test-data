import { fake, type TModelFieldsConfig } from '@/core';
import type { TDayOfMonthScheduleDraftRest } from '../types';

export const restFieldsConfig: TModelFieldsConfig<TDayOfMonthScheduleDraftRest> =
  {
    fields: {
      type: 'dayOfMonth',
      day: fake((f) => f.number.int({ min: 1, max: 31 })),
    },
  };
