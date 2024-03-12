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
import { origin } from '../../../constants';
import type { TCartDraftBuilder } from '../../../types';

const customer = CustomerDraft.presets.sampleDataB2B
  .williamTaylor()
  .build<TCustomerDraft>();
const address =
  AddressDraft.presets.sampleDataB2B.lifttechSolutionsLtdAddress();

const b456St01 = ProductVariantDraft.presets.sampleDataB2B
  .b456St01()
  .build<TProductVariantDraft>();
const b456St02 = ProductVariantDraft.presets.sampleDataB2B
  .b456St02()
  .build<TProductVariantDraft>();
const b456St03 = ProductVariantDraft.presets.sampleDataB2B
  .b456St03()
  .build<TProductVariantDraft>();

const shippingMethod = ShippingMethodDraft.presets.sampleDataB2B
  .standardShippingMethod()
  .build<TShippingMethodDraft>();

const store = StoreDraft.presets.sampleDataB2B.deFrUk().build<TStoreDraft>();

const businessUnit = CompanyDraft.presets.sampleDataB2B
  .lifttechSolutionsLtd()
  .build<TCompanyDraft>();

const distributionChannel = ChannelDraft.presets.sampleDataB2B
  .deFrUk()
  .build<TChannelDraft>();
const supplyChannel = ChannelDraft.presets.sampleDataB2B
  .euWarehouse()
  .build<TChannelDraft>();

const lifttechSolutionsLtdCart1 = (customerId?: string): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('lifttech-solutions-ltd-cart-1')
    .customerEmail(customer.email)
    .customerId(customerId)
    .currency('GBP')
    .country('GB')
    .origin(origin.Customer)
    .shippingAddress(address)
    .lineItems([
      LineItemDraft.presets
        .empty()
        .sku(b456St01.sku)
        .quantity(1)
        .distributionChannel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .supplyChannel(
          KeyReferenceDraft.presets.channel().key(supplyChannel.key!)
        ),
      LineItemDraft.presets
        .empty()
        .sku(b456St02.sku)
        .quantity(1)
        .distributionChannel(
          KeyReferenceDraft.presets.channel().key(distributionChannel.key!)
        )
        .supplyChannel(
          KeyReferenceDraft.presets.channel().key(supplyChannel.key!)
        ),
      LineItemDraft.presets
        .empty()
        .sku(b456St03.sku)
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

export default lifttechSolutionsLtdCart1;
