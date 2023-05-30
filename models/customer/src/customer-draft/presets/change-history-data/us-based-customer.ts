import { AddressDraft } from '@commercetools-test-data/commons';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const usBasedCustomer = (): TCustomerDraftBuilder =>
  CustomerDraft.random()
    .dateOfBirth(undefined)
    .addresses([AddressDraft.presets.changeHistoryData.usAddress()])
    .defaultBillingAddress(0)
    .defaultShippingAddress(0)
    .locale('en-US');
export default usBasedCustomer;
