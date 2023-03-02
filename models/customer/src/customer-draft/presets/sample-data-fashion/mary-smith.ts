import { AddressDraft, Reference } from '@commercetools-test-data/commons';
import * as CustomerGroup from '@commercetools-test-data/customer-group';
import type { TCustomerGroupDraft } from '@commercetools-test-data/customer-group';
import { TCustomerDraftBuilder } from '../../../types';
import CustomerDraft from '../../builder';

const marySmith = (): TCustomerDraftBuilder =>
  CustomerDraft()
    .key('123456')
    .email('mary.smith@example.com')
    .firstName('Mary')
    .lastName('Smith')
    .addresses([
      AddressDraft.random()
        .firstName('Mary')
        .lastName('Smith')
        .streetName('Sample Street')
        .streetNumber('1')
        .postalCode('12345')
        .city('Sample Town')
        .country('DE'),
    ]);

export default marySmith;
