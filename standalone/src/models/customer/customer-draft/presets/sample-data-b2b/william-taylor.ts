import { AddressDraft } from '../../../../commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const williamTaylor = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('william-taylor')
    .email('william-taylor@ltsl.com')
    .password('123')
    .isEmailVerified(true)
    .firstName('William')
    .lastName('Taylor')
    .addresses([AddressDraft.presets.sampleDataB2B.williamTaylorAddress()])
    .authenticationMode(authenticationMode.Password);

export default williamTaylor;
