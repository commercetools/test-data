import type { TCategory, TCategoryGraphql } from './types';
import * as Category from '.';

describe('building', () => {
  it('should build all primitive properties', () => {
    const built = Category.random().build<TCategory>();

    expect(built).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        createdBy: expect.objectContaining({
          userRef: expect.objectContaining({ typeId: 'user' }),
        }),
        lastModifiedBy: expect.objectContaining({
          userRef: expect.objectContaining({ typeId: 'user' }),
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
    );
  });
});

describe('building as GraphQL', () => {
  it('should add the __typename', () => {
    const built = Category.random().buildGraphql<TCategoryGraphql>();

    expect(built).toEqual(
      expect.objectContaining({
        __typename: 'Category',
      })
    );
  });
});
