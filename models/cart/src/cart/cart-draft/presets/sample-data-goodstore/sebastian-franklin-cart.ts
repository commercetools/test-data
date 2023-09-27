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
  .sebastianFranklin()
  .build<TCustomerDraft>();
const address =
  AddressDraft.presets.sampleDataGoodstore.sebastianFranklinAddress();
const steelHipFlask01 = ProductVariantDraft.presets.sampleDataGoodStore
  .steelHipFlask01()
  .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataGoodStore
  .usaShippingMethod()
  .build<TShippingMethodDraft>();
const store = StoreDraft.presets.sampleDataGoodStore
  .theGoodStore()
  .build<TStoreDraft>();

const sebastianFranklinCart = (customerId?: string): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('sebastian-franklin-cart')
    .customerEmail(customer.email)
    .customerId(customerId)
    .currency('USD')
    .country('US')
    .origin(origin.Merchant)
    .shippingAddress(address)
    .billingAddress(address)
    .lineItems([
      LineItemDraft.presets.empty().sku(steelHipFlask01.sku).quantity(20),
    ])
    .shippingMethod(
      KeyReference.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReference.presets.store().key(store.key!));

export default sebastianFranklinCart;
