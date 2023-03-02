import { AddressDraft, Reference } from '@commercetools-test-data/commons';
import * as CustomerGroup from '@commercetools-test-data/customer-group';
import type { TCustomerGroupDraft } from '@commercetools-test-data/customer-group';
import { TCustomerDraftBuilder } from '../../../types';
import CustomerDraft from '../../builder';

const customerGroup = CustomerGroup.draftPresets.sampleDataFashion
  .vip()
  .build<TCustomerGroupDraft>();

const jamieDoe = (): TCustomerDraftBuilder =>
  CustomerDraft()
    .key('12345')
    .email('jamie.doe@example.com')
    .firstName('Jamie')
    .lastName('Doe')
    .addresses([
      AddressDraft.presets
        .empty()
        .firstName('Jamie')
        .lastName('Doe')
        .streetName('Main Street')
        .streetNumber('1')
        .postalCode('56789')
        .city('Mainville')
        .state('New Jersey')
        .country('US'),
    ])
    .customerGroup(
      Reference.random().key(customerGroup.key!).typeId('customer-group')
    );

export default jamieDoe;
