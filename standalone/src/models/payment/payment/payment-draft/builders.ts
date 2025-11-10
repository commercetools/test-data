import {
  createSpecializedBuilder,
  createCompatibilityBuilder,
  type TModelFieldsConfig,
} from '@/core';
import type {
  TCreatePaymentBuilder,
  TPaymentDraftRest,
  TPaymentDraftGraphql,
} from '../types';
import { restFieldsConfig, graphqlFieldsConfig } from './fields-config';

export const RestModelBuilder: TCreatePaymentBuilder<TPaymentDraftRest> = () =>
  createSpecializedBuilder({
    name: 'PaymentDraftRestBuilder',
    type: 'rest',
    modelFieldsConfig: restFieldsConfig,
  });

export const GraphqlModelBuilder: TCreatePaymentBuilder<
  TPaymentDraftGraphql
> = () =>
  createSpecializedBuilder({
    name: 'PaymentDraftGraphqlBuilder',
    type: 'graphql',
    modelFieldsConfig: graphqlFieldsConfig,
  });

export const CompatModelBuilder = <
  TPaymentDraftModel extends
    | TPaymentDraftRest
    | TPaymentDraftGraphql = TPaymentDraftRest,
>() =>
  createCompatibilityBuilder<TPaymentDraftModel>({
    name: 'PaymentDraftCompatBuilder',
    modelFieldsConfig: {
      rest: restFieldsConfig as TModelFieldsConfig<TPaymentDraftModel>,
      graphql: graphqlFieldsConfig as TModelFieldsConfig<TPaymentDraftModel>,
    },
  });
