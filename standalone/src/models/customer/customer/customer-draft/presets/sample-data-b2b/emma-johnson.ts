import { AddressDraft } from '@/models/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const emmaJohnson = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('emma-johnson')
    .email('emma-johnson@ehlt.com')
    .password('123')
    .isEmailVerified(true)
    .firstName('Emma')
    .lastName('Johnson')
    .addresses([AddressDraft.presets.sampleDataB2B.emmaJohnsonAddress()])
    .authenticationMode(authenticationMode.Password);

export default emmaJohnson;
