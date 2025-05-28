import type { TStandalonePriceDraft } from '../../../types';
import v456St20238 from './v-456-st-2023-8';

describe(`with v456St20238 preset`, () => {
  it(`should return a v456St20238 preset`, () => {
    const v456St20238Preset = v456St20238().build<TStandalonePriceDraft>();
    expect(v456St20238Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-8",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a v456St20238 preset when built for graphql`, () => {
    const v456St20238PresetGraphql =
      v456St20238().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20238PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2023-8",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
