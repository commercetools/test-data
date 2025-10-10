import { createSpecializedBuilder } from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateDayOfMonthScheduleBuilder,
  TDayOfMonthScheduleGraphql,
  TDayOfMonthScheduleRest,
} from './types';

export const RestModelBuilder: TCreateDayOfMonthScheduleBuilder<
  TDayOfMonthScheduleRest
> = () =>
  createSpecializedBuilder({
    name: 'DayOfMonthScheduleRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateDayOfMonthScheduleBuilder<
  TDayOfMonthScheduleGraphql
> = () =>
  createSpecializedBuilder({
    name: 'DayOfMonthScheduleGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
