import type { TStandalonePriceDraft } from '../../../types';
import v456St20232 from './v-456-st-2023-2';

describe(`with v456St20232 preset`, () => {
  it(`should return a v456St20232 preset`, () => {
    const v456St20232Preset = v456St20232().build<TStandalonePriceDraft>();
    expect(v456St20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-2",
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3025000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a v456St20232 preset when built for graphql`, () => {
    const v456St20232PresetGraphql =
      v456St20232().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-2",
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3025000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
