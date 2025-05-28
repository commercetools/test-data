import type { TStandalonePriceDraft } from '../../../types';
import v456St20193 from './v-456-st-2019-3';

describe(`with v456St20193 preset`, () => {
  it(`should return a v456St20193 preset`, () => {
    const v456St20193Preset = v456St20193().build<TStandalonePriceDraft>();
    expect(v456St20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2019-3",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 3575000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a v456St20193 preset when built for graphql`, () => {
    const v456St20193PresetGraphql =
      v456St20193().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "v456-st-2019-3",
        "recurrencePolicy": undefined,
        "sku": "v456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 3575000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
