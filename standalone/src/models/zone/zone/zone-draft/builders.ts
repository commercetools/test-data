import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import type {
  TCreateZoneBuilder,
  TZoneDraftGraphql,
  TZoneDraftRest,
} from '../types';
import { graphqlFieldsConfig, restFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreateZoneBuilder<TZoneDraftRest> = () =>
  createSpecializedBuilder({
    name: 'ZoneRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateZoneBuilder<TZoneDraftGraphql> = () =>
  createSpecializedBuilder({
    name: 'ZoneDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <TZoneDraftRest>() =>
  createCompatibilityBuilder<TZoneDraftRest>({
    name: 'ZoneCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TZoneDraftRest>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TZoneDraftRest>,
    },
  });
