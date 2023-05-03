import { AddressDraft, KeyReference } from '@commercetools-test-data/commons';
import { CustomerDraft } from '@commercetools-test-data/customer';
import type { TCustomerDraft } from '@commercetools-test-data/customer';
import { DiscountCodeDraft } from '@commercetools-test-data/discount-code';
import type { TDiscountCodeDraft } from '@commercetools-test-data/discount-code';
import { LineItemDraft } from '@commercetools-test-data/line-item';
import { origin } from '../../../constants';
import type { TCartDraftBuilder } from '../../../types';
import * as CartDraft from '../../index';

const johnDoe = CustomerDraft.presets.sampleDataFashion
  .johnDoe()
  .build<TCustomerDraft>();
const address = AddressDraft.presets.sampleDataFashion.johnDoe();
const employeeSale = DiscountCodeDraft.presets.sampleDataFashion
  .employeeSale()
  .build<TDiscountCodeDraft>();

const johnDoe01 = (): TCartDraftBuilder =>
  CartDraft.presets
    .empty()
    .key('john-02-cart')
    .customerEmail(johnDoe.email)
    .customerGroup(
      KeyReference.presets.customerGroup().key(johnDoe.customerGroup!.key!)
    )
    .currency('EUR')
    .country('DE')
    .origin(origin.Merchant)
    .shippingAddress(address)
    .billingAddress(address)
    // TODO: replace with product preset SKU
    .lineItems([LineItemDraft.presets.empty().sku('996024').quantity(1)])
    .discountCodes([employeeSale.code]);

export default johnDoe01;
