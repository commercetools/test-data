/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TBusinessUnitDraft } from '../types';
import * as BusinessUnitDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TBusinessUnitDraft, TBusinessUnitDraft>(
      'default',
      BusinessUnitDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        status: 'Active',
        stores: [],
        storeMode: 'Explicit',
        unitType: 'Company',
        name: expect.any(String),
        contactEmail: expect.any(String),
        associateMode: 'Explicit',
        associates: null,
        addresses: expect.any(Array),
        shippingAddresses: [],
        defaultShippingAddress: null,
        billingAddresses: [],
        defaultBillingAddress: null,
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TBusinessUnitDraft, TBusinessUnitDraft>(
      'rest',
      BusinessUnitDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        status: 'Active',
        stores: [],
        storeMode: 'Explicit',
        unitType: 'Company',
        name: expect.any(String),
        contactEmail: expect.any(String),
        associateMode: 'Explicit',
        associates: null,
        addresses: expect.any(Array),
        shippingAddresses: [],
        defaultShippingAddress: null,
        billingAddresses: [],
        defaultBillingAddress: null,
        custom: null,
      })
    )
  );
});
