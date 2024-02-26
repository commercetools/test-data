import type { TStandalonePriceDraft } from '../../../types';
import v456St20233 from './v-456-st-2023-3';

describe(`with v456St20233 preset`, () => {
  it(`should return a v456St20233 preset`, () => {
    const v456St20233Preset = v456St20233().build<TStandalonePriceDraft>();
    expect(v456St20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-3",
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3850000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a v456St20233 preset when built for graphql`, () => {
    const v456St20233PresetGraphql =
      v456St20233().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-3",
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3850000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
