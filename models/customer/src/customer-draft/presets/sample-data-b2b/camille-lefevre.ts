import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const camilleLefevre = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('camille-lefevre')
    .email('camille-lefevre@ltsl.com')
    .password('123')
    .isEmailVerified(true)
    .firstName('Camille')
    .lastName('Lefèvre')
    .addresses([AddressDraft.presets.sampleDataB2B.camilleLefevreAddress()])
    .authenticationMode(authenticationMode.Password);

export default camilleLefevre;
