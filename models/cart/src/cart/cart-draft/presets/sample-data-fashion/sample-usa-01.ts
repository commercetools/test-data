import { AddressDraft, KeyReference } from '@commercetools-test-data/commons';
import {
  CustomerDraft,
  type TCustomerDraft,
} from '@commercetools-test-data/customer';
import { LineItemDraft } from '@commercetools-test-data/line-item';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product-variant';
import {
  ShippingMethodDraft,
  type TShippingMethodDraft,
} from '@commercetools-test-data/shipping-method';
import { StoreDraft, type TStoreDraft } from '@commercetools-test-data/store';
import { origin } from '../../../constants';
import type { TCartDraftBuilder } from '../../../types';
import * as CartDraft from '../../index';

const customer = CustomerDraft.presets.sampleDataFashion
  .sampleUsa()
  .build<TCustomerDraft>();
const address = AddressDraft.presets.sampleDataFashion.sampleUsa();
const toteBagProductVariant = ProductVariantDraft.presets.sampleDataFashion
  .toteBagVariant01()
  .build<TProductVariantDraft>();
const toddlerTrousersProductVariant =
  ProductVariantDraft.presets.sampleDataFashion
    .toddlerTrousersVariant02()
    .build<TProductVariantDraft>();
const shippingMethod = ShippingMethodDraft.presets.sampleDataFashion
  .usaAustralia()
  .build<TShippingMethodDraft>();
const store = StoreDraft.presets.sampleDataFashion
  .store02()
  .build<TStoreDraft>();

const sampleUsa01 = (customerId?: string): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('sample-usa-01-cart')
    .customerEmail(customer.email)
    .customerId(customerId)
    .currency('USD')
    .country('US')
    .origin(origin.Merchant)
    .shippingAddress(address)
    .billingAddress(address)
    .lineItems([
      LineItemDraft.presets.empty().sku(toteBagProductVariant.sku).quantity(2),
      LineItemDraft.presets
        .empty()
        .sku(toddlerTrousersProductVariant.sku)
        .quantity(1),
    ])
    .shippingMethod(
      KeyReference.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReference.random().typeId('store').key(store.key!));

export default sampleUsa01;
