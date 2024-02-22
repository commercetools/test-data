import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20153 from './s-567-uv-2015-3';

describe(`with s567Uv20153 preset`, () => {
  it(`should return a s567Uv20153 preset`, () => {
    const s567Uv20153Preset = s567Uv20153().build<TStandalonePriceDraft>();
    expect(s567Uv20153Preset).toMatchInlineSnapshot(`
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
        "key": "s567-uv-2015-3",
        "sku": "s567-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1254000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a s567Uv20153 preset when built for graphql`, () => {
    const s567Uv20153PresetGraphql =
      s567Uv20153().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20153PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "s567-uv-2015-3",
        "sku": "s567-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1254000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
