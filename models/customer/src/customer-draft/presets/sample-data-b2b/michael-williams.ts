import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const michaelWilliams = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('michael-williams')
    .email('michael-williams@ehlt.com')
    .password('123')
    .firstName('Michael')
    .lastName('Williams')
    .addresses([AddressDraft.presets.sampleDataB2B.michaelWilliamsAddress()])
    .authenticationMode(authenticationMode.Password);

export default michaelWilliams;
