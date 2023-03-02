import { AddressDraft, Reference } from '@commercetools-test-data/commons';
import * as CustomerGroup from '@commercetools-test-data/customer-group';
import type { TCustomerGroupDraft } from '@commercetools-test-data/customer-group';
import { TCustomerDraftBuilder } from '../../../types';
import CustomerDraft from '../../builder';

const customerGroup = CustomerGroup.draftPresets.sampleDataFashion
  .employee()
  .build<TCustomerGroupDraft>();

const johnDoe = (): TCustomerDraftBuilder =>
  CustomerDraft()
    .key('1234')
    .email('john.doe@example.com')
    .firstName('John')
    .lastName('Doe')
    .addresses([
      AddressDraft.presets
        .empty()
        .firstName('John')
        .lastName('Doe')
        .streetName('Center Road')
        .streetNumber('1')
        .postalCode('34567')
        .city('Center Town')
        .country('DE'),
    ])
    .customerGroup(
      Reference.random().key(customerGroup.key!).typeId('customer-group')
    )
    .isEmailVerified(false);

export default johnDoe;
