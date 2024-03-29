import {
  CompanyDraft,
  type TCompanyDraft,
} from '@commercetools-test-data/business-unit';
import {
  ChannelDraft,
  type TChannelDraft,
} from '@commercetools-test-data/channel';
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
import { inventoryMode, origin } from '../../../constants';
import type { TCartDraftBuilder } from '../../../types';

const customer = CustomerDraft.presets.sampleDataB2B
  .michaelWilliams()
  .build<TCustomerDraft>();
const address =
  AddressDraft.presets.sampleDataB2B.eagleHeavyLiftTechnologiesIncUsNy1Address();

const eee123Qr01 = ProductVariantDraft.presets.sampleDataB2B
  .eee123Qr01()
  .build<TProductVariantDraft>();
const eee123Qr02 = ProductVariantDraft.presets.sampleDataB2B
  .eee123Qr02()
  .build<TProductVariantDraft>();
const eee123Qr03 = ProductVariantDraft.presets.sampleDataB2B
  .eee123Qr03()
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

const distributionChannel = ChannelDraft.presets.sampleDataB2B
  .usLargeCustomers()
  .build<TChannelDraft>();
const supplyChannel = ChannelDraft.presets.sampleDataB2B
  .usWarehouse()
  .build<TChannelDraft>();

const eagleHeavyLiftTechnologiesIncUsCart1 = (
  customerId?: string
): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('eagle-heavy-lift-technologies-inc-us-cart-1')
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
        .sku(eee123Qr01.sku)
        .quantity(1)
        .distributionChannel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .supplyChannel(
          KeyReferenceDraft.presets.channel().key(supplyChannel.key!)
        ),
      LineItemDraft.presets
        .empty()
        .sku(eee123Qr02.sku)
        .quantity(1)
        .distributionChannel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .supplyChannel(
          KeyReferenceDraft.presets.channel().key(supplyChannel.key!)
        ),
      LineItemDraft.presets
        .empty()
        .sku(eee123Qr03.sku)
        .quantity(1)
        .distributionChannel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .supplyChannel(
          KeyReferenceDraft.presets.channel().key(supplyChannel.key!)
        ),
    ])
    .shippingMethod(
      KeyReferenceDraft.presets.shippingMethod().key(shippingMethod.key!)
    )
    .store(KeyReferenceDraft.presets.store().key(store.key!))
    .businessUnit(
      KeyReferenceDraft.presets.businessUnit().key(businessUnit.key!)
    );

export default eagleHeavyLiftTechnologiesIncUsCart1;
