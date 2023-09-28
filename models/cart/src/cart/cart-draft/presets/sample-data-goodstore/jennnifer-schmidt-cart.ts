import { AddressDraft, KeyReference } from '@commercetools-test-data/commons';
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
import { CartDraft, LineItemDraft } from '../../../../index';
import { origin } from '../../../constants';
import type { TCartDraftBuilder } from '../../../types';

const customer = CustomerDraft.presets.sampleDataGoodStore
  .jenniferSchmidt()
  .build<TCustomerDraft>();
const address =
  AddressDraft.presets.sampleDataGoodstore.jenniferSchmidtAddress();
const goldRimmedChampagneGlasses01 =
  ProductVariantDraft.presets.sampleDataGoodStore
    .goldRimmedChampagneGlasses01()
    .build<TProductVariantDraft>();
const minimalistModernSideTable01 =
  ProductVariantDraft.presets.sampleDataGoodStore
    .minimalistModernSideTable01()
    .build<TProductVariantDraft>();
const shippingMethod = ShippingMethodDraft.presets.sampleDataGoodStore
  .standardShippingMethod()
  .build<TShippingMethodDraft>();
const store = StoreDraft.presets.sampleDataGoodStore
  .theGoodStore()
  .build<TStoreDraft>();

const jenniferSchmidtCart = (customerId?: string): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('jennifer-schmidt-cart')
    .customerEmail(customer.email)
    .customerId(customerId)
    .currency('EUR')
    .country('DE')
    .origin(origin.Merchant)
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
      KeyReference.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReference.presets.store().key(store.key!));

export default jenniferSchmidtCart;
