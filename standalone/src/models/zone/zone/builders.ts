import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type { TCreateZoneBuilder, TZoneGraphql, TZoneRest } from './types';

export const RestModelBuilder: TCreateZoneBuilder<TZoneRest> = () =>
  createSpecializedBuilder({
    name: 'ZoneRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateZoneBuilder<TZoneGraphql> = () =>
  createSpecializedBuilder({
    name: 'ZoneGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TZoneModel extends TZoneRest | TZoneGraphql = TZoneRest,
>() =>
  createCompatibilityBuilder<TZoneModel>({
    name: 'ZoneCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TZoneModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TZoneModel>,
    },
  });
