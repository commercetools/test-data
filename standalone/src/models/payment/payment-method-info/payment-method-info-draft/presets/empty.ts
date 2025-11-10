import { TBuilder } from '@/core';
import {
  TPaymentMethodInfoDraftGraphql,
  TPaymentMethodInfoDraftRest,
} from '../../types';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';

const populatePreset = <
  TModel extends TPaymentMethodInfoDraftGraphql | TPaymentMethodInfoDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .paymentInterface(undefined)
    .method(undefined)
    .name(undefined)
    .token(undefined)
    .interfaceAccount(undefined)
    .custom(undefined);
};

export const restPreset = (): TBuilder<TPaymentMethodInfoDraftRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TPaymentMethodInfoDraftGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<
  TPaymentMethodInfoDraftRest | TPaymentMethodInfoDraftGraphql
> => populatePreset(CompatModelBuilder());
