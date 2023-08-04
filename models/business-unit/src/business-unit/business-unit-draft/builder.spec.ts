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
        status: expect.any(String),
        stores: null,
        storeMode: null,
        unitType: expect.any(String),
        name: expect.any(String),
        contactEmail: expect.any(String),
        associateMode: expect.any(String),
        associates: null,
        addresses: expect.any(Array),
        shippingAddresses: null,
        defaultShippingAddress: null,
        billingAddresses: null,
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
        status: expect.any(String),
        stores: null,
        storeMode: null,
        unitType: expect.any(String),
        name: expect.any(String),
        contactEmail: expect.any(String),
        associateMode: expect.any(String),
        associates: null,
        addresses: expect.any(Array),
        shippingAddresses: null,
        defaultShippingAddress: null,
        billingAddresses: null,
        defaultBillingAddress: null,
        custom: null,
      })
    )
  );
});
