import { AddressDraft } from '@/models/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const ameliaJones = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('amelia-jones')
    .email('amelia-jones@ltsl.com')
    .password('123')
    .isEmailVerified(true)
    .firstName('Amelia')
    .lastName('Jones')
    .addresses([AddressDraft.presets.sampleDataB2B.ameliaJonesAddress()])
    .authenticationMode(authenticationMode.Password);

export default ameliaJones;
