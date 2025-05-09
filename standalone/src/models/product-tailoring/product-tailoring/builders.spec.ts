import { ProductTailoringRest, ProductTailoringGraphql } from './index';

describe('ProductTailoring Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = ProductTailoringRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        key: expect.any(String),
        createdBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        lastModifiedBy: expect.objectContaining({
          customer: expect.objectContaining({ typeId: 'customer' }),
        }),
        current: expect.objectContaining({
          name: expect.objectContaining({ en: expect.any(String) }),
          slug: expect.any(String),
        }),
        staged: expect.objectContaining({
          name: expect.objectContaining({ en: expect.any(String) }),
          slug: expect.any(String),
        }),
        published: expect.any(Boolean),
        hasStagedChanges: expect.any(Boolean),
      })
    );
  });

  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = ProductTailoringGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        version: expect.any(Number),
        createdAt: expect.any(String),
        lastModifiedAt: expect.any(String),
        key: expect.any(String),
        createdBy: expect.objectContaining({
          __typename: 'Initiator',
        }),
        lastModifiedBy: expect.objectContaining({
          __typename: 'Initiator',
        }),
        current: expect.objectContaining({
          __typename: 'ProductTailoringData',
        }),
        staged: expect.objectContaining({
          __typename: 'ProductTailoringData',
        }),
        published: expect.any(Boolean),
        hasStagedChanges: expect.any(Boolean),
        __typename: 'ProductTailoring',
      })
    );
  });
});
