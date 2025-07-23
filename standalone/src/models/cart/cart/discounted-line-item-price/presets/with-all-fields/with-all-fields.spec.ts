import {
  TDiscountedLineItemPriceGraphql,
  TDiscountedLineItemPriceRest,
} from '../../types';
import * as withAllFieldsPresets from './with-all-fields';

const validateRestModel = (
  model: TDiscountedLineItemPriceRest,
  currencyCode: string,
  discountId: string
) => {
  expect(model).toEqual(
    expect.objectContaining({
      value: expect.objectContaining({
        currencyCode: currencyCode,
        centAmount: expect.any(Number),
      }),
      includedDiscounts: expect.arrayContaining([
        expect.objectContaining({
          discount: expect.objectContaining({
            id: discountId,
            typeId: 'cart-discount',
          }),
          discountedAmount: expect.objectContaining({
            currencyCode: currencyCode,
            centAmount: expect.any(Number),
          }),
        }),
      ]),
    })
  );
};

const validateGraphqlModel = (
  model: TDiscountedLineItemPriceGraphql,
  currencyCode: string,
  discountId: string
) => {
  expect(model).toEqual(
    expect.objectContaining({
      value: expect.objectContaining({
        currencyCode: currencyCode,
        __typename: 'Money',
      }),
      includedDiscounts: expect.arrayContaining([
        expect.objectContaining({
          discount: expect.objectContaining({
            id: discountId,
            __typename: 'CartDiscount',
          }),
          discountedAmount: expect.objectContaining({
            currencyCode: currencyCode,
            __typename: 'Money',
          }),
          discountRef: expect.objectContaining({
            id: discountId,
            typeId: 'cart-discount',
            __typename: 'Reference',
          }),
          __typename: 'DiscountedLineItemPortion',
        }),
      ]),
      __typename: 'DiscountedLineItemPrice',
    })
  );
};

describe('DiscountedLineItemPrice "withAllFields" preset', () => {
  it('should build properties for the REST preset', () => {
    const restModel = withAllFieldsPresets.restPreset().build();

    // These are the default params
    validateRestModel(restModel, 'EUR', 'cart-discount-id');
  });

  it('should build properties for the REST preset with custom params', () => {
    const restModel = withAllFieldsPresets
      .restPreset({
        currencyCode: 'USD',
        discountId: 'cart-discount-id-2',
      })
      .build();

    validateRestModel(restModel, 'USD', 'cart-discount-id-2');
  });

  it('should build properties for the GraphQL preset', () => {
    const graphqlModel = withAllFieldsPresets.graphqlPreset().build();

    // These are the default params
    validateGraphqlModel(graphqlModel, 'EUR', 'cart-discount-id');
  });

  it('should build properties for the GraphQL preset with custom params', () => {
    const graphqlModel = withAllFieldsPresets
      .graphqlPreset({
        currencyCode: 'USD',
        discountId: 'cart-discount-id-2',
      })
      .build();

    validateGraphqlModel(graphqlModel, 'USD', 'cart-discount-id-2');
  });
});
