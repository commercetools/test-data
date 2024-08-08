import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const sebastianMuller = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('sebastian-mueller')
    .email('seb@example.de')
    .password('123')
    .firstName('Sebastian')
    .lastName('Müller')
    .addresses([
      AddressDraft.presets.sampleDataB2CLifestyle.sebastianMullerAddress(),
    ])
    .authenticationMode(authenticationMode.Password)
    .isEmailVerified(true);

export default sebastianMuller;
