import { AddressDraft, KeyReference } from '@commercetools-test-data/commons';
import { CustomerDraft } from '@commercetools-test-data/customer';
import type { TCustomerDraft } from '@commercetools-test-data/customer';
import { LineItemDraft } from '@commercetools-test-data/line-item';
import { origin } from '../../../constants';
import type { TCartDraftBuilder } from '../../../types';
import * as CartDraft from '../../index';

const johnDoe = CustomerDraft.presets.sampleDataFashion
  .johnDoe()
  .build<TCustomerDraft>();
const address = AddressDraft.presets.sampleDataFashion.johnDoe();

const johnDoe01 = (): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('john-01-cart')
    .customerEmail(johnDoe.email)
    .customerGroup(
      KeyReference.presets.customerGroup().key(johnDoe.customerGroup!.key!)
    )
    .currency('AUD')
    .country('AU')
    .origin(origin.Merchant)
    .shippingAddress(address)
    .billingAddress(address)
    // TODO: replace with product preset SKU
    .lineItems([LineItemDraft.presets.empty().sku('148096').quantity(1)]);

export default johnDoe01;
