import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TCreateZoneRateBuilder,
  TZoneRateRest,
  TZoneRateGraphql,
} from './types';

export const RestModelBuilder: TCreateZoneRateBuilder<TZoneRateRest> = () =>
  createSpecializedBuilder({
    name: 'ZoneRateRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateZoneRateBuilder<
  TZoneRateGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ZoneRateGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TZoneRateModel extends TZoneRateRest | TZoneRateGraphql = TZoneRateRest,
>() =>
  createCompatibilityBuilder<TZoneRateModel>({
    name: 'ZoneRateCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TZoneRateModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TZoneRateModel>,
    },
  });
