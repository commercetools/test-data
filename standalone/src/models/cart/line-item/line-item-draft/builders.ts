import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '../../../../core';
import {
  TLineItemDraftGraphql,
  TLineItemDraftRest,
  TCreateLineItemBuilder,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './field-config';

export const RestModelBuilder: TCreateLineItemBuilder<
  TLineItemDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'LineItemDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateLineItemBuilder<
  TLineItemDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'LineItemDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatLineItemModelBuilder = <
  TCreateLineItemModel extends TLineItemDraftRest | TLineItemDraftGraphql,
>() =>
  createCompatibilityBuilder({
    name: 'CompatLineItemDraftModelBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCreateLineItemModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TCreateLineItemModel>,
    },
  });
