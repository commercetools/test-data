/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import { createBuilderSpec } from '@/core/test-utils';
import { LocalizedString } from '@/models/commons';
import type {
  TCategorySearch,
  TCategorySearchGraphql,
} from '../category/types';
import * as CategorySearch from './index';

const expectedResult = {
  id: expect.any(String),
  version: expect.any(Number),
  key: expect.any(String),
  externalId: expect.any(String),
  orderHint: expect.any(String),
  parent: expect.objectContaining({
    typeId: 'category',
  }),
  createdAt: expect.any(String),
  lastModifiedAt: expect.any(String),
  parentRef: expect.objectContaining({
    typeId: 'category',
  }),
  childCount: expect.any(Number),
  stagedProductCount: expect.any(Number),
  ancestorsRef: [],
  ancestors: [],
  productTypeNames: [],
  children: [],
  assets: [],
  custom: [],
};
describe('builder', () => {
  it(
    ...createBuilderSpec<TCategorySearch, TCategorySearch>(
      'default',
      CategorySearch.random(),
      expect.objectContaining({
        ...expectedResult,
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
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
    ...createBuilderSpec<TCategorySearch, TCategorySearch>(
      'rest',
      CategorySearch.random(),
      expect.objectContaining({
        ...expectedResult,
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
          fr: expect.any(String),
        }),
        description: expect.objectContaining({
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
    ...createBuilderSpec<TCategorySearch, TCategorySearchGraphql>(
      'graphql',
      CategorySearch.random(),
      expect.objectContaining({
        ...expectedResult,
        name: expect.any(String),
        description: expect.any(String),
        slug: expect.any(String),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        descriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        slugAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: 'en',
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        __typename: 'CategorySearch',
      })
    )
  );

  it('should allow customization', () => {
    const ancestors = [CategorySearch.random()];
    const productTypeNames = ['product-type-1'];
    const children = [CategorySearch.random()];
    const name = LocalizedString.random().en('custom-name');
    const category: TCategorySearchGraphql = CategorySearch.random()
      .name(name)
      .ancestors(ancestors)
      .productTypeNames(productTypeNames)
      .children(children)
      .buildGraphql();

    expect(category.nameAllLocales).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          locale: 'en',
          value: 'custom-name',
        }),
      ])
    );
    expect(category.ancestors).toEqual([ancestors[0].buildGraphql()]);
    expect(category.productTypeNames).toEqual(productTypeNames);
    expect(category.children).toEqual([children[0].buildGraphql()]);
  });
});
