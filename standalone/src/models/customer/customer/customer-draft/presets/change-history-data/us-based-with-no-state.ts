import { AddressDraft } from '@/models/commons';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const usBasedNoState = (): TCustomerDraftBuilder =>
  CustomerDraft.random()
    .addresses([AddressDraft.presets.changeHistoryData.withCountryUsNoState()])
    .defaultBillingAddress(0)
    .defaultShippingAddress(0)
    .locale('en-US')
    .authenticationMode('Password');
export default usBasedNoState;
