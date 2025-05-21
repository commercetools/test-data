import { AddressDraft } from '@/models/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const lucasDubois = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('lucas-dubois')
    .email('lucas-dubois@ltsl.com')
    .password('123')
    .isEmailVerified(true)
    .firstName('Lucas')
    .lastName('Dubois')
    .addresses([AddressDraft.presets.sampleDataB2B.lucasDuboisAddress()])
    .authenticationMode(authenticationMode.Password);

export default lucasDubois;
