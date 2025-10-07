import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import type {
  TCreateZoneRateBuilder,
  TZoneRateDraftRest,
  TZoneRateDraftGraphql,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateZoneRateBuilder<
  TZoneRateDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'ZoneRateDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateZoneRateBuilder<
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
