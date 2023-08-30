/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TBusinessUnit } from '../types';
import * as BusinessUnit from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TBusinessUnit, TBusinessUnit>(
      'default',
      BusinessUnit.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        status: expect.any(String),
        stores: [],
        storeMode: 'Explicit',
        unitType: 'Company',
        name: expect.any(String),
        contactEmail: expect.any(String),
        addresses: expect.any(Array),
        shippingAddressIds: [],
        defaultShippingAddressId: null,
        billingAddressIds: [],
        defaultBillingAddressId: null,
        associateMode: 'Explicit',
        associates: [],
        inheritedAssociates: [],
        // topLevelUnit:
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TBusinessUnit, TBusinessUnit>(
      'rest',
      BusinessUnit.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        status: expect.any(String),
        stores: [],
        storeMode: 'Explicit',
        unitType: 'Company',
        name: expect.any(String),
        contactEmail: expect.any(String),
        addresses: expect.any(Array),
        shippingAddressIds: [],
        defaultShippingAddressId: null,
        billingAddressIds: [],
        defaultBillingAddressId: null,
        associateMode: 'Explicit',
        associates: [],
        inheritedAssociates: [],
        // topLevelUnit:
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
      })
    )
  );
  // test for the graphql shape not added at this time
});
