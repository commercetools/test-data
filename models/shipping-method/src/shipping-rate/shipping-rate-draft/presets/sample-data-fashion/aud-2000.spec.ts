import type {
  TShippingRateDraft,
  TShippingRateDraftGraphql,
} from '../../../types';
import aud2000 from './aud-2000';

describe('with aud2000 preset', () => {
  it('should return a aud2000 preset', () => {
    const aud2000Preset = aud2000().build<TShippingRateDraft>();
    expect(aud2000Preset.price).toMatchInlineSnapshot(`
              {
                "centAmount": 2000,
                "currencyCode": "AUD",
              }
            `);
    expect(aud2000Preset.freeAbove).toMatchInlineSnapshot(`
              {
                "centAmount": 20000,
                "currencyCode": "AUD",
              }
            `);
    expect(aud2000Preset.tiers).toMatchInlineSnapshot(`[]`);
  });

  it('should return a aud2000 preset when built for graphql', () => {
    const aud2000PresetGraphql =
      aud2000().buildGraphql<TShippingRateDraftGraphql>();
    expect(aud2000PresetGraphql.price).toMatchInlineSnapshot(`
          {
            "__typename": "BaseMoneyInput",
            "centAmount": 2000,
            "currencyCode": "AUD",
          }
        `);
    expect(aud2000PresetGraphql.freeAbove).toMatchInlineSnapshot(`
          {
            "__typename": "BaseMoneyInput",
            "centAmount": 20000,
            "currencyCode": "AUD",
          }
        `);
    expect(aud2000PresetGraphql.tiers).toMatchInlineSnapshot(`[]`);
  });
});
