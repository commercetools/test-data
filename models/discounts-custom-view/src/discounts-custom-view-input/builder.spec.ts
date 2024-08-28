/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */
import { createBuilderSpec } from '@commercetools-test-data/core/test-utils';
import { DiscountsCustomViewInput } from '../';
import type {
  TDiscountsCustomViewInput,
  TDiscountsCustomViewInputGraphql,
} from '../types';

describe('builder', () => {
  it(
    ...createBuilderSpec<TDiscountsCustomViewInput, TDiscountsCustomViewInput>(
      'default',
      DiscountsCustomViewInput.random(),
      expect.objectContaining({
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        table: null,
        search: expect.any(String),
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
    ...createBuilderSpec<TDiscountsCustomViewInput, TDiscountsCustomViewInput>(
      'rest',
      DiscountsCustomViewInput.random(),
      expect.objectContaining({
        name: expect.objectContaining({
          en: expect.any(String),
        }),
        table: null,
        search: expect.any(String),
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
    ...createBuilderSpec<
      TDiscountsCustomViewInput,
      TDiscountsCustomViewInputGraphql
    >(
      'graphql',
      DiscountsCustomViewInput.random(),
      expect.objectContaining({
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        table: null,
        search: expect.any(String),
        filters: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            __typename: 'FilterValues',
          }),
        ]),
        sort: null,
      })
    )
  );
});
