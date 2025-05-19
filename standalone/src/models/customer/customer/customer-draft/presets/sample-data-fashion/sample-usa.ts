import { AddressDraft, KeyReferenceDraft } from '@/models/commons';
import {
  CustomerGroupDraft,
  type TCustomerGroupDraft,
} from '../../../../customer-group';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const customerGroup = CustomerGroupDraft.presets.sampleDataFashion
  .vip()
  .build<TCustomerGroupDraft>();

const sampleUsa = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('12345')
    .email('samplecustomer.usa@example.com')
    .firstName('Sample Customer')
    .lastName('USA')
    .addresses([AddressDraft.presets.sampleDataFashion.sampleUsa()])
    .customerGroup(
      KeyReferenceDraft.presets.customerGroup().key(customerGroup.key!)
    )
    .isEmailVerified(false)
    .authenticationMode(authenticationMode.ExternalAuth);

export default sampleUsa;
