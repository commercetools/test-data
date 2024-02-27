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
  .avaBrown()
  .build<TCustomerDraft>();
const address =
  AddressDraft.presets.sampleDataB2B.libertyCraneSolutionsLlcUsNc1Address();

const fff456St01 = ProductVariantDraft.presets.sampleDataB2B
  .fff456St01()
  .build<TProductVariantDraft>();
const fff456St02 = ProductVariantDraft.presets.sampleDataB2B
  .fff456St02()
  .build<TProductVariantDraft>();
const fff456St03 = ProductVariantDraft.presets.sampleDataB2B
  .fff456St03()
  .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataB2B
  .standardShippingMethod()
  .build<TShippingMethodDraft>();

const store = StoreDraft.presets.sampleDataB2B
  .usMediumCustomers()
  .build<TStoreDraft>();

const libertyCraneSolutionsLlcUsCart1 = (
  customerId?: string
): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('liberty-crane-solutions-llc-us-cart-1')
    .customerEmail(customer.email)
    .customerId(customerId)
    .currency('USD')
    .country('US')
    .origin(origin.Customer)
    .shippingAddress(address)
    .billingAddress(address)
    .lineItems([
      LineItemDraft.presets.empty().sku(fff456St01.sku).quantity(1),
      LineItemDraft.presets.empty().sku(fff456St02.sku).quantity(1),
      LineItemDraft.presets.empty().sku(fff456St03.sku).quantity(1),
    ])
    .shippingMethod(
      KeyReferenceDraft.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReferenceDraft.presets.store().key(store.key!));

export default libertyCraneSolutionsLlcUsCart1;
