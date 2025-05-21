import { AddressDraft } from '@/models/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const jenniferSchmidt = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('jennifer-schmidt')
    .email('jen@example.de')
    .password('123')
    .firstName('Jennifer')
    .lastName('Schmidt')
    .addresses([
      AddressDraft.presets.sampleDataB2CLifestyle.jenniferSchmidtAddress(),
    ])
    .authenticationMode(authenticationMode.Password)
    .isEmailVerified(true);

export default jenniferSchmidt;
