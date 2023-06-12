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

const sampleAustralia02 = (): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('sample-australia-02-cart')
    .customerEmail(customer.email)
    .customerGroup(
      KeyReference.presets.customerGroup().key(customer.customerGroup!.key!)
    )
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
    .discountCodes([employeeSale.code]);

export default sampleAustralia02;
