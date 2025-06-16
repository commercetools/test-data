import type { TCategorySearchGraphql } from './types';
import { CategorySearchGraphql } from './index';

const validateGraphqlModel = (model: TCategorySearchGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      ancestors: [],
      ancestorsRef: [],
      assets: [],
      childCount: 0,
      children: [],
      createdAt: expect.any(String),
      custom: null,
      description: null,
      descriptionAllLocales: null,
      externalId: expect.any(String),
      id: expect.any(String),
      key: expect.any(String),
      lastModifiedAt: expect.any(String),
      name: expect.any(String),
      nameAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
        }),
      ]),
      orderHint: expect.any(String),
      parent: null,
      parentRef: null,
      slug: expect.any(String),
      slugAllLocales: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'LocalizedString',
        }),
      ]),
      stagedProductCount: 0,
      version: expect.any(Number),
      __typename: 'CategorySearch',
    })
  );
};
describe('Category Search builder', () => {
  it('build a graphql model', () => {
    const model = CategorySearchGraphql.random().build();
    validateGraphqlModel(model);
  });
});
