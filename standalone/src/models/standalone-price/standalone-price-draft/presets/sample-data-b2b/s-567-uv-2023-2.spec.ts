import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20232 from './s-567-uv-2023-2';

describe(`with s567Uv20232 preset`, () => {
  it(`should return a s567Uv20232 preset`, () => {
    const s567Uv20232Preset = s567Uv20232().build<TStandalonePriceDraft>();
    expect(s567Uv20232Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2023-2",
        "recurrencePolicy": undefined,
        "sku": "s567-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1149501,
          "currencyCode": "EUR",
        },
      }
    `);
  });

  it(`should return a s567Uv20232 preset when built for graphql`, () => {
    const s567Uv20232PresetGraphql =
      s567Uv20232().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20232PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2023-2",
        "recurrencePolicy": undefined,
        "sku": "s567-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1149501,
            "currencyCode": "EUR",
          },
        },
      }
    `);
  });
});
