import { DiscountGroupRest, DiscountGroupGraphql } from './index';

describe('DiscountGroup Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DiscountGroupRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        createdBy: null,
        lastModifiedAt: expect.any(String),
        lastModifiedBy: null,
        key: expect.any(String),
        version: expect.any(Number),
        sortOrder: expect.any(String),
        name: null,
        description: null,
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = DiscountGroupGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        createdBy: null,
        lastModifiedAt: expect.any(String),
        lastModifiedBy: null,
        key: expect.any(String),
        version: expect.any(Number),
        sortOrder: expect.any(String),
        name: null,
        description: null,
        nameAllLocales: null,
        descriptionAllLocales: null,
        __typename: 'DiscountGroup',
      })
    );
  });
});
