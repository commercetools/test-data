import type { TStandalonePriceDraft } from '../../../types';
import h456St20236 from './h-456-st-2023-6';

describe(`with h456St20236 preset`, () => {
  it(`should return a h456St20236 preset`, () => {
    const h456St20236Preset = h456St20236().build<TStandalonePriceDraft>();
    expect(h456St20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2023-6",
        "recurrencePolicy": undefined,
        "sku": "h456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 960000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a h456St20236 preset when built for graphql`, () => {
    const h456St20236PresetGraphql =
      h456St20236().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2023-6",
        "recurrencePolicy": undefined,
        "sku": "h456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 960000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
