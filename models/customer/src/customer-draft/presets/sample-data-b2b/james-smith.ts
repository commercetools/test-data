import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const jamesSmith = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('james-smith')
    .email('james-smith@ehlt.com')
    .password('123')
    .isEmailVerified(true)
    .firstName('James')
    .lastName('Smith')
    .addresses([AddressDraft.presets.sampleDataB2B.jamesSmithAddress()])
    .authenticationMode(authenticationMode.Password);

export default jamesSmith;
