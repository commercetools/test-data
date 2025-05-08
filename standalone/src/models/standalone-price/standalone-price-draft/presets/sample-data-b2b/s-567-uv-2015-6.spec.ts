import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20156 from './s-567-uv-2015-6';

describe(`with s567Uv20156 preset`, () => {
  it(`should return a s567Uv20156 preset`, () => {
    const s567Uv20156Preset = s567Uv20156().build<TStandalonePriceDraft>();
    expect(s567Uv20156Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2015-6",
        "sku": "s567-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 760000,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a s567Uv20156 preset when built for graphql`, () => {
    const s567Uv20156PresetGraphql =
      s567Uv20156().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20156PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "spain",
          "typeId": "channel",
        },
        "country": "ES",
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2015-6",
        "sku": "s567-uv-2015",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 760000,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
