import type { TStandalonePriceDraft } from '../../../types';
import bb456St20234 from './bb-456-st-2023-4';

describe(`with bb456St20234 preset`, () => {
  it(`should return a bb456St20234 preset`, () => {
    const bb456St20234Preset = bb456St20234().build<TStandalonePriceDraft>();
    expect(bb456St20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2023-4",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1800000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a bb456St20234 preset when built for graphql`, () => {
    const bb456St20234PresetGraphql =
      bb456St20234().buildGraphql<TStandalonePriceDraft>();
    expect(bb456St20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "bb456-st-2023-4",
        "recurrencePolicy": undefined,
        "sku": "bb456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1800000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
