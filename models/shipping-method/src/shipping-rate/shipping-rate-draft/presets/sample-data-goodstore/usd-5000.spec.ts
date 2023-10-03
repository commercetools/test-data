import type {
  TShippingRateDraft,
  TShippingRateDraftGraphql,
} from '../../../types';
import usd5000 from './usd-5000';

describe('with usd5000 preset', () => {
  it('should return a usd5000 preset', () => {
    const usd5000Preset = usd5000().build<TShippingRateDraft>();
    expect(usd5000Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 100000,
          "currencyCode": "USD",
        },
        "price": {
          "centAmount": 5000,
          "currencyCode": "USD",
        },
        "tiers": undefined,
      }
    `);
  });

  it('should return a usd5000 preset when built for graphql', () => {
    const usd5000PresetGraphql =
      usd5000().buildGraphql<TShippingRateDraftGraphql>();
    expect(usd5000PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 100000,
          "currencyCode": "USD",
        },
        "price": {
          "centAmount": 5000,
          "currencyCode": "USD",
        },
        "tiers": undefined,
      }
    `);
  });
});
