import type { TBuilder } from '../../../../../../core';
import { AddressDraft, KeyReferenceDraft } from '../../../../../commons';
import { CustomerDraft, type TCustomerDraft } from '../../../../../customer';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '../../../../../product';
import {
  ShippingMethodDraft,
  type TShippingMethodDraft,
} from '../../../../../shipping-method';
import { StoreDraft, type TStoreDraft } from '../../../../../store';
import { LineItemDraft } from '../../../../index';
import { origin } from '../../../constants';
import type {
  TCartDraftGraphql,
  TCartDraftRest,
  TCartDraft,
} from '../../../types';
import { CartDraftGraphql, CartDraftRest, CartDraft } from '../../index';

const customer = CustomerDraft.presets.sampleDataFashion
  .sampleGermany()
  .build<TCustomerDraft>();

const address = AddressDraft.presets.sampleDataFashion.sampleGermany();

const necklaceVariant01 = ProductVariantDraft.presets.sampleDataFashion
  .necklaceVariant01()
  .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataFashion
  .europe()
  .build<TShippingMethodDraft>();

const store = StoreDraft.presets.sampleDataFashion
  .store01()
  .build<TStoreDraft>();

const populatePreset = <TModel extends TCartDraftRest | TCartDraftGraphql>(
  builder: TBuilder<TModel>
): TBuilder<TModel> => {
  return builder
    .key('sample-germany-01-cart')
    .customerEmail(customer.email)
    .currency('EUR')
    .country('DE')
    .origin(origin.Merchant)
    .shippingAddress(address)
    .billingAddress(address)
    .lineItems([
      LineItemDraft.presets.empty().sku(necklaceVariant01.sku).quantity(1),
    ])
    .shippingMethod(
      KeyReferenceDraft.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReferenceDraft.presets.store().key(store.key!));
};

export const restPreset = (): TBuilder<TCartDraftRest> =>
  populatePreset(CartDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TCartDraftGraphql> =>
  populatePreset(CartDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<TCartDraft> =>
  populatePreset(CartDraft.presets.empty());
