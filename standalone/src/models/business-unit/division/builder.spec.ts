/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@/core/test-utils';
import type { TDivision, TDivisionGraphql } from './types';
import * as BusinessUnit from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TDivision, TDivision>(
      'default',
      BusinessUnit.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        status: expect.any(String),
        stores: [],
        inheritedStores: [],
        storeMode: expect.any(String),
        unitType: 'Division',
        name: expect.any(String),
        contactEmail: expect.any(String),
        addresses: expect.any(Array),
        shippingAddressIds: [],
        defaultShippingAddressId: null,
        billingAddressIds: [],
        defaultBillingAddressId: null,
        associateMode: expect.any(String),
        associates: expect.any(Array),
        inheritedAssociates: expect.any(Array),
        parentUnit: expect.objectContaining({
          typeId: 'business-unit',
        }),
        topLevelUnit: expect.objectContaining({
          typeId: 'business-unit',
        }),
        approvalRuleMode: 'Explicit',
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
    ...createBuilderSpec<TDivision, TDivision>(
      'rest',
      BusinessUnit.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        status: expect.any(String),
        stores: [],
        inheritedStores: [],
        storeMode: expect.any(String),
        unitType: 'Division',
        name: expect.any(String),
        contactEmail: expect.any(String),
        addresses: expect.any(Array),
        shippingAddressIds: [],
        defaultShippingAddressId: null,
        billingAddressIds: [],
        defaultBillingAddressId: null,
        associateMode: expect.any(String),
        associates: expect.any(Array),
        inheritedAssociates: expect.any(Array),
        parentUnit: expect.objectContaining({
          typeId: 'business-unit',
        }),
        topLevelUnit: expect.objectContaining({
          typeId: 'business-unit',
        }),
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
    ...createBuilderSpec<TDivision, TDivisionGraphql>(
      'graphql',
      BusinessUnit.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        status: expect.any(String),
        stores: [],
        storesRef: [],
        inheritedStores: [],
        inheritedStoresRef: [],
        storeMode: expect.any(String),
        unitType: 'Division',
        name: expect.any(String),
        contactEmail: expect.any(String),
        addresses: expect.any(Array),
        shippingAddressIds: [],
        defaultShippingAddressId: null,
        billingAddressIds: [],
        defaultBillingAddressId: null,
        associateMode: expect.any(String),
        associates: expect.any(Array),
        inheritedAssociates: expect.any(Array),
        parentUnit: expect.objectContaining({
          __typename: 'BusinessUnit',
        }),
        topLevelUnit: expect.objectContaining({
          __typename: 'BusinessUnit',
        }),
        custom: null,
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        ancestors: expect.any(Array),
        __typename: 'BusinessUnit',
      })
    )
  );
});
