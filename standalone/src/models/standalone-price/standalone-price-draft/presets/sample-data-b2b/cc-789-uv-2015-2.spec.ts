import type { TStandalonePriceDraft } from '../../../types';
import cc789Uv20152 from './cc-789-uv-2015-2';

describe(`with cc789Uv20152 preset`, () => {
  it(`should return a cc789Uv20152 preset`, () => {
    const cc789Uv20152Preset = cc789Uv20152().build<TStandalonePriceDraft>();
    expect(cc789Uv20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2015-2",
        "sku": "cc789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 2178000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a cc789Uv20152 preset when built for graphql`, () => {
    const cc789Uv20152PresetGraphql =
      cc789Uv20152().buildGraphql<TStandalonePriceDraft>();
    expect(cc789Uv20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "cc789-uv-2015-2",
        "sku": "cc789-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 2178000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
