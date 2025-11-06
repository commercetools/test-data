import { TBuilder } from '@/core';
import { TPaymentDraftGraphql, TPaymentDraftRest } from '../../types';
import {
  CompatModelBuilder,
  GraphqlModelBuilder,
  RestModelBuilder,
} from '../builders';

const populatePreset = <
  TModel extends TPaymentDraftGraphql | TPaymentDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key(undefined)
    .interfaceId(undefined)
    .anonymousId(undefined)
    .customer(undefined)
    .paymentMethodInfo(undefined)
    .paymentStatus(undefined)
    .transactions(undefined)
    .interfaceInteractions(undefined)
    .custom(undefined);
};

export const restPreset = (): TBuilder<TPaymentDraftRest> =>
  populatePreset(RestModelBuilder());

export const graphqlPreset = (): TBuilder<TPaymentDraftGraphql> =>
  populatePreset(GraphqlModelBuilder());

export const compatPreset = (): TBuilder<
  TPaymentDraftRest | TPaymentDraftGraphql
> => populatePreset(CompatModelBuilder());
