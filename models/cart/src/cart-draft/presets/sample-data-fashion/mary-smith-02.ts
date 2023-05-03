import { AddressDraft } from '@commercetools-test-data/commons';
import {
  CustomerDraft,
  type TCustomerDraft,
} from '@commercetools-test-data/customer';
// import type { TCustomerDraft } from '@commercetools-test-data/customer';
import { DiscountCodeDraft } from '@commercetools-test-data/discount-code';
import type { TDiscountCodeDraft } from '@commercetools-test-data/discount-code';
import { LineItemDraft } from '@commercetools-test-data/line-item';
import { origin } from '../../../constants';
import type { TCartDraftBuilder } from '../../../types';
import * as CartDraft from '../../index';

const marySmith = CustomerDraft.presets.sampleDataFashion
  .marySmith()
  .build<TCustomerDraft>();
const address = AddressDraft.presets.sampleDataFashion.marySmith();
const shirtsBogo = DiscountCodeDraft.presets.sampleDataFashion
  .shirtsBogo()
  .build<TDiscountCodeDraft>();

const marySmith02 = (): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('mary-02-cart')
    .customerEmail(marySmith.email)
    .currency('EUR')
    .country('DE')
    .origin(origin.Merchant)
    .shippingAddress(address)
    .billingAddress(address)
    // TODO: replace with product preset SKU
    .lineItems([LineItemDraft.presets.empty().sku('118718').quantity(2)])
    .discountCodes([shirtsBogo.code]);

export default marySmith02;
