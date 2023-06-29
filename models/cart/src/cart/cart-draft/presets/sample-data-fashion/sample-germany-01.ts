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

const sampleGermany01 = (): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('sample-germany-01-cart')
    .customerEmail(customer.email)
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
    );

export default sampleGermany01;
