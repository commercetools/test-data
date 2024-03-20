import type { TStandalonePriceDraft } from '../../../types';
import hh456St20231 from './hh-456-st-2023-1';

describe(`with hh456St20231 preset`, () => {
  it(`should return a hh456St20231 preset`, () => {
    const hh456St20231Preset = hh456St20231().build<TStandalonePriceDraft>();
    expect(hh456St20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2023-1",
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2640000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a hh456St20231 preset when built for graphql`, () => {
    const hh456St20231PresetGraphql =
      hh456St20231().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2023-1",
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2640000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
