import type { TStandalonePriceDraft } from '../../../types';
import v456St20192 from './v-456-st-2019-2';

describe(`with v456St20192 preset`, () => {
  it(`should return a v456St20192 preset`, () => {
    const v456St20192Preset = v456St20192().build<TStandalonePriceDraft>();
    expect(v456St20192Preset).toMatchInlineSnapshot(`
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
        "key": "v456-st-2019-2",
        "sku": "v456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2750000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a v456St20192 preset when built for graphql`, () => {
    const v456St20192PresetGraphql =
      v456St20192().buildGraphql<TStandalonePriceDraft>();
    expect(v456St20192PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "v456-st-2019-2",
        "sku": "v456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2750000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
