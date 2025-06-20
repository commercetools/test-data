import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';
import type {
  TParcelMeasurementsGraphql,
  TParcelMeasurementsRest,
  TCreateParcelMeasurementsBuilder,
} from './types';

export const RestModelBuilder: TCreateParcelMeasurementsBuilder<
  TParcelMeasurementsRest
> = () =>
  createSpecializedBuilder({
    name: 'ParcelMeasurementsRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateParcelMeasurementsBuilder<
  TParcelMeasurementsGraphql
> = () =>
  createSpecializedBuilder({
    name: 'ParcelMeasurementsGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatParcelMeasurementsModelBuilder = <
  TCreateParcelMeasurementsModel extends
    | TParcelMeasurementsGraphql
    | TParcelMeasurementsRest,
>() =>
  createCompatibilityBuilder({
    name: 'ParcelMeasurementsCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCreateParcelMeasurementsModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TCreateParcelMeasurementsModel>,
    },
  });
