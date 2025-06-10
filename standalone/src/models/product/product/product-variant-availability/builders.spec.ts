import type {
  TProductVariantAvailabilityRest,
  TProductVariantAvailabilityGraphql,
} from './types';
import {
  ProductVariantAvailabilityRest,
  ProductVariantAvailabilityGraphql,
} from './index';

const validateModel = (
  model: TProductVariantAvailabilityRest | TProductVariantAvailabilityGraphql
) => {
  expect(model).toEqual(
    expect.objectContaining({
      id: expect.any(String),
      isOnStock: expect.any(Boolean),
      restockableInDays: expect.any(Number),
      availableQuantity: expect.any(Number),
      version: null,
    })
  );
};

describe('ProductVariantAvailability Builder', () => {
  it('should build properties for the REST representation', () => {
    const restModel = ProductVariantAvailabilityRest.random().build();

    validateModel(restModel);
    expect(restModel.channels).toBeNull();
  });
  it('should build properties for the GraphQL representation', () => {
    const graphqlModel = ProductVariantAvailabilityGraphql.random().build();

    validateModel(graphqlModel);
    expect(graphqlModel.__typename).toBe('ProductVariantAvailability');
  });
});
