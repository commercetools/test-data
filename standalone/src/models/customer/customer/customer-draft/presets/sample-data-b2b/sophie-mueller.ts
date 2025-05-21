import { AddressDraft } from '@/models/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const sophieMueller = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('sophie-mueller')
    .email('sophie-mueller@ltsl.com')
    .password('123')
    .isEmailVerified(true)
    .firstName('Sophie')
    .lastName('Müller')
    .addresses([AddressDraft.presets.sampleDataB2B.sophieMuellerAddress()])
    .authenticationMode(authenticationMode.Password);

export default sophieMueller;
