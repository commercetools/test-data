/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@/core/test-utils';
import type { TCustomObject, TCustomObjectGraphql } from './types';
import * as CustomObject from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCustomObject, TCustomObject>(
      'default',
      CustomObject.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        key: expect.any(String),
        container: expect.any(String),
        value: expect.any(Object),
      })
    )
  );

  it(
    ...createBuilderSpec<TCustomObject, TCustomObject>(
      'rest',
      CustomObject.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        key: expect.any(String),
        container: expect.any(String),
        value: expect.any(Object),
      })
    )
  );

  //only scaffolding provided at this time
  it(
    ...createBuilderSpec<TCustomObject, TCustomObjectGraphql>(
      'graphql',
      CustomObject.random(),
      expect.objectContaining({
        __typename: 'CustomObject',
        id: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
        }),
        key: expect.any(String),
        container: expect.any(String),
        value: expect.any(Object),
      })
    )
  );
});
