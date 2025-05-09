import type { TBuilder } from '../../../../../../core';
import {
  CompanyDraft,
  type TCompanyDraft,
} from '../../../../../business-unit';
import {
  ChannelDraftRest,
  type TChannelDraftRest,
} from '../../../../../channel';
import {
  AddressDraft,
  KeyReferenceDraft,
} from '../../../../../commons';
import {
  CustomerDraft,
  type TCustomerDraft,
} from '../../../../../customer';
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
import { inventoryMode, origin } from '../../../constants';
import type {
  TCartDraftGraphql,
  TCartDraftRest,
  TCartDraft,
} from '../../../types';
import { CartDraftGraphql, CartDraftRest, CartDraft } from '../../index';

const customer = CustomerDraft.presets.sampleDataB2B
  .michaelWilliams()
  .build<TCustomerDraft>();

const address =
  AddressDraft.presets.sampleDataB2B.eagleHeavyLiftTechnologiesIncUsNy1Address();

const yy123Qr01 = ProductVariantDraft.presets.sampleDataB2B
  .yy123Qr01()
  .build<TProductVariantDraft>();
const yy123Qr02 = ProductVariantDraft.presets.sampleDataB2B
  .yy123Qr02()
  .build<TProductVariantDraft>();
const yy123Qr03 = ProductVariantDraft.presets.sampleDataB2B
  .yy123Qr03()
  .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataB2B
  .standardShippingMethod()
  .build<TShippingMethodDraft>();

const store = StoreDraft.presets.sampleDataB2B
  .usLargeCustomers()
  .build<TStoreDraft>();

const businessUnit = CompanyDraft.presets.sampleDataB2B
  .eagleHeavyLiftTechnologiesIncUs()
  .build<TCompanyDraft>();

const usLargeCustomersChannel = ChannelDraftRest.presets.sampleDataB2B
  .usLargeCustomers()
  .build<TChannelDraftRest>();
const usWarehouseChannel = ChannelDraftRest.presets.sampleDataB2B
  .usWarehouse()
  .build<TChannelDraftRest>();

const populatePreset = <
  TModel extends TCartDraftRest | TCartDraftGraphql | TCartDraft,
>(
  builder: TBuilder<TModel>,
  customerId?: string
): TBuilder<TModel> => {
  return builder
    .key('eagle-heavy-lift-technologies-inc-us-cart-2')
    .customerEmail(customer.email)
    .customerId(customerId)
    .currency('USD')
    .country('US')
    .origin(origin.Customer)
    .inventoryMode(inventoryMode.TrackOnly)
    .shippingAddress(address)
    .lineItems([
      LineItemDraft.presets
        .empty()
        .sku(yy123Qr01.sku)
        .quantity(1)
        .distributionChannel(
          KeyReferenceDraft.presets.channel().key(usLargeCustomersChannel.key!)
        )
        .supplyChannel(
          KeyReferenceDraft.presets.channel().key(usWarehouseChannel.key!)
        ),
      LineItemDraft.presets
        .empty()
        .sku(yy123Qr02.sku)
        .quantity(1)
        .distributionChannel(
          KeyReferenceDraft.presets.channel().key(usLargeCustomersChannel.key!)
        )
        .supplyChannel(
          KeyReferenceDraft.presets.channel().key(usWarehouseChannel.key!)
        ),
      LineItemDraft.presets
        .empty()
        .sku(yy123Qr03.sku)
        .quantity(1)
        .distributionChannel(
          KeyReferenceDraft.presets.channel().key(usLargeCustomersChannel.key!)
        )
        .supplyChannel(
          KeyReferenceDraft.presets.channel().key(usWarehouseChannel.key!)
        ),
    ])
    .shippingMethod(
      KeyReferenceDraft.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReferenceDraft.presets.store().key(store.key!))
    .businessUnit(
      KeyReferenceDraft.presets.businessUnit().key(businessUnit.key!)
    );
};

export const restPreset = (customerId?: string): TBuilder<TCartDraftRest> =>
  populatePreset(CartDraftRest.presets.empty(), customerId);

export const graphqlPreset = (
  customerId?: string
): TBuilder<TCartDraftGraphql> =>
  populatePreset(CartDraftGraphql.presets.empty(), customerId);

export const compatPreset = (customerId?: string): TBuilder<TCartDraft> =>
  populatePreset(CartDraft.presets.empty(), customerId);
