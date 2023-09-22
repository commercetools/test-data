import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const sebastianMuller = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('sebastian-mueller')
    .email('seb@example.de')
    .password('123')
    .firstName('Sebastian')
    .lastName('Müller')
    .addresses([
      AddressDraft.presets.sampleDataGoodstore.sebastianMullerAddress(),
    ])
    .authenticationMode(authenticationMode.Password);

export default sebastianMuller;
