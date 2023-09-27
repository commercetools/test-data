import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const samSmith = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('sebastian-smith')
    .email('seb@example.uk')
    .password('123')
    .firstName('Sebastian')
    .lastName('Smith')
    .addresses([
      AddressDraft.presets.sampleDataGoodStore.sebastianSmithAddress(),
    ])
    .authenticationMode(authenticationMode.Password);

export default samSmith;
