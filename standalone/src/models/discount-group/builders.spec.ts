import { DiscountGroupRest, DiscountGroupGraphql } from './index';

describe('DiscountGroup Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = DiscountGroupRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          clientId: expect.any(String),
          externalUserId: expect.any(String),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          clientId: expect.any(String),
          externalUserId: expect.any(String),
        }),
        key: expect.any(String),
        version: expect.any(Number),
        sortOrder: expect.any(String),
        name: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
        }),
        description: expect.objectContaining({
          en: expect.any(String),
          de: expect.any(String),
        }),
      })
    );
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = DiscountGroupGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        createdAt: expect.any(String),
        createdBy: expect.objectContaining({
          clientId: expect.any(String),
          externalUserId: expect.any(String),
        }),
        lastModifiedAt: expect.any(String),
        lastModifiedBy: expect.objectContaining({
          clientId: expect.any(String),
          externalUserId: expect.any(String),
        }),
        key: expect.any(String),
        version: expect.any(Number),
        sortOrder: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        nameAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        descriptionAllLocales: expect.arrayContaining([
          expect.objectContaining({
            locale: expect.any(String),
            value: expect.any(String),
            __typename: 'LocalizedString',
          }),
        ]),
        __typename: 'DiscountGroup',
      })
    );
  });
});
