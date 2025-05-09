import { AddressDraft } from '../../../../commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const carlosGarcia = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('carlos-garcia')
    .email('carlos-garcia@ltsl.com')
    .password('123')
    .isEmailVerified(true)
    .firstName('Carlos')
    .lastName('García')
    .addresses([AddressDraft.presets.sampleDataB2B.carlosGarciaAddress()])
    .authenticationMode(authenticationMode.Password);

export default carlosGarcia;
