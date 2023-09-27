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
  .jenniferJones()
  .build<TCustomerDraft>();
const address = AddressDraft.presets.sampleDataGoodstore.jenniferJonesAddress();
const rusticCountryQueenBed01 = ProductVariantDraft.presets.sampleDataGoodStore
  .rusticCountryQueenBed01()
  .build<TProductVariantDraft>();
const opalKingBed01 = ProductVariantDraft.presets.sampleDataGoodStore
  .opalKingBed01()
  .build<TProductVariantDraft>();
const geometricPillowCase01 = ProductVariantDraft.presets.sampleDataGoodStore
  .geometricPillowCase01()
  .build<TProductVariantDraft>();
const shippingMethod = ShippingMethodDraft.presets.sampleDataGoodStore
  .standardShippingMethod()
  .build<TShippingMethodDraft>();
const store = StoreDraft.presets.sampleDataGoodStore
  .theGoodStore()
  .build<TStoreDraft>();

const jenniferJonesCart = (customerId?: string): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('jennifer-jones-cart')
    .customerEmail(customer.email)
    .customerId(customerId)
    .currency('GBP')
    .country('UK')
    .origin(origin.Merchant)
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
      KeyReference.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReference.presets.store().key(store.key!));

export default jenniferJonesCart;
