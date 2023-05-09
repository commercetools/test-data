import type {
  TShippingRateDraft,
  TShippingRateDraftGraphql,
} from '../../../types';
import usd1299 from './usd-1299';

describe('with usd1299 preset', () => {
  it('should return a usd1299 preset', () => {
    const usd1299Preset = usd1299().build<TShippingRateDraft>();
    expect(usd1299Preset.price).toMatchInlineSnapshot(`
              {
                "centAmount": 1299,
                "currencyCode": "USD",
              }
            `);
    expect(usd1299Preset.freeAbove).toMatchInlineSnapshot(`
              {
                "centAmount": 10000,
                "currencyCode": "USD",
              }
            `);
    expect(usd1299Preset.tiers).toMatchInlineSnapshot(`undefined`);
  });

  it('should return a usd1299 preset when built for graphql', () => {
    const usd1299PresetGraphql =
      usd1299().buildGraphql<TShippingRateDraftGraphql>();
    expect(usd1299PresetGraphql.price).toMatchInlineSnapshot(`
          {
            "__typename": "BaseMoneyInput",
            "centAmount": 1299,
            "currencyCode": "USD",
          }
        `);
    expect(usd1299PresetGraphql.freeAbove).toMatchInlineSnapshot(`
          {
            "__typename": "BaseMoneyInput",
            "centAmount": 10000,
            "currencyCode": "USD",
          }
        `);
    expect(usd1299PresetGraphql.tiers).toMatchInlineSnapshot(`undefined`);
  });
});
