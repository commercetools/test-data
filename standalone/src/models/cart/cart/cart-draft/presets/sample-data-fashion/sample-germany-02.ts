import type { TBuilder } from '@/core';
import { AddressDraft, KeyReferenceDraft } from '@/models/commons';
import { CustomerDraft, type TCustomerDraft } from '@/models/customer';
import {
  DiscountCodeDraft,
  type TDiscountCodeDraft,
} from '@/models/discount-code';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '@/models/product';
import {
  ShippingMethodDraft,
  type TShippingMethodDraft,
} from '@/models/shipping-method';
import { LineItemDraft } from '../../../../index';
import { inventoryMode, origin } from '../../../constants';
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

const shirtsBogo = DiscountCodeDraft.presets.sampleDataFashion
  // cartDiscountId is not used, we can pass an empty string
  .shirtsBogo('')
  .build<TDiscountCodeDraft>();

const maternityTopVariant03 = ProductVariantDraft.presets.sampleDataFashion
  .maternityTopVariant03()
  .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataFashion
  .europe()
  .build<TShippingMethodDraft>();

const populatePreset = <TModel extends TCartDraftRest | TCartDraftGraphql>(
  builder: TBuilder<TModel>
): TBuilder<TModel> => {
  return builder
    .key('sample-germany-02-cart')
    .customerEmail(customer.email)
    .currency('EUR')
    .country('DE')
    .origin(origin.Merchant)
    .shippingAddress(address)
    .billingAddress(address)
    .lineItems([
      LineItemDraft.presets.empty().sku(maternityTopVariant03.sku).quantity(2),
    ])
    .shippingMethod(
      KeyReferenceDraft.presets.shippingMethod().key(shippingMethod.key!)
    )
    .discountCodes([shirtsBogo.code]);
};

export const restPreset = (): TBuilder<TCartDraftRest> =>
  populatePreset(CartDraftRest.presets.empty());

export const graphqlPreset = (): TBuilder<TCartDraftGraphql> =>
  populatePreset(CartDraftGraphql.presets.empty());

export const compatPreset = (): TBuilder<TCartDraft> =>
  populatePreset(CartDraft.presets.empty());
