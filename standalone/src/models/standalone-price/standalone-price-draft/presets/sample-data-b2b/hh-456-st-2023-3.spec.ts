import type { TStandalonePriceDraft } from '../../../types';
import hh456St20233 from './hh-456-st-2023-3';

describe(`with hh456St20233 preset`, () => {
  it(`should return a hh456St20233 preset`, () => {
    const hh456St20233Preset = hh456St20233().build<TStandalonePriceDraft>();
    expect(hh456St20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2023-3",
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3080000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hh456St20233 preset when built for graphql`, () => {
    const hh456St20233PresetGraphql =
      hh456St20233().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2023-3",
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3080000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
