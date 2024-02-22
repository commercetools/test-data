import type { TStandalonePriceDraft } from '../../../types';
import v456St20234 from './v-456-st-2023-4';

describe(`with v456St20234 preset`, () => {
  it(`should return a v456St20234 preset`, () => {
    const v456St20234Preset = v456St20234().build<TStandalonePriceDraft>();
    expect(v456St20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-4",
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2500000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a v456St20234 preset when built for graphql`, () => {
    const v456St20234PresetGraphql =
      v456St20234().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "custom": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-4",
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2500000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
