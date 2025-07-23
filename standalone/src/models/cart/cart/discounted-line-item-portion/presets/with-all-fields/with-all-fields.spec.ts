import {
  TDiscountedLineItemPortionGraphql,
  TDiscountedLineItemPortionRest,
} from '../../types';
import * as withAllFieldsPresets from './with-all-fields';

const validateRestModel = (
  model: TDiscountedLineItemPortionRest,
  cartDiscountId: string,
  currencyCode: string
) => {
  expect(model).toEqual(
    expect.objectContaining({
      discount: expect.objectContaining({
        id: cartDiscountId,
        typeId: 'cart-discount',
      }),
      discountedAmount: expect.objectContaining({
        currencyCode: currencyCode,
        centAmount: expect.any(Number),
      }),
    })
  );
};

const validateGraphqlModel = (
  model: TDiscountedLineItemPortionGraphql,
  cartDiscountId: string,
  currencyCode: string
) => {
  expect(model).toEqual(
    expect.objectContaining({
      discount: expect.objectContaining({
        id: cartDiscountId,
        value: expect.objectContaining({
          __typename: 'RelativeDiscountValue',
        }),
        target: expect.objectContaining({
          __typename: 'LineItemsTarget',
        }),
        __typename: 'CartDiscount',
      }),
      discountedAmount: expect.objectContaining({
        currencyCode: currencyCode,
        __typename: 'Money',
      }),
      discountRef: expect.objectContaining({
        id: cartDiscountId,
        typeId: 'cart-discount',
        __typename: 'Reference',
      }),
      __typename: 'DiscountedLineItemPortion',
    })
  );
};

describe('DiscountedLineItemPortion "withAllFields" Builder', () => {
  it('should build properties for the REST preset', () => {
    const restModel = withAllFieldsPresets.restPreset().build();

    // These are the default params
    validateRestModel(restModel, 'cart-discount-id', 'EUR');
  });

  it('should build properties for the REST preset with custom params', () => {
    const restModel = withAllFieldsPresets
      .restPreset({
        currencyCode: 'USD',
        discountId: 'cart-discount-id-2',
      })
      .build();

    validateRestModel(restModel, 'cart-discount-id-2', 'USD');
  });

  it('should build properties for the GraphQL preset', () => {
    const graphqlModel = withAllFieldsPresets.graphqlPreset().build();

    // These are the default params
    validateGraphqlModel(graphqlModel, 'cart-discount-id', 'EUR');
  });

  it('should build properties for the GraphQL preset with custom params', () => {
    const graphqlModel = withAllFieldsPresets
      .graphqlPreset({
        currencyCode: 'USD',
        discountId: 'cart-discount-id-2',
      })
      .build();

    validateGraphqlModel(graphqlModel, 'cart-discount-id-2', 'USD');
  });
});
