import type { TBuilder } from '../../../../../../../core';
import {
  DivisionDraft,
  type TDivisionDraft,
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
  .sofiaLopez()
  .build<TCustomerDraft>();

const address =
  AddressDraft.presets.sampleDataB2B.lifttechSolutionsLtdEsAddress();

const ddd890Op01 = ProductVariantDraft.presets.sampleDataB2B
  .ddd890Op01()
  .build<TProductVariantDraft>();
const ddd890Op02 = ProductVariantDraft.presets.sampleDataB2B
  .ddd890Op02()
  .build<TProductVariantDraft>();
const ddd890Op03 = ProductVariantDraft.presets.sampleDataB2B
  .ddd890Op03()
  .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataB2B
  .standardShippingMethod()
  .build<TShippingMethodDraft>();

const store = StoreDraft.presets.sampleDataB2B.spain().build<TStoreDraft>();

const businessUnit = DivisionDraft.presets.sampleDataB2B
  .lifttechSolutionsLtdEs()
  .build<TDivisionDraft>();

const spainChannel = ChannelDraftRest.presets.sampleDataB2B
  .spain()
  .build<TChannelDraftRest>();
const euWarehouseChannel = ChannelDraftRest.presets.sampleDataB2B
  .euWarehouse()
  .build<TChannelDraftRest>();

const populatePreset = <
  TModel extends TCartDraftRest | TCartDraftGraphql | TCartDraft,
>(
  builder: TBuilder<TModel>,
  customerId?: string
): TBuilder<TModel> => {
  return builder
    .key('lifttech-solutions-ltd-es-cart-2')
    .customerEmail(customer.email)
    .customerId(customerId)
    .currency('EUR')
    .country('ES')
    .origin(origin.Customer)
    .inventoryMode(inventoryMode.TrackOnly)
    .shippingAddress(address)
    .lineItems([
      LineItemDraft.presets
        .empty()
        .sku(ddd890Op01.sku)
        .quantity(1)
        .distributionChannel(
          KeyReferenceDraft.presets.channel().key(spainChannel.key!)
        )
        .supplyChannel(
          KeyReferenceDraft.presets.channel().key(euWarehouseChannel.key!)
        ),
      LineItemDraft.presets
        .empty()
        .sku(ddd890Op02.sku)
        .quantity(1)
        .distributionChannel(
          KeyReferenceDraft.presets.channel().key(spainChannel.key!)
        )
        .supplyChannel(
          KeyReferenceDraft.presets.channel().key(euWarehouseChannel.key!)
        ),
      LineItemDraft.presets
        .empty()
        .sku(ddd890Op03.sku)
        .quantity(1)
        .distributionChannel(
          KeyReferenceDraft.presets.channel().key(spainChannel.key!)
        )
        .supplyChannel(
          KeyReferenceDraft.presets.channel().key(euWarehouseChannel.key!)
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
