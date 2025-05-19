import type { TBuilder } from '../../../../../../../core';
import {
  CompanyDraft,
  type TCompanyDraft,
} from '../../../../../../business-unit';
import {
  ChannelDraftRest,
  type TChannelDraftRest,
} from '../../../../../../channel';
import { AddressDraft, KeyReferenceDraft } from '../../../../../../commons';
import { CustomerDraft, type TCustomerDraft } from '../../../../../../customer';
import {
  ProductVariantDraft,
  type TProductVariantDraft,
} from '../../../../../../product';
import {
  ShippingMethodDraft,
  type TShippingMethodDraft,
} from '../../../../../../shipping-method';
import { StoreDraft, type TStoreDraft } from '../../../../../../store';
import { LineItemDraft } from '../../../../index';
import { inventoryMode, origin } from '../../../constants';
import type {
  TCartDraftGraphql,
  TCartDraftRest,
  TCartDraft,
} from '../../../types';
import { CartDraftGraphql, CartDraftRest, CartDraft } from '../../index';

const customer = CustomerDraft.presets.sampleDataB2B
  .avaBrown()
  .build<TCustomerDraft>();

const address =
  AddressDraft.presets.sampleDataB2B.libertyCraneSolutionsLlcUsNc1Address();

const zz456St01 = ProductVariantDraft.presets.sampleDataB2B
  .zz456St01()
  .build<TProductVariantDraft>();
const zz456St02 = ProductVariantDraft.presets.sampleDataB2B
  .zz456St02()
  .build<TProductVariantDraft>();
const zz456St03 = ProductVariantDraft.presets.sampleDataB2B
  .zz456St03()
  .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataB2B
  .standardShippingMethod()
  .build<TShippingMethodDraft>();

const store = StoreDraft.presets.sampleDataB2B
  .usMediumCustomers()
  .build<TStoreDraft>();

const businessUnit = CompanyDraft.presets.sampleDataB2B
  .libertyCraneSolutionsLlcUs()
  .build<TCompanyDraft>();

const usMediumCustomersChannel = ChannelDraftRest.presets.sampleDataB2B
  .usMediumCustomers()
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
    .key('liberty-crane-solutions-llc-us-cart-2')
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
        .sku(zz456St01.sku)
        .quantity(1)
        .distributionChannel(
          KeyReferenceDraft.presets.channel().key(usMediumCustomersChannel.key!)
        )
        .supplyChannel(
          KeyReferenceDraft.presets.channel().key(usWarehouseChannel.key!)
        ),
      LineItemDraft.presets
        .empty()
        .sku(zz456St02.sku)
        .quantity(1)
        .distributionChannel(
          KeyReferenceDraft.presets.channel().key(usMediumCustomersChannel.key!)
        )
        .supplyChannel(
          KeyReferenceDraft.presets.channel().key(usWarehouseChannel.key!)
        ),
      LineItemDraft.presets
        .empty()
        .sku(zz456St03.sku)
        .quantity(1)
        .distributionChannel(
          KeyReferenceDraft.presets.channel().key(usMediumCustomersChannel.key!)
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
