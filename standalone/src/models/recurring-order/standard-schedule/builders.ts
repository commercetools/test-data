import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig } from './fields-config';
import type {
  TCreateStandardScheduleBuilder,
  TStandardScheduleGraphql,
} from './types';

export const GraphqlModelBuilder: TCreateStandardScheduleBuilder<
  TStandardScheduleGraphql
> = () =>
  createSpecializedBuilder({
    name: 'StandardScheduleGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
