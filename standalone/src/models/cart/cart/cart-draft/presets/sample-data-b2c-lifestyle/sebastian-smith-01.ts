import type { TBuilder } from '@/core';
import { AddressDraft, KeyReferenceDraft } from '@/models/commons';
import { CustomerDraft, type TCustomerDraft } from '@/models/customer';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@/models/product';
import {
  ShippingMethodDraft,
  type TShippingMethodDraft,
} from '@/models/shipping-method';
import { StoreDraft, type TStoreDraft } from '@/models/store';
import { LineItemDraft } from '../../../../index';
import { inventoryMode, origin } from '../../../constants';
import type {
  TCartDraftGraphql,
  TCartDraftRest,
  TCartDraft,
} from '../../../types';
import { CartDraftGraphql, CartDraftRest, CartDraft } from '../../index';

const customer = CustomerDraft.presets.sampleDataB2CLifestyle
  .sebastianSmith()
  .build<TCustomerDraft>();

const address =
  AddressDraft.presets.sampleDataB2CLifestyle.sebastianSmithAddress();

const rusticCountryQueenBed01 =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .rusticCountryQueenBed01()
    .build<TProductVariantDraft>();
const modernLandscapePainting01 =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .modernLandscapePainting01()
    .build<TProductVariantDraft>();
const geometricPillowCase01 = ProductVariantDraft.presets.sampleDataB2CLifestyle
  .geometricPillowCase01()
  .build<TProductVariantDraft>();
const modernThreeSeaterSofa01 =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .modernThreeSeaterSofa01()
    .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataB2CLifestyle
  .expressShippingMethod()
  .build<TShippingMethodDraft>();

const store = StoreDraft.presets.sampleDataB2CLifestyle
  .b2cRetailStore()
  .build<TStoreDraft>();

const populatePreset = <
  TModel extends TCartDraftRest | TCartDraftGraphql | TCartDraft,
>(
  builder: TBuilder<TModel>,
  customerId?: string
): TBuilder<TModel> => {
  return builder
    .key('sebastian-smith-01')
    .customerEmail(customer.email)
    .customerId(customerId)
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
      LineItemDraft.presets
        .empty()
        .sku(modernLandscapePainting01.sku)
        .quantity(1),
      LineItemDraft.presets.empty().sku(geometricPillowCase01.sku).quantity(1),
      LineItemDraft.presets
        .empty()
        .sku(modernThreeSeaterSofa01.sku)
        .quantity(1),
    ])
    .shippingMethod(
      KeyReferenceDraft.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReferenceDraft.presets.store().key(store.key!));
};

export const restPreset = (customerId?: string): TBuilder<TCartDraftRest> =>
  populatePreset(CartDraftRest.presets.empty(), customerId);

export const graphqlPreset = (
  customerId?: string
): TBuilder<TCartDraftGraphql> =>
  populatePreset(CartDraftGraphql.presets.empty(), customerId);

export const compatPreset = (customerId?: string): TBuilder<TCartDraft> =>
  populatePreset(CartDraft.presets.empty(), customerId);
