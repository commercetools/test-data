import { AddressDraft, KeyReference } from '@commercetools-test-data/commons';
import type { TCustomerGroupDraft } from '@commercetools-test-data/customer-group';
import { CustomerGroupDraft } from '@commercetools-test-data/customer-group';
import * as CustomerDraft from '../../';
import { TCustomerDraftBuilder } from '../../../types';

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
    .isEmailVerified(false);

export default jamieDoe;
