import { AddressDraft, KeyReference } from '@commercetools-test-data/commons';
import {
  CustomerDraft,
  type TCustomerDraft,
} from '@commercetools-test-data/customer';
import { LineItemDraft } from '@commercetools-test-data/line-item';
import { origin } from '../../../constants';
import type { TCartDraftBuilder } from '../../../types';
import * as CartDraft from '../../index';

const jamieDoe = CustomerDraft.presets.sampleDataFashion
  .jamieDoe()
  .build<TCustomerDraft>();
const address = AddressDraft.presets.sampleDataFashion.jamieDoe();

const jamieDoe01 = (): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('jamie-01-cart')
    .customerEmail(jamieDoe.email)
    .customerGroup(
      KeyReference.presets.customerGroup().key(jamieDoe.customerGroup!.key!)
    )
    .currency('USD')
    .country('US')
    .origin(origin.Merchant)
    .shippingAddress(address)
    .billingAddress(address)
    // TODO: replace with product preset SKU
    .lineItems([
      LineItemDraft.presets.empty().sku('718289').quantity(2),
      LineItemDraft.presets.empty().sku('855485').quantity(1),
    ]);

export default jamieDoe01;
