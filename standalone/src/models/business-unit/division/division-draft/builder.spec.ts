/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '../../../../core/test-utils';
import type { TDivisionDraft } from '../types';
import * as DivisionDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TDivisionDraft, TDivisionDraft>(
      'default',
      DivisionDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        status: expect.any(String),
        stores: [],
        storeMode: 'FromParent',
        unitType: 'Division',
        name: expect.any(String),
        contactEmail: expect.any(String),
        associateMode: 'ExplicitAndFromParent',
        associates: [],
        addresses: expect.any(Array),
        shippingAddresses: expect.any(Array),
        defaultShippingAddress: 0,
        billingAddresses: expect.any(Array),
        defaultBillingAddress: 0,
        custom: null,
        parentUnit: expect.objectContaining({
          typeId: 'business-unit',
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TDivisionDraft, TDivisionDraft>(
      'rest',
      DivisionDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        status: expect.any(String),
        stores: [],
        storeMode: 'FromParent',
        unitType: 'Division',
        name: expect.any(String),
        contactEmail: expect.any(String),
        associateMode: 'ExplicitAndFromParent',
        associates: [],
        addresses: expect.any(Array),
        shippingAddresses: expect.any(Array),
        defaultShippingAddress: 0,
        billingAddresses: expect.any(Array),
        defaultBillingAddress: 0,
        custom: null,
        parentUnit: expect.objectContaining({
          typeId: 'business-unit',
        }),
      })
    )
  );
  // test for the graphql shape not added at this time
});
