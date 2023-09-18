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
import { LineItemDraft } from '../../../../line-item';
import { origin } from '../../../constants';
import type { TCartDraftBuilder } from '../../../types';
import * as CartDraft from '../../index';

const customer = CustomerDraft.presets.sampleDataFashion
  .sampleGermany()
  .build<TCustomerDraft>();
const address = AddressDraft.presets.sampleDataFashion.sampleGermany();
const necklaceProductVariant = ProductVariantDraft.presets.sampleDataFashion
  .necklaceVariant01()
  .build<TProductVariantDraft>();
const shippingMethod = ShippingMethodDraft.presets.sampleDataFashion
  .europe()
  .build<TShippingMethodDraft>();
const store = StoreDraft.presets.sampleDataFashion
  .store01()
  .build<TStoreDraft>();

const sampleGermany01 = (customerId?: string): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('sample-germany-01-cart')
    .customerEmail(customer.email)
    .customerId(customerId)
    .currency('EUR')
    .country('DE')
    .origin(origin.Merchant)
    .shippingAddress(address)
    .billingAddress(address)
    .lineItems([
      LineItemDraft.presets.empty().sku(necklaceProductVariant.sku).quantity(1),
    ])
    .shippingMethod(
      KeyReference.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReference.presets.store().key(store.key!));

export default sampleGermany01;
