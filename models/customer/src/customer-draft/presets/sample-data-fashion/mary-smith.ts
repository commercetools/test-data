import { AddressDraft } from '@commercetools-test-data/commons';
import * as CustomerDraft from '../../';
import { TCustomerDraftBuilder } from '../../../types';

const marySmith = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('123456')
    .email('mary.smith@example.com')
    .firstName('Mary')
    .lastName('Smith')
    .addresses([
      AddressDraft.presets
        .empty()
        .firstName('Mary')
        .lastName('Smith')
        .streetName('Sample Street')
        .streetNumber('1')
        .postalCode('12345')
        .city('Sample Town')
        .country('DE'),
    ])
    .isEmailVerified(false);

export default marySmith;
