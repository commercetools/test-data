import { AddressDraft } from '../../../../commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const jenniferRobinson = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('jennifer-robinson')
    .email('jen@example.com')
    .password('123')
    .firstName('Jennifer')
    .lastName('Robinson')
    .addresses([
      AddressDraft.presets.sampleDataB2CLifestyle.jenniferRobinsonAddress(),
    ])
    .authenticationMode(authenticationMode.Password)
    .isEmailVerified(true);

export default jenniferRobinson;
