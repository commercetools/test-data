import { createSpecializedBuilder } from '@/core';
import type {
  TCreateDayOfMonthScheduleBuilder,
  TDayOfMonthScheduleInput,
} from '../types';
import { graphqlFieldsConfig } from './fields-config';

export const GraphqlModelBuilder: TCreateDayOfMonthScheduleBuilder<
  TDayOfMonthScheduleInput
> = () =>
  createSpecializedBuilder({
    name: 'DayOfMonthScheduleDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
