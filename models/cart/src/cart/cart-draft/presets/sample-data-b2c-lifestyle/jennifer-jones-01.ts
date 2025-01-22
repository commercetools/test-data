import {
  AddressDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
import type { TBuilder } from '@commercetools-test-data/core';
import {
  CustomerDraft,
  type TCustomerDraft,
} from '@commercetools-test-data/customer';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import {
  ShippingMethodDraft,
  type TShippingMethodDraft,
} from '@commercetools-test-data/shipping-method';
import { StoreDraft, type TStoreDraft } from '@commercetools-test-data/store';
import { LineItemDraft } from '../../../../index';
import { inventoryMode, origin } from '../../../constants';
import type {
  TCartDraftGraphql,
  TCartDraftRest,
  TCartDraft,
} from '../../../types';
import { CartDraftGraphql, CartDraftRest, CartDraft } from '../../index';

const customer = CustomerDraft.presets.sampleDataB2CLifestyle
  .jenniferJones()
  .build<TCustomerDraft>();

const address =
  AddressDraft.presets.sampleDataB2CLifestyle.jenniferJonesAddress();

const rusticCountryQueenBed01 =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .rusticCountryQueenBed01()
    .build<TProductVariantDraft>();
const opalKingBed01 = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .opalKingBed01()
  .build<TProductVariantDraft>();
const geometricPillowCase01 = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .geometricPillowCase01()
  .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataB2CLifestyle
  .standardShippingMethod()
  .build<TShippingMethodDraft>();

const store = StoreDraft.presets.sampleDataB2CLifestyle
  .b2cRetailStore()
  .build<TStoreDraft>();

const populatePreset = <TModel extends TCartDraftRest | TCartDraftGraphql>(
  builder: TBuilder<TModel>
): TBuilder<TModel> => {
  return builder
    .key('jennifer-jones-01')
    .customerEmail(customer.email)
    .currency('GBP')
    .country('GB')
    .origin(origin.Merchant)
    .inventoryMode(inventoryMode.None)
    .shippingAddress(address)
    .billingAddress(address)
    .lineItems([
      LineItemDraft.presets
        .empty()
        .sku(rusticCountryQueenBed01.sku)
        .quantity(1),
      LineItemDraft.presets.empty().sku(opalKingBed01.sku).quantity(1),
      LineItemDraft.presets.empty().sku(geometricPillowCase01.sku).quantity(1),
    ])
    .shippingMethod(
      KeyReferenceDraft.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReferenceDraft.presets.store().key(store.key!));
};

export const restPreset = (): TBuilder<TCartDraftRest> =>
  populatePreset(CartDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TCartDraftGraphql> =>
  populatePreset(CartDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<TCartDraft> =>
  populatePreset(CartDraft.presets.empty());
