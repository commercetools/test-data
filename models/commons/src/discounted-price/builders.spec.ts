import { DiscountedPriceRest, DiscountedPriceGraphql } from './index';

describe('DiscountedPrice Builder', () => {
  it('should build properties for the discounted price REST representation', () => {
    const restModel = DiscountedPriceRest.random().build();

    expect(restModel).toEqual(
      expect.objectContaining({
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        discount: expect.objectContaining({
          id: expect.any(String),
          typeId: 'product-discount',
        }),
      })
    );
  });

  it('should build properties for the discounted price GraphQL representation', () => {
    const graphqlModel = DiscountedPriceGraphql.random().build();

    expect(graphqlModel).toEqual(
      expect.objectContaining({
        __typename: 'DiscountedProductPriceValue',
        value: expect.objectContaining({
          centAmount: expect.any(Number),
          currencyCode: expect.any(String),
        }),
        discount: expect.objectContaining({
          __typename: 'ProductDiscount',
          id: expect.any(String),
          version: expect.any(Number),
          key: expect.any(String),
          name: expect.arrayContaining([
            expect.objectContaining({
              __typename: expect.any(String),
              locale: expect.any(String),
            }),
          ]),
          description: expect.arrayContaining([
            expect.objectContaining({
              __typename: expect.any(String),
              locale: expect.any(String),
            }),
          ]),
          value: expect.any(Object),
          predicate: expect.any(String),
          sortOrder: expect.any(String),
          isActive: expect.any(Boolean),
          references: expect.any(Array),
          validFrom: expect.any(String),
          validUntil: expect.any(String),
          createdAt: expect.any(String),
          createdBy: expect.any(Object),
          lastModifiedAt: expect.any(String),
          lastModifiedBy: expect.any(Object),
        }),
        discountRef: expect.objectContaining({
          id: expect.any(String),
          typeId: 'product-discount',
          __typename: 'Reference',
        }),
      })
    );
  });
});
