import { AddressDraft, KeyReference } from '@commercetools-test-data/commons';
import type { TCustomerGroupDraft } from '@commercetools-test-data/customer-group';
import * as CustomerGroup from '@commercetools-test-data/customer-group';
import * as CustomerDraft from '../../';
import { TCustomerDraftBuilder } from '../../../types';

const customerGroup = CustomerGroup.draftPresets.sampleDataFashion
  .vip()
  .build<TCustomerGroupDraft>();

const jamieDoe = (): TCustomerDraftBuilder =>
  CustomerDraft.presets
    .empty()
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
      KeyReference.random().key(customerGroup.key!).typeId('customer-group')
    )
    .isEmailVerified(false);

export default jamieDoe;
