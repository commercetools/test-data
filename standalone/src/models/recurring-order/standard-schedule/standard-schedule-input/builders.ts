import { createSpecializedBuilder } from '@/core';
import type {
  TCreateStandardScheduleBuilder,
  TStandardScheduleInputGraphql,
} from '../types';
import { graphqlFieldsConfig } from './fields-config';

export const GraphqlModelBuilder: TCreateStandardScheduleBuilder<
  TStandardScheduleInputGraphql
> = () =>
  createSpecializedBuilder({
    name: 'StandardScheduleInputGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });
