import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20152 from './s-567-uv-2015-2';

describe(`with s567Uv20152 preset`, () => {
  it(`should return a s567Uv20152 preset`, () => {
    const s567Uv20152Preset = s567Uv20152().build<TStandalonePriceDraft>();
    expect(s567Uv20152Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2015-2",
        "sku": "s567-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 940500,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a s567Uv20152 preset when built for graphql`, () => {
    const s567Uv20152PresetGraphql =
      s567Uv20152().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20152PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2015-2",
        "sku": "s567-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 940500,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
