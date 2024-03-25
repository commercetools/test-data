import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const lukasSchmidt = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('lukas-schmidt')
    .email('lukas-schmidt@ltsl.com')
    .password('123')
    .isEmailVerified(true)
    .firstName('Lukas')
    .lastName('Schmidt')
    .addresses([AddressDraft.presets.sampleDataB2B.lukasSchmidtAddress()])
    .authenticationMode(authenticationMode.Password);

export default lukasSchmidt;
