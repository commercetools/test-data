import type { TReference, TReferenceGraphql } from './types';

import Reference from './builder';

describe('building', () => {
  describe('as reference', () => {
    it('should build all primitive properties', () => {
      const built = Reference().build<TReference>();
      expect(built.id).toEqual(expect.any(String));
      expect(built.typeId).toBe(null);
    });
  });
});

describe('building as GraphQL', () => {
  it('should add the __typename', () => {
    const built = Reference().buildGraphql<TReferenceGraphql>();
    expect(built).toEqual(
      expect.objectContaining({
        __typename: 'Reference',
      })
    );
  });
});
