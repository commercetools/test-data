import type { TStandalonePriceDraft } from '../../../types';
import h456St20238 from './h-456-st-2023-8';

describe(`with h456St20238 preset`, () => {
  it(`should return a h456St20238 preset`, () => {
    const h456St20238Preset = h456St20238().build<TStandalonePriceDraft>();
    expect(h456St20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2023-8",
        "recurrencePolicy": undefined,
        "sku": "h456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a h456St20238 preset when built for graphql`, () => {
    const h456St20238PresetGraphql =
      h456St20238().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2023-8",
        "recurrencePolicy": undefined,
        "sku": "h456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
