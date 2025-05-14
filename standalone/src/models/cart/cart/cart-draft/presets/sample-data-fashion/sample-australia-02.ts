import type { TBuilder } from '../../../../../../core';
import { AddressDraft, KeyReferenceDraft } from '../../../../../commons';
import { CustomerDraft, type TCustomerDraft } from '../../../../../customer';
import {
  DiscountCodeDraft,
  type TDiscountCodeDraft,
} from '../../../../../discount-code';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '../../../../../product';
import {
  ShippingMethodDraft,
  type TShippingMethodDraft,
} from '../../../../../shipping-method';
import { LineItemDraft } from '../../../../index';
import { origin } from '../../../constants';
import type {
  TCartDraftGraphql,
  TCartDraftRest,
  TCartDraft,
} from '../../../types';
import { CartDraftGraphql, CartDraftRest, CartDraft } from '../../index';

const customer = CustomerDraft.presets.sampleDataFashion
  .sampleAustralia()
  .build<TCustomerDraft>();

const address = AddressDraft.presets.sampleDataFashion.sampleAustralia();

const employeeSale = DiscountCodeDraft.presets.sampleDataFashion
  // cartDiscountId is not used, we can pass an empty string
  .employeeSale('')
  .build<TDiscountCodeDraft>();

const denimJacketVariant01 = ProductVariantDraft.presets.sampleDataFashion
  .denimJacketVariant01()
  .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataFashion
  .usaAustralia()
  .build<TShippingMethodDraft>();

const populatePreset = <TModel extends TCartDraftRest | TCartDraftGraphql>(
  builder: TBuilder<TModel>
): TBuilder<TModel> => {
  return builder
    .key('sample-australia-02-cart')
    .customerEmail(customer.email)
    .currency('AUD')
    .country('AU')
    .origin(origin.Merchant)
    .shippingAddress(address)
    .billingAddress(address)
    .lineItems([
      LineItemDraft.presets.empty().sku(denimJacketVariant01.sku).quantity(1),
    ])
    .shippingMethod(
      KeyReferenceDraft.presets.shippingMethod().key(shippingMethod.key!)
    )
    .discountCodes([employeeSale.code]);
};

export const restPreset = (): TBuilder<TCartDraftRest> =>
  populatePreset(CartDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TCartDraftGraphql> =>
  populatePreset(CartDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<TCartDraft> =>
  populatePreset(CartDraft.presets.empty());
