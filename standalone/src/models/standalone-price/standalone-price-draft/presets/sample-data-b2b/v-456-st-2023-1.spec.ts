import type { TStandalonePriceDraft } from '../../../types';
import v456St20231 from './v-456-st-2023-1';

describe(`with v456St20231 preset`, () => {
  it(`should return a v456St20231 preset`, () => {
    const v456St20231Preset = v456St20231().build<TStandalonePriceDraft>();
    expect(v456St20231Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-1",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3300000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a v456St20231 preset when built for graphql`, () => {
    const v456St20231PresetGraphql =
      v456St20231().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20231PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-1",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3300000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
