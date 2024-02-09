/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TTypeDraft, TTypeDraftGraphql } from '../types';
import * as TypeDraft from './index';

describe('builder', () => {
  it(
    ...createBuilderSpec<TTypeDraft, TTypeDraft>(
      'default',
      TypeDraft.random(),
      expect.objectContaining({
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
      })
    )
  );

  it(
    ...createBuilderSpec<TTypeDraft, TTypeDraft>(
      'rest',
      TypeDraft.random(),
      expect.objectContaining({
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
      })
    )
  );
  // Note that the TypeDraft graphql is provided as scaffolding only and may not be complete at this time.
  it(
    ...createBuilderSpec<TTypeDraft, TTypeDraftGraphql>(
      'graphql',
      TypeDraft.random(),
      expect.objectContaining({
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
          expect.objectContaining({
            locale: 'de',
            value: expect.any(String),
          }),
          expect.objectContaining({
            locale: 'fr',
            value: expect.any(String),
          }),
        ]),
        resourceTypeIds: expect.any(Array),
        fieldDefinitions: expect.any(Array),
      })
    )
  );
});
