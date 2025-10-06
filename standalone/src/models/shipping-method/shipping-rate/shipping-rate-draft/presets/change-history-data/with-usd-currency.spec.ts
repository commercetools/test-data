import type {
  TShippingRateDraftRest,
  TShippingRateDraftGraphql,
} from '../../../types';
import { restPreset, graphqlPreset, compatPreset } from './with-usd-currency';

function validateModel(
  model: TShippingRateDraftRest | TShippingRateDraftGraphql
) {
  expect(model).toEqual(
    expect.objectContaining({
      price: expect.objectContaining({
        currencyCode: 'USD',
        centAmount: expect.any(Number),
      }),
      freeAbove: expect.objectContaining({
        currencyCode: 'USD',
        centAmount: expect.any(Number),
      }),
      tiers: [],
    })
  );
}

describe('With USD Currency preset', () => {
  it('[REST] should set all specified fields correctly', () => {
    const restModel = restPreset().build();

    validateModel(restModel);
  });

  it('[GraphQL] should set all specified fields correctly', () => {
    const graphqlModel = graphqlPreset().build();

    validateModel(graphqlModel);
  });

  it('[Compat] should set all specified fields correctly', () => {
    const compatModel = compatPreset().build();

    validateModel(compatModel);
  });
});
