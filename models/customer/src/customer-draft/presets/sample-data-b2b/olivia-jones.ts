import { AddressDraft } from '@commercetools-test-data/commons';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const oliviaJones = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('olivia-jones')
    .email('olivia-jones@lcs.com')
    .password('123')
    .firstName('Olivia')
    .lastName('Jones')
    .addresses([AddressDraft.presets.sampleDataB2B.oliviaJonesAddress()])
    .authenticationMode(authenticationMode.Password);

export default oliviaJones;
