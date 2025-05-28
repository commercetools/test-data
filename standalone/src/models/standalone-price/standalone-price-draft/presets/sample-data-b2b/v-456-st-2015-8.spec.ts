import type { TStandalonePriceDraft } from '../../../types';
import v456St20158 from './v-456-st-2015-8';

describe(`with v456St20158 preset`, () => {
  it(`should return a v456St20158 preset`, () => {
    const v456St20158Preset = v456St20158().build<TStandalonePriceDraft>();
    expect(v456St20158Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2015-8",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2015",
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

  it(`should return a v456St20158 preset when built for graphql`, () => {
    const v456St20158PresetGraphql =
      v456St20158().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20158PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "us-large-customers",
          "typeId": "channel",
        },
        "country": "US",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2015-8",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2015",
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
