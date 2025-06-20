import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TTrackingDataGraphql,
  TTrackingDataRest,
  TCreateTrackingDataBuilder,
} from './types';

export const RestModelBuilder: TCreateTrackingDataBuilder<
  TTrackingDataRest
> = () =>
  createSpecializedBuilder({
    name: 'TrackingDataRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateTrackingDataBuilder<
  TTrackingDataGraphql
> = () =>
  createSpecializedBuilder({
    name: 'TrackingDataGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatTrackingDataModelBuilder = <
  TCreateTrackingDataModel extends TTrackingDataGraphql | TTrackingDataRest,
>() =>
  createCompatibilityBuilder({
    name: 'TrackingDataCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCreateTrackingDataModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TCreateTrackingDataModel>,
    },
  });
