import { AddressDraft } from '../../../../commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const samSmith = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('sebastian-smith')
    .email('seb@example.uk')
    .password('123')
    .firstName('Sebastian')
    .lastName('Smith')
    .addresses([
      AddressDraft.presets.sampleDataB2CLifestyle.sebastianSmithAddress(),
    ])
    .authenticationMode(authenticationMode.Password)
    .isEmailVerified(true);

export default samSmith;
