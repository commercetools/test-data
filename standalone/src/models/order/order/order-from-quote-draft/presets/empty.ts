import { TBuilder } from '@/core';
import type {
  TOrderFromQuoteDraft,
  TOrderFromQuoteDraftGraphql,
  TOrderFromQuoteDraftRest,
} from '../../types';
import {
  OrderFromQuoteDraft,
  OrderFromQuoteDraftRest,
  OrderFromQuoteDraftGraphql,
} from '../index';

const populatePreset = <
  TModel extends TOrderFromQuoteDraftGraphql | TOrderFromQuoteDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .quote(undefined)
    .quoteStateToAccepted(undefined)
    .orderNumber(undefined)
    .paymentState(undefined)
    .shipmentState(undefined)
    .orderState(undefined)
    .state(undefined);
};

export const restPreset = (): TBuilder<TOrderFromQuoteDraftRest> =>
  populatePreset(OrderFromQuoteDraftRest.random());

export const graphqlPreset = (): TBuilder<TOrderFromQuoteDraftGraphql> =>
  populatePreset(OrderFromQuoteDraftGraphql.random().custom(undefined));

export const compatPreset = (): TBuilder<TOrderFromQuoteDraft> =>
  populatePreset(OrderFromQuoteDraft.random());
