import { AddressDraft, KeyReference } from '@commercetools-test-data/commons';
import type { TCustomerGroupDraft } from '@commercetools-test-data/customer-group';
import { CustomerGroupDraft } from '@commercetools-test-data/customer-group';
import { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const customerGroup = CustomerGroupDraft.presets.sampleDataFashion
  .employee()
  .build<TCustomerGroupDraft>();

const johnDoe = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('1234')
    .email('john.doe@example.com')
    .firstName('John')
    .lastName('Doe')
    .addresses([AddressDraft.presets.sampleDataFashion.johnDoe()])
    .customerGroup(KeyReference.presets.customerGroup().key(customerGroup.key!))
    .isEmailVerified(false);

export default johnDoe;
