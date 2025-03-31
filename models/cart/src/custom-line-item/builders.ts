import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './field-config';
import type {
  TCustomLineItemGraphql,
  TCustomLineItemRest,
  TCreateCustomLineItemBuilder,
} from './types';

export const RestModelBuilder: TCreateCustomLineItemBuilder<
  TCustomLineItemRest
> = () =>
  createSpecializedBuilder({
    name: 'CustomLineItemRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCustomLineItemBuilder<
  TCustomLineItemGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomLineItemGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatCustomLineItemModelBuilder = <
  TCreateCustomLineItemModel extends
    | TCustomLineItemGraphql
    | TCustomLineItemRest,
>() =>
  createCompatibilityBuilder({
    name: 'CustomLineItemCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCreateCustomLineItemModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TCreateCustomLineItemModel>,
    },
  });
