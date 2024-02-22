import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20192 from './s-567-uv-2019-2';

describe(`with s567Uv20192 preset`, () => {
  it(`should return a s567Uv20192 preset`, () => {
    const s567Uv20192Preset = s567Uv20192().build<TStandalonePriceDraft>();
    expect(s567Uv20192Preset).toMatchInlineSnapshot(`
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
        "key": "s567-uv-2019-2",
        "sku": "s567-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1045000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a s567Uv20192 preset when built for graphql`, () => {
    const s567Uv20192PresetGraphql =
      s567Uv20192().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20192PresetGraphql).toMatchInlineSnapshot(`
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
        "key": "s567-uv-2019-2",
        "sku": "s567-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1045000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
