import { TBuilder } from '@/core';
import type {
  TOrderFromCartDraft,
  TOrderFromCartDraftGraphql,
  TOrderFromCartDraftRest,
} from '../../types';
import {
  OrderFromCartDraft,
  OrderFromCartDraftRest,
  OrderFromCartDraftGraphql,
} from '../index';

const populatePreset = <
  TModel extends TOrderFromCartDraftGraphql | TOrderFromCartDraftRest,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .id(undefined)
    .cart(undefined)
    .orderNumber(undefined)
    .purchaseOrderNumber(undefined)
    .paymentState(undefined)
    .orderState(undefined)
    .state(undefined)
    .shipmentState(undefined)
    .custom(undefined);
};

export const restPreset = (): TBuilder<TOrderFromCartDraftRest> =>
  populatePreset(OrderFromCartDraftRest.random());

export const graphqlPreset = (): TBuilder<TOrderFromCartDraftGraphql> =>
  populatePreset(OrderFromCartDraftGraphql.random());

export const compatPreset = (): TBuilder<TOrderFromCartDraft> =>
  populatePreset(OrderFromCartDraft.random());
