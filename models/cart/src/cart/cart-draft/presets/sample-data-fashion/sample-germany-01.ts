import { AddressDraft } from '@commercetools-test-data/commons';
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
  .sampleGermany()
  .build<TCustomerDraft>();
const address = AddressDraft.presets.sampleDataFashion.sampleGermany();
const necklaceProductVariant = ProductVariantDraft.presets.sampleDataFashion
  .necklaceVariant02()
  .build<TProductVariantDraft>();

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
    ]);

export default sampleGermany01;
