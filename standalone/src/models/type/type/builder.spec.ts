/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@/core/test-utils';
import * as Type from '../index';
import type { TType, TTypeGraphql } from './types';

describe('builder', () => {
  it(
    ...createBuilderSpec<TType, TType>(
      'default',
      Type.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        resourceTypeIds: expect.any(Array),
        fieldDefinitions: expect.any(Array),
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
    ...createBuilderSpec<TType, TType>(
      'rest',
      Type.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.objectContaining({
          de: expect.any(String),
          en: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
        }),
        resourceTypeIds: expect.any(Array),
        fieldDefinitions: expect.any(Array),
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
  // Note that the Type graphql is provided as scaffolding only and may not be complete at this time.
  it(
    ...createBuilderSpec<TType, TTypeGraphql>(
      'graphql',
      Type.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        key: expect.any(String),
        name: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
          }),
          expect.objectContaining({
            locale: 'de',
            value: expect.any(String),
          }),
          expect.objectContaining({
            locale: 'fr',
            value: expect.any(String),
          }),
        ]),
        description: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
          }),
        ]),
        resourceTypeIds: expect.any(Array),
        fieldDefinitions: expect.any(Array),
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
