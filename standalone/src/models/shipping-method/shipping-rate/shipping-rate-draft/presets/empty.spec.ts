import { restPresets, graphqlPresets, compatPresets } from './index';

describe('ShippingRateDraft - Empty Preset', () => {
  it('should return a valid rest model', () => {
    const model = restPresets.empty().build();

    expect(model).toEqual(
      expect.objectContaining({
        freeAbove: undefined,
        tiers: undefined,
      })
    );
  });

  it('should return a valid graphql model', () => {
    const model = graphqlPresets.empty().build();

    expect(model).toEqual(
      expect.objectContaining({
        freeAbove: undefined,
        tiers: undefined,
      })
    );
  });

  it('should return a valid compat model', () => {
    const model = compatPresets.empty().build();

    expect(model).toEqual(
      expect.objectContaining({
        freeAbove: undefined,
        tiers: undefined,
      })
    );
  });
});
