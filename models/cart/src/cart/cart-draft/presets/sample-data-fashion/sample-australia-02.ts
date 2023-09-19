import { AddressDraft, KeyReference } from '@commercetools-test-data/commons';
import {
  CustomerDraft,
  type TCustomerDraft,
} from '@commercetools-test-data/customer';
import {
  DiscountCodeDraft,
  type TDiscountCodeDraft,
} from '@commercetools-test-data/discount-code';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@commercetools-test-data/product';
import {
  ShippingMethodDraft,
  type TShippingMethodDraft,
} from '@commercetools-test-data/shipping-method';
import { LineItemDraft } from '../../../../line-item';
import { origin } from '../../../constants';
import type { TCartDraftBuilder } from '../../../types';
import * as CartDraft from '../../index';

const customer = CustomerDraft.presets.sampleDataFashion
  .sampleAustralia()
  .build<TCustomerDraft>();
const address = AddressDraft.presets.sampleDataFashion.sampleAustralia();
const employeeSale = DiscountCodeDraft.presets.sampleDataFashion
  // cartDiscountId is not used, we can pass an empty string
  .employeeSale('')
  .build<TDiscountCodeDraft>();
const denimJacketProductVariant = ProductVariantDraft.presets.sampleDataFashion
  .denimJacketVariant01()
  .build<TProductVariantDraft>();
const shippingMethod = ShippingMethodDraft.presets.sampleDataFashion
  .usaAustralia()
  .build<TShippingMethodDraft>();

const sampleAustralia02 = (customerId?: string): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('sample-australia-02-cart')
    .customerEmail(customer.email)
    .customerId(customerId)
    .currency('AUD')
    .country('AU')
    .origin(origin.Merchant)
    .shippingAddress(address)
    .billingAddress(address)
    .lineItems([
      LineItemDraft.presets
        .empty()
        .sku(denimJacketProductVariant.sku)
        .quantity(1),
    ])
    .shippingMethod(
      KeyReference.presets.shippingMethod().key(shippingMethod.key!)
    )
    .discountCodes([employeeSale.code]);

export default sampleAustralia02;
