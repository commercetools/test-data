import { fake, type TModelFieldsConfig } from '@/core';
import type {
  TDayOfMonthScheduleGraphql,
  TDayOfMonthScheduleRest,
} from './types';

const commonFieldsConfig = {
  type: 'dayOfMonth',
  day: fake((f) => f.number.int({ min: 1, max: 31 })),
};

export const restFieldsConfig: TModelFieldsConfig<TDayOfMonthScheduleRest> = {
  fields: {
    ...commonFieldsConfig,
  },
};

export const graphqlFieldsConfig: TModelFieldsConfig<TDayOfMonthScheduleGraphql> =
  {
    fields: {
      ...commonFieldsConfig,
      __typename: 'DayOfMonthSchedule',
    },
  };
