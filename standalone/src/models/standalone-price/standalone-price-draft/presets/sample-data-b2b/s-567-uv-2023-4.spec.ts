import type { TStandalonePriceDraft } from '../../../types';
import s567Uv20234 from './s-567-uv-2023-4';

describe(`with s567Uv20234 preset`, () => {
  it(`should return a s567Uv20234 preset`, () => {
    const s567Uv20234Preset = s567Uv20234().build<TStandalonePriceDraft>();
    expect(s567Uv20234Preset).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2023-4",
        "recurrencePolicy": undefined,
        "sku": "s567-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centAmount": 950000,
          "currencyCode": "GBP",
        },
      }
    `);
  });

  it(`should return a s567Uv20234 preset when built for graphql`, () => {
    const s567Uv20234PresetGraphql =
      s567Uv20234().buildGraphql<TStandalonePriceDraft>();
    expect(s567Uv20234PresetGraphql).toMatchInlineSnapshot(`
      {
        "active": true,
        "channel": {
          "key": "de-fr-uk",
          "typeId": "channel",
        },
        "country": undefined,
        "customerGroup": undefined,
        "discounted": undefined,
        "key": "s567-uv-2023-4",
        "recurrencePolicy": undefined,
        "sku": "s567-uv-2023",
        "staged": undefined,
        "tiers": undefined,
        "validFrom": undefined,
        "validUntil": undefined,
        "value": {
          "centPrecision": {
            "centAmount": 950000,
            "currencyCode": "GBP",
          },
        },
      }
    `);
  });
});
