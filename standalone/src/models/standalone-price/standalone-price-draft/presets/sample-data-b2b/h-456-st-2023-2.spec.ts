import type { TStandalonePriceDraft } from '../../../types';
import h456St20232 from './h-456-st-2023-2';

describe(`with h456St20232 preset`, () => {
  it(`should return a h456St20232 preset`, () => {
    const h456St20232Preset = h456St20232().build<TStandalonePriceDraft>();
    expect(h456St20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2023-2",
        "recurrencePolicy": undefined,
        "sku": "h456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1452000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a h456St20232 preset when built for graphql`, () => {
    const h456St20232PresetGraphql =
      h456St20232().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2023-2",
        "recurrencePolicy": undefined,
        "sku": "h456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1452000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
