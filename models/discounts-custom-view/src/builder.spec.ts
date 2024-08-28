/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import type { TDiscountsCustomView, TDiscountsCustomViewGraphql } from './types';
import { DiscountsCustomView } from './';

describe('builder', () => {
  it(
    ...createBuilderSpec<TDiscountsCustomView, TDiscountsCustomView>(
      'default',
      DiscountsCustomView.random(),
      expect.objectContaining({
        id: expect.any(String),
        userId: expect.any(String),
        projectKey: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        isActive: expect.any(Boolean),
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        table: null,
        search: expect.any(String),
        type: expect.any(String),
        filters: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
        sort: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TDiscountsCustomView, TDiscountsCustomView>(
      'rest',
      DiscountsCustomView.random(),
      expect.objectContaining({
        id: expect.any(String),
        userId: expect.any(String),
        projectKey: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        isActive: expect.any(Boolean),
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        table: null,
        search: expect.any(String),
        type: expect.any(String),
        filters: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
        sort: null,
      })
    )
  );

  it(
    ...createBuilderSpec<TDiscountsCustomView, TDiscountsCustomViewGraphql>(
      'graphql',
      DiscountsCustomView.random(),
      expect.objectContaining({
        id: expect.any(String),
        userId: expect.any(String),
        projectKey: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        isActive: expect.any(Boolean),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        table: null,
        search: expect.any(String),
        type: expect.any(String),
        filters: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            __typename: 'FilterValues',
          }),
        ]),
        sort: null,
        __typename: 'DiscountsCustomView',
      })
    )
  );
});
