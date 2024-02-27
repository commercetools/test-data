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
  .camilleLefevre()
  .build<TCustomerDraft>();
const address =
  AddressDraft.presets.sampleDataB2B.lifttechSolutionsLtdFrAddress();

const iii567Yz01 = ProductVariantDraft.presets.sampleDataB2B
  .iii567Yz01()
  .build<TProductVariantDraft>();
const iii567Yz02 = ProductVariantDraft.presets.sampleDataB2B
  .iii567Yz02()
  .build<TProductVariantDraft>();
const iii567Yz03 = ProductVariantDraft.presets.sampleDataB2B
  .iii567Yz03()
  .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataB2B
  .standardShippingMethod()
  .build<TShippingMethodDraft>();

const store = StoreDraft.presets.sampleDataB2B.deFrUk().build<TStoreDraft>();

const lifttechSolutionsLtdFrCart1 = (customerId?: string): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-fr-cart-1')
    .customerEmail(customer.email)
    .customerId(customerId)
    .currency('EUR')
    .country('FR')
    .origin(origin.Customer)
    .shippingAddress(address)
    .billingAddress(address)
    .lineItems([
      LineItemDraft.presets.empty().sku(iii567Yz01.sku).quantity(1),
      LineItemDraft.presets.empty().sku(iii567Yz02.sku).quantity(1),
      LineItemDraft.presets.empty().sku(iii567Yz03.sku).quantity(1),
    ])
    .shippingMethod(
      KeyReferenceDraft.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReferenceDraft.presets.store().key(store.key!));

export default lifttechSolutionsLtdFrCart1;
