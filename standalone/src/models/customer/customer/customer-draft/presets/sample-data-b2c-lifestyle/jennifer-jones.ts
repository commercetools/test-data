import { AddressDraft } from '@/models/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const jenniferJones = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('jennifer-jones')
    .email('jen@example.uk')
    .password('123')
    .firstName('Jennifer')
    .lastName('Jones')
    .addresses([
      AddressDraft.presets.sampleDataB2CLifestyle.jenniferJonesAddress(),
    ])
    .authenticationMode(authenticationMode.Password)
    .isEmailVerified(true);

export default jenniferJones;
