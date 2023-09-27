import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const sebastianFranklin = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('sebastian-franklin')
    .email('seb@example.com')
    .password('123')
    .firstName('Sebastian')
    .lastName('Franklin')
    .addresses([
      AddressDraft.presets.sampleDataGoodStore.sebastianFranklinAddress(),
    ])
    .authenticationMode(authenticationMode.Password);

export default sebastianFranklin;
