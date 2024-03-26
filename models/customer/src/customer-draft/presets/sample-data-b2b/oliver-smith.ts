import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const oliverSmith = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('oliver-smith')
    .email('oliver-smith@ltsl.com')
    .password('123')
    .isEmailVerified(true)
    .firstName('Oliver')
    .lastName('Smith')
    .addresses([AddressDraft.presets.sampleDataB2B.oliverSmithAddress()])
    .authenticationMode(authenticationMode.Password);

export default oliverSmith;
