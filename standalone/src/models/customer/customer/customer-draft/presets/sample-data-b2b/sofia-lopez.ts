import { AddressDraft } from '@/models/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const sofiaLopez = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('sofia-lopez')
    .email('sofia-lopez@ltsl.com')
    .password('123')
    .isEmailVerified(true)
    .firstName('Sofía')
    .lastName('López')
    .addresses([AddressDraft.presets.sampleDataB2B.sofiaLopezAddress()])
    .authenticationMode(authenticationMode.Password);

export default sofiaLopez;
