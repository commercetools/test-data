import type { TStandalonePriceDraft } from '../../../types';
import hh456St20238 from './hh-456-st-2023-8';

describe(`with hh456St20238 preset`, () => {
  it(`should return a hh456St20238 preset`, () => {
    const hh456St20238Preset = hh456St20238().build<TStandalonePriceDraft>();
    expect(hh456St20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2023-8",
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2200000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a hh456St20238 preset when built for graphql`, () => {
    const hh456St20238PresetGraphql =
      hh456St20238().buildGraphql<TStandalonePriceDraft>();
    expect(hh456St20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "hh456-st-2023-8",
        "sku": "hh456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2200000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
