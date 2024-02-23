import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20193 from './s-567-uv-2019-3';

describe(`with s567Uv20193 preset`, () => {
  it(`should return a s567Uv20193 preset`, () => {
    const s567Uv20193Preset = s567Uv20193().build<TStandalonePriceDraft>();
    expect(s567Uv20193Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2019-3",
        "sku": "s567-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1358500,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a s567Uv20193 preset when built for graphql`, () => {
    const s567Uv20193PresetGraphql =
      s567Uv20193().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20193PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2019-3",
        "sku": "s567-uv-2019",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1358500,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
