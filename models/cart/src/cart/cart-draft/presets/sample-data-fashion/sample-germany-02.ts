import { AddressDraft, KeyReference } from '@commercetools-test-data/commons';
import {
  CustomerDraft,
  type TCustomerDraft,
} from '@commercetools-test-data/customer';
import {
  DiscountCodeDraft,
  type TDiscountCodeDraft,
} from '@commercetools-test-data/discount-code';
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
const shirtsBogo = DiscountCodeDraft.presets.sampleDataFashion
  // cartDiscountId is not used, we can pass an empty string
  .shirtsBogo('')
  .build<TDiscountCodeDraft>();
const maternityTopProductVariant = ProductVariantDraft.presets.sampleDataFashion
  .maternityTopVariant03()
  .build<TProductVariantDraft>();
const shippingMethod = ShippingMethodDraft.presets.sampleDataFashion
  .europe()
  .build<TShippingMethodDraft>();

const sampleGermany02 = (customerId: string): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('mary-02-cart')
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
        .sku(maternityTopProductVariant.sku)
        .quantity(2),
    ])
    .shippingMethod(
      KeyReference.presets.shippingMethod().key(shippingMethod.key!)
    )
    .discountCodes([shirtsBogo.code]);

export default sampleGermany02;
