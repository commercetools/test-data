/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import { TCustomerGroup, TCustomerGroupGraphql } from './types';
import * as CustomerGroup from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomerGroup, TCustomerGroup>(
      'default',
      CustomerGroup.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.any(String),
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
    ...createBuilderSpec<TCustomerGroup, TCustomerGroup>(
      'rest',
      CustomerGroup.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.any(String),
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
    ...createBuilderSpec<TCustomerGroup, TCustomerGroupGraphql>(
      'graphql',
      CustomerGroup.random(),
      expect.objectContaining({
        __typename: 'CustomerGroup',
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.any(String),
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
      })
    )
  );
});
