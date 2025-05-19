import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@/core';
import type {
  TCustomLineItemDraftGraphql,
  TCustomLineItemDraftRest,
  TCreateCustomLineItemBuilder,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './field-config';

export const RestModelBuilder: TCreateCustomLineItemBuilder<
  TCustomLineItemDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'CustomLineItemDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCustomLineItemBuilder<
  TCustomLineItemDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'CustomLineItemDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatCustomLineItemDraftModelBuilder = <
  TCreateCustomLineItemDraftModel extends
    | TCustomLineItemDraftGraphql
    | TCustomLineItemDraftRest,
>() =>
  createCompatibilityBuilder({
    name: 'CustomLineItemDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TCreateCustomLineItemDraftModel>,
      graphql:
        graphqlFieldsConfig as TModelFieldsConfig<TCreateCustomLineItemDraftModel>,
    },
  });
