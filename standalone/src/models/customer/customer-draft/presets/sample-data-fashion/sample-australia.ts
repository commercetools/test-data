import {
  AddressDraft,
  KeyReferenceDraft,
} from '../../../../commons';
import {
  CustomerGroupDraft,
  type TCustomerGroupDraft,
} from '../../../../customer-group';
import { authenticationMode } from '../../../constants';
import { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const customerGroup = CustomerGroupDraft.presets.sampleDataFashion
  .employee()
  .build<TCustomerGroupDraft>();

const sampleAustralia = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('1234')
    .email('samplecustomer.australia@example.com')
    .firstName('Sample Customer')
    .lastName('Australia')
    .addresses([AddressDraft.presets.sampleDataFashion.sampleAustralia()])
    .customerGroup(
      KeyReferenceDraft.presets.customerGroup().key(customerGroup.key!)
    )
    .isEmailVerified(false)
    .authenticationMode(authenticationMode.ExternalAuth);

export default sampleAustralia;
