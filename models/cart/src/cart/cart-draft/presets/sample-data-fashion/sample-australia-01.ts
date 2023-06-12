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
import { origin } from '../../../constants';
import type { TCartDraftBuilder } from '../../../types';
import * as CartDraft from '../../index';

const customer = CustomerDraft.presets.sampleDataFashion
  .sampleAustralia()
  .build<TCustomerDraft>();
const address = AddressDraft.presets.sampleDataFashion.sampleAustralia();
const sandalsProductVariant = ProductVariantDraft.presets.sampleDataFashion
  .sandalsVariant01()
  .build<TProductVariantDraft>();

const sampleAustralia01 = (): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('sample-australia-01-cart')
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
      LineItemDraft.presets.empty().sku(sandalsProductVariant.sku).quantity(1),
    ]);

export default sampleAustralia01;
