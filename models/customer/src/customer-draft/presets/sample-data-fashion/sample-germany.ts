import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const sampleGermany = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('123456')
    .email('samplecustomer.germany@example.com')
    .firstName('Sample Customer')
    .lastName('Germany')
    .addresses([AddressDraft.presets.sampleDataFashion.sampleGermany()])
    .isEmailVerified(false)
    .authenticationMode(authenticationMode.ExternalAuth);

export default sampleGermany;
