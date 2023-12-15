/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCompany, TCompanyGraphql } from '../types';
import * as BusinessUnit from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCompany, TCompany>(
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
    ...createBuilderSpec<TCompany, TCompany>(
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

  it(
    ...createBuilderSpec<TCompany, TCompanyGraphql>(
      'graphql',
      BusinessUnit.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        status: expect.any(String),
        storesRef: expect.objectContaining({
          typeId: 'store',
        }),
        stores: [],
        storeMode: expect.any(String),
        unitType: 'Company',
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
        parentUnitRef: null,
        parentUnit: null,
        topLevelUnitRef: expect.objectContaining({
          typeId: 'business-unit',
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
        inheritedStores: null,
        __typename: 'BusinessUnit',
      })
    )
  );
});
