import { AddressDraft } from '@/models/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const sebastianFranklin = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('sebastian-franklin')
    .email('seb@example.com')
    .password('123')
    .firstName('Sebastian')
    .lastName('Franklin')
    .addresses([
      AddressDraft.presets.sampleDataB2CLifestyle.sebastianFranklinAddress(),
    ])
    .authenticationMode(authenticationMode.Password)
    .isEmailVerified(true);

export default sebastianFranklin;
