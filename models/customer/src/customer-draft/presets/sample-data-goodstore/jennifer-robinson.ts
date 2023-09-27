import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const jenniferRobinson = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('jennifer-robinson')
    .email('jen@example.com')
    .password('123')
    .firstName('Jennifer')
    .lastName('Robinson')
    .addresses([
      AddressDraft.presets.sampleDataGoodStore.jenniferRobinsonAddress(),
    ])
    .authenticationMode(authenticationMode.Password);

export default jenniferRobinson;
