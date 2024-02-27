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
  .sofiaLopez()
  .build<TCustomerDraft>();
const address =
  AddressDraft.presets.sampleDataB2B.lifttechSolutionsLtdEsAddress();

const jjj890Op01 = ProductVariantDraft.presets.sampleDataB2B
  .jjj890Op01()
  .build<TProductVariantDraft>();
const jjj890Op02 = ProductVariantDraft.presets.sampleDataB2B
  .jjj890Op02()
  .build<TProductVariantDraft>();
const jjj890Op03 = ProductVariantDraft.presets.sampleDataB2B
  .jjj890Op03()
  .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataB2B
  .standardShippingMethod()
  .build<TShippingMethodDraft>();

const store = StoreDraft.presets.sampleDataB2B.spain().build<TStoreDraft>();

const lifttechSolutionsLtdEsCart1 = (customerId?: string): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-es-cart-1')
    .customerEmail(customer.email)
    .customerId(customerId)
    .currency('EUR')
    .country('ES')
    .origin(origin.Customer)
    .shippingAddress(address)
    .lineItems([
      LineItemDraft.presets.empty().sku(jjj890Op01.sku).quantity(1),
      LineItemDraft.presets.empty().sku(jjj890Op02.sku).quantity(1),
      LineItemDraft.presets.empty().sku(jjj890Op03.sku).quantity(1),
    ])
    .shippingMethod(
      KeyReferenceDraft.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReferenceDraft.presets.store().key(store.key!));

export default lifttechSolutionsLtdEsCart1;
