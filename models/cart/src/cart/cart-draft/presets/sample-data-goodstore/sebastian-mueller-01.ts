import {
  AddressDraft,
  KeyReferenceDraft,
} from '@commercetools-test-data/commons';
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
  .sebastianMuller()
  .build<TCustomerDraft>();
const address =
  AddressDraft.presets.sampleDataGoodStore.sebastianMullerAddress();
const traditionalLSeaterSofa01 = ProductVariantDraft.presets.sampleDataGoodStore
  .traditionalLSeaterSofa01()
  .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataGoodStore
  .standardShippingMethod()
  .build<TShippingMethodDraft>();
const store = StoreDraft.presets.sampleDataGoodStore
  .theGoodStore()
  .build<TStoreDraft>();

const sebastianMueller01 = (customerId?: string): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('sebastian-mueller-01')
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
        .sku(traditionalLSeaterSofa01.sku)
        .quantity(1),
    ])
    .shippingMethod(
      KeyReferenceDraft.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReferenceDraft.presets.store().key(store.key!));

export default sebastianMueller01;
