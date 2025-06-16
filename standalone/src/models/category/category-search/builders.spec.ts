/* eslint-disable jest/no-disabled-tests */
/* eslint-disable jest/valid-title */

import type { TCategorySearchGraphql } from '../category/types';
import { CategorySearchGraphql } from './index';

const validateGraphqlModel = (model: TCategorySearchGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      version: expect.any(Number),
      key: expect.any(String),
      externalId: expect.any(String),
      name: expect.any(String),
      slug: null,
      description: null,
      ancestors: [],
      parent: null,
      orderHint: expect.any(String),
      assets: null,
      custom: null,
      createdAt: expect.any(String),
      lastModifiedAt: expect.any(String),
      ancestorsRef: [],
      childCount: expect.any(Number),
      children: [],
      parentRef: null,
      stagedProductCount: expect.any(Number),
      __typename: 'CategorySearch',
      descriptionAllLocales: null,
      slugAllLocales: undefined,
      nameAllLocales: expect.arrayContaining([
        {
          locale: expect.any(String),
          value: expect.any(String),
          __typename: 'LocalizedString',
        },
      ]),
    })
  );
};
describe('Category Search builder', () => {
  it('build a graphql model', () => {
    const model = CategorySearchGraphql.random().build();
    validateGraphqlModel(model);
  });
});
