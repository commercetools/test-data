/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '../../../../core/test-utils';
import type { TCompanyDraft } from '../types';
import * as CompanyDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCompanyDraft, TCompanyDraft>(
      'default',
      CompanyDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        status: expect.any(String),
        stores: [],
        storeMode: 'Explicit',
        unitType: 'Company',
        name: expect.any(String),
        contactEmail: expect.any(String),
        associateMode: 'Explicit',
        associates: [],
        addresses: expect.any(Array),
        shippingAddresses: expect.any(Array),
        defaultShippingAddress: 0,
        billingAddresses: expect.any(Array),
        defaultBillingAddress: 0,
        custom: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TCompanyDraft, TCompanyDraft>(
      'rest',
      CompanyDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        status: expect.any(String),
        stores: [],
        storeMode: 'Explicit',
        unitType: 'Company',
        name: expect.any(String),
        contactEmail: expect.any(String),
        associateMode: 'Explicit',
        associates: [],
        addresses: expect.any(Array),
        shippingAddresses: expect.any(Array),
        defaultShippingAddress: 0,
        billingAddresses: expect.any(Array),
        defaultBillingAddress: 0,
        custom: null,
      })
    )
  );

  // test for the graphql shape not added at this time
});
