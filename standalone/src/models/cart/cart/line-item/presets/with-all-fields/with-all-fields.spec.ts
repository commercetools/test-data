import { TLineItemGraphql, TLineItemRest } from '../../types';
import * as withAllFieldsPreset from './with-all-fields';

const validateRestFields = (model: TLineItemRest) => {
  expect(model).toEqual(
    expect.objectContaining({
      state: expect.objectContaining({
        quantity: expect.any(Number),
        state: expect.objectContaining({
          id: expect.any(String),
          typeId: 'state',
        }),
      }),
      taxedPrice: expect.objectContaining({
        totalNet: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
        totalGross: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
        totalTax: expect.objectContaining({
          currencyCode: expect.any(String),
          centAmount: expect.any(Number),
        }),
        taxPortions: expect.arrayContaining([
          expect.objectContaining({
            rate: expect.any(Number),
            amount: expect.objectContaining({
              currencyCode: expect.any(String),
              centAmount: expect.any(Number),
            }),
          }),
        ]),
      }),
      discountedPricePerQuantity: expect.arrayContaining([
        expect.objectContaining({
          quantity: expect.any(Number),
          discountedPrice: expect.objectContaining({
            value: expect.objectContaining({
              currencyCode: expect.any(String),
              centAmount: expect.any(Number),
            }),
            includedDiscounts: expect.arrayContaining([
              expect.objectContaining({
                discount: expect.objectContaining({
                  id: expect.any(String),
                  typeId: 'cart-discount',
                }),
                discountedAmount: expect.objectContaining({
                  currencyCode: expect.any(String),
                  centAmount: expect.any(Number),
                }),
              }),
            ]),
          }),
        }),
      ]),
    })
  );
};

const validateGraphqlFields = (model: TLineItemGraphql) => {
  expect(model).toEqual(
    expect.objectContaining({
      state: expect.objectContaining({
        __typename: 'ItemState',
      }),
      taxedPrice: expect.objectContaining({
        __typename: 'TaxedItemPrice',
      }),
      discountedPricePerQuantity: expect.arrayContaining([
        expect.objectContaining({
          __typename: 'DiscountedLineItemPriceForQuantity',
          discountedPrice: expect.objectContaining({
            __typename: 'DiscountedLineItemPrice',
            includedDiscounts: expect.arrayContaining([
              expect.objectContaining({
                __typename: 'DiscountedLineItemPortion',
                discount: expect.objectContaining({
                  __typename: 'CartDiscount',
                }),
                discountedAmount: expect.objectContaining({
                  __typename: 'Money',
                }),
              }),
            ]),
          }),
        }),
      ]),
    })
  );
};

describe('LineItem model builders', () => {
  it('builds a REST model', () => {
    const restModel = withAllFieldsPreset.restPreset().build();

    validateRestFields(restModel);
  });

  it('builds a GraphQL model', () => {
    const graphqlModel = withAllFieldsPreset.graphqlPreset().build();
    validateGraphqlFields(graphqlModel);
  });
});
