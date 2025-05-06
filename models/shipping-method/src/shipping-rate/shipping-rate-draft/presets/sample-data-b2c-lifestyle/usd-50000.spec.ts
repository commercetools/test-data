import type {
  TShippingRateDraft,
  TShippingRateDraftGraphql,
} from '../../../types';
import usd50000 from './usd-50000';

describe('with usd50000 preset', () => {
  it('should return a usd50000 preset', () => {
    const usd50000Preset = usd50000().build<TShippingRateDraft>();
    expect(usd50000Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 1000000,
          "currencyCode": "USD",
        },
        "price": {
          "centAmount": 50000,
          "currencyCode": "USD",
        },
        "tiers": undefined,
      }
    `);
  });

  it('should return a usd50000 preset when built for graphql', () => {
    const usd50000PresetGraphql =
      usd50000().buildGraphql<TShippingRateDraftGraphql>();
    expect(usd50000PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": {
          "centAmount": 1000000,
          "currencyCode": "USD",
        },
        "price": {
          "centAmount": 50000,
          "currencyCode": "USD",
        },
        "tiers": undefined,
      }
    `);
  });
});
