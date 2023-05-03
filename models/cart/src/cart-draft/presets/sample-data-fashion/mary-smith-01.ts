import { AddressDraft } from '@commercetools-test-data/commons';
import { CustomerDraft } from '@commercetools-test-data/customer';
import type { TCustomerDraft } from '@commercetools-test-data/customer';
import { LineItemDraft } from '@commercetools-test-data/line-item';
import { origin } from '../../../constants';
import type { TCartDraftBuilder } from '../../../types';
import * as CartDraft from '../../index';

const marySmith = CustomerDraft.presets.sampleDataFashion
  .marySmith()
  .build<TCustomerDraft>();
const address = AddressDraft.presets.sampleDataFashion.marySmith();

const marySmith01 = (): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('mary-01-cart')
    .customerEmail(marySmith.email)
    .currency('EUR')
    .country('DE')
    .origin(origin.Merchant)
    .shippingAddress(address)
    .billingAddress(address)
    // TODO: replace with product preset SKU
    .lineItems([LineItemDraft.presets.empty().sku('752502').quantity(1)]);

export default marySmith01;
