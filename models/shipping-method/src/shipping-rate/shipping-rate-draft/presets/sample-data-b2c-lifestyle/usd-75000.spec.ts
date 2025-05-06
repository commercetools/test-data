import type {
  TShippingRateDraft,
  TShippingRateDraftGraphql,
} from '../../../types';
import usd75000 from './usd-75000';

describe('with usd75000 preset', () => {
  it('should return a usd75000 preset', () => {
    const usd75000Preset = usd75000().build<TShippingRateDraft>();

    expect(usd75000Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": undefined,
        "price": {
          "centAmount": 75000,
          "currencyCode": "USD",
        },
        "tiers": [],
      }
    `);
  });

  it('should return a usd75000 preset when built for graphql', () => {
    const usd75000PresetGraphql =
      usd75000().buildGraphql<TShippingRateDraftGraphql>();

    expect(usd75000PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": undefined,
        "price": {
          "centAmount": 75000,
          "currencyCode": "USD",
        },
        "tiers": [],
      }
    `);
  });
});
