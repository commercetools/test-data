import { AddressDraft, KeyReference } from '@commercetools-test-data/commons';
import {
  CustomerGroupDraft,
  type TCustomerGroupDraft,
} from '@commercetools-test-data/customer-group';
import { authenticationMode } from '../../../constants';
import type { TCustomerDraftBuilder } from '../../../types';
import * as CustomerDraft from '../../index';

const customerGroup = CustomerGroupDraft.presets.sampleDataFashion
  .vip()
  .build<TCustomerGroupDraft>();

const jamieDoe = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
    .key('12345')
    .email('jamie.doe@example.com')
    .firstName('Jamie')
    .lastName('Doe')
    .addresses([AddressDraft.presets.sampleDataFashion.jamieDoe()])
    .customerGroup(KeyReference.presets.customerGroup().key(customerGroup.key!))
    .isEmailVerified(false)
    .authenticationMode(authenticationMode.ExternalAuth);

export default jamieDoe;
