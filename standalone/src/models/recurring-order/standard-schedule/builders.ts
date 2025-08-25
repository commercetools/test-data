import { createSpecializedBuilder } from '@/core';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';
import type {
  TCreateStandardScheduleBuilder,
  TStandardScheduleGraphql,
  TStandardScheduleRest,
} from './types';

export const RestModelBuilder: TCreateStandardScheduleBuilder<
  TStandardScheduleRest
> = () =>
  createSpecializedBuilder({
    name: 'StandardScheduleRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateStandardScheduleBuilder<
  TStandardScheduleGraphql
> = () =>
  createSpecializedBuilder({
    name: 'StandardScheduleGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
