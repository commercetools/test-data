import { TCategory, TCategoryGraphql } from './types';

import Reference from './builder';

describe('building', () => {
  describe('as reference', () => {
    it('should build all primitive properties', () => {
      const built = Reference().build<TCategory>();
      expect(built.id).toEqual(expect.any(String));
      expect(built.version).toEqual(expect.any(Number));
    });
  });
});

describe('building as GraphQL', () => {
  it('should add the __typename', () => {
    const built = Reference().buildGraphql<TCategoryGraphql>();
    expect(built).toEqual(
      expect.objectContaining({
        __typename: 'Category',
      })
    );
  });
});
