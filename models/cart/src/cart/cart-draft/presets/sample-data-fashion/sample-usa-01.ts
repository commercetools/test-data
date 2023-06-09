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

const sampleUsa01 = (): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('sampleUsa-01-cart')
    .customerEmail(customer.email)
    .customerGroup(
      KeyReference.presets.customerGroup().key(customer.customerGroup!.key!)
    )
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
    ]);

export default sampleUsa01;
