import type { TStandalonePriceDraft } from '../../../types';
import h456St20192 from './h-456-st-2019-2';

describe(`with h456St20192 preset`, () => {
  it(`should return a h456St20192 preset`, () => {
    const h456St20192Preset = h456St20192().build<TStandalonePriceDraft>();
    expect(h456St20192Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2019-2",
        "sku": "h456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1320000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a h456St20192 preset when built for graphql`, () => {
    const h456St20192PresetGraphql =
      h456St20192().buildGraphql<TStandalonePriceDraft>();
    expect(h456St20192PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "h456-st-2019-2",
        "sku": "h456-st-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1320000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
