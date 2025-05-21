import type { TBuilder } from '../../../../../../../core';
import { AddressDraft, KeyReferenceDraft } from '../../../../../../commons';
import { CustomerDraft, type TCustomerDraft } from '@/models/customer/customer';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@/models/product/product';
import {
  ShippingMethodDraft,
  type TShippingMethodDraft,
} from '../../../../../../shipping-method';
import { StoreDraft, type TStoreDraft } from '../../../../../../store';
import { LineItemDraft } from '../../../../index';
import { inventoryMode, origin } from '../../../constants';
import type {
  TCartDraftGraphql,
  TCartDraftRest,
  TCartDraft,
} from '../../../types';
import { CartDraftGraphql, CartDraftRest, CartDraft } from '../../index';

const customer = CustomerDraft.presets.sampleDataB2CLifestyle
  .jenniferSchmidt()
  .build<TCustomerDraft>();

const address =
  AddressDraft.presets.sampleDataB2CLifestyle.jenniferSchmidtAddress();

const goldRimmedChampagneGlasses01 =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .goldRimmedChampagneGlasses01()
    .build<TProductVariantDraft>();
const minimalistModernSideTable01 =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .minimalistModernSideTable01()
    .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataB2CLifestyle
  .standardShippingMethod()
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
    .key('jennifer-schmidt-01')
    .customerEmail(customer.email)
    .customerId(customerId)
    .currency('EUR')
    .country('DE')
    .origin(origin.Merchant)
    .inventoryMode(inventoryMode.None)
    .shippingAddress(address)
    .billingAddress(address)
    .lineItems([
      LineItemDraft.presets
        .empty()
        .sku(goldRimmedChampagneGlasses01.sku)
        .quantity(1),
      LineItemDraft.presets
        .empty()
        .sku(minimalistModernSideTable01.sku)
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
