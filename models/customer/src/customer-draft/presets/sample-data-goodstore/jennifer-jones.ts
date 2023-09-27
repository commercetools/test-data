import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const jenniferJones = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('jennifer-jones')
    .email('jen@example.uk')
    .password('123')
    .firstName('Jennifer')
    .lastName('Jones')
    .addresses([
      AddressDraft.presets.sampleDataGoodStore.jenniferJonesAddress(),
    ])
    .authenticationMode(authenticationMode.Password);

export default jenniferJones;
