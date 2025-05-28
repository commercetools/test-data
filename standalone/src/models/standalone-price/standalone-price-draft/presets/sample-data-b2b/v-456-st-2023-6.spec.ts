import type { TStandalonePriceDraft } from '../../../types';
import v456St20236 from './v-456-st-2023-6';

describe(`with v456St20236 preset`, () => {
  it(`should return a v456St20236 preset`, () => {
    const v456St20236Preset = v456St20236().build<TStandalonePriceDraft>();
    expect(v456St20236Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-6",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2000000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a v456St20236 preset when built for graphql`, () => {
    const v456St20236PresetGraphql =
      v456St20236().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20236PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-6",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2000000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
