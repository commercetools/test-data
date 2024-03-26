import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const avaBrown = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('ava-brown')
    .email('ava-brown@lcs.com')
    .password('123')
    .isEmailVerified(true)
    .firstName('Ava')
    .lastName('Brown')
    .addresses([AddressDraft.presets.sampleDataB2B.avaBrownAddress()])
    .authenticationMode(authenticationMode.Password);

export default avaBrown;
