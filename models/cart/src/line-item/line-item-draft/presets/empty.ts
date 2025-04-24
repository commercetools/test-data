import { TBuilder } from '@commercetools-test-data/core';
import {
  TLineItemDraftRest,
  TLineItemDraftGraphql,
  TLineItemDraft,
} from '../../types';
import {
  LineItemDraft,
  LineItemDraftRest,
  LineItemDraftGraphql,
} from '../index';

const populatePreset = <
  TModel extends TLineItemDraftRest | TLineItemDraftGraphql,
>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key(undefined)
    .productId(undefined)
    .variantId(undefined)
    .sku(undefined)
    .quantity(undefined)
    .addedAt(undefined)
    .distributionChannel(undefined)
    .supplyChannel(undefined)
    .externalPrice(undefined)
    .externalTotalPrice(undefined)
    .externalTaxRate(undefined)
    .inventoryMode(undefined)
    .shippingDetails(undefined)
    .custom(undefined);
};

export const restPreset = (): TBuilder<TLineItemDraftRest> =>
  populatePreset(LineItemDraftRest.random());

export const graphqlPreset = (): TBuilder<TLineItemDraftGraphql> =>
  populatePreset(LineItemDraftGraphql.random());

export const compatPreset = (): TBuilder<TLineItemDraftRest> =>
  populatePreset(LineItemDraft.random());
