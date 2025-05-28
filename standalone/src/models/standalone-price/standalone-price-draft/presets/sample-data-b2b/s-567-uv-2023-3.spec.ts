import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20233 from './s-567-uv-2023-3';

describe(`with s567Uv20233 preset`, () => {
  it(`should return a s567Uv20233 preset`, () => {
    const s567Uv20233Preset = s567Uv20233().build<TStandalonePriceDraft>();
    expect(s567Uv20233Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2023-3",
        "recurrencePolicy": undefined,
        "sku": "s567-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 1463000,
          "currencyCode": "USD",
        },
      }
    `);
  });

  it(`should return a s567Uv20233 preset when built for graphql`, () => {
    const s567Uv20233PresetGraphql =
      s567Uv20233().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20233PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "default-channel",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2023-3",
        "recurrencePolicy": undefined,
        "sku": "s567-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 1463000,
            "currencyCode": "USD",
          },
        },
      }
    `);
  });
});
