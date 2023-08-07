/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCompany } from './types';
import * as Company from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCompany, TCompany>(
      'default',
      Company.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        status: 'Active',
        name: expect.any(String),
        addresses: expect.arrayContaining([
          expect.objectContaining({
            city: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
          }),
        ]),
        associates: [],
        topLevelUnit: null,
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        storeMode: 'Explicit',
        unitType: 'BusinessUnit',
        associateMode: 'Explicit',
      })
    )
  );

  it(
    ...createBuilderSpec<TCompany, TCompany>(
      'rest',
      Company.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        status: 'Active',
        name: expect.any(String),
        addresses: expect.arrayContaining([
          expect.objectContaining({
            city: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
          }),
        ]),
        associates: [],
        topLevelUnit: null,
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        storeMode: 'Explicit',
        unitType: 'BusinessUnit',
        associateMode: 'Explicit',
      })
    )
  );
  //CompanyGraphql is not supported at this time
});
