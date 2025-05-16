import type { TBuilder } from '@/core';
import type {
  TCartDraft,
  TCartDraftGraphql,
  TCartDraftRest,
} from '../../types';
import { CartDraftGraphql, CartDraftRest, CartDraft } from '../index';

const populatePreset = <TModel extends TCartDraftGraphql | TCartDraftRest>(
  builder: TBuilder<TModel>
) => {
  return builder
    .key(undefined)
    .customerId(undefined)
    .customerEmail(undefined)
    .customerGroup(undefined)
    .anonymousId(undefined)
    .businessUnit(undefined)
    .store(undefined)
    .lineItems(undefined)
    .customLineItems(undefined)
    .taxMode(undefined)
    .externalTaxRateForShippingMethod(undefined)
    .taxRoundingMode(undefined)
    .taxCalculationMode(undefined)
    .inventoryMode(undefined)
    .billingAddress(undefined)
    .shippingAddress(undefined)
    .shippingMethod(undefined)
    .shippingRateInput(undefined)
    .shippingMode(undefined)
    .customShipping(undefined)
    .shipping(undefined)
    .itemShippingAddresses(undefined)
    .discountCodes(undefined)
    .country(undefined)
    .locale(undefined)
    .origin(undefined)
    .deleteDaysAfterLastModification(undefined)
    .custom(undefined);
};

export const restPreset = (): TBuilder<TCartDraftRest> =>
  populatePreset(CartDraftRest.random());

export const graphqlPreset = (): TBuilder<TCartDraftGraphql> =>
  populatePreset(CartDraftGraphql.random());

export const compatPreset = (): TBuilder<TCartDraft> =>
  populatePreset(CartDraft.random());
