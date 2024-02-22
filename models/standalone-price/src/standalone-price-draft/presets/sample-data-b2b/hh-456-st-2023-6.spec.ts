import type { TStandalonePriceDraft } from '../../../types';
import hh456St20236 from './hh-456-st-2023-6';

describe(`with hh456St20236 preset`, () => {
  it(`should return a hh456St20236 preset`, () => {
    const hh456St20236Preset = hh456St20236().build<TStandalonePriceDraft>();
    expect(hh456St20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2023-6",
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1600000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a hh456St20236 preset when built for graphql`, () => {
    const hh456St20236PresetGraphql =
      hh456St20236().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2023-6",
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1600000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
