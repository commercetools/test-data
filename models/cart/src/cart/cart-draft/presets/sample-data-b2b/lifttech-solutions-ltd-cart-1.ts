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

const customer = CustomerDraft.presets.sampleDataB2B
  .williamTaylor()
  .build<TCustomerDraft>();
const address = AddressDraft.presets.sampleDataB2B.williamTaylorAddress();

const ggg789Uv01 = ProductVariantDraft.presets.sampleDataB2B
  .ggg789Uv01()
  .build<TProductVariantDraft>();
const ggg789Uv02 = ProductVariantDraft.presets.sampleDataB2B
  .ggg789Uv02()
  .build<TProductVariantDraft>();
const ggg789Uv03 = ProductVariantDraft.presets.sampleDataB2B
  .ggg789Uv03()
  .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataB2B
  .standardShippingMethod()
  .build<TShippingMethodDraft>();

const store = StoreDraft.presets.sampleDataB2B.deFrUk().build<TStoreDraft>();

const lifttechSolutionsLtdCart1 = (customerId?: string): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-cart-1')
    .customerEmail(customer.email)
    .customerId(customerId)
    .currency('GBP')
    .country('GB')
    .origin(origin.Customer)
    .shippingAddress(address)
    .billingAddress(address)
    .lineItems([
      LineItemDraft.presets.empty().sku(ggg789Uv01.sku).quantity(1),
      LineItemDraft.presets.empty().sku(ggg789Uv02.sku).quantity(1),
      LineItemDraft.presets.empty().sku(ggg789Uv03.sku).quantity(1),
    ])
    .shippingMethod(
      KeyReferenceDraft.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReferenceDraft.presets.store().key(store.key!));

export default lifttechSolutionsLtdCart1;
