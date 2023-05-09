import type {
  TShippingRateDraft,
  TShippingRateDraftGraphql,
} from '../../../types';
import eur1299 from './eur-1299';

describe('with eur1299 preset', () => {
  it('should return a eur1299 preset', () => {
    const eur1299Preset = eur1299().build<TShippingRateDraft>();
    expect(eur1299Preset.price).toMatchInlineSnapshot(`
          {
            "centAmount": 1299,
            "currencyCode": "EUR",
          }
        `);
    expect(eur1299Preset.freeAbove).toMatchInlineSnapshot(`
          {
            "centAmount": 15000,
            "currencyCode": "EUR",
          }
        `);
    expect(eur1299Preset.tiers).toMatchInlineSnapshot(`undefined`);
  });

  it('should return a eur1299 preset when built for graphql', () => {
    const eur1299PresetGraphql =
      eur1299().buildGraphql<TShippingRateDraftGraphql>();
    expect(eur1299PresetGraphql.price).toMatchInlineSnapshot(`
      {
        "__typename": "BaseMoneyInput",
        "centAmount": 1299,
        "currencyCode": "EUR",
      }
    `);
    expect(eur1299PresetGraphql.freeAbove).toMatchInlineSnapshot(`
      {
        "__typename": "BaseMoneyInput",
        "centAmount": 15000,
        "currencyCode": "EUR",
      }
    `);
    expect(eur1299PresetGraphql.tiers).toMatchInlineSnapshot(`undefined`);
  });
});
