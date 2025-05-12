import type {
  TShippingRateDraft,
  TShippingRateDraftGraphql,
} from '../../../types';
import eur75000 from './eur-75000';

describe('with eur75000 preset', () => {
  it('should return a eur75000 preset', () => {
    const eur75000Preset = eur75000().build<TShippingRateDraft>();

    expect(eur75000Preset).toMatchInlineSnapshot(`
      {
        "freeAbove": undefined,
        "price": {
          "centAmount": 75000,
          "currencyCode": "EUR",
        },
        "tiers": [],
      }
    `);
  });

  it('should return a eur75000 preset when built for graphql', () => {
    const eur75000PresetGraphql =
      eur75000().buildGraphql<TShippingRateDraftGraphql>();

    expect(eur75000PresetGraphql).toMatchInlineSnapshot(`
      {
        "freeAbove": undefined,
        "price": {
          "centAmount": 75000,
          "currencyCode": "EUR",
        },
        "tiers": [],
      }
    `);
  });
});
