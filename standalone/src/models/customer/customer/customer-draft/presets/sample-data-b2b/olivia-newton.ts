import { AddressDraft } from '@/models/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const oliviaNewton = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('olivia-newton')
    .email('olivia-newton@lcs.com')
    .password('123')
    .isEmailVerified(true)
    .firstName('Olivia')
    .lastName('Newton')
    .addresses([AddressDraft.presets.sampleDataB2B.oliviaNewtonAddress()])
    .authenticationMode(authenticationMode.Password);

export default oliviaNewton;
