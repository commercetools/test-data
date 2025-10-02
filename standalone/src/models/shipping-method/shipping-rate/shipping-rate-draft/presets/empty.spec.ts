import type {
  TShippingRateDraftRest,
  TShippingRateDraftGraphql,
} from '../types';
import { restPresets, graphqlPresets, compatPresets } from './index';

const validateModel = (
  model: TShippingRateDraftGraphql | TShippingRateDraftRest
) => {
  expect(model).toMatchObject({
    freeAbove: undefined,
    tiers: undefined,
  });
};

describe('ShippingRateDraft - Empty Preset', () => {
  it('should return a valid rest model', () => {
    const model = restPresets.empty().build();

    validateModel(model);
  });

  it('should return a valid graphql model', () => {
    const model = graphqlPresets.empty().build();

    validateModel(model);
  });

  it('should return a valid compat model', () => {
    const model = compatPresets.empty().build();

    validateModel(model);
  });
});
