import type { TStandalonePriceDraft } from '../../../types';
import v456St20235 from './v-456-st-2023-5';

describe(`with v456St20235 preset`, () => {
  it(`should return a v456St20235 preset`, () => {
    const v456St20235Preset = v456St20235().build<TStandalonePriceDraft>();
    expect(v456St20235Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-5",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2250000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a v456St20235 preset when built for graphql`, () => {
    const v456St20235PresetGraphql =
      v456St20235().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20235PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-5",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2250000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
