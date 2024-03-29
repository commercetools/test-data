import {
  DivisionDraft,
  type TDivisionDraft,
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

const distributionChannel = ChannelDraft.presets.sampleDataB2B
  .spain()
  .build<TChannelDraft>();
const supplyChannel = ChannelDraft.presets.sampleDataB2B
  .euWarehouse()
  .build<TChannelDraft>();

const lifttechSolutionsLtdEsCart2 = (customerId?: string): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
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
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .supplyChannel(
          KeyReferenceDraft.presets.channel().key(supplyChannel.key!)
        ),
      LineItemDraft.presets
        .empty()
        .sku(ddd890Op02.sku)
        .quantity(1)
        .distributionChannel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .supplyChannel(
          KeyReferenceDraft.presets.channel().key(supplyChannel.key!)
        ),
      LineItemDraft.presets
        .empty()
        .sku(ddd890Op03.sku)
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

export default lifttechSolutionsLtdEsCart2;
