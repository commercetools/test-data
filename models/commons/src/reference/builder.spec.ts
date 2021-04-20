import { TReference, TReferenceGraphql, TReferenceRest } from './types';

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

describe('building as REST', () => {
  it('should add `obj` as expanded reference', () => {
    const built = Reference().typeId('category').buildRest<TReferenceRest>();
    expect(built).toEqual({
      id: expect.any(String),
      typeId: expect.any(String),
      obj: expect.objectContaining({
        id: expect.any(String),
      }),
    });
  });
});
