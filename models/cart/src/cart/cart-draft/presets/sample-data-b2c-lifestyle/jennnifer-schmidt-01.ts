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

const customer = CustomerDraft.presets.sampleDataB2CLifestyle
  .jenniferSchmidt()
  .build<TCustomerDraft>();
const address =
  AddressDraft.presets.sampleDataB2CLifestyle.jenniferSchmidtAddress();
const goldRimmedChampagneGlasses01 =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .goldRimmedChampagneGlasses01()
    .build<TProductVariantDraft>();
const minimalistModernSideTable01 =
  ProductVariantDraft.presets.sampleDataB2CLifestyle
    .minimalistModernSideTable01()
    .build<TProductVariantDraft>();
const shippingMethod = ShippingMethodDraft.presets.sampleDataB2CLifestyle
  .standardShippingMethod()
  .build<TShippingMethodDraft>();
const store = StoreDraft.presets.sampleDataB2CLifestyle
  .b2cRetailStore()
  .build<TStoreDraft>();

const jenniferSchmidt01 = (customerId?: string): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('jennifer-schmidt-01')
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
        .sku(goldRimmedChampagneGlasses01.sku)
        .quantity(1),
      LineItemDraft.presets
        .empty()
        .sku(minimalistModernSideTable01.sku)
        .quantity(1),
    ])
    .shippingMethod(
      KeyReferenceDraft.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReferenceDraft.presets.store().key(store.key!));

export default jenniferSchmidt01;
