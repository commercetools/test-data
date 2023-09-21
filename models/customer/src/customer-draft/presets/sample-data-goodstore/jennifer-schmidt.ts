import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const jenniferSchmidt = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('jennifer-schmidt')
    .email('jen@example.de')
    .password('123')
    .firstName('Jennifer')
    .lastName('Schmidt')
    .addresses([
      AddressDraft.presets.sampleDataGoodstore.jenniferSchmidtAddress(),
    ])
    .authenticationMode(authenticationMode.Password);

export default jenniferSchmidt;
