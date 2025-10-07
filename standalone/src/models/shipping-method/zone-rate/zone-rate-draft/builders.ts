import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateZoneRateDraftBuilder,
  TZoneRateDraftRest,
  TZoneRateDraftGraphql,
} from './types';

export const RestModelBuilder: TCreateZoneRateDraftBuilder<
  TZoneRateDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ZoneRateDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateZoneRateDraftBuilder<
  TZoneRateDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ZoneRateDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TZoneRateDraftModel extends
    | TZoneRateDraftRest
    | TZoneRateDraftGraphql = TZoneRateDraftRest,
>() =>
  createCompatibilityBuilder<TZoneRateDraftModel>({
    name: 'ZoneRateDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TZoneRateDraftModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TZoneRateDraftModel>,
    },
  });
