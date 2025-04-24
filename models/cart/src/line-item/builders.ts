import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@commercetools-test-data/core';
import { restFieldsConfig, graphqlFieldsConfig } from './field-config';
import {
  TLineItemGraphql,
  TLineItemRest,
  TCreateLineItemBuilder,
} from './types';

export const RestModelBuilder: TCreateLineItemBuilder<TLineItemRest> = () =>
  createSpecializedBuilder({
    name: 'LineItemRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateLineItemBuilder<
  TLineItemGraphql
> = () =>
  createSpecializedBuilder({
    name: 'LineItemGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatLineItemModelBuilder = <
  TCreateLineItemModel extends TLineItemRest | TLineItemGraphql,
>() =>
  createCompatibilityBuilder({
    name: 'CompatLineItemModelBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCreateLineItemModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TCreateLineItemModel>,
    },
  });
