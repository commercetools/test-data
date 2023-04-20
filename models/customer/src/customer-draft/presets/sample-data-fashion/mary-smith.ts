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
    .addresses([AddressDraft.presets.sampleDataFashion.marySmith()])
    .isEmailVerified(false);

export default marySmith;
