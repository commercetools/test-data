import {
  createCompatibilityBuilder,
  createSpecializedBuilder,
  type TModelFieldsConfig,
} from '@commercetools-test-data/core';
import type {
  TCustomLineItemDraftGraphql,
  TCustomLineItemDraftRest,
  TCreateCustomLineItemDraftBuilder,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './field-config';

export const RestModelBuilder: TCreateCustomLineItemDraftBuilder<
  TCustomLineItemDraftRest
> = () =>
  createSpecializedBuilder({
    name: 'CustomLineItemDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreateCustomLineItemDraftBuilder<
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
