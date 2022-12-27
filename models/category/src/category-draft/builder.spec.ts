/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCategoryDraft, TCategoryDraftGraphql } from '../types';
import * as CategoryDraft from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCategoryDraft, TCategoryDraft>(
      'default',
      CategoryDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        externalId: expect.any(String),
        orderHint: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        slug: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
      })
    )
  );

  it(
    ...createBuilderSpec<TCategoryDraft, TCategoryDraft>(
      'rest',
      CategoryDraft.random(),
      expect.objectContaining({
        key: expect.any(String),
        externalId: expect.any(String),
        orderHint: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        slug: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
      })
    )
  );
  it(
    ...createBuilderSpec<TCategoryDraft, TCategoryDraftGraphql>(
      'graphql',
      CategoryDraft.random(),
      expect.objectContaining({
        __typename: 'CategoryDraft',
        key: expect.any(String),
        externalId: expect.any(String),
        orderHint: expect.any(String),
        name: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'de',
            value: expect.any(String),
          }),
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'en',
            value: expect.any(String),
          }),
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'fr',
            value: expect.any(String),
          }),
        ]),
        slug: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'de',
            value: expect.any(String),
          }),
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'en',
            value: expect.any(String),
          }),
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'fr',
            value: expect.any(String),
          }),
        ]),
      })
    )
  );
});
