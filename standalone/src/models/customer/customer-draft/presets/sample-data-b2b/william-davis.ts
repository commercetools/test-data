import { AddressDraft } from '../../../../commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const williamDavis = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('william-davis')
    .email('william-davis@lcs.com')
    .password('123')
    .isEmailVerified(true)
    .firstName('William')
    .lastName('Davis')
    .addresses([AddressDraft.presets.sampleDataB2B.williamDavisAddress()])
    .authenticationMode(authenticationMode.Password);

export default williamDavis;
