/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { LocalizedString } from '@commercetools-test-data/commons';
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TCategory, TCategoryGraphql } from './types';
import * as Category from '.';

describe('builder', () => {
  it(
    ...createBuilderSpec<TCategory, TCategory>(
      'default',
      Category.random(),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        orderHint: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
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
    ...createBuilderSpec<TCategory, TCategory>(
      'rest',
      Category.random().name(LocalizedString.random().en('Pants').de('Hosen')),
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        orderHint: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        name: expect.objectContaining({
          en: 'Pants',
          de: 'Hosen',
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
    ...createBuilderSpec<TCategory, TCategoryGraphql>(
      'graphql',
      Category.random().name(LocalizedString.random().en('Pants').de('Hosen')),
      expect.objectContaining({
        __typename: 'Category',
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'de',
            value: 'Hosen',
          }),
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'en',
            value: 'Pants',
          }),
          expect.objectContaining({
            __typename: 'LocalizedString',
            locale: 'fr',
            value: expect.any(String),
          }),
        ]),
        orderHint: expect.any(String),
        descriptionAllLocales: null,
        createdBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customerRef: expect.objectContaining({ typeId: 'customer' }),
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
      })
    )
  );
});
